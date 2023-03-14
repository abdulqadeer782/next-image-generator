const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

require('dotenv').config();

export default async (req,res) => {
    try {
        if(req.body){
            const response = await openai.createImage({
                prompt:req.body.name,
                n: parseInt(req.body.quantity),
                // size: "512x512",
              });
              res.status(200).json({data : response.data.data})
        }
    } catch (error) {
        res.status(500).json(error);
    }
}