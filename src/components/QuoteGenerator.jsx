import React, { useState, useEffect } from "react";

const QuoteGenerator = () => {
  const [posts, setPosts] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
        setQuote(json[0]);
      });
  }, []);
  const handleNewQuote=()=>{
    const i=Math.floor(Math.random()*posts.length);
    setQuote(posts[i])
  }
  return (
    <div>
      <h1 className="text-4xl py-4 text-emerald-600 text-center">
        Quote Genrator
      </h1>
      <div className="flex justify-center mt-8">
        <div className="w-1/3 h-60 bg-slate-400 rounded-xl text-center">
          <button
            className="bg-slate-800 text-slate-400 py-2 px-4 mt-2 rounded-xl hover:text-teal-500 active:bg-slate-900"
            onClick={handleNewQuote}
          >
            New Quote
          </button>
          <p className="text-xl font-bold mt-8">
            “{quote.text}
          </p>
          <p className="mt-4">- {quote.author}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
