export class LikeComponent {
    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    get likesCount() {
        return this._likesCount;
    }

    set likesCount(cou1) {
        this._likesCount = cou1;
    }

    get isSelected() {
        return this._isSelected;
    }

    set isSelected(cou2) {
        this._isSelected = cou2;
    }

    onCLick() {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // }
        // else {
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
    }
}