import { Card, CardBody, Text, InputGroup, Input, InputRightElement, Button, Stack } from '@chakra-ui/react'
import { AddIcon, EditIcon } from '@chakra-ui/icons'
import { useState } from "react"
import styles from '../../styles/todo.module.css'
import TodoListing from './todoListing'


type TodoType = {
    createdAt?: string,
    description: string,
    id?: string
}

export default function TodoCard() {

    const [todoText, setTodoText] = useState<string>("")
    const [todos, setTodos] = useState<TodoType[]>([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [oldItem, setOldItem] = useState({})

    const onClickHandler = () => {

        let newTodo: TodoType = {
            description: todoText
        }
        console.log("on click working", newTodo);

        setTodos([...todos, newTodo])


    }

    const onDeleteHandler = (item:TodoType)=>{
        console.log("user want to delete this item", item);

       let filteredTodos = todos.filter((todo)=>{
            if(todo.description != item.description){
                return todo
            }
        })

        setTodos(filteredTodos)
        
    }


    const onUpdateHandler = (item:TodoType)=>{
        console.log("user want to update this item", item);
        setTodoText(item.description)
        setIsUpdate(true)
        setOldItem(item)
        
    }

    const onEditHandler = ()=>{
        let updatedItem = {
            description: todoText
        }
       let updatedTodos =  todos.map((todo)=>{
        if (oldItem.description == todo.description) {
            return updatedItem
        }
        else {
            return todo
        }
        
       })

       setTodos(updatedTodos)
       setIsUpdate(false)
    }
    

 

    return (
        <div className={styles.cardContainer}>
            <Card style={{ backgroundColor: '#CDECF8' }}>
                <CardBody>

                    {/* input */}
                    <InputGroup size='md' style={{ backgroundColor: 'white' }}>
                        <Input
                            value={todoText}
                            onChange={(e) => setTodoText(e.target.value)}
                            pr='10.5rem'
                            type={'text'}
                            placeholder='Add a task here...'
                            style={{ borderRadius: 2 }}
                        />
                        <InputRightElement >
                            <Button onClick={onClickHandler} style={{ backgroundColor: '#1c72db', borderRadius: 0, color: 'white' }} h='2.35rem' size='sm' onClick={() => null}>
                                {isUpdate ? <EditIcon  onClick={onEditHandler} w={6} h={3}/> : 
                                <AddIcon onClick={onClickHandler} w={6} h={3} />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>


                    {/* listing */}
                    <Stack mt='4' spacing='3'>
                        {todos.map((item: TodoType) => {
                            return (
                                <>
                                    <Text mt="2" py='1' style={{ backgroundColor: 'white' }}>
                                        {item.description}
                                    </Text>
                                    <button onClick={()=>onDeleteHandler(item)}>delete</button>
                                    <button onClick={()=>onUpdateHandler(item)}>update</button>
                                </>
                            )
                        })}
                        {/* <TodoListing todoList={todos} /> */}
                    </Stack>

                </CardBody>
            </Card>

        </div>
    )
}
