export function formatDate(date) {
    if(!date) {
        return "..."
    }
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("en-GB", options);
  const day = formattedDate.split(" ")[0];
  const month = formattedDate.split(" ")[1];
  const year = formattedDate.split(" ")[2];

  const suffix =
    day === "1" || day === "21" || day === "31"
      ? "st"
      : day === "2" || day === "22"
      ? "nd"
      : day === "3" || day === "23"
      ? "rd"
      : "th";
  return `${parseInt(day)}${suffix} ${month}, ${year}`;
}


