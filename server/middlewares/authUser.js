// import jwt from "jsonwebtoken";

// const authUser = async (req, res, next) => {
//     // Ensure body is parsed for POST requests, including JSON bodies
  
//     const { token } = req.cookies;

//     // If token is not present, return Unauthorized response
//     if (!token) {
//         return res.json({ success: false, message: "Not Authorized" });
//     }

//     try {
//         // Decode the token using JWT_SECRET from environment variables
//         const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

//         // Check if the token contains an 'id'
//         if (tokenDecode.id) {
//             req.body.userId = tokenDecode.id; // Set userId in the request body
//              // Continue to the next middleware or route handler
//         } else {
//             // If the token does not contain 'id', return Unauthorized response
//             return res.status(401).json({ success: false, message: "Not Authorized" });
//         }
//         next();

//     } catch (error) {
//         // If there's an error (e.g., invalid or expired token), return error message
//         return res.status(401).json({ success: false, message: error.message });
//     }
// };

// export default authUser;


import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
      if (!req.body) {
        req.body = {}; // Initialize req.body if it's undefined
    }

    const { token } = req.cookies;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized" });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
        }
        else{
            return res.json({success: false, message:"Not Authorized"});
        }
        next();

    } catch (error) {
        res.json({success: false, message:error.message});
    }
}
export default authUser;