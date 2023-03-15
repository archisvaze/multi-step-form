import React from 'react';

export default function Step2(props) {

  

    return (
        <div>
            <h4>Select your plan</h4>
            <p>You have the option of monthly or yearly billing.</p>

            <button>Arcade</button>
            <button>Advanced</button>
            <button>Prop</button>

            <>
                <p>Monthly</p>
                <input
                    type='checkbox'
                    name=''
                    id=''
                />
                <p>Yearly</p>
            </>
        </div>
    );
}
