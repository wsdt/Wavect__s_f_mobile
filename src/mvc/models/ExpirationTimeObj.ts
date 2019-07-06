export class ExpirationTimeObj {
    get milliseconds(): number {
        return this._milliseconds
    }

    set milliseconds(value: number) {
        this._milliseconds = value
    }
    get days(): number {
        return this._days
    }

    set days(value: number) {
        this._days = value
    }

    get hours(): number {
        return this._hours
    }

    set hours(value: number) {
        this._hours = value
    }

    get minutes(): number {
        return this._minutes
    }

    set minutes(value: number) {
        this._minutes = value
    }

    get seconds(): number {
        return this._seconds
    }

    set seconds(value: number) {
        this._seconds = value
    }

    private _seconds!: number
    private _minutes!: number
    private _hours!: number
    private _days!: number
    private _milliseconds!: number

    public constructor(milliSeconds: number) {
        this.milliseconds = milliSeconds

        let hours, minute, seconds
        seconds = Math.floor(milliSeconds / 1000)
        minute = Math.floor(seconds / 60)
        this.seconds = seconds % 60
        hours = Math.floor(minute / 60)
        this.minutes = minute % 60
        this.days = Math.floor(hours / 24)
        this.hours = hours % 24
    }
}
