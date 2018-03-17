export interface Tree{
    /**firebaseId */
    firebaeId : string;
    /**Ten */
    name : string;
    /**id */
    id: string;
    /**luong nuoc can tuoi */
    waterNeed: number;
    /**lich su tuoi cay */
    history: Array<string>;
    /**trang thai */
    status: number;
    /**offsetX */
    left : number;
    /**offsetY */
    top : number;
}