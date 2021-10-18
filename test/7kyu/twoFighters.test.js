const { twoFighters } = require("../../src/7kyu/twoFighters/twoFighters");

describe("Testing the two fighters kata...", () => {
    test("if there are not two fighters given, and the first fighter has no name given return false", () => {
        expect(twoFighters()).toBe(false);
    });

    test("if the first fighter's name is not a string, expect false", () => {
        const fighter1 = { name: 1 };
        const fighter2 = {};
        expect(twoFighters(fighter1, fighter2)).toBe(false);
    });

    test("if the second fighter's name is not a string, expect false", () => {
        const fighter1 = {};
        const fighter2 = { name: 10 };
        expect(twoFighters(fighter1, fighter2)).toBe(false);
    });

     test("if either fighter does not have a positive number for health, return false", () => {
         const fighter1 = { name: 'Goliath', health: -1 };
         const fighter2 = { name: 'David', health: 0 };
         expect(twoFighters(fighter1, fighter2)).toBe(false);
     });

     test("should return the name of the fighter who has dmage", () => {
        const fighter1 = { name: 'Goliath', health: 100, damage: 10 };
        const fighter2 = { name: 'David', health: 100 };
        expect(twoFighters(fighter1, fighter2)).toBe('Goliath');
    });

     test("should return the name of the fighter who has dmage", () => {
        const fighter1 = { name: 'Goliath', health: 100};
        const fighter2 = { name: 'David', health: 100, damage:10 };
        expect(twoFighters(fighter1, fighter2)).toBe('David');
    });
});