// import library
import './Login.scss';
import { rooms } from '../../constands/RoomMap';
import { useState } from 'react';

// code function here
function Login() {
    // delcare state
    const [valueLogin, setValueLogin] = useState(
        {
            name: '',
            numberPhone: '',
            department: 1
        }
    )

    // handle when change value
    

    // handle when submit form 
    var onHandleSubmit = event => {
        event.preventDefault();
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