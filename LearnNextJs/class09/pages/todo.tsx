import { Center } from '@chakra-ui/react'
import TodoCard from '../components/todoCard/TodoCard'
import styles from '../styles/todo.module.css'



export default function Todo() {


    return (
        <Center bg='#389CDD' h='100vh' color='white'>
            <TodoCard />
        </Center>
    )
}
