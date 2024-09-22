export interface SimpleProduct {
    id:          number;
    name:        string;
    slug:        string;
    price:       number;
    image:       string;
    description: string;
    category:    SimpleProductCategory;
    createdAt:   Date;
}

export interface SimpleProductCategory {
    id:   number;
    name: string;
    slug: string;
}
