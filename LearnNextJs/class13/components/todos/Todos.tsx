
import useTodos from "../../customHooks/useTodos"
import { TodoType } from "../../types/TodosTypes"

const Todos = () => {
    const { 
        todos,
        storeTodos,
        loader,
        description,
        setTodos,
        getTodosHandler,
        todoUpdateHandler,
        onTodoSubmitHandler,
        todoDeleteHandler,
        setDescription,
        onFileChangeHandle,
        currentUserRequestLoader,
        searchText,
        setSearchText
    } = useTodos()
     if(currentUserRequestLoader){
        return <div>loading....</div>
     }
     console.log("searchText", searchText);
     
    return (
       
        <div>

            <h1>Add new todo</h1>
            <label htmlFor="description">Enter description</label>
            <input type="text" onChange={(e) => setDescription(e.target.value)} />
            <input type="file" onChange={onFileChangeHandle} />
            <button onClick={onTodoSubmitHandler}>Submit</button>

            <h1>
                List of Todos from firestore
            </h1>

            <input type="text" placeholder="search by id" onChange={(e)=>setSearchText(e.target.value)} />

            <button onClick={getTodosHandler}>get todos</button>
            {loader && <h1>Loading.....</h1>}
            {storeTodos?.filter((todo)=>todo.id.includes(searchText)).map((todo: TodoType, index: number) => {
                return (
                    <div key={index}>{todo.id}  - {todo.description}

                        <img style={{width:50, height:50}} src={todo?.attachmentURL} alt="" />

                        <button onClick={() => todoDeleteHandler(todo)}>delete</button>
                        <button onClick={() => todoUpdateHandler(todo)}>update</button>
                    </div>
                )
            })}

        </div>

    )
}
export default Todos