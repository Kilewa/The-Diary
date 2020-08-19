export class Diary {
    showDescription: boolean;
    constructor(public id: number, public name: string, public description: string,public diaryDate: Date) {
        this.showDescription = false;
    }
}