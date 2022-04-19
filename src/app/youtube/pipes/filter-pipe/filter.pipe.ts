import { Pipe, PipeTransform } from '@angular/core';
import { PodcastItem } from '../../models/podcast-item.typing';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(arr: PodcastItem[], searchVal: string): PodcastItem[] {
        if (typeof arr === 'undefined') {
            return [] as PodcastItem[];
        }
        if (!searchVal) {
            return arr;
        }
        const searchValue = searchVal.toLowerCase().trim();
        return arr.filter((item) => item.snippet.title.toLowerCase().trim().includes(searchValue));
    }
}
