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
    const { user, order } = props;


    // return ui
    return (
        <div className="question">
            <div className='question__head'>
                <img src={bot} alt='bot' />
                <h2>Xin chào, {getName(user.name)}</h2>
            </div>
            <div className='question__body'>
                <p>Bạn có muốn đặt cơm ngày mai không?</p>
                <div className='question__body__anwser'>
                    <button type='button'
                        className='question__body__anwser__btn question__body__anwser__btn--success'
                        onClick={
                            () => {
                                order(1)
                            }
                        }
                    >
                        Tất nhiên là có rồi!
                    </button>

                    <button type='button'
                        className='question__body__anwser__btn question__body__anwser__btn--danger'
                        onClick={
                            () => {
                                order(-1)
                            }
                        }
                    >
                        Mai mình đem theo cơm rồi!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Question;