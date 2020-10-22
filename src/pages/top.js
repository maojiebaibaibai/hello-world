import React, { PureComponent } from 'react';
// 引入 ECharts 主模块
import chart from 'tui-chart';

export default function TopComponent() {
    return (
        <div className="top-com">
            <header>
                <h3>Teresa Snyder</h3>
                <div className="date-wrap">
                    <div className="date">
                        <header>Created on</header>
                        <label>14/02/2020</label>
                    </div>
                    <div className="date">
                        <header>Last modified on</header>
                        <label>14/06/2020</label>
                    </div>
                </div>
            </header>
            <div className="content">
                <div className="top">
                    <div className="left">
                        <Chart />
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <header>Risk profile</header>
                                <label>Moderately Conservative</label>
                            </li>
                            <li>
                                <header>Budget</header>
                                <label>SGD 10,000.00</label>
                            </li>
                            <li>
                                <header>Payment frequency</header>
                                <label>Monthly</label>
                            </li>
                            <li>
                                <header>Portfolio type</header>
                                <label>ILP Sub-funds</label>
                            </li>
                            <li>
                                <header>Payment options</header>
                                <label>Cash</label>
                            </li>
                            <li>
                                <header>Annual Management fee in %</header>
                                <label>10%</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <ul>
                        <li><header>Selected funds</header></li>
                        <li><p>Fortune-Aggressive Portfolio Fund(FAGGRE)</p><label>30%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund (MISH1 MISH21)</p><label>30%</label></li>
                        <li><p>Manulife Golden Balanced Growth Fund(OBGF)</p><label>20%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                        <li><p>Manulife Income Series-Asian High Yield Bond Fund(MISH1 MISH21)</p><label>10%</label></li>
                    </ul>
                </div>
                <div className="alert">
                    <div className="left"></div>
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    <div className="content">
                        <h3>Satellite range is exceeded.</h3>
                        <label>Satellite range is exceeded,But will continue to allow portfolio to be saved.</label>
                    </div>
                    <i class="fa fa-close" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}

class Chart extends PureComponent {
    constructor() {
        super()
    }

    componentDidMount() {
        var container = document.getElementById('chart');
        var data = {
            categories: ['Browser'],
            series: [
                {
                    name: '90% Staple funds',
                    data: 90
                },
                {
                    name: '10% Satellite funds',
                    data: 10
                }
            ]
        };
        var options = {
            chart: {
                width: 400,
                height: 200
            },
            series: {
                radiusRange: ['70%', '100%']
            },
            tooltip: {
                suffix: '%'
            }
        };
        var theme = {
            series: {
                colors: ['green', 'blue']
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
            <div id="chart">
            </div>
        )
    }
}
