interface IDateProvider {
    compareInHours(start_date: Date, end_date: Date): number;
    convertToUtc(date: Date): string;
    dateNow(): Date;
    createLaterDate(additionalDays: number): Date;
    compareInDays(start_date: Date, end_date: Date): number;
    stringToDate(date: string): Date;
    dateToString(date: Date): string;
    addHours(hours: number): Date;
    compareIfBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
