import { itemsApiUrl } from "../config";

export const fetchItems = () => fetch(itemsApiUrl).then(result => result.json());
