import React, { useEffect, useState } from 'react';
import Toggle from 'react-styled-toggle';
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg';
import pro from '../assets/images/icon-pro.svg';

export default function Step2({ data, setData }) {
    const [timeFrame, setTimeFrame] = useState(data.step2?.timeFrame);

    useEffect(() => {
        setData({ ...data, step2: { ...data.step2, timeFrame: timeFrame } });
    }, [timeFrame]);

    return (
        <div className='card'>
            <h4 className='title'>Select your plan</h4>
            <p className='sub-title'>You have the option of monthly or yearly billing.</p>

            <div
                tabIndex={0}
                className='selector'
                onClick={() => {
                    setData({ ...data, step2: { ...data.step2, plan: 'Arcade', price: 9 } });
                }}
                style={{
                    background: data.step2?.plan === 'Arcade' ? 'var(--magnolia)' : 'transparent',
                    border: data.step2?.plan === 'Arcade' ? '1px solid var(--marine-blue)' : '1px solid var(--light-gray)',
                }}
            >
                <div className='selector-img'>
                    <img
                        style={{ width: '40px' }}
                        src={arcade}
                        alt='arcade icon image'
                    />
                </div>
                <div className='selector-info'>
                    <p className='selector-title'> Arcade</p>
                    {!timeFrame && <p style={{ color: 'var(--cool-gray)', fontSize: '14px' }}>$9/mo</p>}
                    {timeFrame && <p style={{ color: 'var(--cool-gray)', fontSize: '14px' }}>$90/yr</p>}
                    {timeFrame && <p style={{ color: 'var(--marine-blue)', fontSize: '14px' }}>2 months free</p>}
                </div>
            </div>

            <div
                tabIndex={0}
                className='selector'
                onClick={() => {
                    setData({ ...data, step2: { ...data.step2, plan: 'Advanced', price: 12 } });
                }}
                style={{
                    background: data.step2?.plan === 'Advanced' ? 'var(--magnolia)' : 'white',
                    border: data.step2?.plan === 'Advanced' ? '1px solid var(--marine-blue)' : '1px solid var(--light-gray)',
                }}
            >
                <div className='selector-img'>
                    <img
                        style={{ width: '40px' }}
                        src={advanced}
                        alt='arcade icon image'
                    />
                </div>
                <div className='selector-info'>
                    <p className='selector-title'>Advanced</p>
                    {!timeFrame && <p style={{ color: 'var(--cool-gray)', fontSize: '14px' }}>$12/mo</p>}
                    {timeFrame && <p style={{ color: 'var(--cool-gray)', fontSize: '14px' }}>$120/yr</p>}
                    {timeFrame && <p style={{ color: 'var(--marine-blue)', fontSize: '14px' }}>2 months free</p>}
                </div>
            </div>

            <div
                tabIndex={0}
                className='selector'
                onClick={() => {
                    setData({ ...data, step2: { ...data.step2, plan: 'Pro', price: 15 } });
                }}
                style={{
                    background: data.step2?.plan === 'Pro' ? 'var(--magnolia)' : 'white',
                    border: data.step2?.plan === 'Pro' ? '1px solid var(--marine-blue)' : '1px solid var(--light-gray)',
                }}
            >
                <div className='selector-img'>
                    <img
                        style={{ width: '40px' }}
                        src={pro}
                        alt='arcade icon image'
                    />
                </div>
                <div className='selector-info'>
                    <p className='selector-title'>Pro</p>
                    {!timeFrame && <p style={{ color: 'var(--cool-gray)', fontSize: '14px' }}>$15/mo</p>}
                    {timeFrame && <p style={{ color: 'var(--cool-gray)', fontSize: '14px' }}>$150/yr</p>}
                    {timeFrame && <p style={{ color: 'var(--marine-blue)', fontSize: '14px' }}>2 months free</p>}
                </div>
            </div>

            <div className='time-frame-container'>
                <p style={{ color: timeFrame ? 'var(--marine-blue)' : 'var(--cool-gray)' }}>Monthly</p>
                <Toggle
                    onChange={() => {
                        setTimeFrame(!timeFrame);
                    }}
                    checked={timeFrame}
                    height={20}
                    width={40}
                    sliderHeight={12}
                    sliderWidth={12}
                    translate={20}
                    backgroundColorChecked='#02295a'
                    backgroundColorUnchecked='#02295a'
                />
                <p style={{ color: !timeFrame ? 'var(--marine-blue)' : 'var(--cool-gray)' }}>Yearly</p>
            </div>
        </div>
    );
}
