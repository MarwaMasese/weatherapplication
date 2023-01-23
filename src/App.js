import './App.css';
import Search from './components/search/search';
import currentWeather from './components/search/currentWeather/currentWeather';
function App() {
  const handleOnSearchChange=(searchData) =>{
    console.log(searchData)
  }
  return (
  <div className= "Container">
    <Search onSearchChange={handleOnSearchChange}/>
    <currentWeather/>
  </div>
  )
}
  
  

export default App;
