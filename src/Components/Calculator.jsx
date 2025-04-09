
import React, { Component, useState } from 'react'



function Calculator() {
  const [input, setInput] = useState("")


  const handleclick = (value) => {
    setInput((prev) => prev + value);
  };

  const handlecalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const ClearText = () => {
    setInput("");
  };

  const Deletetext = () => {
    setInput(input.slice(0, -1));
  };




  const btnclass = "bg-green-50 p-4 text-lg rounded font-medium"

  return (
    <>
      <div className="min-h-screen flex items-center justify-center mx-auto bg-blue-500">
        <div className="bg-white p-6 rounded-lg shadow-xl w-80">
          <h1 className="text-2xl font-bold mb-4 text-center text-white-700">React Calculator</h1>
          <input
            type="text"
            value={input}
            className="w-full mb-4 p-3 text-right border rounded text-xl"
            readOnly
          />
          <div className="grid grid-cols-4 gap-3">
            {["0", "1", "2", "3",
              "4", "5", "6", "7",
              "8", "9", "-", "+",
              "*", "/", ".", "="].map((btn) => (
                <button
                  key={btn}
                  onClick={() =>
                    btn === "=" ? handlecalculate() : handleclick(btn)
                  }
                  className={btnclass}
                >
                  {btn}
                </button>

              ))}
            <button  onClick={ClearText}>
              Clear
            </button>

            <button onClick={Deletetext}>
              Backspace
            </button>


          </div>
        </div>
      </div>
    </>
  )

}

export default Calculator;