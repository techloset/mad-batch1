import useLogin from "../customHooks/useLogin";


export default function Login() {
    const { 
      email,
      password,
      loader,
      setLoader,
      setEmail,
      setPassword,
      onSubmitHandler } = useLogin();
  
    return (
      <div>
        <h1>
          Login form
        </h1>
  
        
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <br />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <br />
        {loader ? <button >Loading...</button> :
          <button onClick={onSubmitHandler} >Login</button>}
      </div>
    )
  }