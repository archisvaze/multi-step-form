import React from 'react';

export default function Step1() {
    return (
        <div>
            <h4>Personal Info</h4>
            <p>Please provide your name, email, address, and phone number.</p>

            <>
                <label htmlFor=''>Name</label>
                <input type='text' />
            </>
            <>
                <label htmlFor=''>Email Address</label>
                <input type='email' />
            </>
            <>
                <label htmlFor=''>Phone Number</label>
                <input type='number' />
            </>
        </div>
    );
}
