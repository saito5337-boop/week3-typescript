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
const userName: string = 42;
const scores: number[] = [1, 2, "three", 4];
