import {sum, reverse, createAges} from "./arrayMethods";
// import "@types/jest";

test('testing `sum', () => {
    expect(sum([1, 2, 3])).toEqual(6);
    expect(sum([1, 2, 3, 4, 5])).toEqual(15);
    expect(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(55);
});

test('testing `reverse`', () => {
    expect(reverse([])).toEqual([]);
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test('testing `createAges`', () => {
    const people = [
        { name: "Alice", dob: new Date("1990-01-01") },
        { name: "Bob", dob: new Date("1995-01-01") },
        { name: "Charlie", dob: new Date("2000-01-01") },
    ]
    expect(createAges(people)).toEqual([
        { name: "Alice", dob: new Date("1990-01-01"), age: 33 },
        { name: "Bob", dob: new Date("1995-01-01"), age: 28 },
        { name: "Charlie", dob: new Date("2000-01-01"), age: 23 },
    ]);

    const babies = [
        { name: "Aayush", dob: new Date("2020-01-01") },
        { name: "Tiger", dob: new Date("2022-01-01") },
        { name: "Simone", dob: new Date("2021-01-01") }
    ]

    expect(createAges(babies)).toEqual([
        { name: "Aayush", dob: new Date("2020-01-01"), age: 3 },
        { name: "Tiger", dob: new Date("2022-01-01"), age: 1 },
        { name: "Simone", dob: new Date("2021-01-01"), age: 2 }
    ]);


});

