import { faker } from "@faker-js/faker";

export default function newRecommendationFactory(){
    const recommendation = {
        //id: 1,
        name: faker.random.words(4),
        youtubeLink: 'https://www.youtube.com/watch?v=MfMK4x_gR0s',
    }

    return recommendation;
}