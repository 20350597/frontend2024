import WeatherCard from "./components/WeatherCard"
const App = () => {

  return(
    <div className="container">
      <h1>Wheater App</h1>
      <hr />
      <div className="row">
        <div className="col">
              <WeatherCard/>            
        </div>
      </div>
    </div>
  )
}


export default App