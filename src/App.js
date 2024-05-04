import './App.css';
import { useState } from 'react';
import { validateEmail } from './utils';


const PasswordErrorMessage = () => {
  return (
    <p className='fieldError'>
      Password should be atleast 8 characters
    </p>
  )
}


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value : "",
    isTouched: false
  });
  const [role, setRole] = useState("role"); 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Acoount created");
    clearForm();
  }
  
  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >=8 &&
      role !=="role"
    );
  }
  
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value:"",
      isTouched: false
    });
    setRole("Role");
  }
  return (
    <div className='App'>
      <div className='form-center'>
        
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
        <h2>Sign UP</h2>
      <div className='form'>
        <label>First Name : </label>
        <input 
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value)}}
          placeholder='First Name'
        />
        <sup>*</sup>
      </div>
      <div className='form'>
        <br></br>
        <label>Last Name : </label>
        <input
          value={lastName}
          onChange={(e) => {setLastName(e.target.value)}}
          placeholder='Last Name'
        />
        <sup>*</sup>
      </div>
      <div className='form'>
      <br></br>
        <label>Email Address : </label>
        <input
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder='Email Address'
        />
        <sup>*</sup>
      </div>
      <div className='form'>
      <br></br>
        <label>Password : </label>
        <input
          value={password.value}
          type='password'
          onChange={(e) => {setPassword({...password, value: e.target.value})}}
          placeholder='password'
          onBlur={() => {
            setPassword({...password, isTouched:true});
          }}
        />
        {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
        <sup>*</sup>
      </div>
      <div className='form'>
      <br></br>
        <label>Role : </label>
        <select value={role} onChange={(e) => {setRole(e.target.value)}}>
          <option value="doctor">Doctor</option>
          <option value="teacher">Teacher</option>
          <option value="chef">Chef</option>
        </select>
        <sup>*</sup>
      </div>
      <br></br>
      <button type='submit' disabled={!getIsFormValid()} >CREATE ACCOUNT</button>
    
        </fieldset>
      </form>
    </div>
      
  );
}

export default App;
