import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
import { db, storage } from '../config/firebase'
import { TodoType } from "../types/TodosTypes"
import { deleteTodo, fetchTodos } from "../store/todoSlice";

const useTodos = () => {


    const dispatch = useDispatch()
    const [todos, setTodos] = useState<TodoType[]>([])
    const [description, setDescription] = useState<string>('')
    const [loader, setLoader] = useState(false)
   const data = useSelector((store)=> store.auth)
   const router = useRouter();
   console.log("data from auth slice",data);


   const storeTodos = useSelector((store)=>store.todoSlice.todos)
   const auth = useSelector((store)=> store.auth)
   console.log("storeTodos",storeTodos);
   console.log("auth calling back",auth);
   
    useEffect(()=>{
      if (!auth.isLoggedIn &&  !auth.currentUserRequestLoader) {
        router.push("/login");
      }
    },[auth])
    // const [attachmentURL, setAttachmentURL] = useState('')
    const [attachmentImage, setAttachmentImage] = useState({})

    useEffect(() => {
        console.log("Todos component just render");
        dispatch(fetchTodos())
        // getTodosHandler()

    }, [])


    const onFileChangeHandle = async (e) => {
        // const file = new File([e.target.files[0]], e.target.files[0].name)
        setAttachmentImage(e.target.files[0])
        // try {
        //     const storageRef = ref(storage, `/todosImages/${description}_${e.target.files[0].name}`);
        //     const result = await uploadBytes(storageRef, e.target.files[0])
        //     console.log('====================================');
        //     console.log("result", result);
        //     console.log('====================================');
        //     const downloadURL = await getDownloadURL(result.ref)
        //     console.log("downloadURL", downloadURL);
        //     setAttachmentURL(downloadURL)
        // } catch (error) {
        //     console.log("error in file handling", error);

        // }


    }


    const getTodosHandler = async () => {
        console.log("get todos method");

        try {
            setLoader(true)
            const querySnapshot = await getDocs(collection(db, "todos"));
            let todosList: TodoType[] = []
            querySnapshot.forEach((doc) => {
                todosList.push({
                    attachmentURL: doc.data()?.attachmentURL,
                    description: doc.data()?.description,
                    id: doc.id,
                    createdAt: doc.data()?.createdAt
                });
            });

            console.log('todos', todosList);
            setTodos(todosList)


        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        }
        finally {
            setLoader(false)
        }
    }


    const onTodoSubmitHandler = async () => {
 

        try {
            console.log("attachmentImage", attachmentImage);
            
           
            const storageRef = ref(storage, `/todosImages/${description}.${fileType}`);
            const result = await uploadBytes(storageRef, attachmentImage )
            // const result = await storageRef.put(attachmentImage);
          
            const downloadURL = await getDownloadURL(result.ref)

            const newDoc = {
                description,
                attachmentURL: downloadURL,
                createdAt: new Date()
            }
    
            const docRef = await addDoc(collection(db, "todos"), newDoc);
            console.log("Document written with ID: ", docRef.id);

            setTodos([...todos, { ...newDoc, id: docRef.id }])
        } catch (e) {
            console.error("Error adding document: ", e);
        }



    }


    const todoDeleteHandler = async (item: TodoType) => {
        try {
            // console.log(item.attachmentURL, item.attachmentURL.split('/'));
            dispatch(deleteTodo(item))
            // const desertRef = ref(storage, `todosImages/${item.description}.png`);
            // await deleteObject(desertRef)
            // await deleteDoc(doc(db, "todos", item.id));
            // let filteredTodos = todos.filter((todo: TodoType) => item.id !== todo.id)
            // setTodos(filteredTodos)
        } catch (error) {
            alert(error)
        }
    }


    const todoUpdateHandler = async (item: TodoType) => {
        try {
            await updateDoc(doc(db, "todos", item.id), {
                capital: true
            });
            let updatedTodos = todos.map((todo: TodoType) => {
                console.log('====================================');
                console.log(item.id, todo.id);
                console.log('====================================');
                if (item.id === todo.id) {
                    return {

                        description,
                        createdAt: new Date(),
                        id: todo.id,

                    }
                }
                else {
                    return todo
                }
            })

            console.log('====================================');
            console.log("updatedTodos", updatedTodos);
            console.log('====================================');

            setTodos(updatedTodos)
        } catch (error) {
            alert(error)
        }
    }



    return {
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
        currentUserRequestLoader: auth.currentUserRequestLoader
    }

}
export default useTodos