import React from 'react'
import iconThank from '../Images/icon-thank-you.svg'

export const Finish = () => {


    return (
        <div className='thank-you h-100 d-flex justify-content-center align-items-center '>
            <div className='text-center'>
                <img src={iconThank} alt="" className='mb-4'/>
                <h2>Thank you!</h2>
                <p className='text-black-50'>
                    Thanks for confirming your subscription! We hope you have fun 
                    using our platform. If you ever need support, please feel free 
                    to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}