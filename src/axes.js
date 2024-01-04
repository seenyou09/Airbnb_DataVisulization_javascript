import React from "react";

export { XAxis, YAxis, XAxis2, YAxis2 };
//TODO: complete the YAxis
// 1.Draw the y-axis, using <line>;
// 2.Draw the ticks, using yScale.domain() to get the ticks (i.e., names of airlines);
// For each tick line, we set x1={-5}, x2={0}, y1 and y2 are the half of yScale.bandwidth()
// For the tick text, we set style={{textAnchor: 'start', fontSize:'10px'}}, x={-offsetX+10},y={yScale.bandwidth()/2}
function YAxis (props) {
    const { yScale, height, offsetX } = props;
    return <g transform={`translate(${0}, ${height})`}>
        <line y1={-height} stroke="black"/>
        {yScale.domain().map((tickValue)=>{
            return <g key={tickValue} transform={`translate(${0}, ${yScale(tickValue) - height})`}>
                <line x1={-5} x2={0} y1={yScale.bandwidth() / 2} y2={yScale.bandwidth() / 2} stroke='black' />
                <text style={{ textAnchor:'start', fontSize:'8px' }} x={-offsetX+10} y={yScale.bandwidth()/2}>
                    {tickValue}
                </text>
            </g>
        })}
    </g>
}

function XAxis(props) {
    const { xScale, width, height} = props;

    return <g transform={`translate(${0}, ${height})`}>
        {<line x2={width} stroke='black'/>}
        {xScale.ticks(5).map(tickValue => 
            <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${0})`}>
                <line y2={10} stroke='black' />
                <text style={{ textAnchor:'end', fontSize:'10px' }} x={5} y={20}>
                    {tickValue}
                </text>
            </g>
        )}
    </g>
    
}

function YAxis2(props) {
    const { yScale, height, offsetX } = props;
  
    const ticksToShow = 5; // Adjust the number of ticks as needed
  
    return (
      <g transform={`translate(${0}, ${height})`}>
        <line y1={-height - 5} stroke="black" />
        {yScale.domain().map((tickValue, index) => {
          // Show only a certain number of ticks
          if (index % Math.ceil(yScale.domain().length / ticksToShow) === 0) {
            return (
              <g key={tickValue} transform={`translate(${0}, ${yScale(tickValue) - height})`}>
                <line
                  x1={-5}
                  x2={0}
                  y1={yScale.bandwidth() / 2}
                  y2={yScale.bandwidth() / 2}
                  stroke="black"
                />
                <text style={{ textAnchor: 'start', fontSize: '10px' }} x={-offsetX + 10} y={yScale.bandwidth() / 2}>
                  {tickValue}
                </text>
              </g>
            );
          }
          return null; // Return null for ticks that are not shown
        })}
      </g>
    );
  }
  

function XAxis2(props) {
    const { xScale, width, height } = props;
  
    return (
      <g transform={`translate(${0}, ${height})`}>
        {<line x2={width} stroke='black' />}
        {xScale.ticks(10).map(tickValue => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${0})`}>
            <line y2={10} stroke='black' />
            <text style={{ textAnchor: 'end', fontSize: '10px' }} x={5} y={20}>
              {tickValue}
            </text>
          </g>
        ))}
      </g>
    );
  }
  