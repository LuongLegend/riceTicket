import { useEffect, useState } from 'react';
import './App.css';
import Login from './component/login/Login';
import Question from './component/question/Question';
import * as Firebase from './utils/CallFirebase';

// create UUID
function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    
    var uuid = s.join("");
    return uuid;
}

function getFullDate(date) {
    let result = '';

    result = '' + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();

    return result;
}


function isExistOrder(orders, id) {
    let result = false;

    orders.forEach(element => {
        let parseDate = new Date(element.date);

        if (element.status===1&&element.idUser === id && getFullDate(parseDate) === getFullDate(new Date())) {
            result = true;
        }
    });

    return result;    
}


function getOrder (orders, id) {
    let result = -1;

    orders.forEach((element,index) => {
        let parseDate = new Date(element.date);

        if (element.idUser === id && getFullDate(parseDate) === getFullDate(new Date())) {
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
    const [users, setUsers] = useState([]);
    const [isOrder, setIsOrder] = useState(false); 

    // load user from local Storage
    useEffect(
        () => {
            // get user present
                let user = JSON.parse(localStorage.getItem('user'))?
                JSON.parse(localStorage.getItem('user')):
                {
                    id: '',
                    name: '',
                    numberPhone: '',
                    department: 1
                };
                setPresentUser({...user});

                // get all user
                Firebase.readUsers().then(snapshot => {
                    let result = []
                    if (snapshot.exists()) {
                        snapshot.forEach(element => {
                            result.push(
                                {
                                    id: element.key,
                                    name: element.val().name,
                                    numberPhone: element.val().numberPhone,
                                    department: element.val().department
                                }
                            )
                        })
                        setUsers([...result]);
                    }
                    else {
                      console.log("No data available");
                    }
                  }
                ).catch(function(error) {
                    console.error(error);
                    }
                );

                // get all order
                Firebase.readOrders().then(snapshot => {
                    let result = []
                    if (snapshot.exists()) {
                        snapshot.forEach(element => {
                            result.push(
                                {
                                    idOrder: element.key,
                                    idUser: element.val().idUser,
                                    date: new Date(JSON.parse(element.val().date)),
                                    status: element.val().status
                                }
                            )
                        })
                        setOrders([...result]);
                    }
                    else {
                      console.log("No data available");
                    }
                  }
                ).catch(function(error) {
                    console.error(error);
                    }
                );
        },[]
    )

    // load status order
    useEffect(
        () => {
            // change isOrder
            if(isExistOrder(orders,presentUser.id)) {
                setIsOrder(true);
            }
            // eslint-disable-next-line
        },[orders]
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
        let index = getOrder(orders,presentUser.id);

        console.log(index);

        if (index===-1) {
            let newOrder = {
                idOrder: createUUID(),
                idUser: presentUser.id,
                date: new Date(),
                status: status
            }
            ordersCopy.push(newOrder);

            Firebase.writeOrders(newOrder)
        }else{
            
            let newOrder = {
                ...ordersCopy[index],
                status: status
            };
            ordersCopy[index] =  newOrder;

            Firebase.writeOrders(newOrder);
        }

        setOrders([...ordersCopy]);
    }

    // change order
    var onHandleChangeOrder = () => {
        setIsOrder(!isOrder);
    }

    // return component
    const componentsUI = () => {
        if (presentUser.id.trim() === '') {
            return (
                <Login 
                    setUser={onSetUser}
                    users={users}
                />
            )
        }


        return (
            <Question 
                user={presentUser}
                order={onOrder}
                isOrder={isOrder}
                onHandleChangeOrder={onHandleChangeOrder}
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
