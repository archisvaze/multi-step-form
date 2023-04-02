import React from 'react';
import thankyou from '../assets/images/icon-thank-you.svg';

export default function Step5() {
    return (
        <div
            className='card'
            style={{ textAlign: 'center', alignItems: 'center' }}
        >
            <img
                src={thankyou}
                alt='thankyou icon'
                style={{ width: '60px', margin: '40px 0 24px 0' }}
            />
            <p
                className='title'
                style={{ fontWeight: '500' }}
            >
                Thank you!
            </p>
            <p className='sub-title'>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    );
}
