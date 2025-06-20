import { auth } from "@/auth";
import ProfileCard from "@/components/profile/ProfileCard";
import PageHeader from "@/components/ui/PageHeader";
import { getUserById } from "@/data/user";
import { User } from "@/types/user";
import React from "react";

async function Profile() {
  const userSession = await auth();
  const user = await getUserById(userSession?.user?.id as string);

  const header = {
    title: "Profile",
    subtitle: "View and manage your user profile settings",
  };

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <PageHeader title={header.title} subtitle={header.subtitle} />
      <div className="w-[80%]">
        <ProfileCard user={user as User} />
      </div>
    </div>
  );
}

export default Profile;
