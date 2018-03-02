import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string, args?: any) {
        if (!value)
            return null;
        //let actualLimit = (limit) ? limit : 50;
        //value = value.toUpperCase();
        let prepositons = [
            'of', 'the'
        ];
        let arr = value.split(" ");
        for (let i: number = 0; i < arr.length; i++) {
            if (i > 0 && prepositons.includes(arr[i].toLowerCase())) {
                arr[i] = arr[i].toLowerCase();
            } else {
                arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substring(1, arr[i].length).toLowerCase();
            }
        }
        console.log(arr)
        return arr.join(' ');
    }
}