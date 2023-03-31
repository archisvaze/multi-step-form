import { useState } from 'react';
import Nav from './components/Nav';
import bg_mobile from './assets/images/bg-sidebar-mobile.svg';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

function App() {
    const [step, setStep] = useState(1);

    const [data, setData] = useState({});

    return (
        <div className='app'>
            <div className='desktop-container'>
                <Nav />

                <img
                    className='bg_mobile'
                    src={bg_mobile}
                    alt='background'
                />
                <div className='mobile-container'>
                    {step === 1 && (
                        <Step1
                            data={data}
                            setData={setData}
                        />
                    )}
                    {/* {step === 2 && <Step2 />} */}
                    {/* {step === 3 && <Step3 />} */}
                    {/* {step === 4 && <Step4 />} */}
                    {/* {step === 5 && <Step5 />} */}
                </div>

                {step < 5 && (
                    <div className='controls'>
                        {step > 1 && (
                            <button
                                className='back-button'
                                onClick={() => {
                                    setStep(step - 1);
                                }}
                            >
                                Go back
                            </button>
                        )}
                        {step < 4 && (
                            <button
                                className='next-button'
                                onClick={() => {
                                    setStep(step + 1);
                                }}
                            >
                                Next Step
                            </button>
                        )}
                        {step === 4 && (
                            <button
                                className='confirm-button'
                                onClick={() => {
                                    setStep(step + 1);
                                }}
                            >
                                Confirm
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
