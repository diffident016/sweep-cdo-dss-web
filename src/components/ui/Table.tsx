import React from "react";

function Table({ headers, data }: { headers: string[]; data: any[] }) {
  return (
    <div className="w-full h-full flex flex-col">
      <table className="w-full h-full border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border-b-2 border-gray-200 p-2 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="p-2">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
