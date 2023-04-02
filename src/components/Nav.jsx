import React from 'react';

export default function Nav({ step, setStep }) {
    return (
        <div className='nav-container'>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div
                    className='nav-circle'
                    style={{
                        color: step === 1 ? 'inherit' : 'var(--light-blue)',
                        backgroundColor: step === 1 ? 'var(--light-blue)' : 'inherit',
                    }}
                >
                    1
                </div>
                <div className='desktop-nav-info'>
                    <p style={{ color: 'var(--cool-gray)', fontSize: '11px' }}>STEP 1</p>
                    <p style={{ color: 'white', fontSize: '12px', letterSpacing: '1px', fontWeight: '500' }}>YOUR INFO</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div
                    className='nav-circle'
                    style={{
                        color: step === 2 ? 'inherit' : 'var(--light-blue)',
                        backgroundColor: step === 2 ? 'var(--light-blue)' : 'inherit',
                    }}
                >
                    2
                </div>

                <div className='desktop-nav-info'>
                    <p style={{ color: 'var(--cool-gray)', fontSize: '11px' }}>STEP 2</p>
                    <p style={{ color: 'white', fontSize: '12px', letterSpacing: '1px', fontWeight: '500' }}>SELECT PLAN</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div
                    className='nav-circle'
                    style={{
                        color: step === 3 ? 'inherit' : 'var(--light-blue)',
                        backgroundColor: step === 3 ? 'var(--light-blue)' : 'inherit',
                    }}
                >
                    3
                </div>
                <div className='desktop-nav-info'>
                    <p style={{ color: 'var(--cool-gray)', fontSize: '11px' }}>STEP 3</p>
                    <p style={{ color: 'white', fontSize: '12px', letterSpacing: '1px', fontWeight: '500' }}>ADD-ONS</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <div
                    className='nav-circle'
                    style={{
                        color: step === 4 ? 'inherit' : 'var(--light-blue)',
                        backgroundColor: step === 4 ? 'var(--light-blue)' : 'inherit',
                    }}
                >
                    4
                </div>
                <div className='desktop-nav-info'>
                    <p style={{ color: 'var(--cool-gray)', fontSize: '11px' }}>STEP 4</p>
                    <p style={{ color: 'white', fontSize: '12px', letterSpacing: '1px', fontWeight: '500' }}>SUMMARY</p>
                </div>
            </div>
        </div>
    );
}
