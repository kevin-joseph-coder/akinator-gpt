
const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
    organization: "org-ZKjPHTlSsEsi08chyje1uq0H",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 10,
        temperature: 0,
    });

    console.log(response.data);
    if (response.data) {
        if (response.data.choices) {
            res.json({
                message: response.data.choices[0].text
            });
        }
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

