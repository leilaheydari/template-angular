export function removeSpace(data: string): string {
  if (data) {
    return data.replace(/\s/g, "");
  } else {
    return data
  }
}
