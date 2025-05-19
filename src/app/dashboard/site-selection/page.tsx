import PageHeader from "@/components/ui/PageHeader";
import React from "react";

function SiteSelection() {
  const header = {
    title: "Site Selection",
    subtitle:
      "Explore optimal locations for waste-to-energy facilities based on multiple factors",
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 overflow-auto">
      <PageHeader title={header.title} subtitle={header.subtitle} />
    </div>
  );
}

export default SiteSelection;
