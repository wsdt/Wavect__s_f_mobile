export class ChallengeInformation {
    get id(): string {
        return this._id
    }

    set id(value: string) {
        this._id = value
    }

    get instruction(): string {
        return this._instruction
    }

    set instruction(value: string) {
        this._instruction = value
    }

    get privacy(): string {
        return this._privacy
    }

    set privacy(value: string) {
        this._privacy = value
    }

    get intention(): string {
        return this._intention
    }

    set intention(value: string) {
        this._intention = value
    }

    get misc(): string {
        return this._misc
    }

    set misc(value: string) {
        this._misc = value
    }

    private _id!: string
    private _instruction!: string
    private _privacy!: string
    private _intention!: string
    private _misc!: string

    public constructor(id: string, instruction: string, privacy: string, intention: string, misc: string) {
        this.id = id
        this.instruction = instruction
        this.privacy = privacy
        this.intention = intention
        this.misc = misc
    }
}
