export enum Suscripcion{
    Gratuita=1,
    Basica=2,
    Premium=3

}

export interface CountryI{
    id:number;
    name:string;
}
export interface CityI{
    id:number;
    countryId:number;
    name:string;
}