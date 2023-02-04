import { useSelector } from "react-redux";

function Header() {
   const data = useSelector((store)=> store.auth.isLoggedIn)
   console.log("header component data", data);

   const data2 = useSelector((store)=> store.todoSlice.error)
   console.log("header component data 2", data);
   
  return <div>Header</div>;
}

export default Header;
