import { GraphQLError } from "graphql";
import MascotSchema from "../db/dbschema.ts"
import { Pet } from "../types.ts";

const obtainid = async (id:string):Promise<Pet> => { 
    try{
        const res = await MascotSchema.findById({_id:id});
        if(!res)throw Error;
        const pet={
            id:res._id,
            name:res.name,
            breed:res.breed
        }
        return pet;
    }catch(error){
        throw new GraphQLError(`No pet found with id ${id}`, {
            extensions: { code: "NOT_FOUND" },
        });
    }
}

export default obtainid