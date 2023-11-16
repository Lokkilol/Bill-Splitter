/**
 * This class represents a user, where they have the list of items that they are paying for, and their respective cost. 
 */

class User {
    private _name: string;
    private _totalBill: number;
    private _items: Item[];
    

    constructor(name: string) {
        this._name = name;
        this._totalBill = 0;
    }

    get name() : string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get totalBill(): number {
        return this._totalBill;
    }

    set totalBill(newCost: number) {
        this._totalBill = this._totalBill + newCost;
    }

    get items(): Item[] {
        return this._items;
    }

    set items(newItems: Item[]) {
        this._items = newItems;
    }

    addItem(item: Item): void {
        this._items.push(item);
    }

    addToTotalBill(itemPrice : number) {
        this._totalBill += itemPrice;
    }



    
}   
