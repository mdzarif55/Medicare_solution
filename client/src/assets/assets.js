import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import remove_icon from "./remove_icon.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import cart_icon from "./cart_icon.svg";
import nav_cart_icon from "./nav_cart_icon.svg";
import add_icon from "./add_icon.svg";
import refresh_icon from "./refresh_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import order_icon from "./order_icon.svg";
import upload_area from "./upload_area.png";
import profile_icon from "./profile_icon.png";
import menu_icon from "./menu_icon.svg";
import delivery_truck_icon from "./delivery_truck_icon.svg";
import leaf_icon from "./leaf_icon.svg";
import coin_icon from "./coin_icon.svg";
import box_icon from "./box_icon.svg";
import trust_icon from "./trust_icon.svg";
import black_arrow_icon from "./black_arrow_icon.svg";
import white_arrow_icon from "./white_arrow_icon.svg";
import main_banner_bg from "./main_banner_bg.png";
import main_banner_bg_sm from "./main_banner_bg_sm.png";
import bottom_banner_image from "./bottom_banner_image.png";
import bottom_banner_image_sm from "./bottom_banner_image_sm.png";
import add_address_iamge from "./add_address_image.svg";
// import organic_vegitable_image from "./organic_vegitable_image.png";
import medicine_image from "./medicine_image.png";

import diabetic_image from "./diabetic_image.png";
import baby_image from "./baby_image.png";
import freedom_image from "./freedom_image.png";
import woman_image from "./woman_image.png";

import device_image from "./device_image.png";
import hygiene_image from "./hygine_image.png";
import dental_image from "./dental_image.png";
import sergel_image from "./sergel_image.png";
import napa_image from "./napa_image.png";
import fexo_image from "./fexo_image.png";
import dispoVan_syringe_image from "./dispoVan_syringe_image.png";
import digital_thermometer_image from "./digital_thermometer_image.png";
import neocare_baby_image from "./neocare_baby_image.png";
import dettol_image from "./dettol_image.png";
import orostar_image from "./orostar_image.png";
import oximeter_image from "./oximeter_image.png";
import glucoLeader_red_test_image from "./glucoLeader_red_test_image.png";
import savlonwipes_image from "./savlonwipes_image.png";
import mediplus_image from "./mediplus_image.png";
import weightm_image from "./weightm_image.png";
import blood_pressure_image from "./blood_pressure_image.png";
import maxpro_image_1 from "./maxpro_image_1.png";
import coralcal_dx_image_1 from "./coralcal_dx_image_1.png";
import glucoLeader_blue_test_image_1 from "./glucoLeader_blue_test_image_1.png";
import blood_lancets_image_1 from "./blood_lancets_image_1.png";
import quickchecker_machine_image_1 from "./quickchecker_machine_image_1.png";
import oximeter_image_1 from "./oximeter_image_1.png";
import neocarediaper_image_1 from "./neocarediaper_image_1.png";
import neocarebelt_image_1 from "./neocarebelt_image_1.png";
import seven_up_image_1 from "./seven_up_image_1.png";
import femipil_image from "./femipil_image.png";
import minicon_image from "./minicon_image.png";
import joya_pad_image from "./joya_pad_image.png";
import pregnacy_test_image from "./pregnacy_test_image.png";
import sepnilh_image from "./sepnilh_image.png";
import godrej_image from "./godrej_image.png";
import liquidd_image from "./liquidd_image.png";
import brush_image from "./brush_image.png";
import synsodine_image from "./synsodine_image.png";
import colgate_image from "./colgate_image.png";

export const assets = {
  logo,
  search_icon,
  remove_icon,
  arrow_right_icon_colored,
  star_icon,
  star_dull_icon,
  cart_icon,
  nav_cart_icon,
  add_icon,
  refresh_icon,
  product_list_icon,
  order_icon,
  upload_area,
  profile_icon,
  menu_icon,
  delivery_truck_icon,
  leaf_icon,
  coin_icon,
  trust_icon,
  black_arrow_icon,
  white_arrow_icon,
  main_banner_bg,
  main_banner_bg_sm,
  bottom_banner_image,
  bottom_banner_image_sm,
  add_address_iamge,
  box_icon,
};

