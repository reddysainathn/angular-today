import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string, args?: any) {
        if (!value)
            return null;
        let arr = value.split(" ");
        for (let i: number = 0; i < arr.length; i++) {
            if (i > 0 && this.isPreposition(arr[i])) {
                arr[i] = arr[i].toLowerCase();
            } else {
                arr[i] = this.toTitleCase(arr[i]);
            }
        }
        console.log(arr)
        return arr.join(' ');
    }

    private isPreposition(word: String): boolean {
        let prepositons = [
            'of', 'the'
        ];
        return prepositons.includes(word.toLowerCase());
    }

    private toTitleCase(text:string):string{
        return text.substr(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
    }
}