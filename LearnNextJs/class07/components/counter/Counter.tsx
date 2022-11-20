import { useState } from "react";
import Button from "../button/Button";

var counterValue:number = 1

const Counter = () => {
    const [countValue, setCountValue ] = useState<number>(1) 
    const [isLoading, setIsLoading ] = useState<boolean>(false) 

    const onClickIncreamentHandler = () =>{
        counterValue = counterValue + 1
         setCountValue(countValue + 1)
        console.log('counterValue',counterValue);
        
    }

    const onClickDcreamentHandler = () =>{
        counterValue = counterValue - 1
        setCountValue(countValue - 1)
        console.log('counterValue',counterValue);
        
    }
    console.log("above the return");
    
    return (
        <div>
            Counter App - var value {counterValue}
            <div>
                <Button buttonTitle="-" onClickHandler={onClickDcreamentHandler} />
                {countValue}
                 <Button buttonTitle="+" onClickHandler={onClickIncreamentHandler} />
            </div>

        </div>
    )
}

export default Counter