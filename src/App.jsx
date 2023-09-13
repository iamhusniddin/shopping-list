import { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("");
  const [list, setList] = useState([])
  

  
  console.log(list);
  

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center gap-[10px] shadow-xl w-[500px] rounded-lg p-[20px] bg-red-300">
        <h1 className="text-center text-[25px] font-semibold mb-[20px]">
          Shopping List App
        </h1>

        <div className="flex gap-3">
          <input
          value={inputVal}
            onChange={(e) =>setInputVal(e.target.value)}
            className="rounded-lg p-3"
            type="text"
            placeholder="item title"
            name=""
            id=""
          />
          <select value={selectVal} onChange={(e)=> setSelectVal(e.target.value)} className="rounded-lg p-3" name="" id="">
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="normal">Normal</option>
          </select>
          <button onClick={()=> setList([...list, {title: inputVal, priority: selectVal}])} className=" rounded-lg bg-indigo-500 p-3 text-white">
            Add
          </button>
        </div>
        <div className="mt-5 w-full flex-col gap-[10px]">
        {list.map((item)=>(
          <Card title={item.title} pri={item.priority}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
