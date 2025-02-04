import prisma from "../config/database";

export const getAllChallenges = async () => {
    return await prisma.challenge.findMany();
};

export const createChallenge = async (title: string, description: string) => {
    return await prisma.challenge.create({ data: { title, description } });
};

// backend/src/controllers/challengeController.ts
import { Request, Response } from "express";
import { getAllChallenges, createChallenge } from "../services/challengeService";

export const getChallenges = async (_req: Request, res: Response) => {
    const challenges = await getAllChallenges();
    res.json(challenges);
};

export const addChallenge = async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const challenge = await createChallenge(title, description);
    res.status(201).json(challenge);
};
