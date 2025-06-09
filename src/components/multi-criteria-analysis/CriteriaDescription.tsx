import React from "react";
import CardWrapper from "../ui/CardWrapper";
import Table from "../ui/Table";

function CriteriaDescription() {
  const headers = ["Criteria", "Description", "Key Indicators"];

  const data = [
    {
      Criteria: "Economic",
      Description: "Financial viability and economic impacts",
      "Key Indicators":
        "Capital cost, ROI, operational costs, revenue generation",
    },
    {
      Criteria: "Environmental",
      Description: "Environmental impacts and sustainability",
      "Key Indicators": "Emissions reduction, resource recovery, land use",
    },
    {
      Criteria: "Social",
      Description: "Social acceptability and community benefits",
      "Key Indicators": "Public acceptance, job creation, health impacts",
    },
    {
      Criteria: "Technical",
      Description: "Technical performance and reliability",
      "Key Indicators": "Efficiency, reliability, technology maturity",
    },
    {
      Criteria: "Regulatory",
      Description: "Regulatory compliance and permitting",
      "Key Indicators":
        "Permitting process, compliance requirements, legal risks",
    },
  ];

  return (
    <CardWrapper>
      <h1 className="font-medium text-lg">Emissions Compliance Analysis</h1>
      <Table headers={headers} data={data} />
    </CardWrapper>
  );
}

export default CriteriaDescription;
