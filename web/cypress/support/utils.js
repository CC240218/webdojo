
export function toDayFormat() {
    const toDay = new Date();
    const day = String(toDay.getDate()).padStart(2, '0');
    const month = String(toDay.getMonth() + 1).padStart(2, '0');
    const year = toDay.getFullYear();

    return `${day}/${month}/${year}`;
  } 