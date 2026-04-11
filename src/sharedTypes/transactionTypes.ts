export type TransactionType = {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  type: string;
};

export type TransactionState = {
  transactions: TransactionType[];
};

export type TransactionAction =
  | { type: "ADD_TRANSACTION"; payload: TransactionType }
  | { type: "DELETE_TRANSACTION"; id: string }
  | { type: "UPDATE_TRANSACTION"; payload: TransactionType };
