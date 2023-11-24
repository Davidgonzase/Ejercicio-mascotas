import { GraphQLError } from "graphql";
import MascotSchema from "../db/dbschema.ts"
import { Pet } from "../types.ts";

const obtainbreed = async (breed:string):Promise<Pet[]> => { 
    try{
        const res = await MascotSchema.find({breed:breed});
        if(!res)throw Error;
        const pet:Pet[]=res.map(i=> {return{
            id:i._id,
            name:i.name,
            breed:i.breed
        }})
        return pet;
    }catch(error){
        throw new GraphQLError(`No pet found with breed ${breed}`, {
            extensions: { code: "NOT_FOUND" },
        });
    }
}

export default obtainbreed