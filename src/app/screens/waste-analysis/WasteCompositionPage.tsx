"use client";
import CalorificValue from "@/components/waste-analysis/CalorificValue";
import WasteComposition from "@/components/waste-analysis/WasteComposition";
import WastePropertiesAnalysis from "@/components/waste-analysis/WastePropertiesAnalysis";
import React from "react";

function WasteCompositionPage() {
  return (
    <div className="flex flex-col py-4 w-full h-full gap-4 mb-4">
      <div className="flex flex-row gap-4 w-full h-full">
        <WasteComposition />
        <CalorificValue />
      </div>
      <WastePropertiesAnalysis />
    </div>
  );
}

export default WasteCompositionPage;
