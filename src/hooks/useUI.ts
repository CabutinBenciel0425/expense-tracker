import type { CategoryType } from "./../sharedTypes/categoryTypes";
import { useContext } from "react";
import { UIContext } from "../context/UIContext";
import type { TransactionType } from "../sharedTypes/transactionTypes";

type openModalTypes = {
  modalType:
    | "updateTransaction"
    | "updateCategory"
    | "delete"
    | "addTransaction"
    | "addCategory";
  payload?: TransactionType | CategoryType;
};

export function useUI() {
  const context = useContext(UIContext);
  const { state, dispatch } = context;

  function openModal({ modalType, payload }: openModalTypes) {
    dispatch({
      type: "OPEN_MODAL",
      modalType,
      payload,
    });
  }

  function closeModal() {
    dispatch({
      type: "CLOSE_MODAL",
    });
  }

  if (!context) throw new Error("UIContext was used outside the provider");

  return {
    state,
    dispatch,
    openModal,
    closeModal,
    modalType: state.modal.type,
    modalPayload: state.modal.payload,
  };
}
