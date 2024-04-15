import { useForm } from "./Hooks/useForm"

function App() {

  const [inputsForm, handleInputChange, formReset] = useForm({
    username: "",
    password: "",
    button: "",
    checkbox: false,
    color: "#000000",
    date: "",
    datetimeLocal: "",
    email: "",
    file: "",
    image: "",
    month: "",
    number: "",
    radio: "",
    range: "",
    search: "",
    tel: "",
    text: "",
    time: "",
    url: "",
    week: "",
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Nombre de usuario:", inputsForm.username)
    console.log("Contraseña:", inputsForm.password)
    console.log("Button:", inputsForm.button)
    console.log("Checkbox:", inputsForm.checkbox)
    console.log("Color:", inputsForm.color)
    console.log("Date:", inputsForm.date)
    console.log("Datetime Local:", inputsForm.datetimeLocal)
    console.log("Email:", inputsForm.email)
    console.log("File:", inputsForm.file)
    console.log("Image:", inputsForm.image)
    console.log("Month:", inputsForm.month)
    console.log("Number:", inputsForm.number)
    console.log("Radio:", inputsForm.radio)
    console.log("Range:", inputsForm.range)
    console.log("Search:", inputsForm.search)
    console.log("Tel:", inputsForm.tel)
    console.log("Text:", inputsForm.text)
    console.log("Time:", inputsForm.time)
    console.log("URL:", inputsForm.url)
    console.log("Week:", inputsForm.week)
    formReset()

  }

  return (
    <div>
      <h1>Inputs</h1>
      <hr />
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
          id="username"
          type="text"
          name="username"
          value={inputsForm.username}
          onChange={(event) => handleInputChange(event) }
          /> 
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
          id="password" 
          type="password"
          name="password"
          value={inputsForm.password}
          onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="button">Button</label>
          <input 
            id="button"
            type="button"
            name="button"
            value={inputsForm.button}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="checkbox">Checkbox</label>
          <input 
            id="checkbox"
            type="checkbox"
            name="checkbox"
            checked={inputsForm.checkbox}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input 
            id="color"
            type="color"
            name="color"
            value={inputsForm.color}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input 
            id="date"
            type="date"
            name="date"
            value={inputsForm.date}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="datetime-local">Datetime Local</label>
          <input 
            id="datetime-local"
            type="datetime-local"
            name="datetimeLocal"
            value={inputsForm.datetimeLocal}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            name="email"
            value={inputsForm.email}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="file">File</label>
          <input 
            id="file"
            type="file"
            name="file"
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input 
            id="image"
            type="image"
            name="image"
            src="https://c4.wallpaperflare.com/wallpaper/962/375/661/anime-anime-girls-waifu-tan-maid-hd-wallpaper-preview.jpg"
            alt="placeholder"
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="month">Month</label>
          <input 
            id="month"
            type="month"
            name="month"
            value={inputsForm.month}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="number">Number</label>
          <input 
            id="number"
            type="number"
            name="number"
            value={inputsForm.number}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="radio">Radio</label>
          <input 
            id="radio"
            type="radio"
            name="radio"
            value="option1"
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="range">Range</label>
          <input 
            id="range"
            type="range"
            name="range"
            min="0"
            max="100"
            value={inputsForm.range}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="reset">Reset</label>
          <input 
            id="reset"
            type="reset"
            name="reset"
            value="Reset"
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="search">Search</label>
          <input 
            id="search"
            type="search"
            name="search"
            value={inputsForm.search}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="tel">Tel</label>
          <input 
            id="tel"
            type="tel"
            name="tel"
            value={inputsForm.tel}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="text">Text</label>
          <input 
            id="text"
            type="text"
            name="text"
            value={inputsForm.text}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <input 
            id="time"
            type="time"
            name="time"
            value={inputsForm.time}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="url">URL</label>
          <input 
            id="url"
            type="url"
            name="url"
            value={inputsForm.url}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <div>
          <label htmlFor="week">Week</label>
          <input 
            id="week"
            type="week"
            name="week"
            value={inputsForm.week}
            onChange={(event)=>handleInputChange(event)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default App
