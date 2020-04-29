import React from 'react';
import RateChart from "./RateChart";
import OverviewWidget from "./OverviewWidget";
import UnemploymentWidget from "./UnemploymentWidget";
import {Helmet} from "react-helmet";

export default class home extends React.Component {
    render() {
        return (
            <div className={"container"} style={{'marginTop': '70px'}}>
                <Helmet>
                    <title>USJobstats - Unemployment Tracker Dashboard</title>
                    <link rel="canonical" href="http://www.usjobstats.com/" />
                    <meta name="description" content="Learn about USJobstats.com. Get answers to common questions. Real time and free unemployment dashboard." />
                </Helmet>
                <div className={"row"}>
                    <div className={"col-12 titulo-span py-2"}>
                        <div className={"align-self-center"}>

                            <h1>Unemployment Dashboard</h1>
                            <p>
                                <i>*Adjusted national data is updated ~a week after the end of each month by the US Bureau of Labor Statistics.</i>
                            </p>
                            <br/>
                            <RateChart/>
                        </div>
                    </div>
                </div>
                <div className={"row mt-5"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <OverviewWidget/>
                            <UnemploymentWidget/>
                        </div>
                    </div>
                </div>
                <div style={{'margin-top': '20px'}}>
                    <table className={"table"}>
                        <thead>
                            <tr>
                                <th scope={"col"}>State</th>
                                <th scope={"col"}>Unemployed</th>
                                <th scope={"col"}>Rate</th>
                                <th scope={"col"}>Participation</th>
                                <th scope={"col"}>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
