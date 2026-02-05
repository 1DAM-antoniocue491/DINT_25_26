export interface Route {
    id: number;
    title: string;
    description: string;
    difficulty: 'Fácil' | 'Moderada' | 'Difícil';
    distance: string; 
    duration: string; 
    image: string;
    elevationGain: string;
    cityId: number;
}

export interface City {
    id: number;
    name: string;
    description: string;
    population: string;
    climate: string;
    image: string;
    routes: number[]; 
}
