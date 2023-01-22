import useSignUp from "../customHooks/useSignUp"


export default function SignUp() {
  const { 
    userName,
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setUserName,
    setPassword,
    onSubmitHandler } = useSignUp();

  return (
    <div>
      <h1>
        SignUp form
      </h1>

      <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter your name" />
      <br />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
      <br />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
      <br />
      {loader ? <button >Loading...</button> :
        <button onClick={onSubmitHandler} >SignUp</button>}
    </div>
  )
}