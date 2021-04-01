// import library
import './Login.scss';
import { rooms } from '../../constants/RoomMap';
import { useState } from 'react';
import * as Firebase from '../../utils/CallFirebase';
import * as Common from '../../utils/common';


// check numberphone is exist
function isDuplicateNumber(users, numberPhone) {
    let result = false;

    users.forEach(element => {
        if ((element.numberPhone+'').trim() === (numberPhone+'').trim()) result = true;
    });

    return result;
}

// find user from numberphone
function findUser(users, numberPhone) {
    let result = {};

    users.forEach(element => {
        if ((element.numberPhone+'').trim() === (numberPhone+'').trim()) result = {...element};
    });

    return result;
}

// code function here
function Login(props) {
    // get props
    const { setUser, users } = props;

    // delcare state
    const [valueLogin, setValueLogin] = useState(
        {
            id: '',
            name: '',
            numberPhone: '',
            department: 1
        }
    )
    const [recover, setRecover] = useState(false);

    // handle when change value
    const onHandleChange = event => {
        const value = event.target.value;
        const name= event.target.name;

        setValueLogin({
            ...valueLogin,
            [name]: value
        })
    }

    // handle when submit form 
    const onHandleSubmit = event => {
        event.preventDefault();
         
        if (recover&&!isDuplicateNumber(users,valueLogin.numberPhone)){
            alert('Mình không biết số điện thoại này!');
            return setRecover(false);
        }
        if (!recover&&isDuplicateNumber(users,valueLogin.numberPhone)){
            alert('Số điện thoại này quen quá!');
            return  setRecover(true);
        }

        if (recover) {
            return setUser(findUser(users,valueLogin.numberPhone));
        }


        let newId = Common.createUUID();
        let newValueLogin = {
            ...valueLogin,
            id: newId
        };

        Firebase.writeData(newId,newValueLogin)

        setUser(newValueLogin);

    }

    // return ui room
    const listRoom = rooms.map(
        (element, index) => {
            return (
                <option key={index} value={element.id}>{element.title}</option>
            )
        }
    )

    // return ui login 
    const loginUI = () => {
        return (
            <>
                <div className='form-group'>
                    <label>
                        <p>Tên</p>
                        <input 
                            className='form-control'
                            name='name'
                            value={valueLogin.name}
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        <p>Số điện thoại</p>
                        <input 
                            className='form-control'
                            name='numberPhone'
                            value={valueLogin.numberPhone}
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
                <div className='form-group'>
                    <label>
                        <p>Phòng</p>
                        <select
                            className='form-control'
                            name='department'
                            value={valueLogin.department}
                            onChange={onHandleChange}
                            required
                        >
                        {
                            listRoom
                        }
                        </select>
                    </label>
                </div>
            </>
        )
    }

    // return recover login 
    const recoverUI = () => {
        return (
            <>
                <div className='form-group'>
                    <label>
                        <p>Số điện thoại</p>
                        <input 
                            className='form-control'
                            name='numberPhone'
                            value={valueLogin.numberPhone}
                            onChange={onHandleChange}
                            required
                        />
                    </label>
                </div>
            </>
        )
    }

    // change UI mode
    const onUIChange = () => {
        setRecover(!recover);
    }

    // return ui
    return (
        <div className="login">
            <h2>Cho tôi biết bạn là ai được không?</h2>
            <form action="" method="" onSubmit={onHandleSubmit}>
                {
                    recover?
                    recoverUI():
                    loginUI()
                }
                <button type='submit'
                    className='form-submit'
                >Tiếp</button>
            </form>
            <u onClick={onUIChange}>
                {
                    recover?
                    'Chúng mình chưa từng gặp nhau?':
                    'Chúng mình từng gặp nhau?'
                }
            </u>
        </div>
    )
}

export default Login;