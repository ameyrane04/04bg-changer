import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor]= useState("skyblue");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          onClick={()=> setColor("red")} // on click kabhi bhi ek function hi expect karta hai so usme apne ko function hi pass karna padega
          style={{backgroundColor:'red'}}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          onClick={()=> setColor("green")}// cannot pass a value to a onclick event
          style={{backgroundColor:'green'}}>green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          onClick={()=> {setColor("purple")}}//so u can also write like this..within curly brackets, single line that to curly nhi dala pehle.
          style={{backgroundColor:'purple'}}>purple</button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
          onClick={()=> {setColor("yellow")}}
          style={{backgroundColor:'yellow'}}>yellow</button>
        </div>
      </div>
    </div>

  );
}

export default App;
