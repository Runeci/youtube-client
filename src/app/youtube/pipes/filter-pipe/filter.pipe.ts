import { Pipe, PipeTransform } from '@angular/core';
import { PodcastItem } from '../../models/podcast-item.typing';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(arr: PodcastItem[], searchVal: string): PodcastItem[] {
        const searchValue = searchVal.toLowerCase().trim();
        if (!searchValue) {
            return arr;
        }
        return arr.filter((item) => item.snippet.tags.includes(searchValue));
    }
}
