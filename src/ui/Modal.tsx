import { Form } from "react-hook-form";
import { useApp } from "../hooks/useApp";
import { useUI } from "../hooks/useUI";
import type { TransactionType } from "../sharedTypes/transactionTypes";
import Button from "./Button";

type ModalVariant =
  | "update"
  | "delete"
  | "addTransaction"
  | "addCategory"
  | null;

function Modal({ variantType }: { variantType: ModalVariant }) {
  const { closeModal, modalPayload } = useUI();
  const { deleteTransaction } = useApp();
  if (!variantType) return null;
  const variant = {
    update: (
      <div
        className="flex flex-col justify-start items-center gap-10 px-4 py-10 bg-brand-bg rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-2xl">Are you sure you want to update this row?</p>
        <div className="flex flex-row items-center justify-end w-full gap-5">
          <Button variant="modalBtnCancel" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button
            variant="modalBtnSaveConfirm"
            onClick={(e) => e.stopPropagation()}
          >
            Confirm
          </Button>
        </div>
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
            onClick={() => deleteTransaction(modalPayload as TransactionType)}
          >
            Confirm
          </Button>
        </div>
      </div>
    ),
    addTransaction: (
      <div className="flex flex-col justify-start items-center gap-5 px-4 py-5 bg-brand-bg rounded-md">
        <Form />
      </div>
    ),
    addCategory: (
      <div onClick={(e) => e.stopPropagation()}>
        ...add category modal content...
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
