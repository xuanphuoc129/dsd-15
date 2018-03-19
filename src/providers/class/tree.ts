import { Tree } from "../interfaces/tree";

export class Trees {
    /**firebaseId */
    firebaeId: string;
    /**Ten */
    name: string;
    /**id */
    id: string;
    /**luong nuoc can tuoi */
    waterNeed: number;
    /**lich su tuoi cay */
    history: Array<string>;
    /**trang thai */
    status: number;
    /**offsetX */
    left: string;
    /**offsetY */
    top: string;
    constructor(data?: Tree) {
        this.reset();
        if (data) this.parse(data);
    }

    reset() {
        this.firebaeId = "";
        this.name = "";
        this.id = "";
        this.waterNeed = 0;
        this.history = [];
        this.status = -1;
        this.left = "0px";
        this.top = "0px";
    }

    parse(data) {
        if (data.firebase_id) this.firebaeId = data.firebase_id;
        if (data.name) this.name = data.name;
        if (data.id) this.id = data.id;
        if (data.waterNeed) this.waterNeed = data.waterNeed;
        if (data.history) this.history = data.history;
        if (data.status) this.status = data.status;
        if (data.left)this.left = data.left + "px";
        if (data.top) this.top = data.top + "px";
    }
}