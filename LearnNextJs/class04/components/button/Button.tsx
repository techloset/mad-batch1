import { Button as ChakraButton } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import styles from "../../styles/components/Button.module.css"


// function Button() {
//     return (
//         <div></div>
//     )
// }

type buttonTypes = {
   isLoading?: boolean,
   color: string,
   buttonTitle: string,
   data: string,
   extraStyle?: {
      color: string,
      padding: number
   }
}

const Button = (props: buttonTypes) => {
   console.log("props", props);

   return (
      <div>
         {props.isLoading ? <ChakraButton colorScheme={props.color} style={props.extraStyle}><CircularProgress/></ChakraButton>
            : <ChakraButton colorScheme={props.color} style={props.extraStyle}>{props.buttonTitle}</ChakraButton>
         }
      </div>
   )
}

export default Button