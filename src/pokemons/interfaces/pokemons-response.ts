export interface Result {
    name: string;
    url:  string;
}

export interface IPokemonsResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}