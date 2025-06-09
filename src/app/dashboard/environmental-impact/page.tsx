import AirEmissions from "@/app/screens/environmental-impact/AirEmissions";
import CarbonFootprint from "@/app/screens/environmental-impact/CarbonFootprint";
import LandUse from "@/app/screens/environmental-impact/LandUse";
import ResourceRecovery from "@/app/screens/environmental-impact/ResourceRecovery";
import PageHeader from "@/components/ui/PageHeader";
import Tab from "@/components/ui/Tab";
import TabScreen from "@/components/ui/TabScreen";
import React from "react";

async function EnvironmentalImpact(props: {
  searchParams?: Promise<{
    tab?: string;
  }>;
}) {
  const header = {
    title: "Environmental Impact Assessment",
    subtitle:
      "Analyze the potential environmental impacts of waste-to-energy solutions",
  };

  const tabs = [
    {
      name: "Air Emissions",
      tab: "air-emissions",
      page: <AirEmissions />,
    },
    {
      name: "Carbon Footprint",
      tab: "carbon-footprint",
      page: <CarbonFootprint />,
    },
    {
      name: "Land Use",
      tab: "land-use",
      page: <LandUse />,
    },
    {
      name: "Resource Recovery",
      tab: "resource-recovery",
      page: <ResourceRecovery />,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <TabScreen tabs={tabs} />
    </div>
  );
}

export default EnvironmentalImpact;
