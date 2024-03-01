import React, { useState } from 'react'

function Notification() {
    const [show, setShow] = useState(true);
    const text = "This is a notification"
    const handleClose = () => {
        setShow(prev => !prev);
    }
    return (
        <div className={`${show ? "block" : "hidden"} bg-[#88AB8E] py-3 px-5`} >
            <div className='flex justify-between items-center'>
                <span className='text-[#F2F1EB]'>{text}</span>
                <i className='bx bx-x text-4xl cursor-pointer text-[#F2F1EB]' onClick={handleClose}></i>
            </div>
        </div>
    )
}

export default Notification