import React, { useEffect, useMemo, useState } from "react";
import { vaccinationCenters } from "../assets/vaccinationCenters";
import MapPanel from "../components/MapPanel";


// Reusable tiny components
const Label = ({ children }) => (
  <label className="text-sm font-medium text-gray-700">{children}</label>
);

const SectionCard = ({ title, desc, children }) => (
  <section className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm">
    <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
    {desc && <p className="text-sm text-gray-600 mt-1.5">{desc}</p>}
    <div className="mt-4">{children}</div>
  </section>
);

// ---- Vaccination Popup ----
const VaccinationCenterPopup = ({ show, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return vaccinationCenters;
    return vaccinationCenters.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.hours.toLowerCase().includes(q)
    );
  }, [search]);

  const selected =
    filtered.find((c) => c.id === selectedId) || (filtered.length ? filtered[0] : null);

  // Keep selected in sync with filtered list
  useEffect(() => {
    if (!filtered.length) {
      setSelectedId(null);
      return;
    }
    if (!selectedId || !filtered.some((c) => c.id === selectedId)) {
      setSelectedId(filtered[0].id);
    }
  }, [filtered, selectedId]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (show) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/40 flex items-center justify-center transition-opacity ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!show}
    >
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
          aria-label="Close"
          title="Close"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Vaccination Centers</h2>

        {/* Search */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, area, hours… (e.g., Dhanmondi, Daily)"
            className="flex-1 border border-gray-300 rounded-lg p-2.5 text-sm"
          />
          <button
            onClick={() => setSearch("")}
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50"
          >
            Clear
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* List */}
          <ul className="space-y-2 overflow-y-auto max-h-[430px] pr-1">
            {filtered.map((c) => (
              <li
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={`p-3 border rounded-lg cursor-pointer transition hover:bg-gray-50 ${
                  selected?.id === c.id ? "border-primary/60 ring-1 ring-primary/40" : "border-gray-200"
                }`}
              >
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-gray-600">{c.address}</p>
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-gray-500">{c.hours}</p>
                  <a
                    className="text-xs underline text-primary"
                    href={`https://www.google.com/maps/search/?api=1&query=${c.lat},${c.lng}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View in Google Maps
                  </a>
                </div>
                {c.phone && <p className="text-xs text-gray-500 mt-1">☎ {c.phone}</p>}
              </li>
            ))}
            {!filtered.length && <li className="text-sm text-gray-500">No centers found.</li>}
          </ul>

          {/* Interactive Map (OSM + Leaflet) */}
          <div className="w-full">
            {filtered.length ? (
              <MapPanel centers={filtered} selected={selected || null} />
            ) : (
              <div className="h-[430px] border rounded-lg grid place-items-center text-sm text-gray-500">
                No map to display.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Main Feature Hub ----
const FeatureHub = () => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const [showVaccinePopup, setShowVaccinePopup] = useState(false);

  const NOTE_MAX = 160;

  // Close inline popup on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setShow(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // File validations
  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const allowed = ["application/pdf", "image/png", "image/jpeg", "image/webp"];
    if (!allowed.includes(f.type)) {
      setError("Only PDF or image files are allowed.");
      setFile(null);
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setError("Max file size is 5MB.");
      setFile(null);
      return;
    }
    setError("");
    setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return setError("Please choose a file.");
    setError("");

    // Hook to backend when ready:
    // const form = new FormData();
    // form.append("prescription", file);
    // form.append("note", note);
    // await fetch("/api/prescriptions", { method: "POST", body: form });

    setUploaded(true);
    setTimeout(() => {
      setUploaded(false);
      setShow(false);
      setFile(null);
      setNote("");
    }, 800);
  };

  return (
    <div className="mt-24 px-6 md:px-12 lg:px-20 xl:px-28 my-8">
      {/* Header card */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg border border-gray-200 text-center transition-all duration-500 ease-in-out hover:scale-105 mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Prescription & Health Services</h2>
        <p className="text-gray-600 mb-6">
          Upload your prescription and access appointments, tests, and vaccination centers — all in one place.
        </p>

        <button
          onClick={() => setShow((s) => !s)}
          className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dull transition cursor-pointer"
        >
          {show ? "Close" : "Upload Prescription"}
        </button>
      </div>

      {/* Inline popup (expand/collapse) */}
      <div
        className={`mx-auto w-full max-w-lg transition-all duration-500 ease-in-out overflow-hidden ${
          show ? "max-h-[520px] opacity-100 scale-100 mt-6" : "max-h-0 opacity-0 scale-95"
        }`}
        aria-hidden={!show}
      >
        {show && (
          <div className="relative bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">Upload Prescription</h3>
              <button
                onClick={() => setShow(false)}
                className="text-gray-500 hover:text-black"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-1.5">
              Attach a PDF or image and add a short note (optional).
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4 ">
              <div className="space-y-2">
                <Label>Prescription file</Label>
                <input
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={onFileChange}
                  className="block w-full text-sm file:mr-3 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer border border-gray-200 rounded-lg"
                />
                {file && (
                  <p className="text-xs text-gray-500">
                    Selected: {file.name} ({Math.round(file.size / 1024)} KB)
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label>
                  Short note <span className="text-gray-400">(optional)</span>
                </Label>
                <textarea
                  rows={2}
                  maxLength={NOTE_MAX}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="E.g., preferred time, allergies…"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {note.length}/{NOTE_MAX}
                  </span>
                  {error && <span className="text-xs text-red-600">{error}</span>}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    setNote("");
                    setError("");
                  }}
                  className="px-4 py-2.5 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50"
                >
                  Reset
                </button>
                {uploaded && <span className="text-green-600 text-sm">Uploaded!</span>}
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 ">
        <div className="transition-all duration-500 ease-in-out hover:scale-105">
            <SectionCard title="Doctor Appointment" desc="Book a consultation with certified doctors." >
          <div className="space-y-3 ">
            <select className="w-full border border-gray-200 rounded-lg p-2.5 text-sm">
              <option>General Physician</option>
              <option>Dermatologist</option>
              <option>Cardiologist</option>
              <option>Pediatrics</option>
            </select>
            <input type="date" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm" />
            <button className="w-full px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 cursor-pointer">
              Book Appointment
            </button>
          </div>
        </SectionCard>
        </div>

         <div className="transition-all duration-500 ease-in-out hover:scale-105">
        <SectionCard title="Test Booking" desc="Schedule lab tests with home collection or lab visit.">
          <div className="space-y-3">
            <select className="w-full border border-gray-200 rounded-lg p-2.5 text-sm">
              <option>Complete Blood Count (CBC)</option>
              <option>Fasting Blood Sugar (FBS)</option>
              <option>Lipid Profile</option>
              <option>Thyroid Panel</option>
            </select>
            <input type="date" className="w-full border border-gray-200 rounded-lg p-2.5 text-sm" />
            <button className="w-full px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 cursor-pointer">
              Book Test
            </button>
          </div>
        </SectionCard>
        </div>

         <div className="transition-all duration-500 ease-in-out hover:scale-105">
        <SectionCard title="Vaccination Centers" desc="Find nearby centers by location.">
          <div className="space-y-3">
            <button
              onClick={() => setShowVaccinePopup(true)}
              className="w-full px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 cursor-pointer"
            >
              Search Centers
            </button>
            <ul className="text-sm text-gray-700 list-disc ml-5 mt-1">
              <li>Click “Search Centers” to open the map & list</li>
            </ul>
          </div>
        </SectionCard>
        </div>

      </div>

      {/* Vaccination Popup */}
      <VaccinationCenterPopup
        show={showVaccinePopup}
        onClose={() => setShowVaccinePopup(false)}
      />
    </div>
  );
};

export default FeatureHub;
