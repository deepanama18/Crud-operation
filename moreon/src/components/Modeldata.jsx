import React, { useEffect, useState } from 'react'
import axios from "axios";




function Modeldata() {

  const [state, setState] = useState({
    userData: [],
    value: ''
  });



  useEffect(() => {

      axios.get("https://jsonplaceholder.typicode.com/users").then(data => {
      console.log(data.data);
      // setState(data.data);
      setState({ userData: data.data })

    })
      .catch(err => {
        console.log(err);
      })
      
  }, [])


  const handleDelete = (ele) => {
    console.log(ele,"deleted")
    setState({
      userData: state.userData.filter(i => {
        return i !== ele;
      })
  })
  }
  
  const Deleteall = (ele) => {
    setState({
      userData: state.userData.filter(i => {
        return i.index !== ele;
  })})
  }
  
  const handleChange = (event) => {
    console.log(event);
    setState({ value: event.target.value });
    
  }

   return (
<div>
    <center>
         <div>
      
           <input type="text" value={state.value}
             onChange={handleChange}
                placeholder="Search Users"
           />
          <button style={{ margin: "10px" }}
             placeholder="Name"
               onClick={() => Deleteall()} >
                 DeleteAll
           </button>
       </div>
<div>
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>lastname</th>
          <th>Email</th>
          <th>Actions</th> 
        </tr>
      </thead>
      <tbody>
           {
                 state.userData
                  //  .filter((ele, index) => {
                  //  const name = ele.name.includes(state.value)
                  //  const username = ele.username.includes(state.value)
                  //  const email = ele.email.includes(state.value)
                  //  return name || username || email
           // })
                   .map((ele, index) => {
             return(
            <tr key={index}>
                <td>{ele.name}</td>
                <td>{ele.username}</td>
                <td>{ele.email}</td>
                <td>
                   <button style={{ margin: "10px" }}
                     onClick={() => handleDelete(ele)} >
                     Delete
                   </button>
                </td>
                <td>
                  <button>Edit</button>
                </td>
            </tr>
             )})
          
        }
        
      </tbody>
         </table>
       </div>
       </center>
 </div>
 )  
}
 
export default Modeldata;
