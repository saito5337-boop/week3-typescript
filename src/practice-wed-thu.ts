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
const calculator: Calculator = {};
