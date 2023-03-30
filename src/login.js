import { useState } from 'react';
import './Login.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Login(){
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [Date,setDate]=useState("");
  const handleSignUp = () => {
    // Handle sign up logic here

  };

  const handleSignIn = () => {
    // Handle sign in logic here
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDatechange = (event)=>{
    setDate(event.target.value)
  }

  return (
    <div className="body-container">
      <div className="container" id="container">
        <div>
          <div className={`form-container ${isSignUp ? 'sign-up-container' : 'sign-in-container'}`}>
            {isSignUp ? (
              <form onSubmit={handleSignUp}>
                <h1>Create Account</h1>
                <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
                <br></br>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />

                <br></br>
                <input placeholder="Date of Birth" type="text" onFocus={(e)=> {
                                                    e.currentTarget.type = "date";
                                                    e.currentTarget.focus();
                                                                      }
                                                    } value={Date} onChange={handleDatechange} />
                <br></br>

                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <br></br>
              
                <button type="submit" className="btn-grad">Sign Up</button>
              </form>
            ) : (
              <form onSubmit={handleSignIn}>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email/Username" value={email} onChange={handleEmailChange} />
                <br></br>
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <a href="#">Forgot your password?</a>
                <button type="submit" className="btn-grad">Sign In</button>
              </form>
            )}
          </div>
        </div>

        <div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>Start from where you left</p>
                <button className="btn-grad" onClick={() => setIsSignUp(false)}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Buddy!</h1>
                <p>Join Us on a new adventure</p>
                <button className="btn-grad" onClick={() => setIsSignUp(true)}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;