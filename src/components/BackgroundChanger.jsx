import React, { useState } from "react";
const BackgroundChanger = () => {
  const [color, setColor] = useState("orange");
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-screen duration-200"
    >
      <div className="fixed bottom-12 flex justify-center inset-x-0">
        <div className="bg-white flex flex-wrap justify-center p-2 px-4 rounded-2xl">
          <button
            className="py-2 px-4 rounded-xl bg-red-700 text-white mx-2"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="py-2 px-4 rounded-xl bg-green-700 text-white mx-2"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="py-2 px-4 rounded-xl bg-blue-700 text-white mx-2"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="py-2 px-4 rounded-xl bg-gray-700 text-white mx-2"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="py-2 px-4 rounded-xl bg-yellow-700 text-white mx-2"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="py-2 px-4 rounded-xl bg-pink-700 text-white mx-2"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="py-2 px-4 rounded-xl bg-purple-700 text-white mx-2"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="py-2 px-4 rounded-xl bg-black text-white mx-2"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
