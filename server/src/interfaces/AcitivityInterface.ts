export interface Activity {
    ownerId: number,
    activityName: string,
    rate: number,
    rateType: string,
    endTimeRequired: boolean,
    status: string,
    updateDate: Date,
    updateBy: string
}