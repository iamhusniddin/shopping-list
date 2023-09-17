import { useState } from "react";
import "./App.css";
import Card from "./Card";
import {Button, message} from 'antd'
import { useEffect } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [selectVal, setSelectVal] = useState("high");
  const [list, setList] = useState([]);

  const checkItem = (ids) => {
    let newArr = list.map((item) => {
      return item.id === ids ? { ...item, isDone: !item.isDone } : item;
    });
    setList(newArr);
  };

  

  // 1 holat
  // useEffect(()=>{
  //   console.log('render');
  // }); ---- har component render bo'lganda ishlaydi

  // 2 holat
  // useEffect(()=>{
  //   console.log('render');
  // },[]) ---- page birinchi refresh bo'lganda

  // 3 holat
  // useEffect(()=>{
  //   console.log('render');
  // }, selectVal) ---- birinchi statega qaram bo'lish

  // 4 holat
  // useEffect(()=>{
  //   console.log('render');
  // },[selectVal, inputVal]) ---- ko'pgina statega qaram bo'lish


  // useEffect(()=>{
  //   fetch ('https://jsonplaceholder.typicode.com/users')
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  //   .catch(error=>alert('xato'))
  //   .finally(()=>console.log('tugadi'))
  // },[])


  // useEffect(()=>{
  //   async function fetcher() {
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await res.json()
        
  //     } catch (error) {
  //       alert(error)
  //     }
  //   }
  // },[])





  // const additem = () =>{
  //   setList([...list, {title: input}])
  // }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col items-center gap-[10px] shadow-xl w-[500px] rounded-lg p-[20px] bg-red-300">
        <h1 className="text-center text-[25px] font-semibold mb-[20px]">
          Shopping List App
        </h1>

        <div className="flex gap-3 items-center">
          <input
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="rounded-lg p-3"
            type="text"
            placeholder="item title"
            name=""
            id=""
          />
          <select
            value={selectVal}
            onChange={(e) => setSelectVal(e.target.value)}
            className="rounded-lg p-3"
            name=""
            id=""
          >
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
          <Button
            onClick={() =>{
             if (inputVal.length > 0 && selectVal){
                 setList([
                    ...list,
                    {
                      id: Date.now(),
                      title: inputVal,
                      priority: selectVal,
                      isDone: false,
                    },
                  ]);
                  message.success("Item is added");
                  setInputVal("")
             }
             else message.warning("Fill the input!")
            }}
            className=" rounded-lg bg-indigo-500  text-white "
          >
            Add
          </Button>
        </div>
        <div className="mt-5 w-full flex-col gap-[10px]">
          {list.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              pri={item.priority}
              checkItem={checkItem}
              isDone={item.isDone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
