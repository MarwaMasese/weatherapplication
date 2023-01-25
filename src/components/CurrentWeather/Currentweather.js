import './CurrentWeather.css'
/**
 * It returns a div with a class of weather, which contains a div with a class of top, which contains a
 * div, which contains a p with a class of city and a p with a class of weather-description, which
 * contains a div with a class of bottom, which contains a p with a class of temperature and a div with
 * a class of details, which contains a div with a class of parameter-row, which contains a span with a
 * class of parameter-label and a span with a class of parameter-value
 * @returns A React component.
 */
const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'> Belgrade</p>
                    <p className='weather-description'> Sunny </p></div>
                <img alt='Sunny Image' className='weather-icon' src='img/sunny.jpg'></img>
            </div>
            <div className="bottom">
                <p className='temperature'> 18°C</p>
                <div className="details">
                    <div className='parameter-row'>
                        <span className="parameter-label"> Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className="parameter-label"> Feels Like</span>
                        <span className="parameter-value"> 22°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className="parameter-label"> Wind</span>
                        <span className="parameter-value"> 2 m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className="parameter-label"> Humidity</span>
                        <span className="parameter-value"> 15 %</span>
                    </div>
                    <div className='parameter-row'>
                        <span className="parameter-label"> Pressure</span>
                        <span className="parameter-value"> 22°C</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;