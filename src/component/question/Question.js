// import library, image
import './Question.scss';
import bot from './bot.png';

// get name from fullname
function getName(fullname) {
    let result = '';
    const fullnameCut = fullname.split(' ');
    result = fullnameCut[fullnameCut.length-1];

    return result;
}


// code function here
function Question(props) {
    // get props
    const {user, order, isOrder, onHandleChangeOrder} = props;

    // handle when order
    var onOrder = () => {
        let confirm = window.confirm('Bạn xác nhận lại giúp mình nhé?');
        
        if (confirm) {
            order(1);
            onHandleChangeOrder()
        }
    }

    // handle when change order
    var onCancelOrder = () => {
        let confirm = window.confirm('Bạn xác nhận lại giúp mình nhé?');
        
        if (confirm) {
            order(-1);
            onHandleChangeOrder()
        }
    }

    // return ui
    return (
        <div className="question">
            <div className='question__head'>
                <img src={bot} alt='bot' />
                <h2>Xin chào, {getName(user.name)}</h2>
            </div>
            <div className='question__body'>
                <p>Mình giúp được gì cho bạn?</p>
                <div className='question__body__answer'>
                    <button type='button'
                        className='question__body__answer__btn'
                    >
                        Chia sẻ vé cơm
                    </button>

                    <button type='button'
                        className='question__body__answer__btn'
                    >
                        Nhận vé cơm
                    </button>

                    {
                        isOrder?
                        <button type='button'
                            className='question__body__answer__btn question__body__answer__btn__danger'
                            onClick={onCancelOrder}
                        >
                            Huỷ vé cơm
                        </button>:
                        <button type='button'
                            className='question__body__answer__btn'
                            onClick={onOrder}
                        >
                            Đặt vé cơm
                        </button>
                        
                    }

                    <button type='button'
                        className='question__body__answer__btn'
                    >
                        Xem số lượng
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Question;