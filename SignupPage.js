import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function SignupPage(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = ()=> {
        navigate('/');
    }
    return (
        <div className="auth-container">
          <h2>Signup</h2>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleSignup}>Signup</button>
        </div>
      );

}

export default SignupPage;