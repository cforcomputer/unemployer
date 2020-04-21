import React from 'react';
import RateChart from "./RateChart";
import GetDataFromAPI from "./GetDataFromAPI";

export default class home extends React.Component {
    render() {
        return (
            <div className={"container"} style={{'marginTop': '70px'}}>
                <div className={"row"}>
                    <div className={"col-12 titulo-span py-2"}>
                        <div className={"align-self-center"}>
                            <h1>Unemployment Statistics</h1>
                            <p>Current United States Unemployment Rate</p>
                            <RateChart />
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <iframe
                        src='https://tradingeconomics.com/embed/?s=usurtot&v=202004031241v20191105&h=300&w=600&ref=/united-states/unemployment-rate'
                        height='300' width='600' frameBorder='0' scrolling='no'>

                    </iframe>
                </div>
            </div>
        );
    }
}
