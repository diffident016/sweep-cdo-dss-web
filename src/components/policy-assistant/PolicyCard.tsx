import React from "react";

function PolicyCard({
  policy,
}: {
  policy: {
    name: string;
    description: string;
    impact: string;
    complexity: string;
    timeline: string;
  };
}) {
  const { name, description, impact, complexity, timeline } = policy;
  return (
    <div className="w-full h-full min-h-[250px] flex flex-col rounded-md bg-gray-50 p-6 gap-4 select-none cursor-pointer hover:shadow-sm transition duration-300">
      <div className="flex flex-row justify-between">
        <h1 className="font-medium text-lg">{name}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <p className="my-2 h-14 font-light">{description}</p>
        <div className="flex flex-row justify-between pt-4">
          <p>Estimated Impact:</p>
          <p className="font-medium">{impact}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Implement Complexity:</p>
          <p className="font-medium">{complexity}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Timeline:</p>
          <p className="font-medium">{timeline}</p>
        </div>
      </div>
    </div>
  );
}

export default PolicyCard;
