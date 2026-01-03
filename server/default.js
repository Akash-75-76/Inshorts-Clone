import { data } from "./constants/data.js";
import newsSchema from "./schema/model/news-schema.js";
const defaultData=async()=>{
    try {
       await newsSchema.insertMany(data);
        console.log("Default data inserted successfully");
    } catch (error) {
        console.log("Error",error);
    }
}
export default defaultData;