import { Country } from '../interfaces/country';

const API_URL = 'https://api.sampleapis.com/countries/countries';

export async function getCountries (){
    const response = await fetch(API_URL);
    const data: Country[] = await response.json();
    return data;
};

export async function  getCountry (id: number) {
    const response = await fetch(`${API_URL}/${id}`);
    const data: Country = await response.json();
    return data;
};
