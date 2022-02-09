import { Author } from "./author";

export class SinglePost {
    constructor(
        public id: string,
        public title: string,
        public slug: string,
        public publishDate: number,
        public content: string,
        public author: Author
    ){}
    public featuredImage: string;
    public featuredImageCopyright: string;
    public excerpt: string
}
