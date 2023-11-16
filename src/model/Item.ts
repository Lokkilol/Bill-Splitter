class Item {
    private _name: string;
    private _unitPrice: number;
    private _quantity: number;

    constructor(name: string, cost: number, quantity: number) {
        this._name = name;
        this._unitPrice = cost; 
        this._quantity = quantity;
        
    }

    get name() : string {
        return this._name;
    }

    get unitPrice(): number {
        return this._unitPrice;
    }
}