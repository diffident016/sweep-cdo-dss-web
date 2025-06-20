import LoadProfileCard from "@/components/load-profile/LoadProfileCard";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

function LoadProfile() {
  const header = {
    title: "Load Profile",
    subtitle: "Analyze and visualize the load profile from energy providers",
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <LoadProfileCard />
    </div>
  );
}

export default LoadProfile;
