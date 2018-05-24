export class MovieSearch {
    title: string;
    release_date: string;
    poster_path: string;

    constructor(title: string, release_date: string, poster_path: string) {
        this.title = title;
        this.release_date = release_date;
        this.poster_path = 'https://image.tmdb.org/t/p/'+poster_path;
    }
}
