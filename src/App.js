import { useEffect, useState } from 'react';
import './App.css';
import  Login from './component/login/Login';

function App() {
    // declare state 
    const [presentUser, setPresentUser] = useState({
        id: '',
        name: '',
        numberPhone: '',
        department: 1
    });
    
    // load user from local Storage
    useEffect(
        () => {
            let data = JSON.parse(localStorage.getItem('user'))?
                JSON.parse(localStorage.getItem('user')):
                {
                    id: '',
                    name: '',
                    numberPhone: '',
                    department: 1
                };
            setPresentUser({...data})
        },[]
    )

    // handle when complete input user
    var onSetUser = user => {
        setPresentUser({
            ...user
        })

        localStorage.setItem('user',JSON.stringify(user));
    }

    // return component
    var componentsUI = () => {
        if (presentUser.id.trim() === '') {
            
            return (
                <Login 
                    setUser={onSetUser}
                />
            )
        }else {
            return (
                <div></div>
            )     
        }
    }

    return (
        <>
        {
            componentsUI()
        }
        </>
    );
}

export default App;
