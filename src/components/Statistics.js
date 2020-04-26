import React from 'react';
import RateChart from "./RateChart";
import OverviewWidget from "./OverviewWidget";
import UnemploymentWidget from "./UnemploymentWidget";

export default class home extends React.Component {
    render() {
        return (
            <div className={"container"} style={{'marginTop': '70px'}}>
                <div className={"row"}>
                    <div className={"col-12 titulo-span py-2"}>
                        <div className={"align-self-center"}>

                            <h1>Unemployment Dashboard</h1>
                            <p>
                                <i>*Adjusted international data is updated ~a week after the end of each month by the US Bureau of Labor Statistics.</i>
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
            </div>
        );
    }
}