export const categories = [
  {
    text: "Medicine",
    path: "Medicine",
    image: medicine_image,
    bgColor: "#FEF6DA",
  },
  {
    text: "Diabetic Care",
    path: "Diabetic",
    image: diabetic_image,
    bgColor: "#FEE0E0",
  },
  {
    text: "Baby Care",
    path: "baby_care",
    image: baby_image,
    bgColor: "#F0F5DE",
  },

  //woman choice

  {
    text: "Women's Choice",
    path: "woman_choice",
    image: woman_image,
    bgColor: "#E1F5EC",
  },
  {
    text: "Devices",
    path: "devices",
    image: device_image,
    bgColor: "#FEE6CD",
  },
  {
    text: "Hygiene & Freshness",
    path: "hygiene",
    image: hygiene_image,
    bgColor: "#E0F6FE",
  },
  {
    text: "Dental Care",
    path: "dentals",
    image: dental_image,
    bgColor: "#F1E3F9",
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];

export const features = [
  {
    icon: delivery_truck_icon,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  
  {
    icon: coin_icon,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: trust_icon,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
  {
    icon: leaf_icon,
    title: "24/7 Customer Support",
    description: "Customer Support Available 24/7",
  },
];

export const dummyProducts = [
  // Medicine
  {
    _id: "sergel_20mg",
    name: "Sergel 20mg",
    category: "Medicine",
    price: 70,
    offerPrice: 65,
    image: [sergel_image,],
    description: [
      "Capsule strip 1*10",
      "Esomeprazole Magnesium Trihydrate",
      "Healthcare Pharmaceuticals Ltd",
    ],
    
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "napa-500mg",
    name: "Napa 500mg",
    category: "Medicine",
    price: 120,
    offerPrice: 105,
    image: [napa_image],
    description: [
      "Tablet Strip 1*10 ",
      "Paracetamol",
      "Beximco Pharmaceuticals Ltd.",
    ],
    


    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "fexo-120mg",
    name: "Fexo 120mg",
    category: "Medicine",
    price: 90,
    offerPrice: 85,
    image: [fexo_image],
    description: [
      "Tablet ",
      "Fexofenadine Hydrochloride",
      "Square Pharmaceuticals PLC.",
    ],
    

    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "maxpro-20mg",
    name: "maxpro 20mg",
    category: "Medicine",
    price: 98,
    offerPrice: 95,
    image: [maxpro_image_1],
    description: [
      "Tablet 14pcs x 1strip",
      "Esomeprazole Magnesium Trihydrate",
      "Renata Limited",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "coracal-dx-",
    name: "coralcal-dx 600mg",
    category: "Medicine",
    price: 170,
    offerPrice: 160,
    image: [coralcal_dx_image_1],
    description: [
      "Tablet",
      "Calcium Carbonate [Elemental] + Vitamin D3",
      "Radiant Pharmaceuticals Ltd.",
    ],
    


    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // Diabetic
  {
    _id: "ek55j56k",
    name: "Quick Check Blood Glucose Meter",
    category: "Diabetic",
    price: 1500,
    offerPrice: 1350,
    image: [quickchecker_machine_image_1],
    description: [
      "Glucometer Machine",
      "Self Monitoring Blood Glucose System",
      "Vivacheck Biotech Inc. Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek51j12k",
    name: "DispoVan Syringe 100IU",
    category: "Diabetic",
    price: 10,
    offerPrice: 9.5,
    image: [dispoVan_syringe_image],
    description: [
      "1 pics",
      "Single Use Insulin Syringes",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek52j23k",
    name: "GlucoLeader Enhance Red Test Strip-25",
    category: "Diabetic",
    price: 462,
    offerPrice: 450,
    image: [glucoLeader_red_test_image],
    description: [
      "Test Strip",
      "Blood Glucose Strips",
      "Vivacheck Biotech Inc. Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek53j34k",
    name: "GlucoLeader Enhance Red Test Strip-25",
    category: "Diabetic",
    price: 462,
    offerPrice: 450,
    image: [glucoLeader_blue_test_image_1],
    description: [
      "Test Strip",
      "Blood Glucose Strips",
      "Vivacheck Biotech Inc. Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek54j45k",
    name: "Blood Lancets (Mediron)",
    category: "Diabetic",

    price: 120,
    offerPrice: 110,
    image: [blood_lancets_image_1],
    description: [
      "Twist Type",
      "Needle",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  

  // devices
  {
    _id: "ek56j67k",
    name: "Digital Thermometer",
    category: "devices",
    price: 260,
    offerPrice: 255,
    image: [digital_thermometer_image],
    description: [
      "Digital thermometer",
      "1pcs",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek57j78k",
    name: "Pulse Oximeter (Jumper)",
    category: "devices",
    price: 1600,
    offerPrice: 1550,
    image: [oximeter_image],
    description: [
      "Surgical Kit",
      "Pulse Oximeter",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek58j89k",
    name: "Blood Pressure Machine Digital (ALPK2)",
    category: "devices",
    price: 2500,
    offerPrice: 2000,
    image: [blood_pressure_image],
    description: [
      "Pressure Machine Digital",
      "Blood Pressure Machine With Stethoscope",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek59j90k",
    name: "Pulse Oximeter (ProCare)",
    category: "devices",
    price: 1275,
    offerPrice: 1250,
    image: [oximeter_image_1],
    description: [
      "Surgical Kit",
      "Pulse Oximeter",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek60j01k",
    name: "ProCare Digital Weight Machine Scale - Orange",
    category: "devices",
    price: 140,
    offerPrice: 130,
    image: [weightm_image],
    description: [
      "Weight Matchine",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // baby_care
  {
    _id: "ek61j12k",
    name: "NeoCare Baby Wipes",
    category: "baby_care",
    price: 235,
    offerPrice: 230,
    image: [neocare_baby_image],
    description: [
      "wipes",
      "Wipes 120pcs ",
      "Incepta Pharmaceuticals Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek62j23k",
    name: "Savlon Baby Wipes",
    category: "baby_care",
    price: 270,
    offerPrice: 260,
    image: [savlonwipes_image],
    description: [
      "wipes",
      "Wipes 120pcs ",
      "Incepta Pharmaceuticals Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek63j34k",
    name: "Neocarediaper ",
    category: "baby_care",
    price: 640,
    offerPrice: 610,
    image: [neocarediaper_image_1],
    description: [
      "Baby Care",
      "Diaper",
      "Incepta Pharmaceuticals Ltd.",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek64j45k",
    name: "Neocare Belt Diaper",
    category: "baby_care",
    price: 1200,
    offerPrice: 1150,
    image: [neocarebelt_image_1],
    description: [
      "Baby Care",
      "Diaper",
      "Incepta Pharmaceuticals Ltd.",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek61j12k",
    name: "NeoCare Baby Wipes",
    category: "baby_care",
    price: 235,
    offerPrice: 230,
    image: [neocare_baby_image],
    description: [
      "wipes",
      "Wipes 120pcs ",
      "Incepta Pharmaceuticals Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // dentals
  {
    _id: "ek66j67k",
    name: "Orostar Plus 250 ml",
    category: "dentals",
    price: 150,
    offerPrice: 140,
    image: [orostar_image],
    description: [
      "Mouthwash",
      "Eucalyptol + Menthol + Methyl Salicylate + Thymol + Sodium Fluoride",
      "Square Pharmaceuticals PLC.",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek67j78k",
    name: "Mediplus DS140 gm",
    category: "dentals",
    price: 250,
    offerPrice: 230,
    image: [mediplus_image],
    description: [
      "Toothpaste",
      "Anfords",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek68j89k",
    name: "Mediplus Toothbrush",
    category: "dentals",
    price: 90,
    offerPrice: 80,
    image: [brush_image],
    description: [
      "Toothbrush",
      "Anfords",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek69j90k",
    name: "Sensodyne Repair & Protect 70 gm",
    category: "dentals",
    price: 360,
    offerPrice: 340,
    image: [synsodine_image],
    description: [
      "Toothpaste",
      "GSK",
      "Good source of magnesium",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "ek70j01k",
    name: "Colgate Active Salt Toothpaste 200 gm",
    category: "dentals",
    price: 240,
    offerPrice: 220,
    image: [colgate_image],
    description: [
      "Toothpaste",
      "Colgate",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },

  // hygiene
  {
    _id: "bk01a24z",
    name: "Dettol Liquid  750 ml",
    category: "hygiene",
    price: 250,
    offerPrice: 235,
    image: [dettol_image],
    description: [
      "Antiseptic",
      "Antiseptic Disinfectant",
      "Reckitt & Benckiser Bangladesh Ltd.",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk02b30y",
    name: "Sepnil Hand Sanitizer 200ml",
    category: "hygiene",
    price: 250,
    offerPrice: 245,
    image: [sepnilh_image],
    description: [
      "Hand Sanitizer",
      "Square Toiletries Ltd.",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk03c31x",
    name: "Godrej AER Power Pocket Sea Breeze Delight 10gm",
    category: "hygiene",
    price: 70,
    offerPrice: 65,
    image: [godrej_image],
    description: [
      "Bathroom Freshener",
      "Bathroom Fragrance",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk04d32w",
    name: "Sparkbliss Lavender Liquid Detergent 500ml",
    category: "hygiene",
    price: 150,
    offerPrice: 120,
    image: [liquidd_image],
    description: [
      "Detergent",
      "Be.Best Enterprise",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "bk03c31x",
    name: "Godrej AER Power Pocket Sea Breeze Delight 10gm",
    category: "hygiene",
    price: 70,
    offerPrice: 65,
    image: [godrej_image],
    description: [
      "Bathroom Freshener",
      "Bathroom Fragrance",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  
  // woman_choice
  {
    _id: "freedom_heavy_flow",
    name: "Freedom Heavy Flow Wings",
    category: "woman_choice",

    price: 200,
    offerPrice: 190,
    image: [freedom_image],
    description: [
      "Sanitary Napkin",
      "16 pcs",
      "ACI Consumer Brands",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "femicon",
    name: "Femicon",
    category: "woman_choice",
    price: 45,
    offerPrice: 40,
    image: [femipil_image],
    description: [
      "Tablet 28pcs",
      "Ethinylestradiol + Ferrous Fumarate + Norgestrel",
      "SMC Enterprise Limited",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "minicon_pill",
    name: "Minicon",
    category: "woman_choice",
    price: 50,
    offerPrice: 48,
    image: [minicon_image],
    description: [
      "Pills tablet 28pcs",
      "Norgestrel",
      "SMC Enterprise Limited",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "in04i28r",
    name: "Joya Wings Regular Flow",
    category: "woman_choice",
    price: 80,
    offerPrice: 78,
    image: [joya_pad_image],
    description: [
      "Sanitary Napkin 8+2 pads",
      "SMC Enterprise Limited",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "pregnacy_test_getwell",
    name: "Get Sure Pregnancy Test kit (Getwell)",
    category: "woman_choice",
    price: 40,
    offerPrice: 35,
    image: [pregnacy_test_image],
    description: [
      "Pregnancy Test Strip",
      "1pcs",
      "Technokit Healthcare Ltd",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
];

export const dummyAddress = [
  {
    _id: "67b5b9e54ea97f71bbc196a0",
    userId: "67b5880e4d09769c5ca61644",
    firstName: "Great",
    lastName: "Stack",
    email: "user.greatstack@gmail.com",
    street: "Street 123",
    city: "Main City",
    state: "New State",
    zipcode: 123456,
    country: "IN",
    phone: "1234567890",
  },
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e258798f87e633667863f2",
    userId: "67b5880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[0],
        quantity: 1,
        _id: "67e258798f87e633667863f3",
      },
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e258798f87e633667863f4",
      },
    ],
    amount: 43,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-03-25T07:17:13.068Z",
    updatedAt: "2025-03-25T07:17:13.068Z",
  },
];
