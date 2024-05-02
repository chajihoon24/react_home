import { useState } from "react"
// import React from "react"

function UseState1(){

const [data, setData] = useState(0)

const increase = () => { setData(data + 1) }
const decrease = () => { setData(data - 1) }
const reset = () => { setData(data * 0) }
const five = ()=>{setData(5)}

return (
    <>
        <h1>useState</h1>
        <hr></hr>
        <h2>예제1: 숫자 상태관리</h2>
        <h1>{data}</h1>
        <button id='up' onClick={increase}>+</button>
        <button id='down' onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={five}>5</button>
        <hr></hr>

    </>
    )
}

export default UseState1