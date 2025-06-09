"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Map } from "./Map";

function GISMap() {
  const center = { lat: 8.480940640227626, lng: 124.64712510882084 };
  const locations = useMemo(() => {
    return [{ id: "1", lat: 8.480940640227626, lng: 124.64712510882084 }];
  }, []);
  return (
    <div className="min-h-[550px] h-full w-full rounded-md border border-gray-300">
      <Map center={center} locations={locations} />
    </div>
  );
}

export default GISMap;
