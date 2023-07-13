import {DayState, DayValueState} from "utils/type";
import openingHours from "utils/openingHours.json";


export const useDateParse = () => {

    const daysCollection: DayState[] = []
    for (let [key, value] of Object.entries(openingHours)) {
        daysCollection.push({
            day: key,
            value: value
        })
    }

    const openingTime: DayState[] = daysCollection.map((day, index) => {
        const times = day.value || []
        if(!times.length) return day
        const openTime = times.filter(el => el.type === "open")
        const closeTime = times.filter(el => el.type === "close")
        if(closeTime.length < openTime.length) {
            const nextDayIndex = index >= daysCollection.length - 1 ? daysCollection.length - (index + 1) : index + 1

            const formattedDay = {
                ...day,
                value: [...day.value, daysCollection[nextDayIndex].value.find(el => el.type === "close") || {} as DayValueState]
            }
            const closeIndex = daysCollection[nextDayIndex].value.findIndex(el => el.type === "close")
            if(closeIndex !== -1) {
                daysCollection[nextDayIndex].value.splice(closeIndex, 1)
            }

            return formattedDay
        }
        return day
    })


    return openingTime
}
