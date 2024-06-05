import { useState } from "react";

export class Toggle{
    render(){
        let [enabled, setState] = useState(0)
        
        function handle(){
            if(enabled){
                setState(0)
            }
            else{
                setState(1)
            }
        }

        function setText(){
            if(enabled){
                return 'Disable'
            }
            else{
                return 'Enable'
            }
        }

        function setColor(){
            if(enabled){
                return 'green'
            }
            else{
                return 'red'
            }
        }

        return <div>
            <button style={{backgroundColor:setColor()}}
            onClick={handle}>
                {setText()}
            </button>
        </div>
    }
}