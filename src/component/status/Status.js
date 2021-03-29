// import library, image
import './Status.scss';

// code function here
function Status(props) {
    // get props
    const { order, editOrder } = props;

    // handle when change order
    var onOrder = () => {
        let confirm = window.confirm('Bạn xác nhận lại giúp mình nhé?');
        
        if (confirm) {
            editOrder(1);
        }
    }

    // handle when change order
    var onCancelOrder = () => {
        let confirm = window.confirm('Bạn xác nhận lại giúp mình nhé?');
        
        if (confirm) {
            editOrder(-1);
        }
    }

    // return ui
    return (
        <div className="status">
            <div className='status__head'>
            {
                order.status === -1 ?
                <i 
                    className="fa fa-ban status__head__faild" 
                    aria-hidden="true"
                ></i>:
                <i 
                    className="fa fa-check-circle status__head__done" 
                    aria-hidden="true"
                ></i>   
                
            }
            </div>
            <div className='status__body'>
                <p>
                {
                    order.status === -1 ?
                    'Tiếc quá! Ngày mai bạn không nhận được vé cơm!':
                    'Chúc mừng! Ngày mai bạn sẽ nhận được vé cơm nha!'
                }
                </p>
                <div className='status__body__anwser'>
                    
                    {
                        order.status === -1 ?
                        <u 
                            onClick={onOrder}
                        >Bạn có muốn đặt vé?</u>:
                        <u
                            onClick={onCancelOrder}
                        >Bạn có muốn hủy vé?</u>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Status;