// import library
import './Login.scss';
import { rooms } from '../../constands/RoomMap';
import { useState } from 'react';

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

// code function here
function Login(props) {
    // get props
    const { setUser } = props;

    // delcare state
    const [valueLogin, setValueLogin] = useState(
        {
            id: '',
            name: '',
            numberPhone: '',
            department: 1
        }
    )

    // handle when change value
    var onHandleChange = event => {
        const value = event.target.value;
        const name= event.target.name;

        setValueLogin({
            ...valueLogin,
            [name]: value
        })
    }

    // handle when submit form 
    var onHandleSubmit = event => {
        event.preventDefault();
        setUser({
            ...valueLogin,
            id: createUUID()
        })
    }

    // return ui room
    var listRoom = rooms.map(
        (element, index) => {
            return (
                <option key={index} value={element.id}>{element.title}</option>
            )
        }
    )

    // return ui
    return (
        <div className="login">
            <h2>Cho tôi biết bạn là ai được không?</h2>
            <form action="" method="" onSubmit={onHandleSubmit}>
                <div className='form-group'>
                    <label>
                        <p>Tên</p>
                        <input 
                            className='form-control'
                            name='name'
                            value={valueLogin.name}
                            onChange={onHandleChange}
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
                        >
                        {
                            listRoom
                        }
                        </select>
                    </label>
                </div>
                
                <button type='submit'
                    className='form-submit'
                >Tiếp</button>
            </form>
        </div>
    )
}

export default Login;