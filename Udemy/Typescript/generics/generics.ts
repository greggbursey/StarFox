// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("MAX"));
console.log(echo(27));
console.log(echo({
    age: 12,
    name: "Idiot"
}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("MAX").length);
console.log(betterEcho(27).toString());
console.log(betterEcho({
    age: 12,
    name: "Idiot"
}));

// Built in Generics
const testResults1: Array<number> = [1, 2];
testResults1.push(-99);
//testResults1.push("asdf");// compiler error
testResults1.push(1.5616516);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["apple", "bananna"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Garg"));

// Generic Class
class SimpleMath<T, U extends number | string> {
    baseVal: T | undefined;
    multiplyVal: U | undefined;
    calc(): number | void {
        if (this.baseVal === undefined || this.multiplyVal === undefined) {
            alert("No");
        } else {
            return +this.baseVal * +this.multiplyVal;
        }
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseVal = 15;
simpleMath.multiplyVal = 20;
simpleMath.multiplyVal = "20";
//simpleMath.multiplyVal = "a lot";
console.log(simpleMath.calc())