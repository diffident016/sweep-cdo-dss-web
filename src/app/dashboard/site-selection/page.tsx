import GISMap from "@/components/site-suggestions/GISMap";
import SiteCard from "@/components/site-suggestions/SiteCard";
import PageHeader from "@/components/ui/PageHeader";
import dynamic from "next/dynamic";
import React from "react";

function SiteSelection() {
  const header = {
    title: "Site Selection",
    subtitle:
      "Explore optimal locations for waste-to-energy facilities based on multiple factors",
  };

  const sites = [
    {
      name: "Site A - Barangay Carmen",
      score: "85",
      distance: "20",
      acceptance: "High",
    },
    {
      name: "Site B - Barangay Lumbia",
      score: "75",
      distance: "30",
      acceptance: "Medium",
    },
    {
      name: "Site C - Barangay Cugman",
      score: "90",
      distance: "15",
      acceptance: "High",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <GISMap />
      <div className="w-full h-full flex flex-row gap-4 pb-4">
        {sites.map((site) => (
          <SiteCard key={site.name} site={site} />
        ))}
      </div>
    </div>
  );
}

export default SiteSelection;
