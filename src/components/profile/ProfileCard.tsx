"use client";
import React, { useState } from "react";
import CardWrapper from "../ui/CardWrapper";
import Input from "../ui/Input";
import { LuPencilLine, LuSave, LuX } from "react-icons/lu";
import { User } from "@/types/user";
import { getInitial, getRoleName } from "@/utils/formats";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";

function ProfileCard({ user }: { user: User }) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      role: user.role || "",
    },
  });

  return (
    <CardWrapper>
      <div className="px-4 py-2">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row gap-6 items-center">
            <div className="bg-primary rounded-full w-26 h-26 flex items-center justify-center">
              <p className="text-3xl font-bold text-white">
                {getInitial(user.name)}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold leading-1.5">{user.name}</h1>
              <p className="text-lg ">{getRoleName(user.role)}</p>
            </div>
          </div>
          <button
            disabled={isEditing}
            onClick={() => {
              setIsEditing(true);
            }}
            className="flex flex-row bg-gray-900 gap-2 text-white h-10 w-24 justify-center rounded-lg items-center cursor-pointer hover:bg-gray-800 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <LuPencilLine className="w-5 h-5" />
            Edit
          </button>
        </div>
        <form className="flex flex-col py-8 gap-2">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-full">
              <Input
                disabled={!isEditing}
                label="Name"
                register={register("name")}
              />
            </div>
            <div className="flex flex-col w-full" />
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-full">
              <Input
                disabled={!isEditing}
                label="Email Address"
                register={register("email")}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="font-medium py-2">User Role</label>
              <select
                disabled
                className="border border-gray-300 rounded p-2 disabled:bg-gray-100 text-gray-900/50"
              >
                <option>{getRoleName(user.role)}</option>
              </select>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between mt-8">
            <div className="flex flex-row gap-4">
              <button
                type="submit"
                style={{ opacity: isEditing ? 1 : 0 }}
                onClick={() => {
                  setIsEditing(false);
                }}
                className="flex flex-row bg-gray-900 gap-2 text-white h-12 w-40 justify-center rounded-lg items-center cursor-pointer hover:bg-gray-800 transition duration-300"
              >
                <LuSave className="w-5 h-5" />
                Save Changes
              </button>
              <button
                type="submit"
                style={{ opacity: isEditing ? 1 : 0 }}
                onClick={() => {
                  setIsEditing(false);
                }}
                className="flex flex-row border-gray-300 gap-2 text-gray-900 border bg-gray-100 h-12 w-40 justify-center rounded-lg items-center cursor-pointer hover:bg-gray-200 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </CardWrapper>
  );
}

export default ProfileCard;
