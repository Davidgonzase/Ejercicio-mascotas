import {Pet} from "../types.ts";
import obtain from "./getall.ts";
import obtainbreed from "./getbreeds.ts";
import obtainid from "./getmascot.ts";

export const Query = {
    hello: () => "world",
    pets: async ():Promise<Pet[]> => {
        return obtain();
    },
    pet: async (_: unknown, args: { id: string }):Promise<Pet> => {
        return obtainid(args.id);
    },
    petByBreeds: async (_: unknown, args: { breed: string }):Promise<Pet[]> => {
        return obtainbreed(args.breed)
    }
};