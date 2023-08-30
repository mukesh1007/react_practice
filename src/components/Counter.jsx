import { useState } from "react";

function Counter() {
  const [count, setCount] = useState({ value: 10, err: false });

  return (
    <div className=" text-center">
      <h1 className="text-4xl py-4 text-emerald-600">Counter Project</h1>
      <h1 className="text-3xl text-slate-100">{count.value}</h1>
      {count.err && <p className="text-red-600">Count can not be nigative</p>}
      <button
        className=" bg-slate-900 text-slate-400 m-4 px-4 py-2 rounded-xl hover:text-sky-400 active:bg-black"
        onClick={() => setCount({ value: count.value + 1, err: false })}
      >
        Add
      </button>
      <button
        className=" bg-slate-900 text-slate-400 m-4 px-4 py-2 rounded-xl hover:text-sky-400 active:bg-black"
        onClick={() =>
          count.value
            ? setCount({ value: count.value - 1, err: false })
            : setCount({ value: count.value, err: true })
        }
      >
        Reduce
      </button>
    </div>
  );
}

export default Counter;
