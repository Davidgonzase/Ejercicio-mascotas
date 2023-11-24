import { Pet } from "../types.ts";
import createMascot from "./createmascot.ts";
import deleteMascot from "./deletemascot.ts";
import updatePet from "./update.ts";

export const Mutation = {
    addPet: async (_: unknown, args: {name: string; breed: string }):Promise<Pet> => {
        return createMascot(args.name,args.breed);
    },
    deletePet: async (_: unknown, args: { id: string }):Promise<string> => {
        return deleteMascot(args.id);
    },
    updatePet: async (_: unknown,args: { id: string; name: string; breed: string }):Promise<Pet> => {
        return updatePet(args.id,args.name,args.breed);
    },
};