import { prisma } from "../database.js";
import { CreateRecommendationData } from "../services/recommendationsService.js";

async function deleteAll() {
  await prisma.$executeRaw`TRUNCATE TABLE recommendations RESTART IDENTITY CASCADE`;
}

async function insertRecommendation(createRecommendationData: CreateRecommendationData) {
  await prisma.recommendation.create({data:createRecommendationData});
}

export const testRepository = {
  deleteAll,
  insertRecommendation,
};