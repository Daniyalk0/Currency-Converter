import React from "react";

const Inputbox = ({
  label,
  currencyValue,
  onChangeValue,
  currency,
  onChangeCurrency,
  options = [],
//   inputDisable = false,
}) => {
  return (
    <div className="flex justify-center p-4 flex-col gap-8 w-[90%] rounded-lg bg-slate-500">
      <div className="flex justify-around w-full">
        <h2 className="text-2xl text-zinc-600">{label}</h2>
        <h2 className="text-2xl text-zinc-600">Currency type</h2>
      </div>
      <div className="flex justify-around w-full">
        <div>
          <input
            type="number"
            value={currencyValue}
            className="w-[20vw] h-[5vh] pl-2 rounded-lg bg-slate-900 text-white"
            onChange={(e) => onChangeValue(Number(e.target.value))}
            // disabled={inputDisable}
          />
        </div>
        <select
          name=""
          id=""
          className="w-[6vw] rounded-lg bg-slate-900 text-white"
          value={currency}
          onChange={(e) => onChangeCurrency(e.target.value)}
        >
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Inputbox;
