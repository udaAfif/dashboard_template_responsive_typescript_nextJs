import { toast } from "react-toastify";

// Store Data
const SetStorage = (key: string, value: any) => {
  const selectedCategoryName =
    typeof window !== "undefined"
      ? localStorage.setItem(key, JSON.stringify(value))
      : undefined;
  return selectedCategoryName;
};

// Retrive Data
const GetStorage = (key: string) => {
  const data =
    typeof window !== "undefined" ? localStorage.getItem(key) : undefined;
  try {
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    toast.error("Error get data", {
      position: "top-right",
    });
  }
};

export { SetStorage, GetStorage };
