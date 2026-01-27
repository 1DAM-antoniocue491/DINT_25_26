export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: number;
    season: number;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    image: string;
}