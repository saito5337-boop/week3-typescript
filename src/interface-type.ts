interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "太郎",
  age: 25,
  email: "taro@example.com",
};

interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: "TypeScript本",
  price: 2800,
};

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: String;
}

const dog: Dog = {
  name: "ポチ",
  age: 3,
  breed: "柴犬",
};

// type は interface と似ているが、より柔
type Point = {
  x: number;
  y: number;
};

type Status = "active" | "inactive" | "pending";

type AdminUser = User & { role: "admin" };

// interfaceが向いている：オブジェクトの形を定義するとき
interface userProfile {
  name: string;
  email: string;
}

// typeが向いている：Union型・Intersection型・プリミティブの別名
type ID = string | number;
type Status = "active" | "inactive";
type AdminUser = UserProfile & { role: "admin" };
