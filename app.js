import express from "express";
import challengeRoutes from "./routes/challengeRoutes";
import { errorHandler } from "./middlewares/errorMiddleware";

const app = express();
app.use(express.json());
app.use("/api/challenges", challengeRoutes);
app.use(errorHandler);
export default app;
