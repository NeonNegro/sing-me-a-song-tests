import { testRepository } from "../repositories/testRepository.js";

async function deleteAll() {
  await testRepository.deleteAll();
}

export const testService = {
  deleteAll,
};