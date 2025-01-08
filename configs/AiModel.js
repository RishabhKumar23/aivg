const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field, No plain text" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"scenes\": [\n    {\n      \"imagePrompt\": \"A bustling 17th-century European marketplace at dawn, cobblestone streets wet from rain, merchants setting up stalls, barrels of goods being unloaded, a few early risers with lanterns, realistic lighting, oil painting style\",\n      \"contentText\": \"It's the early 17th century. Trade is the lifeblood of Europe. But one particular commodity, nutmeg, is more valuable than gold.\"\n    },\n    {\n       \"imagePrompt\": \"A close-up view of nutmeg seeds, detailed texture, warm brown tones, perhaps some spices scattered around, realistic photography\",\n       \"contentText\": \"Nutmeg, a seemingly insignificant seed from the Banda Islands in Indonesia, held immense power.\"\n    },\n   {\n      \"imagePrompt\": \"A detailed illustration of a small sailing ship battling a large storm in the open ocean, dark grey sky with flashes of lightning, waves crashing against the hull, realistic watercolor painting\",\n      \"contentText\": \"European powers were desperate to control the spice trade, and the journey was treacherous.\"\n    },\n    {\n      \"imagePrompt\":\"A Dutch East India Company trading post in a tropical setting, bustling with activity, Indonesian locals and Dutch traders interacting, various goods being exchanged, a fortress in the background, realistic landscape painting\",\n      \"contentText\":\"The Dutch, with their ruthless ambition, established a monopoly, going to extreme lengths to protect their nutmeg empire.\"\n    },\n    {\n      \"imagePrompt\": \"An intense close-up of a Dutch soldier, with harsh features and cold eyes, holding a musket with determination, realistic lighting, historical military uniform, painting\",\n        \"contentText\": \"They controlled the Banda Islands with an iron fist, resorting to violence to maintain their dominance.\"\n    },\n   {\n      \"imagePrompt\": \"A panoramic view of a small island with nutmeg trees being harvested, workers carefully collecting the nuts, lush tropical foliage, a serene yet oppressive atmosphere, realistic landscape photography\",\n      \"contentText\":\"The price of this spice was paid in lives and resources, demonstrating the dark side of desire and control.\"\n    },\n   {\n       \"imagePrompt\": \"A close-up shot of a single nutmeg seed, cracked open, revealing its rich inner core, realistic detail, shallow depth of field, natural light, photography\",\n      \"contentText\": \"The nutmeg, once a symbol of luxury and power, serves as a stark reminder of a brutal chapter in history.\"\n    }\n  ]\n}\n```\n" },
            ],
        },
    ],
});
