import { jest } from '@jest/globals';
import { Recommendation } from '@prisma/client';
import { recommendationRepository } from '../../src/repositories/recommendationRepository';
import { CreateRecommendationData, recommendationService } from '../../src/services/recommendationsService';

describe("Recommendation Service Unit Test", ()=>{
    it("should thrown a conflict error given a duplicate recommendation", async () =>{

        const recommendation: Recommendation = {
            id: 1,
            name: 'uma nova recomendação',
            youtubeLink: 'https://www.youtube.com/watch?v=owMOG-cQJsU',
            score: 0
        }

        jest.spyOn(recommendationRepository, "findByName").mockResolvedValueOnce({
            ...recommendation
        });

        expect(recommendationService.insert(recommendation)).rejects.toThrowError('Recommendations names must be unique');

    });
});