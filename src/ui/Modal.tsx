import { useApp } from "../hooks/useApp";
import { useUI } from "../hooks/useUI";
import type { TransactionType } from "../sharedTypes/transactionTypes";
import Button from "./Button";
import type { CategoryType } from "../sharedTypes/categoryTypes";
import TransactionForm from "./TransactionForm";
import CategoryForm from "./CategoryForm";

type ModalProps = {
  variantType:
    | "updateTransaction"
    | "updateCategory"
    | "delete"
    | "addTransaction"
    | "addCategory"
    | null;
  payload?: TransactionType | CategoryType | null;
};

function Modal({ variantType }: ModalProps) {
  const { closeModal, modalPayload } = useUI();
  const { deleteTransaction, deleteCategory } = useApp();
  if (!variantType) return null;

  function isTransaction(
    payload: TransactionType | CategoryType | null,
  ): payload is TransactionType {
    return !!payload && "amount" in payload && "date" in payload;
  }

  function isCategory(
    payload: TransactionType | CategoryType | null,
  ): payload is CategoryType {
    return (
      !!payload &&
      "name" in payload &&
      "type" in payload &&
      !("amount" in payload)
    );
  }

  const variant = {
    updateTransaction: (
      <div
        className="flex flex-col justify-start items-center gap-5 px-4 py-5 bg-brand-bg rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <TransactionForm payload={modalPayload as TransactionType} />
      </div>
    ),
    updateCategory: (
      <div
        className="flex flex-col justify-start items-center gap-5 px-4 py-5 bg-brand-bg rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <CategoryForm payload={modalPayload as CategoryType} />
      </div>
    ),
    delete: (
      <div className="flex flex-col justify-start items-center gap-10 px-4 py-10 bg-brand-bg rounded-md">
        <p className="text-2xl">Are you sure you want to delete this row?</p>
        <div className="flex flex-row items-center justify-end w-full gap-5">
          <Button variant="modalBtnCancel" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button
            variant="modalBtnSaveConfirm"
            onClick={() => {
              if (isTransaction(modalPayload)) {
                deleteTransaction(modalPayload);
              } else if (isCategory(modalPayload)) {
                deleteCategory(modalPayload);
              }
              closeModal();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    ),
    addTransaction: (
      <div
        className="flex flex-col justify-start items-center gap-5 px-4 py-5 bg-brand-bg rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <TransactionForm />
      </div>
    ),
    addCategory: (
      <div
        className="flex flex-col justify-start items-center gap-5 px-4 py-5 bg-brand-bg rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <CategoryForm />
      </div>
    ),
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-99"
      onClick={() => closeModal()}
    >
      {variant[variantType]}
    </div>
  );
}

export default Modal;
