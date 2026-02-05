import { routes, cities } from './hikingData'

export function getRoutes() {
    return routes;
}

export function getRouteById(id: number) {
    return routes.find(route => route.id === id);
}

export function getCityById(id: number) {
    return cities.find(city => city.id === id);
}