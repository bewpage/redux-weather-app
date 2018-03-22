import { REMOVE_CITY } from '../constants';


export const deleteCity = (cityId) => ({
    type: REMOVE_CITY,
    cityId
});