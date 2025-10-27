export interface IBooks {
    ISBN: number;
    titulo: string;
    autor: string;
    imagen: string;
    fechaPublicacion: string;
    state: "Leído"|"Pendiente"
    categoria: string;
    favourite: boolean;
}