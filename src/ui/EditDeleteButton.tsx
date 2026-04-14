import Button from "./Button";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import { useUI } from "../hooks/useUI";
import type { TransactionType } from "../sharedTypes/transactionTypes";
import type { CategoryType } from "../sharedTypes/categoryTypes";

function EditDeleteButton({ data }: { data: TransactionType | CategoryType }) {
  const { openModal } = useUI();
  return (
    <div className="flex justify-center gap-2.5">
      <Button variant="small" onClick={() => console.log("click")}>
        <LuPencil />
      </Button>
      <Button
        variant="small"
        onClick={() => {
          openModal({ modalType: "delete", payload: data });
          console.log(data);
        }}
      >
        <HiOutlineTrash />
      </Button>
    </div>
  );
}

export default EditDeleteButton;
