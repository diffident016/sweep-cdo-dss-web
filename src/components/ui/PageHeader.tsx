import React from "react";

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-light mt-2">{subtitle}</p>
    </div>
  );
}

export default PageHeader;
