import { SidebarItem } from "@/types/sidebar";
import {
  LuLayoutDashboard,
  LuRecycle,
  LuGitCompareArrows,
  LuMapPinned,
  LuMap,
  LuListChecks,
  LuPanelLeftClose,
  LuPanelRightClose,
  LuBoxes,
  LuLeaf,
  LuHandCoins,
  LuChartSpline,
  LuScale,
  LuZap,
  LuDatabase,
} from "react-icons/lu";

export const SidebarItems: SidebarItem[] = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    name: "Waste Analysis",
    to: "/dashboard/waste-analysis",
    icon: LuRecycle,
  },
  {
    name: "Technology Comparison",
    to: "/dashboard/technology-comparison",
    icon: LuGitCompareArrows,
  },
  {
    name: "Site Selection",
    to: "/dashboard/site-selection",
    icon: LuMapPinned,
  },
  {
    name: "Model Simulation",
    to: "/dashboard/model-simulation",
    icon: LuBoxes,
  },
  {
    name: "Financial Analysis",
    to: "/dashboard/financial-analysis",
    icon: LuHandCoins,
  },
  {
    name: "Environmental Impact",
    to: "/dashboard/environmental-impact",
    icon: LuLeaf,
  },
  {
    name: "Multi-Criteria Analysis",
    to: "/dashboard/multi-criteria-analysis",
    icon: LuChartSpline,
  },
  {
    name: "Policy Assistant",
    to: "/dashboard/policy-assistant",
    icon: LuScale,
  },
  {
    name: "Load Profile",
    to: "/dashboard/load-profile",
    icon: LuZap,
  },
  {
    name: "Data Management",
    to: "/dashboard/data-management",
    icon: LuDatabase,
  },
];
