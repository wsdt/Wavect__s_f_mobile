/** Corresponds to the ApiResult.ts in the used api-Version! */
export class ApiResponse {
    get err(): string | Error | Array<string | Error> | null {
        return this._err
    }

    set err(value: string | Error | Array<string | Error> | null) {
        this._err = value
    }

    get res(): [] | {} | null {
        return this._res
    }

    set res(value: [] | {} | null) {
        this._res = value
    }

    // Undefined forbidden (never set undefined as developer)
    private _err!: string | Error | string | Error | Array<string | Error> | null
    private _res!: [] | {} | null
}
