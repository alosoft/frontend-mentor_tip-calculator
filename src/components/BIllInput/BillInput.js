import './BillInput.css';
import React, { useState } from 'react';

const BillInput = ({ title, percentage, icon, placeholder, value, setValue }) => {
    const [error, setError] = useState(false);
    return <>
        {placeholder ? null : <div className='section__container-left__error'>
            <p>{title}</p>
            {error ?
                <p className='section__container-left__error-message'>Can't be zero</p>
                : null
            }
        </div>}
        <div className="section__container-left__input">
            {icon ?
                <img src={icon} alt="dollar" />
                : null}
            <input
                value={percentage === 0 ? undefined : value} onChange={(e) => {
                    if (e.target.value == 0) {
                        setError(true)
                    } else {
                        if (error) setError(false)
                    }
                    return setValue(e.target.value)
                }}
                style={{ padding: placeholder ? 'unset' : null, borderColor: error ? 'red' : null }} type="number"
                placeholder={placeholder ?? '0'} />
        </div>
    </>;
}


export default BillInput;