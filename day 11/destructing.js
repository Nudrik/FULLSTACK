const arr = [1, 2, 34, 8];

const [first, second, third] = arr;
console.log(first);

const obj = {
    employee: "Ram",
    employeeId: 1,
    employeeSalary: 5000,
    address: "Kodad"
};

const { employee, employeeId, employeeSalary, address } = obj;
console.log(employeeId);

const arr2 = ["Hello", 2, 3, 4, 5];
const [firstString, ...remaining] = arr2;

console.log(firstString);
console.log(remaining);

function displayNames(...names) {
    console.log('The names are:', names);
}
displayNames("Ram", "Charan", "Prathas", "Tr.NTR", "Maheshbabu");

const arr3 = ["a", "b", "c"];
const arrCopy = [...arr3];

arr3.push("d");

console.log(arrCopy);
console.log(arr3);

const car1 = { name: "BMW", price: "1 Cr" };
const car2 = { color: "White", engineCC: 5000 };

const car = { ...car1, ...car2 };
console.log(car);

function sumOfSquares(val1, val2) {
    function square(val) {
        return val * val;
    }

    let firstValue = square(val1);
    let secondValue = square(val2);

    return firstValue + secondValue;
}

const answer = sumOfSquares(2, 3);
console.log(answer);

function sumOfCubes(val1, val2) {
    function cube(val) {
        return val * val * val;
    }

    let firstValue = cube(val1);
    let secondValue = cube(val2);

    return firstValue + secondValue;
}

const ans = sumOfCubes(2, 3);
console.log(ans);

function sumOfSomething(val1, val2, callbackFn) {
    let firstValue = callbackFn(val1);
    let secondValue = callbackFn(val2);

    return firstValue + secondValue;
}

const ans2 = sumOfSomething(2, 3, (val) => val * val * val);

console.log(ans2);

setTimeout(() => console.log("Hello Everyone!"), 2000);
