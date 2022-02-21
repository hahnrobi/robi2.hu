import { SinglePost } from "./single-post";

export class ListPost {
    constructor(
        public posts: SinglePost[],
        public total: number,
        public offset: number,
        public limit: number,
    ){}
}
