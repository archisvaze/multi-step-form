import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import bg_mobile from './assets/images/bg-sidebar-mobile.svg';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';

function App() {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({});

    const plans = {
        Arcade: 9,
        Advanced: 12,
        Pro: 15,
    };
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
                    {step === 2 && (
                        <Step2
                            data={data}
                            setData={setData}
                        />
                    )}
                    {step === 3 && (
                        <Step3
                            data={data}
                            setData={setData}
                        />
                    )}
                    {step === 4 && (
                        <Step4
                            data={data}
                            setData={setData}
                            setStep={setStep}
                        />
                    )}
                    {step === 5 && <Step5 />}
                </div>

                {step < 5 && (
                    <div className='controls'>
                        <button
                            style={{ visibility: step < 2 ? 'hidden' : 'visible' }}
                            className='back-button'
                            onClick={() => {
                                setStep(step - 1);
                            }}
                        >
                            Go back
                        </button>

                        {step < 4 && (
                            <button
                                className='next-button'
                                onClick={() => {
                                    setStep(step + 1);
                                }}
                                disabled={
                                    (step === 1 && (!data.step1?.name || !data.step1?.email || !data.step1?.phone)) ||
                                    (step === 2 && !data.step2?.plan)
                                }
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
