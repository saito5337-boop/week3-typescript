// ❌ ジェネリクスなし → anyを使うしかなく型安全性ゼロ
function getFirst(arr: any[]): any {
  return arr[0];
}

// ✅ ジェネリクスあり → 型が保たれる
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]); // numはnumber型
const str = getFirst(["a", "b"]); // strはstring型

// 基本形：<T>を関数名の直後に書く
function identity<T>(value: T): T {
  return value;
}

// 複数の型パラメータ
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}
const pairArrow = <T, U>(first: T, second: U) => [first, second];

const result = pair("hello", 42);

// アロー関数版
const wrap = <T>(value: T): { data: T } => ({ data: value });

// APIレスポンスの共通型
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// 使い方
interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  data: { id: 1, name: "Taiton" },
  status: 200,
  message: "OK",
};

// リストのレスポンス
const listResponse: ApiResponse<User[]> = {
  data: [{ id: 1, name: "Taiton" }],
  status: 200,
  message: "OK",
};

// Tはlengthプロパティを持つものだけ許可
function getLengtrh<T extends { length: number }>(value: T): number {
  return value.length;
}

getLengtrh("Hello");
getLengtrh([1, 2, 3]);
getLengtrh(42);

// keyof と組み合わせた制約（実務頻出）
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "Taiton" };
getProperty(user, "name");
getProperty(user, "age");

// Tのデフォルトをstringにする
interface Container<T = string> {
  value: T;
}

const c1: Container = { value: "hello" };
const c2: Container<number> = { value: 42 };
