import { GraphQLError } from "graphql";
import MascotSchema from "../db/dbschema.ts"
import { Pet } from "../types.ts";

const updatePet = async (id:string,name?:string,breed?:string):Promise<Pet> => { 
    try{
        const mascot = await MascotSchema.findById({ _id:id });
        if (!mascot) throw Error;
        mascot.name = name || mascot.name;
        mascot.breed = breed || mascot.breed;
        mascot.save()
        const res:Pet={
            id:mascot._id,
            name:mascot.name,
            breed:mascot.breed
        }
        return res;
    }catch(error){
        throw new GraphQLError(`No pet found with id ${id}`, {
            extensions: { code: "NOT_FOUND" },
        });
    }
}

export default updatePet