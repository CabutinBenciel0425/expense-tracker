import { useForm } from "react-hook-form";
import Select from "./Select";
import { useApp } from "../hooks/useApp";
import Button from "./Button";
import { useUI } from "../hooks/useUI";

type InputTypes = {
  name: string;
  type: "Income" | "Expense";
};

function CategoryForm() {
  const { formatString, types, addCategory } = useApp();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputTypes>({
    defaultValues: { type: "Income" },
  });

  const { closeModal } = useUI();

  const onSubmit = (data: InputTypes) => {
    addCategory(data);
    reset();
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-md bg-black flex flex-col justify-center items-start gap-10 text-2xl p-5"
    >
      <h2 className="text-3xl font-bold mb-5">Add New Category</h2>

      <div className="flex flex-row gap-10 justify-between items-center w-full relative">
        <div className="w-6/12">
          <label htmlFor="description">Name: </label>
        </div>
        <div className="w-6/12 flex flex-col gap-2">
          <input
            type="text"
            id="name"
            className="border border-brand-text rounded-md text-brand-text bg-brand-bg px-3 py-2"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <p className="text-brand-expense text-sm absolute mt-14">
              {errors.name.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-10 justify-between items-center w-full relative">
        <Select
          label="Type: "
          dataArr={types}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
          from="formComponent"
          registerProps={register("type", { required: "Type is required" })}
        ></Select>
        {errors.type && (
          <p className="text-brand-expense text-sm absolute mt-14">
            {errors.type.message}
          </p>
        )}
      </div>

      <hr className="border-2 border-brand-bg-light w-full my-5" />
      <div className="flex flex-row items-center justify-end w-full gap-5">
        <Button variant="modalBtnCancel" onClick={() => closeModal()}>
          Cancel
        </Button>
        <Button variant="modalBtnSaveConfirm" type="submit">
          Add Transaction
        </Button>
      </div>
    </form>
  );
}

export default CategoryForm;
