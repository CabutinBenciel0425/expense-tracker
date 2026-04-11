import type {
  CategoryAction,
  CategoryType,
} from "../sharedTypes/categoryTypes";
import type {
  TransactionAction,
  TransactionType,
} from "../sharedTypes/transactionTypes";

export type AppState = {
  transactions: TransactionType[];
  categories: CategoryType[];
};

export type AppAction = TransactionAction | CategoryAction;

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter((cat) => cat.id !== action.id),
      };

    case "UPDATE_CATEGORY":
      return {
        ...state,
        categories: state.categories.map((cat) =>
          cat.id === action.payload.id ? { ...cat, ...action.payload } : cat,
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((tr) => tr.id !== action.id),
      };

    case "UPDATE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((tr) =>
          tr.id === action.payload.id ? { ...tr, ...action.payload } : tr,
        ),
      };

    default:
      return state;
  }
}
