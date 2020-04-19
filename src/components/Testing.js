import React, { Component } from 'react'

class Testing extends Component {
    getDataUsingGet() {
        // Get request
        fetch('https://api.bls.gov/publicAPI/v1/timeseries/data/CES0000000001',{
            method: 'GET'
            // Request type
        })

            .then((response) => response.json())
            // If response is in json then in success
            .then((responseJson) => {
                if (!responseJson) {
                    throw new Error("No JSON Response");
                }
                //Success
                console.log(responseJson)
                const obj = responseJson
                // ... Code for parsing to go here?
                for(var i = 0; i < obj.Results.series.length; i++){
                    var series = obj.Results.series[i];
                    for(var j = 0; j < series.data.length; j++){
                        console.log(series.data[i].year)
                        console.log(series.data[i].periodName)
                    }
                }
                alert("See console for parsed API data")

            })
            // If response is not in json then throw error
            .catch((error) => {
                //Error
                alert(JSON.stringify(error))
                console.error(error)
            });
    }

    render() {
        return(
            <div>
                {/* Render the alert message in browser */}
                <ul>
                    <li>{ this.getDataUsingGet() }</li>
                </ul>
            </div>
        );
    }
}

export default Testing
