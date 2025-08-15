import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/OrderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';

const app = express();
const port = process.env.PORT || 4000;

await connectDB()
await connectCloudinary()

//Allow Multiple origins
const allowedOrigins = ['http://localhost:5173'];

app.post('/stripe', express.raw({type: 'applicatio/json'}),stripeWebhooks)

//Middleware configuration
app.use(express.json());  // Middleware to parse JSON bodies
app.use(cookieParser());  // Middleware for cookies
// app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));  // CORS configuration

app.use(cors({origin: allowedOrigins, credentials:true}));

// app.use((req, res, next) => {
//     console.log('Request Body:', req.body); // Logs the body
//     console.log('Cookies:', req.cookies);  // Logs the cookies
//     next(); // Proceed to the next middleware or route handler
// });

app.get('/', (req, res) =>  res.send("API is Working"));
app.post('/api/product/stock', (req, res) => {
    console.log('POST /api/product/stock route is hit');
    res.send('Route is working!');
});

app.use('/api/user',userRouter)
app.use('/api/seller',sellerRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/address',addressRouter)
app.use('/api/order',orderRouter)


app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});


