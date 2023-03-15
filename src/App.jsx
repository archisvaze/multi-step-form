import { useState } from 'react';
import bg_mobile from './assets/images/bg-sidebar-mobile.svg';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

function App() {
    const [step, setStep] = useState(1);
    return (
        <div className='app'>
            <img
                className='bg_mobile'
                src={bg_mobile}
                alt='background'
            />
            <div className='container'>
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
            </div>

            <div className='controls'>
                <button
                    disabled={step === 1}
                    onClick={() => {
                        setStep(step - 1);
                    }}
                >
                    Go back
                </button>
                <button
                    onClick={() => {
                        setStep(step + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
