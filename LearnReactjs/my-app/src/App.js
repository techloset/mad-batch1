import Home from "./pages/home";


function App() {
  const getDataFromHomeChild = (data )=>{
    console.log("getDataFromHomeChild", data);
  }
  return (
    <div className="App">
    <Home data="any data" getDataFromHomeChild={getDataFromHomeChild}/>
    </div>
  );
}

export default App;
