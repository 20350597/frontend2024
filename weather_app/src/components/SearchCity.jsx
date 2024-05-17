import { useForm } from "../Hooks/useForm"
const SearchCity = ({cities, setCities}) => {
  const {values, handleInputChange, reset} = useForm({
    city: ''
  })

  const handleSearchCity = (e) => {
    const newCites = [...cities, values.city]
    setCities(newCities)
    reset()
  }

  return (
    <div className="input-group">
        <span className="input-group-text">
            City
        </span>
        <input 
        id="city"
        name="city"
        type="text" 
        onChange = {handleInputChange} 
        value={values.city}
        /> 
        <button 
          type="button" 
          onClick={handleSearchCity}
          className="btn btn-primary"
          >
            Search
        </button>
    </div>

  )
}

export default SearchCity