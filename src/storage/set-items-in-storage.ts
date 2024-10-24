import type { Item } from "@/contexts/items-context/types";

export const setItemsInStorage = (items: Item[]) => {
  localStorage.setItem("@concentrix:items", JSON.stringify(items));
};
