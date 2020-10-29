import React from 'react';
import WorldMap from '../components/map/map';

export default function Middle2() {
    
    const data = [
        {country: 'CN', value: 100},
        {country: 'SA', value: 90},
        {country: 'JP', value: 80},
        {country: 'CA', value: 70},
        {country: 'US', value: 60},
        {country: 'RU', value: 50},
        {country: 'KP', value: 50},
        {country: 'KR', value: 30},
        {country: 'AU', value: 70},
        {country: 'GL', value: 10},
    ]
    return (
        <div className="middle2-com">
            <header>
                Geography
            </header>
            <div className='map'>
                <header>
                    <label>
                        Greater Asia
                    </label>
                    <label>
                        Americas
                    </label>
                    <label>
                        Greater Europe
                    </label>
                </header>
                <WorldMap/>
                <footer>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
};