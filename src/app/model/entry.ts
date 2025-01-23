export class Entry{
    DateTime: Date;
    Description: string;
    pinned: boolean = false;
    constructor(journalDateTime: Date, journalDescription: string){
        this.DateTime = journalDateTime;
        this.Description = journalDescription;
    }

}
