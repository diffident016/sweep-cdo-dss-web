import CollectionEfficiency from "@/app/screens/waste-analysis/CollectionEfficiency";
import EnergyPotential from "@/app/screens/waste-analysis/EnergyPotential";
import GenerationTrends from "@/app/screens/waste-analysis/GenerationTrends";
import WasteCompositionPage from "@/app/screens/waste-analysis/WasteCompositionPage";
import PageHeader from "@/components/ui/PageHeader";
import Tab from "@/components/ui/Tab";
import React from "react";

async function WasteAnalysis(props: {
  searchParams?: Promise<{
    tab?: string;
  }>;
}) {
  const header = {
    title: "Waste Analysis",
    subtitle:
      "Detailed analysis of waste composition and energy potential for Cagayan de Oro City",
  };

  const params = await props.searchParams;
  const { tab } = params as any;

  const tabs = [
    {
      name: "Waste Composition",
      tab: "waste-composition",
      page: <WasteCompositionPage />,
    },
    {
      name: "Generation Trends",
      tab: "generation-trends",
      page: <GenerationTrends />,
    },
    {
      name: "Collection Efficiency",
      tab: "collection-efficiency",
      page: <CollectionEfficiency />,
    },
    {
      name: "Energy Potential",
      tab: "energy-potential",
      page: <EnergyPotential />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4 outline-none select-none">
      <PageHeader title={header.title} subtitle={header.subtitle} />

      <div className="w-full h-full">
        <Tab tabs={tabs} active={tabs[0].tab} />
        {tabs[tab ? tabs.findIndex((t) => t.tab === tab) : 0].page}
      </div>
    </div>
  );
}

export default WasteAnalysis;
