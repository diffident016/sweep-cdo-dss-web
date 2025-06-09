export const formatNumberWithCommas = (num: number): string => {
  return new Intl.NumberFormat().format(num);
};

export const getInitial = (name: string, count: number = 2): string => {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  return words
    .slice(0, count)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
};

export const getRoleName = (role: string): string => {
  switch (role) {
    case "super-admin":
      return "Super Admin";
    case "admin":
      return "Sweep Admin";
    case "viewer":
      return "Viewer";
    default:
      return "Unknown Role";
  }
};
