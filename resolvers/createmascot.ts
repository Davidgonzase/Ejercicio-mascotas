import { GraphQLError } from "graphql";
import MascotSchema from "../db/dbschema.ts"
import { Pet } from "../types.ts";

const createMascot = async (name:string,breed:string):Promise<Pet> => { 
    try{
        const newmascot = new MascotSchema({name,breed})
        await newmascot.save();
        if(!newmascot)throw Error;
        const res:Pet={
            id:newmascot._id,
            name:newmascot.name,
            breed:newmascot.breed
        }
        return res;
    }catch(error){
        throw new GraphQLError(`Error at creating mascot`, {
            extensions: { code: "INTERNAL_ERROR" },
        });
    }
}

export default createMascot