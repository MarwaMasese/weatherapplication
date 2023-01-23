import './current-weather.css'
const currentWeather = () => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className='city'> Belgrade</p>
                    <p className='weather-description'>Sunny</p>
                    <img alt="weather" className='weather-icon' src='img/sunny.jpg' />
                </div>
            </div>  

            <div className= "bottom">
                <p className= 'temperature'>
                    
                </p>
            </div> 
        </div>
    );
}

export default currentWeather;