import React from "react";
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis, XAxis2, YAxis2 } from "./axes";
import { csv } from "d3";

import { AirbnbBar_price, AirbnbBar_overall_rating, AirbnbBar_indivdual_rating } from "./airbnbBarInner";

const csvUrl = '/average_neighbourhood.csv';
function useData(csvPath) {
    const [dataAll, setData] = React.useState(null);
    React.useEffect(() => {
        csv(csvPath).then(data => {
            data.forEach(d => {
                d.price = d.price.replace(/[^0-9.-]/g, '');
                d.price = parseFloat(d.price)
                d.overall_rating = +d.overall_rating


            });
            setData(data);
        });
    }, []);
    return dataAll;
}

function AirbnbBar(props) {

    const { airbnbs } = props;
    const neighbourhoods = useData(csvUrl);
    const [selectedAirbnbID, setSelectedAirbnbID] = React.useState(null);

    const dataInBarChart = [airbnbs]
    const barchart_width = 350;
    const barchart_height = 200;
    const barchart_margin = { top: 10, bottom: 50, left: 130, right: 10 };
    const barchart_inner_width = barchart_width - barchart_margin.left - barchart_margin.right;
    const barchart_inner_height = barchart_height - barchart_margin.top - barchart_margin.bottom;

    if (!neighbourhoods) {
        return <pre>Loading...</pre>;
    };
    for (let object of neighbourhoods) {
        if (object.neighbourhood == airbnbs.neighbourhood_cleansed) {
            dataInBarChart.push(object)
        }
    }
    return (
        <div>
            <div className="color-legend">
                <p>Color Legend</p>
                <div style={{ display: "flex" }}>
                    <p>Selected Airbnb:</p>
                    <div className="orange"></div>
                </div>
                <div style={{ display: "flex" }}>
                    <p>Average in {airbnbs.neighbourhood_cleansed}:</p>
                    <div className="blue"></div>
                </div>
            </div>
            <div style={{display: 'flex', flexWrap: "wrap"}}>
                <div>
                {/* Airbnb Price */}
                <h3>Price in USD$</h3>
                <svg
                    id={"barchart"}
                    width={barchart_width}
                    height={barchart_height}
                >
                    <AirbnbBar_price
                        offsetX={barchart_margin.left}
                        offsetY={barchart_margin.top}
                        height={barchart_inner_height}
                        width={barchart_inner_width}
                        data={dataInBarChart}
                        selectedAirbnbID={selectedAirbnbID}
                        setSelectedAirbnbID={setSelectedAirbnbID}
                    />
                </svg>
                </div>
                {/* Airbnb Ratings */}
                <div>
                <h3>Overall Rating</h3>
                <svg
                    id={"barchart2"}
                    width={barchart_width}
                    height={barchart_height}
                >
                    <AirbnbBar_overall_rating
                        offsetX={barchart_margin.left}
                        offsetY={barchart_margin.top}
                        height={barchart_inner_height}
                        width={barchart_inner_width}
                        data={dataInBarChart}
                    />
                </svg>
                </div>
                <div>
                <h3>Individual Ratings</h3>
                <svg
                    id={"barchart3"}
                    width={barchart_width}
                    height={barchart_height}
                >
                    <AirbnbBar_indivdual_rating
                        offsetX={barchart_margin.left}
                        offsetY={barchart_margin.top}
                        height={barchart_inner_height}
                        width={barchart_inner_width}
                        data={dataInBarChart}
                    />
                </svg>
                </div>
            </div>
        </div>
    );
}

export { AirbnbBar }