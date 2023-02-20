import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../store/authSlice";

function FetchCurrentUser() {
    const dispatch = useDispatch()
    useEffect((()=>{
      dispatch(fetchCurrentUser())
    }),[])


    return <div></div>
}

export default FetchCurrentUser