export type CategoryType = {
  id: string;
  name: string;
  type: string;
};

export type CategoryState = {
  categories: CategoryType[];
};

export type CategoryAction =
  | { type: "ADD_CATEGORY"; payload: CategoryType }
  | { type: "DELETE_CATEGORY"; id: string }
  | { type: "UPDATE_CATEGORY"; payload: CategoryType };
