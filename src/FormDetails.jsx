import { useState } from "react"


const FormDetails = (props) => {
  
  const [form, setForm] = useState({
    name:"", age: "", height:"",
  })

  const handleChange = (event) => {
    setForm({...form,[event.target.key]: event.target.value})
   console.log(event)
 }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.sleepy(form)
    setForm({name:"", age: "", height:""})

  }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" value={form.name} onChange={handleChange}></input>
        <label htmlFor="age">Age:</label>
        <input id="age" name="age" value={form.age} onChange={handleChange}></input>
        <label htmlFor="height">Height:</label>
        <input id="height" name="height" value={form.height} onChange={handleChange}></input>
        <button type="submit">Submit</button>
      </form>
)}


export default FormDetails