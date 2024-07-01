function GetDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const previousMonth = String(today.getMonth()).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const oldMonthFormattedDate = `${year}-${previousMonth}-${day}`;
  const formattedDate = `${year}-${month}-${day}`;
  return { oldMonthFormattedDate, formattedDate };
}
export default GetDate;
