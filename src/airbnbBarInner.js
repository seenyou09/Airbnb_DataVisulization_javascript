import React from "react";
import { max, scaleBand, scaleLinear } from "d3";
import { XAxis, YAxis, XAxis2, YAxis2 } from "./axes";


function AirbnbBar_price (props) {
    const { offsetX, offsetY, height, width, data} = props;



    // Define the xScale using price for the horizontal axis
    const xScale = scaleLinear()
        .domain([0, max(data.map(d => d.price))]) // Use the maximum price as the upper limit
        .range([0, width])
        .nice();

    // Define the yScale using neighbourhood for the vertical axis
    const yScale = scaleBand()
        .domain(["Selected Airbnb", "Average in " + data[1].neighbourhood])
        .range([0, height])
        .padding(0.1);
    const firstNeighborhoodData = data[0];
    const secondNeighborhoodData = data[1]
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            {/* X and Y axes components */}
            <rect
                key={"bar1"}  // Unique key for the first rect
                x={0}
                y={22}
                height={30}
                width={xScale(firstNeighborhoodData.price)}
                stroke={'#FFAC1C'}
                fill='#FFAC1C'
            />

            <rect
                key={"bar2"}  // Unique key for the second rect
                x={0}
                y={88}
                height={30}
                width={xScale(secondNeighborhoodData.price)}
                stroke={'#00308F'}
                fill="#00308F"
            />
            <XAxis xScale={xScale} width={width} height={height}></XAxis>
            <YAxis yScale={yScale} height={height} offsetX={offsetX}></YAxis>
        </g>
    );
    

}

export {AirbnbBar_price}


function AirbnbBar_overall_rating (props) {
    const { offsetX, offsetY, height, width, data} = props;

    // Define the xScale using price for the horizontal axis
    const xScale = scaleLinear()
        .domain([70, max(data.map(d => d.overall_rating))]) // Use the maximum price as the upper limit
        .range([0, width])
        .nice();

    // Define the yScale using neighbourhood for the vertical axis
    const yScale = scaleBand()
        .domain(["Selected Airbnb", "Average in " + data[1].neighbourhood])
        .range([0, height])
        .padding(0.1);

    const firstNeighborhoodData = data[0];
    const secondNeighborhoodData = data[1];


    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            {/* X and Y axes components */}
            <rect
                key={"bar1"}  // Unique key for the first rect
                x={0}
                y={22}
                height={30}
                width={xScale(firstNeighborhoodData.review_scores_rating)}
                stroke={'#FFAC1C'}
                fill='#FFAC1C'
            />

            <rect
                key={"bar2"}  // Unique key for the second rect
                x={0}
                y={88}
                height={30}
                width={xScale(secondNeighborhoodData.overall_rating)}
                stroke={'#00308F'}
                fill="#00308F"
            />
            <XAxis xScale={xScale} width={width} height={height}></XAxis>
            <YAxis yScale={yScale} height={height} offsetX={offsetX}></YAxis>
        </g>
    );
    

}

export {AirbnbBar_overall_rating}




function AirbnbBar_indivdual_rating (props) {
    const { offsetX, offsetY, height, width, data} = props;

    // Define the xScale using price for the horizontal axis
    const xScale = scaleLinear()
        .domain([7, max(data.map(d => d.review_checking))]) // Use the maximum price as the upper limit
        .range([0, width])
        .nice();

    // Define the yScale using neighbourhood for the vertical axis
    const yScale = scaleBand()
        .domain(["review_accuracy", "review_cleanliness", "review_location", "review_communication", "review_value"])
        .range([0, height])
        .padding(0.1);
    const airbnbData = data[0];
    const neighborhoodData = data[1];

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            {/* X and Y axes components */}
            <rect
                key={"bar1"}  // Unique key for the first rect
                x={0}
                y={5}
                height={10}
                width={xScale(airbnbData.review_scores_accuracy)}
                stroke={'#FFAC1C'}
                fill='#FFAC1C'
            />
            <rect
                key={"bar2"}  // Unique key for the second rect
                x={0}
                y={15}
                height={10}
                width={xScale(neighborhoodData.review_accuracy)}
                stroke={'#00308F'}
                fill="#00308F"
            />
            <rect
                key={"bar3"}  // Unique key for the first rect
                x={0}
                y={33}
                height={10}
                width={xScale(airbnbData.review_scores_cleanliness)}
                stroke={'#FFAC1C'}
                fill='#FFAC1C'
            />

            <rect
                key={"bar4"}  // Unique key for the second rect
                x={0}
                y={43}
                height={10}
                width={xScale(neighborhoodData.review_cleanliness)}
                stroke={'#00308F'}
                fill="#00308F"
            />
            <rect
                key={"bar5"}  // Unique key for the first rect
                x={0}
                y={60}
                height={10}
                width={xScale(airbnbData.review_scores_location)}
                stroke={'#FFAC1C'}
                fill='#FFAC1C'
            />

            <rect
                key={"bar6"}  // Unique key for the second rect
                x={0}
                y={70}
                height={10}
                width={xScale(neighborhoodData.review_location)}
                stroke={'#00308F'}
                fill="#00308F"
            />
            <rect
                key={"bar7"}  // Unique key for the first rect
                x={0}
                y={88}
                height={10}
                width={xScale(airbnbData.review_scores_communication)}
                stroke={'#FFAC1C'}
                fill='#FFAC1C'
            />

            <rect
                key={"bar8"}  // Unique key for the second rect
                x={0}
                y={98}
                height={10}
                width={xScale(neighborhoodData.review_communication)}
                stroke={'#00308F'}
                fill="#00308F"
            />
            <rect
                key={"bar9"}  // Unique key for the first rect
                x={0}
                y={115}
                height={10}
                width={xScale(airbnbData.review_scores_value)}
                stroke={'#FFAC1C'}
                fill='#FFAC1C'
            />

            <rect
                key={"bar10"}  // Unique key for the second rect
                x={0}
                y={125}
                height={10}
                width={xScale(neighborhoodData.review_value)}
                stroke={'#00308F'}
                fill="#00308F"
            />
            <XAxis xScale={xScale} width={width} height={height}></XAxis>
            <YAxis yScale={yScale} height={height} offsetX={offsetX}></YAxis>
        </g>
    );
    

}

export {AirbnbBar_indivdual_rating}


