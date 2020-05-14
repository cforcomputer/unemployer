import React from 'react';
import {Helmet} from "react-helmet";
import USPageMap from "./USPageMap"


const Map = () => {

    return (
        <div className={"container"} style={{'marginTop': '70px'}}>
            <Helmet>
                <title>USJobstats - Map</title>
                <link rel="canonical" href="http://www.usjobstats.com/map" />
                <meta name="description" content="Real time US unemployment map state by state. Real time and free unemployment dashboard." />
            </Helmet>
            <div className={"row"}>
                <div className={"col-12 titulo-span py-2"}>
                    <div className={"align-self-center"}>
                        <h1>Map</h1>
                        <USPageMap />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;
