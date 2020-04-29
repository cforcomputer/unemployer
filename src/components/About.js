import React from 'react';
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <div className={"container"} style={{'marginTop': '70px'}}>
            <Helmet>
                <title>USJobstats - About</title>
                <link rel="canonical" href="http://www.usjobstats.com/about" />
                <meta name="description" content="Learn about USJobstats.com. Get answers to common questions. Real time and free unemployment dashboard." />
            </Helmet>
            <div className={"row"}>
                <div className={"col-12 titulo-span py-2"}>
                    <div className={"align-self-center"}>
                        <h1>About</h1>
                        <p>
                            <b>usjobstats.com</b> is a no-nonsense tracking dashboard for United States unemployment.
                            Obtain valuable insights entirely for free. No paying for our charts.
                            All charts are generated from data gathered in real time from
                            <a href={"https://www.bls.gov/"}> bls.gov</a>.
                        </p>
                        <p>
                            This site is built by a single college student.
                            Please disable your adblocker to help further development of this site!
                        </p>
                        <h1>Upcoming features</h1>
                        <ul>
                            <li>See each individual state's unemployment level in a world map.</li>
                            <li>A unique trend chart for each individual state.</li>
                            <li>Useful tips and step-by-step resources for filing for unemployment in each state.</li>
                            <li>Adjust the time scale on the Statistic page's primary chart.</li>
                            <li>Real time extrapolated weekly jobless claims tracker.</li>
                        </ul>
                        <br />
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
                </div>
            </div>
        </div>
    );
}

export default About;
