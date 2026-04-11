import type { CategoryType } from "../sharedTypes/categoryTypes";
import type { TransactionType } from "../sharedTypes/transactionTypes";

export const transactions: TransactionType[] = [
  {
    id: "1",
    date: "2026-04-01",
    category: "Salary",
    description: "Monthly paycheck",
    amount: 3000,
    type: "Income",
  },
  {
    id: "2",
    date: "2026-04-03",
    category: "Grocery",
    description: "Supermarket shopping",
    amount: 120,
    type: "Expense",
  },
  {
    id: "3",
    date: "2026-04-05",
    category: "Dining",
    description: "Dinner with friends",
    amount: 60,
    type: "Expense",
  },
  {
    id: "4",
    date: "2026-04-07",
    category: "Transport",
    description: "Grab ride to work",
    amount: 25,
    type: "Expense",
  },
  {
    id: "5",
    date: "2026-04-10",
    category: "Freelance",
    description: "Web design project",
    amount: 800,
    type: "Income",
  },
  {
    id: "6",
    date: "2026-04-11",
    category: "Utilities",
    description: "Electricity bill",
    amount: 100,
    type: "Expense",
  },
];

export const categories: CategoryType[] = [
  { id: "1", name: "Salary", type: "Income" },
  { id: "2", name: "Freelance", type: "Income" },
  { id: "3", name: "Grocery", type: "Expense" },
  { id: "4", name: "Dining", type: "Expense" },
  { id: "5", name: "Transport", type: "Expense" },
  { id: "6", name: "Utilities", type: "Expense" },
];
