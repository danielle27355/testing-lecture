import React, {useState, useEffect} from 'react';
import { useFormInput } from '../../Hooks/Hooks';
import axios from 'axios';
import './_Header.scss';

 function Header() {
    // Initialize user & set it to an empty object
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    let username = useFormInput('');
    let password = useFormInput('');

    // Login
    const login = () => {
        // axios.post('/user/login', { username: username.value, password: password.value }).then(user => {
        //     setUser(user.data);
        // }).catch(err => setMessage('Invalid username or password'))
    }


  return (
    <header>
        {user.username ?
            <h1>{user.username}</h1> : 
                <React.Fragment>
                    <div>
                        <input {...username} />
                        <input type="password" {...password} />
                        <button onClick={() => login()}>Log in</button>
                    </div>
                    {message && <p>{message}</p>}
                </React.Fragment>
        }
    </header>
  )
}

export default Header;