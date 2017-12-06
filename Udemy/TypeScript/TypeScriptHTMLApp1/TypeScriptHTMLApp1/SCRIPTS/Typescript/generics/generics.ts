/*
Generics
*/
//--simple generic
function echo(data: any) {
    return data;
}
//--better generic - <T> makes the function generic, and T can be used as a type
function betterEcho<T>(data: T) {
    return data;
}
//
console.log(echo("MAX"));
console.log(echo(71));
console.log(echo({ name: "Max", age: 2789 }));
//
console.log(betterEcho<string>("MAX"));
console.log(betterEcho<number>(17));
console.log(betterEcho({ name: "Max", age: 2789 }));

//--built in generics - Array is a generic type by default
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.table(testResults);

/*
arrays
*/
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);
/*
generic types
*/
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));
/*
generic class
*/
//class SimpleMath<T extends number | string> {
//class SimpleMath<T extends U, U extends number | string> {
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
//const simpleMath = new SimpleMath<number>();
const simpleMath = new SimpleMath<string, number>();
//simpleMath.baseValue = 11;
//simpleMath.multiplyValue = 2;
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 2;
console.log(simpleMath.calculate());
/*
EXERCISE

Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

*/

class MyMap<T> {
    private map: { [key: string]: T } = {};
    setItem(key: string, item: T) {
        this.map[key] = item;
    }
    getItem(key: string) {
        return this.map[key];
    }
    clear() {
        this.map = {};
    }
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.setItem("pears", 10);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("apples", '10');
stringMap.setItem("pears", '2');
console.log(stringMap.getItem("apples"));
stringMap.printMap();
stringMap.clear();
stringMap.printMap();