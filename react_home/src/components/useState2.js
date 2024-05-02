import { useState } from "react";

function UseState2() {
    const [data, setData] = useState("white")
    
    const red= () => { setData("red") }
    const blue = () => { setData("blue") }
    const green = () => { setData("green") }
    

    return (
        <>
            <h2>예제2 : 문자열 상태관리</h2>
            <h1>color is {data}</h1>
            <button onClick={red}>red</button>
            <button onClick={blue}>blue</button>
            <button onClick={green}>green</button>
            <hr></hr>
        </>
    )
}
export default UseState2