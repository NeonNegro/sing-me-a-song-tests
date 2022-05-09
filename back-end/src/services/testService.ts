import newRecommendationFactory from "../../tests/factories/recommendationFactory.js";
import { testRepository } from "../repositories/testRepository.js";

async function deleteAll() {
    await testRepository.deleteAll();
}

async function insertRandomRecommendation() {
    const randomRecommendation = newRecommendationFactory();
    await  testRepository.insertRecommendation(randomRecommendation);
}

export const testService = {
  deleteAll,
  insertRandomRecommendation,
};