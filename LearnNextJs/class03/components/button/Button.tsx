import { Button as ChakraButton } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import styles from "../../styles/components/Button.module.css"


// function Button() {
//     return (
//         <div></div>
//     )
// }

var buttonTitle:string = "upload"

const Button = () => {
   return (
    <div>
        <CircularProgress isIndeterminate color='green.300' />
       <ChakraButton colorScheme='blue'>{buttonTitle}</ChakraButton>
    </div>
   )
}

export default Button