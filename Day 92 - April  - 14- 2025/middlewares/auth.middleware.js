// isLoggedIn middleware
import jwt from "jsonwebtoken";

export const isLoggedIn = async(req, res, next) => {
    try {
        console.log('=== Auth Middleware Debug ===');
        console.log('Cookies:', req.cookies);
        console.log('Headers:', {
            cookie: req.headers.cookie,
            authorization: req.headers.authorization
        });
        
        // Get token from cookie or Authorization header
        let token = req.cookies?.token;
        
        // Check Authorization header if no cookie
        if (!token && req.headers.authorization) {
            token = req.headers.authorization.replace('Bearer ', '');
        }

        console.log('Token found:', token ? 'Yes' : 'No');
        
        if (!token) {
            console.log('No token found');
            return res.status(401).json({
                success: false,
                message: "Authentication required. Please login."
            });
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Token verified successfully');
            
            // Attach user to request
            req.user = decoded;
            next();
        } catch (error) {
            console.log('Token verification failed:', error.message);
            return res.status(401).json({
                success: false,
                message: "Invalid token. Please login again."
            });
        }
    } catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};