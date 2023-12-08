import React from 'react'
import { useState } from 'react'

const Signup = () => {
  const [user, setUser] = useState({
    name:"",email:"",password:""
  })
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, password} = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, password
      })


    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration")
    }
    else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
    }


  }


  return (
    <>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-content'>
            <div className='signup-form'>
              <h2 className='form-title'>
                Sign Up
              </h2>
              <form method="POST" className='register-form' id='register-form'>
                <div className='form-group'>
                  <label htmlFor='name'>
                   <i class="zmdi zmdi-account"></i>

                  </label>
                  <input type='text' name='name' id='name' autoComplete='off'
                    value={user.name}
                    onChange={handleInputs}
                    placeholder='Your Name'
                  ></input>

                </div>

                <div className='form-group'>
                  <label htmlFor='email'>
                   <i class="zmdi zmdi-email"></i>

                  </label>
                  <input type='email' name='email' id='email' autoComplete='off'
                    value={user.email}
                    onChange={handleInputs}
                    placeholder='Your email'
                  ></input>

                </div>


               

                <div className='form-group'>
                  <label htmlFor='Password'>
                   <i class="zmdi zmdi-lock"></i>

                  </label>
                  <input type='password' name='password' id='password' autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}
                    placeholder='Your password'
                  ></input>

                </div>
                 
                <div className='form-group form-button'>
                  <input type="submit" name="signup" id="signup" className='form-submit' value="register" onClick={postData}>
                    
                  </input>

                </div>
              </form>
             </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Signup
