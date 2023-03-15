import React from 'react';

export default function Step1(props) {
    
    const setStep1Data = props.setStep1Data;
    const step1Data = props.step1Data;

    return (
        <div>
            <h4>Personal Info</h4>
            <p>Please provide your name, email, address, and phone number.</p>

            <>
                <label htmlFor=''>Name</label>
                <input
                    value={step1Data.name}
                    onChange={(e) => setStep1Data({ ...step1Data, name: e.target.value })}
                    type='text'
                />
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
