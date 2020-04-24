import React from 'react';

const About = () => {
    return (
        <div className={"container"} style={{'marginTop': '70px'}}>
            <div className={"row"}>
                <div className={"col-12 titulo-span py-2"}>
                    <div className={"align-self-center"}>
                        <h1>About</h1>
                        <p>
                            <b>usjobstats.com</b> is a no-nonsense tracking dashboard for United States Unemployment.
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
