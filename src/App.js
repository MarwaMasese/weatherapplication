import './App.css';
import CurrentWeather from './components/CurrentWeather/Currentweather';
import Search from './components/search/search';
function App() {
  const handleOnSearchChange=(searchData) =>{
    console.log(searchData)
  }
  return (
  <div className= "Container">
    <Search onSearchChange={handleOnSearchChange}/>
    <CurrentWeather/>
  </div>
  )
}
  
  

export default App;
