import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isAccountBlocked, setIsAccountBlocked] = useState(false);
  const handleLogin = () => {
    if (username === 'veerakumargovindaraj541@gmail.com' && password === 'veera@2003') {
      setFailedAttempts(0);
      setIsAccountBlocked(false);
      alert('Login successful!');
    } else {
      setFailedAttempts(prevAttempts => prevAttempts + 1);
      if (failedAttempts + 1 >= 5) {
        setIsAccountBlocked(true);

        setTimeout(() => {
          setIsAccountBlocked(false);
          setFailedAttempts(0);

        }, 3600000); 
          alert('Your account is blocked please check your email')

      }
     
      alert('Incorrect username or password');
    }
  };
/*const handleLogin=()=>{
  document.getElementById('contact-form').addEventListener
  ('submit', function (event){
    event.preventDefault();
    var data=new FormData(event.target);
    fetch("https://formspree.io/f/mdoqwdeg",{
      method:'POST',
      body:data,

    }).then(response=>{
      if(response.ok){
        alert('success')
      }else{
        alert('error')
      }
    }) ;
     document.getElementById('contact-form').reset();

  });
}*/
  return (
    <>
    <div className='popup'></div>
    <div className='main_container'>
      <div className="login_container">
        <form action="" className='login_form' id='contact-form'>
          <Link to={'/'} className='close_container'>
          <h2 className='close_btn'>X</h2>
          </Link>
            <h1>Login</h1>
            <div className="input_container">
                <input type="email" name='username' placeholder='User Name' id='username' required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                /> 
                 <input type="password" name='password' placeholder='PassWord ' id='password' required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 />
                 <input type="submit" value={'Login'} id='submit' onClick={handleLogin}/> 
                       {isAccountBlocked && <p style={{textAlign:'center', margin:'0px'}}>
                        Your account is blocked. Login to after 1 hour later.</p>    }
                 <p className="text_value">
                    Don't have an account? <a href="signup">Sign Up</a>
                 </p>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login



