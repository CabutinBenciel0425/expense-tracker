import Button from "./Button";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import { useUI } from "../hooks/useUI";
import type { TransactionType } from "../sharedTypes/transactionTypes";
import type { CategoryType } from "../sharedTypes/categoryTypes";

function EditDeleteButton({
  data,
  from,
}: {
  data: TransactionType | CategoryType;
  from: "transactionList" | "categoryList";
}) {
  const { openModal } = useUI();
  const updateFn =
    from === "transactionList" ? "updateTransaction" : "updateCategory";

  return (
    <div className="flex justify-center gap-2.5">
      <Button
        variant="small"
        onClick={() => {
          openModal({
            modalType: updateFn,
            payload: data,
          });
        }}
      >
        <LuPencil />
      </Button>
      <Button
        variant="small"
        onClick={() => {
          openModal({ modalType: "delete", payload: data });
        }}
      >
        <HiOutlineTrash />
      </Button>
    </div>
  );
}

export default EditDeleteButton;
