
export interface IVariantResponse {
    id:      number;
    size:    Size;
    stock:   Stock;
    type:    Type;
}

export interface Size {
    id:    number;
    value: string;
}

export interface Stock {
    id:       number;
    quantity: number;
}

export interface Type {
    id:   number;
    name: string;
}
