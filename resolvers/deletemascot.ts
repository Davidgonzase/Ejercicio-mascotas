import { GraphQLError } from "graphql";
import MascotSchema from "../db/dbschema.ts"
import { Pet } from "../types.ts";

const deleteMascot = async (id:string):Promise<string> => { 
    try{
        const oldmascot=await MascotSchema.findByIdAndDelete({_id:id}).exec();
        if(!oldmascot)throw Error;
        return "Mascot deleted";
    }catch(error){
        throw new GraphQLError(`No pet found with id ${id}`, {
            extensions: { code: "NOT_FOUND" },
        });
    }
}

export default deleteMascot