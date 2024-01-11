function isToday(date) {
  const today = new Date();

  if (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  ) {
    return true;
  }
  return false;
}

function isYesterday(date) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (yesterday.toDateString() === date.toDateString()) {
    return true;
  }

  return false;
}

export function formatDate(date) {
  let result = "";
  if (isToday(date)) {
    result = "Today";
  } else if (isYesterday(date)) {
    result = "Yesterday";
  } else {
    result = `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  }
  return result;
}
