import CollectionInfrastructureAssessment from "@/components/waste-analysis/CollectionInfrastructureAssesment";
import WasteCollectionEfficiencyByArea from "@/components/waste-analysis/WasteCollectionEfficiencyByArea";
import React from "react";

function CollectionEfficiency() {
  return (
    <div className="flex flex-col py-4 w-full h-full gap-4 mb-4">
      <div className="w-full max-h-[450px]">
        <WasteCollectionEfficiencyByArea />
      </div>
      <CollectionInfrastructureAssessment />
    </div>
  );
}

export default CollectionEfficiency;
