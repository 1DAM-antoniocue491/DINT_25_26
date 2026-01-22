export interface Country {
    id: number;
    name: string;
    currency: string;
    phone: string;
    population: number;
    media: {
        flag: string;
        emblem: string;
        orthographic: string;
    };
    abbreviation: string;
    capital: string;
}
