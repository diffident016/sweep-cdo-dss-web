import React from "react";

function SiteCard({
  site,
}: {
  site: { name: string; score: string; distance: string; acceptance: string };
}) {
  const { name, score, distance, acceptance } = site;
  return (
    <div className="w-full h-full min-h-[200px] flex flex-col rounded-md bg-gray-50 p-6 gap-4 select-none cursor-pointer hover:shadow-sm transition duration-300">
      <div className="flex flex-row justify-between">
        <h1 className="font-medium text-lg">{name}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between pt-4">
          <p>Score:</p>
          <p className="font-medium">{score}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Distance to Waste Sources:</p>
          <p className="font-medium">{distance}%</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Community Acceptance:</p>
          <p className="font-medium">{acceptance}</p>
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
