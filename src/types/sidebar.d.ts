import { IconType } from "react-icons/lib";

export type SidebarItem = {
  name: string;
  to: string;
  icon: IconType;
  role?: string;
};
