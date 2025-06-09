import { test } from "@/app/api/services/dss";
import { getAuthToken } from "@/data/auth";
import React from "react";

async function MDCA() {
  const result = await test();

  console.log("MDCA result:", result);

  return <div>MCDA</div>;
}

export default MDCA;
