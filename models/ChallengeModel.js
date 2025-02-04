import { Prisma } from "@prisma/client";

export type Challenge = Prisma.ChallengeGetPayload<{}>;

// backend/prisma/schema.prisma
model Challenge {
    id          String   @id @default(uuid())
    title       String
    description String
    createdAt   DateTime @default(now())
}