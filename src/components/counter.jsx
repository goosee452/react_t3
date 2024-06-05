import { useState } from "react";

export class Counter{
    render(){
        let start = 0;
        if(localStorage.getItem('counter1') == null){
            localStorage.setItem('counter1', 0);
            start = 0;
        }
        else{
            start = +localStorage.getItem('counter1');
        }
        let [counter, setCounter] = useState(start);

        function handleCounter(add){
            if(add == true){
                setCounter(counter + 1);
                localStorage.setItem('counter1', counter + 1);
            }
            else{
                setCounter(counter - 1);
                localStorage.setItem('counter1', counter - 1);
            }
        }

        return <div>
            <p>Counter: {counter}</p>
            <button onClick={()=>handleCounter(true)}>Increase</button>
            <button onClick={() =>handleCounter(false)}>Decrease</button>
        </div>
    }
}