import { useForm } from "react-hook-form";
import Select from "./Select";
import { useApp } from "../hooks/useApp";
import Button from "./Button";
import { useUI } from "../hooks/useUI";

type InputTypes = {
  date: string;
  description: string;
  amount: number;
  category: string;
  type: "Income" | "Expense";
};

function Form() {
  const { state, formatString, todayDate, addTransaction } = useApp();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputTypes>({
    defaultValues: {
      date: todayDate,
      type: "Income",
    },
  });

  const { closeModal } = useUI();

  const types = [...new Set(state.transactions.map((tr) => tr.type))].map(
    (type) => ({ name: type }),
  );

  const onSubmit = (data: InputTypes) => {
    console.log("Form submitted:", data);
    addTransaction(data);
    reset();
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-xl bg-black flex flex-col justify-center items-start gap-10 text-2xl p-5"
    >
      <h2 className="text-3xl font-bold mb-5">Add New Transaction</h2>
      <div className="flex flex-row justify-between items-center w-full relative">
        <div className="w-6/12">
          <label htmlFor="date">Date: </label>
        </div>
        <div className="w-6/12 flex flex-col gap-2">
          <input
            type="date"
            id="date"
            defaultValue={todayDate}
            className="border border-brand-text rounded-md text-brand-text bg-brand-bg px-3 py-2"
            {...register("date", { required: "Date is required" })}
          />
          {errors.date && (
            <p className="text-brand-expense text-sm absolute mt-14">
              {errors.date.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-10 justify-between items-center w-full relative">
        <Select
          label="Category: "
          dataArr={state.categories}
          valueKey="name"
          labelKey="name"
          formatFn={formatString}
          from="formComponent"
          registerProps={register("category", {
            required: "Category is required",
          })}
        ></Select>
        {errors.category && (
          <p className="text-brand-expense text-sm absolute mt-14">
            {errors.category.message}
          </p>
        )}
      </div>
      <div className="flex flex-row gap-10 justify-between items-center w-full relative">
        <div className="w-6/12">
          <label htmlFor="description">Description: </label>
        </div>
        <div className="w-6/12 flex flex-col gap-2">
          <input
            type="text"
            id="description"
            className="border border-brand-text rounded-md text-brand-text bg-brand-bg px-3 py-2"
            {...register("description", {
              required: "Description is required",
            })}
          />
          {errors.description && (
            <p className="text-brand-expense text-sm absolute mt-14">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row gap-10  justify-between items-center w-full relative">
        <div className="w-6/12">
          <label htmlFor="amount">Amount: </label>
        </div>
        <div className="w-6/12 flex flex-col gap-2">
          <input
            type="number"
            className="border border-brand-text rounded-md text-brand-text bg-brand-bg px-3 py-2"
            {...register("amount", {
              required: "Amount is required",
              valueAsNumber: true,
            })}
          />
          {errors.amount && (
            <p className="text-brand-expense text-sm absolute mt-14">
              {errors.amount.message}
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

export default Form;
