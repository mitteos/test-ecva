import {DayState} from "utils/type";

export const useOpeningHours = (day: DayState) => {
    const openingHours = []

    const openTimes = day.value?.filter(el => el.type === "open"),
        closeTimes = day.value?.filter(el => el.type === "close");

    for (let i = 0; i <= openTimes.length; i++) {
        if(openTimes[i] && closeTimes[i]) {
            openingHours.push(
                {
                    id: i,
                    value: [
                        {
                            type: openTimes[i]?.type,
                            value: `${openTimes[i].value > 43200
                                ? Math.floor(openTimes[i].value / 3600 / 2)
                                : openTimes[i].value / 3600} ${openTimes[i].value > 43200 ? "PM" : "AM"}`
                        },
                        {
                            type: closeTimes[i]?.type,
                            value: `${closeTimes[i].value > 43200
                                ? Math.floor(closeTimes[i].value / 3600 / 2)
                                : closeTimes[i].value / 3600} ${closeTimes[i].value > 43200 ? "PM" : "AM"}`
                        }
                    ]
                }
            )
        }
    }

    return openingHours
}
