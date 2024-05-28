
export interface user {
  id: number,
  name: string,
  email: string,
  password: string,
  phone: string,
  role: string,
  mess: mess,
  messId: number;
  tokenStr: string
}

export interface mess {
  id: number,
  name: string,
  address: string,
  phone: string
}

export interface messReport {
  meals: number,
  mealRate: number,
  collectedFunds: number,
  cost: number,
  balance: number
}

export interface userReport {
  meals: number,
  mealRate: number,
  collectedFunds: number,
  cost: number,
  balance: number
}

export interface fund {
  id: number,
  cash: number,
  date: any,
  mess: mess,
  user: user
}

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

export interface groceryBill {
  id: number,
  date: any,
  amount: number,
  user: user,
  mess: mess,
  description: string
}

export interface meal {
  id: number,
  date: any,
  mealNumber: number,
  user: user,
  mess: mess
}

export interface userId {
  id: number
}