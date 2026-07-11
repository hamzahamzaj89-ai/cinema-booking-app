import { Request, Response, NextFunction } from "express";

interface ErrorWithStatus extends Error {
    statusCode?: number;
}

const errorMiddleware = (
    err: ErrorWithStatus,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
       
    });

};

export default errorMiddleware;