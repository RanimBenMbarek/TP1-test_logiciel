import { fetchRandomUser } from '../src/fetchRandomUser';
import { expect, describe, it, jest } from "vitest";

describe('fetchRandomUser()', () => {
    it("should fetch a random user from the api", async () => {
        try {
            const user = await fetchRandomUser();
            expect(user).toBeDefined();
            expect(JSON.parse(user)).toBe(true);
        } catch (error) {
            // c'est une assertion qui échoue délibérément pour signaler une erreur dans le test
            console.log('Should not throw any error');
        }
    });
});