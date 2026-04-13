import Button from "./Button";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";

function EditDeleteButton() {
  return (
    <div className="flex justify-center gap-2.5">
      <Button variant="small">
        <LuPencil />
      </Button>
      <Button variant="small">
        <HiOutlineTrash />
      </Button>
    </div>
  );
}

export default EditDeleteButton;
