import React,{useState} from 'react'

function Crud(props) {

  const [state, setstate] = useState({
    name: "",
    email: "",
    pass:"",
  })

  const handlechange = (e) => {
  setstate({...state,[e.target.name]:e.target.value})
  }

  const { name, email, pass } = state;
  
  const handlesubmit = (e) => {
    if (name === '' || email === '' || pass === '') {
      alert("enter all details")
    }
    e.preventDefault()
    console.log(state)
    props.history.push('./Modeldata')
  }

  return (
    <div>
      <center>
        <form onSubmit={handlesubmit}>
          <div>
            <input type="Name" placeholder="Name" name="name"  onChange={handlechange} />
            <input type="Email" placeholder="Email address" name="email" onChange={handlechange} />
            <input type="pass" placeholder="password" name="pass" onChange={handlechange} />
            <input type="submit" />
            
          </div>
        </form>
      </center>
    </div>
  )
}

export default Crud


