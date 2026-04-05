// 変数への型アノテーション
const userName: string = "太郎";
const age: number = 25;
const isActive: boolean = true;

// 関数の引数・返り値への型指定
// C#: public string Greet(string name, int age) { ... }
function greet(name: string, age: number): string {
  return `こんにちは、${name}さん（${age}歳）`;
}

// アロー関数でも同じ
const add = (a: number, b: number): number => {
  return a + b;
};

// 返り値がない場合は void（C#と同じ）
function printLog(message: string): void {
  console.log(message);
}

// 配列型（2通りの書き方、どちらでもOK）
const names: string[] = ["太郎", "花子", "次郎"];
const scores: Array<number> = [85, 92, 78];

// タプル型：順番と型が固定された配列
// C#の ValueTuple (string, int) に相当
const person: [string, number] = ["太郎", 25];

// タプルは順番を間違えるとエラーになる
// const wrong: [string, number] = [25, "太郎"]; // ← エラー！

// any: 型チェックを完全にオフ（使うべきでない）
let anything: any = "文字列";
anything = 42;
anything = true;
anything.toUpperCase();

// unknown: anyの安全版（受け取れるが使う前に型チェック必須）
let value: unknown = "文字列";
// value.toUpperCase(); // ← エラー！型チェックなしでは使えない

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// never: 絶対に到達しない型（網羅チェックに使う）
type Status = "active" | "inactive";

function handleStatus(status: Status): string {
  if (status === "active") return "アクティブ";
  if (status === "inactive") return "非アクティブ";

  // ここに到達したら Status に新しい値が追加されている
  const exhaustive: never = status; // ← コンパイルエラーで気づける
  return exhaustive;
}
