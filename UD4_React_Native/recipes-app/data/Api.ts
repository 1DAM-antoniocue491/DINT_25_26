import { foodList } from "./Data";

export function getData(){
    return foodList;
}

export function getDataById(id: number) {
    return foodList.find(food => food.id === id);
}