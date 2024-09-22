import { SimpleProduct } from "./simple-product";

export interface GetProductsResponse {
    products: SimpleProduct[];
    links:    Links;
    meta:     Meta;
}

export interface Links {
    first: string;
    last:  string;
    prev:  null;
    next:  string;
}

interface Meta {
    current_page: number;
    from:         number;
    last_page:    number;
    links:        Link[];
    path:         string;
    per_page:     number;
    to:           number;
    total:        number;
}

interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}