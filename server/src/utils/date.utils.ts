export const formatVoucherDate = (isoDate: string) => {
  const date = new Date(isoDate);

  return new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
