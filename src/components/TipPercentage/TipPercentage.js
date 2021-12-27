import React, { useState, useEffect } from 'react';
import './TipPercentage.css';

const TipPercentage = ({ selected, percentage, click }) => {
    const [active, setActive] = useState(selected);
    useEffect(() => {
        setActive(selected)
    }, [percentage, selected])
    return <li
        onClick={() => {
            click();
            setActive(!active);
        }}
        style={active ? { background: 'var(--strong-cyan)' } : null}
        className="section__container-left__percentage">
        <p style={active ? { color: 'black' } : null}>{percentage}%</p>
    </li>;
}

export default TipPercentage;
