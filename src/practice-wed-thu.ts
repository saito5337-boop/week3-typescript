//問題1
// 要件：
// - id: number（変更不可）
// - name: string
// - email: string
// - age: number（省略可能）
interface User {
  readonly id: number;
  name: string;
  email: string;
  age?: number;
}

//問題2
// Product の要件：
// - id: number（変更不可）
// - name: string
// - price: number
interface Product {
  readonly id: number;
  name: string;
  price: number;
}

// Order の要件：
// - id: number（変更不可）
// - product: Product（Productを使う）
// - quantity: number
// - status: string
interface Order {
  readonly id: number;
  product: Product;
  quantity: number;
  status: string;
}

//問題3
interface Animal {
  name: string;
  age: number;
}

// Cat の追加プロパティ：
// - breed: string（猫種）
// - isIndoor: boolean（室内猫かどうか）
interface Cat extends Animal {
  breed: string;
  isIndoor: boolean;
}

//問題4
// 要件：
// - OrderStatus は "pending" | "shipped" | "delivered" | "cancelled"
// - 以下の関数に型をつけてください
type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

function getStatusLabel(status: OrderStatus): string {
  switch (status) {
    case "pending":
      return "注文受付中";
    case "shipped":
      return "発送済み";
    case "delivered":
      return "配達完了";
    case "cancelled":
      return "キャンセル";
  }
}

//問題5
interface Employee {
  id: number;
  name: string;
  department: string;
}

interface Manager {
  teamSize: number;
  budget: number;
}

// EmployeeとManagerを合成したSeniorManagerを定義してください
// type SeniorManager = ...
type SeniorManager = Employee & Manager;

const manager: SeniorManager = {
  id: 1,
  name: "田中",
  department: "開発",
  teamSize: 5,
  budget: 1000000,
};

//問題6
// 要件：
// - Calculator interface を定義する
// - add(a: number, b: number): number
// - subtract(a: number, b: number): number
// - multiply(a: number, b: number): number
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
}
// 定義したら以下を実装してください
const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
};

//問題7
// 要件：
// - SearchParams interface を定義する
// - keyword: string（必須）
// - page: number（省略可、デフォルトは1）
// - limit: number（省略可、デフォルトは10）
// - category: string（省略可）
interface SearchParams {
  keyword: string;
  page?: number;
  limit?: number;
  category?: string;
}

function search(params: SearchParams): string {
  const page = params.page ?? 1;
  const limit = params.limit ?? 10;
  return `${params.keyword}を検索（${page}ページ目、${limit}件）`;
}

console.log(search({ keyword: "TypeScript" }));
// → "TypeScriptを検索（1ページ目、10件）"

//問題8
interface Config {
  readonly apiUrl: string;
  readonly apiKey: string;
  timeout: number;
}

const config: Config = {
  apiUrl: "https://api.example.com",
  apiKey: "secret-key-123",
  timeout: 3000,
};

// 以下のうち、エラーになる行はどれか答えてから実際に確認してください
config.apiUrl = "https://other.com"; // A
config.timeout = 5000; // B
config.apiKey = "new-key"; // C

//問題9
// 以下をinterfaceとtypeのどちらで定義するか判断して実装してください

// 1. ユーザーのプロフィール情報（name, bio, avatarUrl?）
// 2. APIレスポンスの結果（"success" | "error" | "loading"）
// 3. 座標（x: number, y: number）
// 4. ユーザーIDの型（stringまたはnumber）
interface UserProfile {
  name: string;
  bio: string;
  avatarUrl?: string;
}

type Result = "success" | "error" | "loading";

interface Point {
  x: number;
  y: number;
}

type UserId = string | number;

//問題10
// ECサイトの型設計
// 要件：
// - BaseEntity: id(readonly), createdAt(string), updatedAt(string)
// - Product: BaseEntityを継承、name・price・stock(在庫数)
// - CartItem: product(Product)・quantity
// - Cart: items(CartItem[])・totalPrice()メソッド（返り値number）
interface BaseEntity {
  readonly id: number;
  createdAt: string;
  updatedAt: string;
}

interface Product extends BaseEntity {
  name: string;
  price: number;
  stock: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface Cart {
  items: CartItem[];
  totalPrice(): number;
}

// 全て定義したら以下を実装してください
const cart: Cart = {
  items: [
    {
      product: {
        id: 1,
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
        name: "TS本",
        price: 2800,
        stock: 10,
      },
      quantity: 2,
    },
  ],
  totalPrice(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
  },
};

console.log(cart.totalPrice()); // → 5600
