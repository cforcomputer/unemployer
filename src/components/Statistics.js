import React from 'react';
import RateChart from "./RateChart";
import OverviewCard from "./OverviewCard";

export default class home extends React.Component {
    render() {
        return (
            <div className={"container"} style={{'marginTop': '70px'}}>
                <div className={"row"}>
                    <div className={"col-12 titulo-span py-2"}>
                        <div className={"align-self-center"}>

                            <h1>Unemployment Statistics</h1>
                            <br />
                            <strong>2007 - Current</strong>
                            <RateChart />
                        </div>
                    </div>
                </div>
                <div className={"align-self-center row mt-5"}>
                    <OverviewCard />
                </div>
            </div>
        );
    }
}
