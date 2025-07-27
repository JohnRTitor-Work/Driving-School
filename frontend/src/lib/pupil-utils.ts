export function getInitials(forename: string, surname: string) {
  return ((forename?.[0] ?? "") + (surname?.[0] ?? "")).toUpperCase();
}
