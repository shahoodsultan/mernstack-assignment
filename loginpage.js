import React, { useState } from 'react';

import { useNavigate }  from "react-router-dom";

function LoginPage(){
    const[email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const userEmail = 'shahood@gmail.com';
    const userPassword = "password123"; 



const handleLogin = () => {
    if(email==userEmail && password == userPassword){
        navigate('/todo');
    }
    else{
        alert('Invalid Email or Password try ,shahood@gmail.com : pass:password123 ') 
    }
     
};

return(
  
        <div className="auth-container">
          <h2>Login</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </div>
      
 );
}
export default LoginPage;