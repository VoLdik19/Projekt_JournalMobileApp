export class Entry{
    DateTime: Date;
    Description: string;
    constructor(journalDateTime: Date, journalDescription: string){
        this.DateTime = journalDateTime;
        this.Description = journalDescription;
    }

}