import { useEffect, useState } from 'react';
import './App.css';
import Login from './component/login/Login';
import Question from './component/question/Question';
import Status from './component/status/Status';

function getFullDate(date) {
    let result = '';

    result = '' + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();

    return result;
}

function isOrder(orders, id) {
    let result = false;

    orders.forEach(element => {
        let parseDate = new Date(element.date);

        if (element.id.trim() === id && getFullDate(parseDate) === getFullDate(new Date())) {
            result = true;
        }
    });

    return result;
}

function getOrder (orders, id) {
    let result = -1;

    orders.forEach((element,index) => {
        let parseDate = new Date(element.date);

        if (element.id.trim() === id && getFullDate(parseDate) === getFullDate(new Date())) {
            result = index;
        }
    });

    return result;    
}

function App() {
    // declare state 
    const [presentUser, setPresentUser] = useState({
        id: '',
        name: '',
        numberPhone: '',
        department: 1
    });
    const [orders, setOrders] = useState([]);
    
    // load user from local Storage
    useEffect(
        () => {
            let user = JSON.parse(localStorage.getItem('user'))?
                JSON.parse(localStorage.getItem('user')):
                {
                    id: '',
                    name: '',
                    numberPhone: '',
                    department: 1
                };
            
            let orders = JSON.parse(localStorage.getItem('orders'))?
                JSON.parse(localStorage.getItem('orders')):
                [];
            setPresentUser({...user});
            setOrders([...orders]);
        },[]
    )

    
    // handle when complete input user
    const onSetUser = user => {
        setPresentUser({
            ...user
        })

        localStorage.setItem('user',JSON.stringify(user));
    }

    // handle when order lunch
    const onOrder = status => {
        let ordersCopy = [...orders];

        ordersCopy.push({
            id: presentUser.id,
            date: new Date(),
            status: status
        });
        setOrders([...ordersCopy]);
        localStorage.setItem('orders', JSON.stringify(ordersCopy));
    }

    const onEditOrder = status => {
        let ordersCopy = [...orders];
        let index = getOrder(orders,presentUser.id);

        if (index !== -1) {
            ordersCopy[index] = {
                ...ordersCopy[index],
                status: status
            }
        }

        setOrders([...ordersCopy]);
        localStorage.setItem('orders', JSON.stringify(ordersCopy));
    }

    // return component
    const componentsUI = () => {
        if (presentUser.id.trim() === '') {
            return (
                <Login 
                    setUser={onSetUser}
                />
            )
        }

        if (!isOrder(orders,presentUser.id)) {
            return (
                <Question 
                    user={presentUser}
                    order={onOrder}
                />
            )  
        }
        return (
            <Status 
                order={orders[getOrder(orders,presentUser.id)]}
                editOrder={onEditOrder}
            />
        )
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
