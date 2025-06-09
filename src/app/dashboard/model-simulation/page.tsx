import InputParameters from "@/app/screens/model-simulation/InputParameters";
import SimulationResults from "@/app/screens/model-simulation/SimulationResults";
import TechnologyComparison from "@/app/screens/model-simulation/TechnologyComparison";
import PageHeader from "@/components/ui/PageHeader";
import Tab from "@/components/ui/Tab";
import React from "react";

async function ModelSimulation(props: {
  searchParams?: Promise<{
    tab?: string;
  }>;
}) {
  const header = {
    title: "Model Simulation",
    subtitle:
      "Simulate the performance of waste-to-energy technologies under different scenarios",
  };

  const params = await props.searchParams;
  const { tab } = params as any;

  const tabs = [
    {
      name: "Input Parameters",
      tab: "input-parameters",
      page: <InputParameters />,
    },
    {
      name: "Simulation Results",
      tab: "simulation-results",
      page: <SimulationResults />,
    },
    {
      name: "Technology Comparison",
      tab: "technology-comparison",
      page: <TechnologyComparison />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <div className="w-full h-full flex flex-col gap-4">
        <Tab tabs={tabs} active={tabs[0].tab} />
        {tabs[tab ? tabs.findIndex((t) => t.tab === tab) : 0].page}
      </div>
    </div>
  );
}

export default ModelSimulation;
