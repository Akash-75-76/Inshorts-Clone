import newsSchema from "../schema/model/news-schema.js";
export const getNews=async (req,res)=>{
    try {
      let data= await newsSchema.find({});
        res.status(200).json(data);
    } catch (error) { 
        res.status(500).json("Error while fetching news");
    }
}
