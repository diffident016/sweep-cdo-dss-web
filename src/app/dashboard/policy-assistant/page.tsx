import PolicyCard from "@/components/policy-assistant/PolicyCard";
import PageHeader from "@/components/ui/PageHeader";
import React from "react";

async function PolicyAssistant(props: {
  searchParams?: Promise<{
    tab?: string;
  }>;
}) {
  const header = {
    title: "Policy Assistant",
    subtitle:
      "List and customize policy recommendations for waste-to-energy initiatives",
  };

  const policies = [
    {
      name: "Waste-to-Energy Incentives",
      description:
        "Provide financial incentives for waste-to-energy projects to encourage investment and development.",
      impact: "High",
      complexity: "Medium",
      timeline: "1-2 years",
    },
    {
      name: "Regulatory Framework",
      description:
        "Establish clear regulations and standards for waste-to-energy facilities to ensure safety and environmental compliance.",
      impact: "Medium",
      complexity: "High",
      timeline: "2-3 years",
    },
    {
      name: "Public Awareness Campaigns",
      description:
        "Launch campaigns to educate the public about the benefits of waste-to-energy technologies and practices.",
      impact: "Medium",
      complexity: "Low",
      timeline: "6 months - 1 year",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <div className="flex flex-row gap-4">
        {policies.map((policy) => (
          <PolicyCard key={policy.name} policy={policy} />
        ))}
      </div>
    </div>
  );
}

export default PolicyAssistant;
