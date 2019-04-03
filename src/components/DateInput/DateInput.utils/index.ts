import { DateTime } from "luxon";

export const recomputeDays = (date: DateTime) => {
    const days = [];
    for (let i = 1; i <= date.daysInMonth; i++) {
        days.push(String(i));
    }

    return days;
}