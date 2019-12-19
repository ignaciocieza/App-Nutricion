import React from 'react';


const Notification = props => {

    return (
        <div className='ui dimmer modals visible active'>
            <div className='ui standard modal visible active'>
                <div className='header'>{props.title}</div>
                <div className='actions'>
                    {props.actions}
                </div>
            </div>
        </div>
    );
};

export default Notification;