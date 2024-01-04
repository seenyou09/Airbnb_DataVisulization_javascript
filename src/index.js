import React from "react";
import ReactDOM from "react-dom";
import { csv, json } from "d3";
import "./styles.css";
import { AirbnbMap } from "./airbnbMap";

const csvUrl = '/final.csv';
// Credits: 'https://cartographyvectors.com/map/627-san-francisco-ca'
const mapUrl = '/san-francisco-ca_.geojson';
function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    React.useEffect(() => {
        csv(csvPath).then(data => {
            data.forEach(d => {
                d.price = d.price.replace(/[^0-9.-]/g, '');
                d.price = parseFloat(d.price)
            });
            setData(data);
        });
    }, []);
    return dataAll;
}

function useMap(jsonPath) {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        json(jsonPath).then(geoJsonData => {
            setData(geoJsonData);
        })
    }, []);
    return data;
}


function Main(){
    const airbnbs = useData(csvUrl);
    const map = useMap(mapUrl);
    
    if (!map || !airbnbs) {
        return <pre>Loading...</pre>;
    };
    return <div>
                <h1>Get the best deal for your Airbnb</h1>
                <div style={{display: 'flex'}}>
                    <h2>Map of San Francisco with Airbnbs</h2>
                    <h2>Bar Charts</h2>
                </div>
                
                <AirbnbMap countries={map} airbnbs={airbnbs}></AirbnbMap>
                <div className="instructions">
                    <p>1. Each dot on the map represents a Airbnb.</p>
                    <p>2. The Price Range slider can be used to filter out Airbnbs.</p>
                    <p>3. Hover over a dot to get information about Airbnb.</p>
                    <p>4. Click on a dot to show bar charts for comparison with neighbourhood.</p>
                    <p>5. Click on the Airbnb name on tooltip to link to the Airbnb webpage.</p>
                </div>
            </div>
}

ReactDOM.render(<Main/ >, document.getElementById("root")); 