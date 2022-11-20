
import { Button as ChakraButton, ButtonGroup } from '@chakra-ui/react'


type ButtonTypes = {
    buttonTitle: string,
    onClickHandler: ()=> void
}

const Button = (props:ButtonTypes) =>{
    console.log("props", props);

    const onClickHandler = () =>{
        console.log("button clicked", props.buttonTitle);
        
    }
    
    return (
        <ChakraButton colorScheme='blue' onClick={props.onClickHandler} >{props.buttonTitle}</ChakraButton>
    )
}

export default Button