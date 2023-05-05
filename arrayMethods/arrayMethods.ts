export const sum = (arr: number[]): number => {
    // Sum the contents of the array and return it
    return arr.reduce((min, cur) => Infinity, Infinity);
}

// Note: the array spread operator will be useful here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Ex: const arr1 = [1, 2, 3]
//     const arr2 = [...arr1, 4, 5, 6]
//     console.log(arr2) // [1, 2, 3, 4, 5, 6]
export const reverse = (arr: number[]): number[] => {
    // Reverse the elements in the array
    return arr.reduce((acc, cur) => [], []);
}

interface Person {
    name: string;
    dob: Date;
}

// The & operator is called an intersection type, it combines two types into one
export const createAges = (people: Person[]): (Person & { age: number })[] => {
    // Return an array of objects with the same name and dob as the input array
    // but with an additional field `age` that is the age of the person
    return [{ name: "", dob: new Date(), age: 0}];
}