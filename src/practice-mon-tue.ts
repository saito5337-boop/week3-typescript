//問題1
// ヒント：string, number, boolean, string[], [string, number] のどれか
const productName: string = "TypeScriptの教科書";
const price: number = 2800;
const inStock: boolean = true;
const tags: string[] = ["typescript", "programming", "book"];
const info: [string, number] = ["著者名", 2024];

//問題2
function calculateTax(price: number, taxRate: number): number {
  return price * taxRate;
}

function joinString(arr: string[], separator: string): string {
  return arr.join(separator);
}

//問題3
// const userName: string = 42;
// const scores: number[] = [1, 2, "three", 4];
const userName: string = "42";
const scores: number[] = [1, 2, 3, 4];

// 問題4
// 要件：
// - firstName: string, lastName: string を受け取る
// - "lastName firstName" の形式で返す
// - 例: fullName("太郎", "山田") → "山田 太郎"
function fullName(firstName: string, lastName: string): string {
  return `${lastName} ${firstName}`;
}

//問題5
// 要件：名前(string)と点数(number)を受け取り、タプルで返す
function getTuple(name: string, score: number): [string, number] {
  return [name, score];
}

const result = getTuple("花子", 95);
console.log(result[0]); // → "花子"
console.log(result[1]); // → 95

//問題6
// 要件：
// - 引数はunknown型で受け取る
// - 文字列なら大文字にして返す
// - 文字列でなければ "NOT A STRING" を返す
function safeUpperCase(value: unknown): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return "NOT A STRING";
  }
}

console.log(safeUpperCase("hello")); // → "HELLO"
console.log(safeUpperCase(42)); // → "NOT A STRING"

//問題7
// 要件：number[] を受け取り、合計値を返す
function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

// 要件：string[] を受け取り、最初の要素を返す（配列が空ならundefinedを返す）
function firstElement(arr: string[]): string | undefined {
  // return arr.length === 0 ? undefined : arr[0];
  return arr[0];
}

//問題8
// Before（anyを使っている）
function processInput(input: any): string {
  return input.toUpperCase();
}

// After（unknownを使って安全に）
function processInputSafe(input: unknown): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else {
    return "NOT A STRING";
  }
}

//問題9
// 要件：string[] を受け取り、各要素を "- 要素" の形式でconsole.logする
// 例: ["apple", "banana"] → "- apple" "- banana" と表示
function printList(items: string[]): void {
  // console.log(items.reduce((item, s) => s + `- ${item}`,""))
  items.forEach((element) => {
    console.log(`- ${element}`);
  });
}

// 問題10
// 要件：
// - 引数は string | number | boolean のいずれか（これをUnion型という）
// - stringなら文字数を返す
// - numberならその数を2倍にして返す
// - booleanなら true→1, false→0 を返す
function processValue(value: string | number | boolean): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return value ? 1 : 0;
  }
}

console.log(processValue("hello")); // → 5（文字数）
console.log(processValue(21)); // → 42
console.log(processValue(true)); // → 1
