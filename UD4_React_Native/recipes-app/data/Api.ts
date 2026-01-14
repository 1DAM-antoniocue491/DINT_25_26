import { foodList } from "./Data";
import { IRecipe } from "../types/Interfaces";
const API_URL = 'https://api.sampleapis.com/recipes/recipes';

export function getData(){
    return foodList;
}

export function getDataById(id: number) {
    return foodList.find(food => food.id === id);
}

export async function getRecipes(): Promise<IRecipe[]> {
  const resp = await fetch(API_URL);

  if (!resp.ok) {
    throw new Error('Error al obtener las recetas');
  }
 
  return resp.json();
}

export async function getRecipesById(id: number): Promise<IRecipe> {
  
  const resp = await fetch(API_URL+"/"+id);
 
  if (!resp.ok) {
    throw new Error('Error al obtener las recetas');
  }
 
  const data = (await resp.json()) as IRecipe;
  //Se usa "as IRecipe" para indicar a TypeScript que el JSON recibido tiene la    estructura de IRecipe, ya que resp.json() no tiene tipo definido.
  
  return data;

}