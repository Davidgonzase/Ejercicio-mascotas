import MascotSchema from "../db/dbschema.ts"
import { Pet } from "../types.ts";

const obtain = async ():Promise<Pet[]> => {
    let pet:Pet[] = []
    try{
        const res = await MascotSchema.find({});
        pet=res.map(i=> {return{
            id:i._id,
            name:i.name,
            breed:i.breed
        }})
        return pet;
    }catch(error){
        return pet;
    }
}

export default obtain