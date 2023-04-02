import React from 'react';
import { addons } from '../data/addons';

export default function Step3({ data, setData }) {
    const selectAddon = (id) => {
        if (id) {
            if (data.step3?.addons && data.step3?.addons?.length > 0) {
                if (data.step3.addons.includes(id)) {
                    const idx = data.step3?.addons?.indexOf(id);
                    const addonsCopy = JSON.parse(JSON.stringify(data.step3.addons));
                    addonsCopy.splice(idx, 1);
                    setData({ ...data, step3: { ...data.step3, addons: addonsCopy } });
                    return;
                } else {
                    setData({ ...data, step3: { ...data.step3, addons: [...data.step3.addons, id] } });
                    return;
                }
            }
            setData({ ...data, step3: { ...data.step3, addons: [id] } });
            return;
        }
    };

    return (
        <div className='card'>
            <h4 className='title'>Pick add-ons</h4>
            <p className='sub-title'>Add-ons help enhance your gaming experience.</p>
            {addons.map((ad) => {
                const isPresent = data.step3?.addons?.includes(ad.id);
                return (
                    <div
                        key={ad.id}
                        tabIndex={0}
                        className='selector step3-selector'
                        onClick={() => {
                            selectAddon(ad.id);
                        }}
                        style={{
                            border: isPresent ? '1px solid var(--marine-blue)' : '1px solid var(--light-gray)',
                            background: isPresent ? 'var(--magnolia)' : 'transparent',
                        }}
                    >
                        <input
                            checked={isPresent}
                            type='checkbox'
                        />

                        <div className='selector-info'>
                            <p className='selector-title'>{ad.title}</p>
                            <p style={{ color: 'var(--cool-gray)', fontSize: '14px' }}>{ad.text}</p>
                        </div>
                        <p style={{ color: 'var(--purplish-blue)', fontSize: '12px', position: 'absolute', right: '12px' }}>{`+$${
                            data.step2?.timeFrame ? ad.price * 10 : ad.price
                        }/${data.step2?.timeFrame ? 'yr' : 'mo'}`}</p>
                    </div>
                );
            })}
        </div>
    );
}
