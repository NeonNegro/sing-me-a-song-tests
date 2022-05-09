import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/database";
import { CreateRecommendationData } from "../../src/services/recommendationsService"

describe("Integration Tests", () =>{
    describe("POST /", ()=>{
        it("should persist a recommendation  given a valid body", async () =>{
            const recommendation: CreateRecommendationData = {
                name: Date().toString(),
                youtubeLink: 'https://www.youtube.com/watch?v=5MCNL0k0YlU'
            }

            const response = await supertest(app).post("/recommendations").send(recommendation);
            const createdRecommendation = await prisma.recommendation.findFirst({
                where: {
                    name: recommendation.name,
                    youtubeLink: recommendation.youtubeLink
                }
            })
            expect(response.status).toEqual(201);
            expect(createdRecommendation).not.toBeNull();
        });
    });
})