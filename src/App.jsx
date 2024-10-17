import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset,changeRange } from './redux/counterSlice';
import { useState } from 'react';
function App() {
  const dispatch=useDispatch()/* call action */
  const count =useSelector((state)=>state.counter.value)
  console.log(count);
  const [range,setRange]=useState("")
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center'style={{backgroundColor:'black',height:'100vh'}}>
       <div className='bg-light p-5 rounded'style={{wudth:'500px'}}>
        <h1 className='text-center text-primary'>Counter Application</h1>
        <h1 className='text-center my-5'style={{fontSize:'70px'}}>{count}</h1>
        <div className='d-flex justify-content-evenly'>
          <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
          <button className='btn btn-danger'onClick={()=>dispatch(reset())}>Reset</button>
          <button className='btn btn-success'onClick={()=>dispatch(increment())}>Increment</button>
        </div>
        <div className='mt-5 d-flex'>
          <input type="text" className='form-control'placeholder='Range'onChange={(e)=>setRange(e.target.value)} />
          <button className='btn btn-primary ms-0'onClick={()=>dispatch(changeRange(Number(range)))}>Click</button>
        </div>
       </div>
      </div>
      
    </>
  )
}

export default App
