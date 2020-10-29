import React, { PureComponent } from 'react';
import chart from 'tui-chart';
import WorldMap from '../components/map/map';

export default function Middle1() {
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
        <div className="middle1-com">
            <div className="left">
                <header>Asset allocation</header>
                <WorldMap data={data}/>
                {/* <Chart/> */}
            </div>
            <div className="right">
                <header>Top holdings</header>
                <ul>
                    <li>
                        <p>Manulife Global Fund - Preferred Securities Income Fund</p>
                        <label className="rate">14.99%</label>
                        <label className="des">Fixed income</label>
                    </li>
                    <li>
                        <p>Fidellity Funds - US High Yield Fund</p>
                        <label className="rate">14.99%</label>
                        <label className="des">Fixed income</label>
                    </li>
                    <li>
                        <p>JPMorgan Funds - Emerging Markets Investment Grade Bond Fund</p>
                        <label className="rate">10.00%</label>
                        <label className="des">Fixed income</label>
                    </li>
                    <li>
                        <p>JPMorgan Funds - Emerging Markets Opportunities Fund</p>
                        <label className="rate">9.00%</label>
                        <label className="des">Equity</label>
                    </li>
                    <li>
                        <p>Franklin Templeton Investment Funds - Franklin U.S. Opportunities Fund</p>
                        <label className="rate">8%</label>
                        <label className="des">Equity</label>
                    </li>
                    <li>
                        <p>Fidelity Funds – US High Yield Fund</p>
                        <label className="rate">14.99%</label>
                        <label className="des">Fixed income</label>
                    </li>
                    <li>
                        <p>Fidelity Funds – US High Yield Fund</p>
                        <label className="rate">14.99%</label>
                        <label className="des">Fixed income</label>
                    </li>
                    <li>
                        <p>Fidelity Funds – US High Yield Fund</p>
                        <label className="rate">14.99%</label>
                        <label className="des">Fixed income</label>
                    </li>
                    <li>
                        <p>Fidelity Funds – US High Yield Fund</p>
                        <label className="rate">14.99%</label>
                        <label className="des">Fixed income</label>
                    </li>
                    <li>
                        <p>Franklin Templeton Investment Funds – Franklin
U.S. Opportunities Fund</p>
                        <label className="rate">14.99%</label>
                        <label className="des">Fixed income</label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

class Chart extends PureComponent {
    constructor() {
        super()
    }

    componentDidMount() {
        var container = document.getElementById('chart1');
        var data = {
            categories: ['Browser'],
            series: [
                {
                    name: 'Fixed income 44.97%',
                    data: 44
                },
                {
                    name: 'Equity 54.98%',
                    data: 55
                },
                {
                    name: 'Cash and cash equivalents 0.05%',
                    data: 1
                },
            ]
        };
        var options = {
            chart: {
                width: 400,
                height: 200
            },
            tooltip: {
                suffix: '%'
            },
            legend: {
                visible: true,
                showCheckbox: false
            },
        };
        var theme = {
            series: {
                colors: ['green', 'blue', '#CFCFCF']
            }
        };

        // For apply theme

        // tui.chart.registerTheme('myTheme', theme);
        // options.theme = 'myTheme';
        chart.registerTheme('myTheme', theme);
        options.theme = 'myTheme';
        chart.pieChart(container, data, options);
    }
    render() {
        return (
            <div id="chart1">
            </div>
        )
    }
}