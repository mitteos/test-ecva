export interface DayValueState {
    type: string;
    value: number;
}

export interface DayState {
    day: string;
    value: DayValueState[]
}
