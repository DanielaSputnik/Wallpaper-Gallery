import React from 'react'
import './FullViewSlider.css'

function FullView(props) {
    return (props.trigger) ? (
        <div className='fw-window'>
            <div className='fw-inner' >
                <button className='fw-close-btn'
                    onClick={() => props.setTrigger(false)}>
                </button>
                {props.children}
            </div>
            
        </div>
    ) : '';
}

export default FullView
