import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

// Import routes
import authRoutes from "../routes/auth.js";
import userRoutes from "../routes/user.js";
import candidateRoutes from "../routes/candidate.js";
import jobPositionRoutes from "../routes/jobPosition.js";
import clientRoutes from "../routes/client.js";
import interviewResultRoutes from "../routes/interviewResult.js";
import placementRoutes from "../routes/placement.js";
import applicationRoutes from "../routes/application.js";

export const config = (app) => {
    app.use(cookieParser());
    // CORS configuration
    const corsOptions = {
        origin: process.env.DOMAINS,
        credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    };
    app.use(cors(corsOptions));
    app.use(helmet());
    app.use(express.json());

    // App endpoints paths
    app.use("/api/authentication", authRoutes);
    app.use("/api/user", userRoutes);
    app.use("/api/candidate", candidateRoutes);
    app.use("/api/job-positions", jobPositionRoutes);
    app.use("/api/client-companies", clientRoutes);
    app.use("/api/interview-results", interviewResultRoutes);
    app.use("/api/placements", placementRoutes);
    app.use("/api/applications", applicationRoutes);

    // ADD REST OF THE APP PATHS HERE



    // error handler
    app.use((err, req, res, next) => {
        console.error(err.stack); // Log the error
        const status = err.status || 500;
        const message = err.message || "Something went wrong!";
        return res.status(status).json({
            success: false,
            status,
            message,
        });
    });


};