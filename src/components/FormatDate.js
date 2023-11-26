import React from "react";

function FormatDate(createdAtString) {
  const createdAtDate = new Date(createdAtString);

  const year = createdAtDate.getFullYear();
  const month = String(createdAtDate.getMonth() + 1).padStart(2, "0");
  const day = String(createdAtDate.getDate()).padStart(2, "0");
  const hours = String(createdAtDate.getHours()).padStart(2, "0");
  const minutes = String(createdAtDate.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export default FormatDate;
