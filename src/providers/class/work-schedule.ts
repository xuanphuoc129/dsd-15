export class WorkSchedule{
    firebase_id: string;
    id: string;
    user_ids: Array<string>;
    works: Array<string>;
    constructor(){

    }
    reset(){
        this.firebase_id = "";
        this.id = "";
        this.user_ids = [];
        this.works = [];
    }
}