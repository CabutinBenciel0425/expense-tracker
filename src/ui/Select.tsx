type SelectProps<T> = {
  label: string;
  dataArr: T[];
  valueKey?: keyof T; // optional: which property to use as value
  labelKey?: keyof T; // optional: which property to show as label
  formatFn?: (val: string) => string; // optional formatter
};

function Select<T extends Record<string, unknown>>({
  label,
  dataArr,
  valueKey,
  labelKey,
  formatFn,
}: SelectProps<T>) {
  return (
    <div className="flex gap-10">
      <label>{label}</label>
      <select className="bg-brand-bg">
        <option value="all">All</option>
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
  );
}

export default Select;
