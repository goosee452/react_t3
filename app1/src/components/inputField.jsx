import { useState } from "react"

export class Ifield{
    render(){
        let [text, setText] = useState('');
        return <div>
            <input id="inp1" type="text" onChange={()=>{
                setText(document.getElementById('inp1').value)
                document.title = document.getElementById('inp1').value
            }}/>
            <div id="text1">{text}</div>
        </div>
    }
}