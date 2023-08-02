import React, { useState } from 'react'

function Cal() {

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const[anss, setAnss] = useState(0);
    const [sign, setSign] = useState("+");
    const [count, setCount] = useState(0);
    var ans ;
    const handleAddition=()=>{
        ans = parseFloat(num1) + parseFloat(num2)
        setAnss(ans);
        setSign("+");
        setCount(count+1);
    }

    const handleSubtraction=()=>{
        ans = parseFloat(num1) - parseFloat(num2)
        setAnss(ans);
        setSign("-");
        setCount(count+1);
    }

    const handleMultiplaction=()=>{
        ans = parseFloat(num1) * parseFloat(num2)
        setAnss(ans);
        setSign("*");
        setCount(count+1);
    }

    const handleDivision=()=>{
        ans = parseFloat(num1) / parseFloat(num2)
        setAnss(ans);
        setSign("/");
        setCount(count+1);
    }

    const handleReset= ()=>{
        setNum1("");
        setNum2("");
        setAnss("");
        setSign("+")
    }


  return (
   <>
    <h1 className='text-center my-5'>Calculator</h1>
    <h3 className='text-center'>Counter: {count}</h3>
    <div className="calculator-container text-center my-5">
        <div className="input-field">
            <input className='mx-5' type='number' placeholder='Number 1' onChange={(e)=>{setNum1(e.target.value)}} value={num1}/>
            <b><span className="operation" style={{fontSize:'30px'}}>{sign}</span></b>
            <input className='mx-5' type='number' placeholder='Number 2' onChange={(e)=>{setNum2(e.target.value)}} value={num2}/>
        </div>
        
        <div className="selectOperation my-5">
            <button onClick={handleAddition} className='btn btn-primary'>Addition</button>
            <button onClick={handleSubtraction} className='btn btn-primary mx-5'>Subtraction</button>
            <button onClick={handleMultiplaction} className='btn btn-primary'>Multiplication</button>
            <button onClick={handleDivision} className='btn btn-primary mx-5'>Division</button>
        </div>

        <div className="reset">
            <button onClick={handleReset} className='btn btn-primary mx-5'>Reset</button>
            <label>Result: <span className="result">{anss}</span></label>
        </div>

    </div>
   </>
  )
}

export default Cal
