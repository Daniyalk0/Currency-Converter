import React, { useState } from "react";
import Inputbox from "./components/Inputbox";
import useCurrency from "./Hooks/UseCurrency";

const App = () => {
  const [amount, setamount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const currenctC = useCurrency(from);
  const options = Object.keys(currenctC);
  function convert() {
    setConvertedAmount(amount * currenctC[to]);
  }

  const swap = () => {
    setTo(from);
    setfrom(to);
    setConvertedAmount(amount);
    setamount(convertedAmount);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[80%] h-[90vh] rounded-lg flex overflow-hidden bg-slate-900">
        <div
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
          }}
          className="w-[40%] h-full rounded-r-2xl"
        />
        <div className="w-[60%] h-full flex flex-col justify-around items-center p-4 bg-slate-900">
          <Inputbox
            options={options}
            currencyValue={amount}
            label="From"
            onChangeValue={setamount}
            currency={from}
            onChangeCurrency={setfrom}
          />
          <button
            className="px-12 py-4 bg-slate-600 text-white absolute top-[34vh] text-2xl rounded-md"
            onClick={swap}
          >
            Swap
          </button>
          <Inputbox
            options={options}
            currencyValue={convertedAmount}
            label="To"
            currency={to}
            onChangeCurrency={setTo}
          />
          <button
            onClick={convert}
            className="w-[40vw] py-4 bg-blue-500 rounded-xl text-white text-3xl"
          >
            Convert {from} to {to}
          </button>
        </div>
      </div>
      <div className="w-full h-screen absolute bg-zinc-500 z-[-1]" />
    </div>
  );
};

export default App;
