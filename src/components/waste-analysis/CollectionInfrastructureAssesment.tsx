import React from "react";
import CardWrapper from "../ui/CardWrapper";
import Table from "../ui/Table";

function CollectionInfrastructureAssessment() {
  const headers = [
    "Resource",
    "Current Capacity",
    "Required Capacity",
    "Gap",
    "Utilization (%)",
  ];

  const data = [
    {
      Resource: "Collection Vehicles",
      "Current Capacity": "28",
      "Required Capacity": "35",
      Gap: "-7",
      "Utilization (%)": "120",
    },
    {
      Resource: "Transfer Stations",
      "Current Capacity": "3",
      "Required Capacity": "5",
      Gap: "-2",
      "Utilization (%)": "145",
    },
    {
      Resource: "Material Recovery",
      "Current Capacity": "8",
      "Required Capacity": "12",
      Gap: "-4",
      "Utilization (%)": "110",
    },
    {
      Resource: "Collection Staff",
      "Current Capacity": "120",
      "Required Capacity": "150",
      Gap: "-30",
      "Utilization (%)": "125",
    },
    {
      Resource: "Landfill Capacity",
      "Current Capacity": "450 tons/day",
      "Required Capacity": "580 tons/day",
      Gap: "-130 tons/day",
      "Utilization (%)": "129",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">
        Collection Infrastructure Assessment
      </h1>
      <Table headers={headers} data={data} />
    </CardWrapper>
  );
}

export default CollectionInfrastructureAssessment;
