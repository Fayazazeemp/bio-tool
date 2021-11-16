import React from "react";
import { Doughnut} from "react-chartjs-2";
import { chartColors } from "./colors";

const options = {
  legend: {
    display: false,
    position: "right"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};


const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [20,80],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors
    }
  ]
};


function Doughnutt() {

  return (
    <div className="App">

        <Doughnut data={data} options={options} />
    </div>
  );
}

export default Doughnutt