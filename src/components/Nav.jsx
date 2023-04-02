import React from 'react';

export default function Nav({ step, setStep }) {
    return (
        <div className='nav-container'>
            <div
                className='nav-circle'
                style={{
                    color: step === 1 ? 'inherit' : 'var(--light-blue)',
                    backgroundColor: step === 1 ? 'var(--light-blue)' : 'inherit',
                }}
            >
                1
            </div>
            <div
                className='nav-circle'
                style={{
                    color: step === 2 ? 'inherit' : 'var(--light-blue)',
                    backgroundColor: step === 2 ? 'var(--light-blue)' : 'inherit',
                }}
            >
                2
            </div>
            <div
                className='nav-circle'
                style={{
                    color: step === 3 ? 'inherit' : 'var(--light-blue)',
                    backgroundColor: step === 3 ? 'var(--light-blue)' : 'inherit',
                }}
            >
                3
            </div>
            <div
                className='nav-circle'
                style={{
                    color: step === 4 ? 'inherit' : 'var(--light-blue)',
                    backgroundColor: step === 4 ? 'var(--light-blue)' : 'inherit',
                }}
            >
                4
            </div>
        </div>
    );
}
