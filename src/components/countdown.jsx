import { useState } from "react";

export class Countdown{
    render(props){
        let [counter, setCounter] = useState(10);
        let [intId, setIntId] = useState('');
        let [tId, setTId] = useState('');

        function handleCounter(){
            clearInterval(intId);
            clearTimeout(tId);

            console.log('1');
            let count = counter;

            let int = setInterval(()=>{
                count -= 1;
                setCounter(count);
                console.log('a');
            }, 1000)
            setIntId(int);

            let timeout = setTimeout(()=>{
                clearInterval(int);
            }, counter * 1000)
            setTId(timeout);
        }

        function pause(){
            clearInterval(intId);
            clearTimeout(tId);
        }

        function continueC(){
            clearInterval(intId);
            clearTimeout(tId);

            let count = counter;
            let int = setInterval(()=>{
                count += 1;
                setCounter(count);
                console.log('a');
            }, 1000)
            setIntId(int);

            let timeout = setTimeout(()=>{
                clearInterval(int);
            }, 10000 - counter * 1000)
            setTId(timeout);
        }

        function clearCounter(){
            clearInterval(intId);
            clearTimeout(tId);
            setCounter(10);
        }

        function setCustom(){
            setCounter(+(document.getElementById('timeInput').value))
        }

        return <div>
            Time: {counter}
            <button onClick={handleCounter}>Start</button>
            <button onClick={clearCounter}>Clear</button>
            <button onClick={pause}>Pause</button>
            <button onClick={continueC}>Continue</button>
            <input type="text" id="timeInput"/>
            <button onClick={setCustom}>set</button>
        </div>
    }
}