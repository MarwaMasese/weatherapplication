import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../../api/api';
const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null)
    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then((response) =>{
                options: response.data.map((city)=>{
                    return {
                        value:`${city.latitude} ${city.longitude}`,
                        label:`${city.name}, ${city.countrycode}`
                    }
                })
            } )
            .catch(err => console.error(err));

    }
    return (
        <AsyncPaginate
            placeholder="Search For Cities"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;