import React from 'react';
import RateChart from "./RateChart";

export default class home extends React.Component {
    render() {
        return (
            <div className={"container"} style={{'margin-top': '70px'}}>
                <div className={"row"}>
                    <div className={"col-12 titulo-span py-2"}>
                        <div className={"align-self-center"}>
                            <h1>Unemployment Statistics</h1>
                            <p>Current United States Unemployment Rate</p>
                            <RateChart />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
