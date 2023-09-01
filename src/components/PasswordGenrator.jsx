import React, { useCallback, useEffect, useRef, useState } from "react";

const PasswordGenrator = () => {
  const [count, setCount] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charectorAllowed, setCorectorAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const copyToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  };

  const passswordGenrator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "1234567890";
    if (charectorAllowed) str += "@#$&%!~";
    for (let i = 0; i < count; i++) {
      let randonIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randonIndex);
    }
    setPassword(pass);
  }, [count, numberAllowed, charectorAllowed, setPassword]);

  useEffect(() => {
    passswordGenrator();
  }, [count, numberAllowed, charectorAllowed]);
  return (
    <div className="text-center">
      <h1 className="text-4xl py-4 text-emerald-600">Password Genrator</h1>
      <div className="flex justify-center">
        <div className="w-1/3 h-44 bg-slate-800 rounded-2xl my-8 hover:shadow-2xl">
          <div>
            <input
              type="text"
              value={password}
              placeholder="Password"
              ref={passwordRef}
              readOnly
              className="mt-8 py-1 px-4 w-2/3 rounded-l-xl text-orange-600 focus:outline-none"
            />
            <button
              type="button"
              onClick={copyToClipBoard}
              className="bg-blue-700 active:bg-blue-900 mt-8 py-1 px-4 rounded-r-xl text-slate-100"
            >
              Copy
            </button>
          </div>
          <div className="felx flex-wrap justify-center text-orange-600 mt-4">
            <input
              type="range"
              min={8}
              max={26}
              value={count}
              className="cursor-pointer"
              onChange={(e) => setCount(e.target.value)}
            />
            <label> Length({count})</label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((pre) => !pre)}
              className="ml-2"
            />
            Number
            <input
              type="checkbox"
              id="inputChar"
              defaultChecked={charectorAllowed}
              onChange={() => setCorectorAllowed((pre) => !pre)}
              className="ml-2"
            />
            Charector
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenrator;
