import "./styleTest.css"

import DonutChart from "react-donut-chart";
import React from "react";
const reactDonutChartdata = [
  {
    label: "Lutein",
    value: 30,
    color: "#00E396"
  },
  {
    label: "Vitamin A",
    value: 90,
    color: "#FEB019"
  },
  {
    label: "Omega 3 fatty acid",
    value: 100,
    color: "#FF4560"
  },
  {
    label: "Riboflavin",
    value: 15,
    color: "#775DD0"
  }
];
const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0"
];
const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
const reactDonutChartHandleClick = (item, toggled) => {
  if (toggled) {
    console.log(item);
  }
};
let reactDonutChartStrokeColor = "#FFFFFF";
const reactDonutChartOnMouseEnter = (item) => {
  let color = reactDonutChartdata.find((q) => q.label === item.label).color;
  reactDonutChartStrokeColor = color;
};

export default function Donut({handleClick}) {
  return (<>
    <div className="Appp">
      <DonutChart
        width={500}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={reactDonutChartdata}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>
    <div className="deficiency">
  <p className="span1">Omega 3 fatty acid</p>
  <p className="span2"> Vitamin A</p>
  <p className="span3">Lutein</p>
  <p className="span4">Riboflavin</p>

	</div>
	<button className="done" onClick={handleClick} >Done</button>
    </>
  );
}