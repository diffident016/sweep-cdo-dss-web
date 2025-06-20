"use client";
import React, { ComponentType, useState } from "react";
import CardWrapper from "../ui/CardWrapper";
import { Backdrop, Table, TableCell, TableHead, TableRow } from "@mui/material";
import UploadButton from "../ui/UploadButton";
import * as XLSX from "xlsx";
import { uploadFile } from "@/app/api/services/storage";
import SnackbarInfo, { initialSnackbar } from "../ui/SnackbarInfo";
import { groupArrayByKey } from "@/utils/arrays";
import { LoadProfile } from "@/types/loadProfile";
import dynamic from "next/dynamic";
import LoadProfileUpload from "../data-management/LoadProfileUpload";

function DataTable() {
  const [uploading, setUploading] = useState(false);
  const [showUpload, setShowUpload] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState({
    message: "",
    type: "info",
    modal: false,
  });

  const headers = [
    {
      id: "fileName",
      label: "File Name",
      width: 30,
      align: "left",
    },
    {
      id: "module",
      label: "Module",
      width: 30,
      align: "left",
    },
    {},
    {
      id: "dateUploaded",
      label: "Date Uploaded",
      width: 20,
      align: "left",
    },
    {
      id: "fileSize",
      label: "File Size",
      width: 10,
      align: "left",
    },
    {
      id: "actions",
      label: "Actions",
      width: 10,
      align: "center",
    },
  ];

  const modules: Record<string, React.JSX.Element> = {
    "Load Profile": <LoadProfileUpload />,
  };

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    onLoadFile(file);
  };

  const invalidDataError = () => {
    return setSnackbar({
      message: "File does not contain a valid data.",
      type: "error",
      modal: true,
    });
  };

  const uploadFileToServer = async (file: File, data: any) => {
    try {
      const response = await uploadFile(file, "Load Profile");

      console.log("File uploaded successfully:", response);
      console.log("Data to upload:", data);

      setSnackbar({
        message: "File uploaded successfully.",
        type: "success",
        modal: true,
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      setSnackbar({
        message: "Error uploading file.",
        type: "error",
        modal: true,
      });
    } finally {
      setUploading(false);
    }
  };

  const onLoadFile = (file: File) => {
    const reader = new FileReader();

    reader.readAsArrayBuffer(file);
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const parsedData: any = XLSX.utils.sheet_to_json(sheet);
      parsedData.pop();

      if (parsedData.length < 12) return invalidDataError();

      const perYearData: {}[] = [];

      parsedData.forEach((item: any) => {
        if (!item["Month"]) return invalidDataError();

        const month = item["Month"];

        Object.keys(item).map((key: string) => {
          if (key !== "Month") {
            perYearData.push({
              year: key,
              month: month,
              value: item[key],
            });
          }
        });
      });

      const groupedPerYearData = Object.keys(
        groupArrayByKey(perYearData, "year")
      ).map((year) => {
        return {
          name: sheetName,
          year: year,
          data: JSON.stringify(
            groupArrayByKey(perYearData, "year")[year].map((item: any) => ({
              month: item.month,
              value: item.value,
            }))
          ),
        };
      });
      uploadFileToServer(file, [{ [sheetName]: groupedPerYearData }]);
    };
  };

  const ModuleUpload = () => {
    return modules[showUpload || ""] ?? <div>Module not found</div>;
  };

  return (
    <CardWrapper>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-medium text-lg">Uploaded Files</h1>
        <UploadButton
          onUpload={(module: string) => {
            setShowUpload(module);
          }}
          uploading={uploading}
        />
      </div>

      <div className="w-full flex py-4">
        <div className="flex flex-row items-center w-full">
          {headers.map((header) => (
            <div
              key={header.id}
              style={{
                width: `${header.width}%`,
                // backgroundColor: `#${Math.floor(Math.random() * 16777215)
                //   .toString(16)
                //   .padStart(6, "0")}`,
              }}
            >
              <p
                style={{
                  textAlign: `${header.align as "left" | "center" | "right"}`,
                }}
                className="font-medium font-base"
              >
                {header.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {snackbar.modal && (
        <SnackbarInfo
          isOpen={snackbar.modal}
          type={snackbar.type as any}
          message={snackbar.message}
          onClose={() => {
            setSnackbar(initialSnackbar);
          }}
        />
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={!!showUpload}
        onClick={() => {
          setShowUpload(null);
        }}
      >
        <ModuleUpload />
      </Backdrop>
    </CardWrapper>
  );
}

export default DataTable;
