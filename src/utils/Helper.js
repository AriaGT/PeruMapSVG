import { REGION_COLORS } from "../constants"

export const asignColorToRegion = (regionString) => {
  return REGION_COLORS[regionString]
}

export const formatTite = (string) => {
  string = string.replace(/_/g, ' ');
  string = string.toLowerCase();
  string = string.replace(/\b\w/g, c => c.toUpperCase());
  return string;
}