import React from 'react';

export default function Step1({ data, setData }) {
    return (
        <div className='card'>
            <h4 className='title'>Personal Info</h4>
            <p className='sub-title'>Please provide your name, email, address, and phone number.</p>

            <>
                <label
                    htmlFor='text'
                    className='label'
                >
                    Name
                </label>
                <input
                    className='input'
                    value={data.step1?.name}
                    onChange={(e) => setData({ ...data, step1: { name: e.target.value } })}
                    type='text'
                />
            </>
            <>
                <label
                    htmlFor='email'
                    className='label'
                >
                    Email Address
                </label>
                <input
                    className='input'
                    type='email'
                    value={data.step1?.email}
                    onChange={(e) => setData({ ...data, step1: { email: e.target.value } })}
                />
            </>
            <>
                <label
                    htmlFor='number'
                    className='label'
                >
                    Phone Number
                </label>
                <input
                    className='input'
                    type='number'
                    value={data.step1?.phone}
                    onChange={(e) => setData({ ...data, step1: { phone: e.target.value } })}
                />
            </>
        </div>
    );
}
