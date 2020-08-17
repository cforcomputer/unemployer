import React from "react";
import {Helmet} from "react-helmet";

const Guides = () => {
    return (
        <div>
            <Helmet>
                <title>USJobstats - Guides</title>
                <link rel="canonical" href="http://www.usjobstats.com/guides" />
                <meta name="description" content="Simple guides for filing for unemployment. Get answers to common questions. Real time and free unemployment dashboard." />
            </Helmet>
            <p>Guides coming soon</p>


            <h1>FAQ</h1>
                        <h4>Commonly asked questions</h4>
                        <div className="list-group">
                            <div className="list-group-item flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">
                                        Why don't all the charts show the current month's data?
                                    </h5>
                                </div>
                                <p className="mb-1">
                                    Most of this site's data is gathered from US Bureau of Labor Statistics (BLS).
                                    BLS has to adjust and compile their data at the end of each month to make sure it's
                                    portrayed accurately. The numbers you hear about in the news are extrapolated from &nbsp;
                                    <a href={"https://oui.doleta.gov/unemploy/wkclaims/report.asp"}>
                                        UNITED STATES DEPARTMENT OF LABOR's weekly unemployment insurance filings</a>.
                                </p>
                            </div>
                            <div className="list-group-item flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">
                                        What does "Seasonally Adjusted" mean?
                                    </h5>
                                </div>
                                <p className="mb-1">
                                    Seasonal adjustment is a statistics technique that removes the influences of
                                    well known seasonal events that change employment from month-to-month
                                    (i.e. Christmas shopping season temporarily inflating physical retail employment numbers).
                                </p>
                            </div>
                            <div className="list-group-item flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">
                                        Tracking unemployment is good and all, but where can I find COVID-19 tracking?
                                    </h5>
                                </div>
                                <p className="mb-1">
                                    One of the best websites currently for tracking the spread of COVID-19 is
                                    <a href={"https://covid19stats.live/"}> covid19stats.live</a>.
                                </p>
                            </div>
                        </div>
        </div>
    )
}

export default Guides;
