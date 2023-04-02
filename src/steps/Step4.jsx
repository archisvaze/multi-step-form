import React, { useEffect, useState } from 'react';
import { addons } from '../data/addons';

export default function Step4({ data, setData, setStep }) {
    const [planPrice, setPlanPrice] = useState();
    const [totalPrice, setTotalPrice] = useState();
    useEffect(() => {
        if (data && data.step2?.price) {
            if (data.step2?.timeFrame) {
                setPlanPrice(data.step2?.price * 10);
            } else {
                setPlanPrice(data.step2?.price);
            }
        }
        let totalAddonPrice = 0;
        let totalPlanPrice = data.step2?.price;
        for (let i of data.step3?.addons) {
            const addon = addons.find((a) => a.id === i);
            if (addon) totalAddonPrice += addon.price;
        }
        if (data && data.step2?.timeFrame) {
            totalAddonPrice *= 10;
            totalPlanPrice *= 10;
        }
        setTotalPrice(totalAddonPrice + totalPlanPrice);
    }, [data]);
    return (
        <div className='card'>
            <h4 className='title'>Finishing up</h4>
            <p className='sub-title'>Double-check everything looks OK before confirming.</p>
            <div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'var(--magnolia)',
                        padding: '16px',
                        borderRadius: '8px',
                    }}
                >
                    <p style={{ color: 'var(--marine-blue)', fontWeight: '500' }}>{`${data.step2.plan} (${
                        data.step2.timeFrame ? 'Yearly' : 'Monthly'
                    })`}</p>

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <button
                            onClick={() => {
                                setStep(2);
                            }}
                            style={{
                                padding: '0',
                                margin: '0',
                                height: 'min-content',
                                textDecoration: 'underline',
                                background: 'transparent',
                                color: 'var(--cool-gray)',
                            }}
                        >
                            Change
                        </button>
                        <p style={{ fontWeight: '500' }}>{`$${planPrice}/${data.step2.timeFrame ? 'yr' : 'mo'}`}</p>
                    </div>
                    <div className='hr'></div>
                    {data.step3?.addons &&
                        data.step3?.addons?.length > 0 &&
                        data.step3?.addons?.map((i) => {
                            const addon = addons.find((a) => a.id === i);
                            if (addon) {
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginTop: '12px',
                                        }}
                                    >
                                        <p style={{ fontSize: '12px', color: 'var(--cool-gray)' }}>{addon.title}</p>
                                        <p style={{ fontSize: '12px', color: 'var(--marine-blue)' }}>{`+$${
                                            data.step2?.timeFrame ? addon.price * 10 : addon.price
                                        }/${data.step2?.timeFrame ? 'yr' : 'mo'}`}</p>
                                    </div>
                                );
                            }
                        })}
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '20px 16px',
                        borderRadius: '8px',
                    }}
                >
                    <p style={{ fontSize: '12px', color: 'var(--cool-gray)' }}>{`Total (per ${
                        data.step2?.timeFrame ? 'year' : 'month'
                    })`}</p>
                    <p style={{ fontWeight: '500', color: 'var(--purplish-blue)' }}>{`$${totalPrice}/${
                        data.step2?.timeFrame ? 'yr' : 'mo'
                    }`}</p>
                </div>
            </div>
        </div>
    );
}
