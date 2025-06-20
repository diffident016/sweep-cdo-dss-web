import DataTable from "@/components/data-management/DataTable";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

function DataManagement() {
  const header = {
    title: "Data Management",
    subtitle: "Manage and configure data sources for each module",
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <DataTable />
    </div>
  );
}

export default DataManagement;
