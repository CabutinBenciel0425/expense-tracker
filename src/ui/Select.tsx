type SelectProps<T> = {
  label: string;
  dataArr: T[];
  valueKey?: keyof T;
  labelKey?: keyof T;
  formatFn?: (val: string) => string;
  from: "formComponent" | "categoryFilter";
  registerProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
};

function Select<T extends Record<string, unknown>>({
  label,
  dataArr,
  valueKey,
  labelKey,
  formatFn,
  from,
  registerProps,
}: SelectProps<T>) {
  return (
    <div
      className={`flex flex-row items-center w-full ${from === "formComponent" ? "gap-10" : ""}`}
    >
      <div className={`w-6/12`}>
        <label>{label}</label>
      </div>
      <div className={`w-6/12`}>
        <select
          className="border border-brand-text rounded-md text-brand-text bg-brand-bg px-3 py-2"
          {...registerProps}
        >
          {from === "categoryFilter" && <option value="all">All</option>}
          {dataArr.map((item, idx) => {
            const value = valueKey ? String(item[valueKey]) : String(item);
            const display = labelKey ? String(item[labelKey]) : String(item);
            return (
              <option key={idx} value={value}>
                {formatFn ? formatFn(display) : display}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Select;
