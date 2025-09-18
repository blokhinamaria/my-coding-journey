// api/get-recipe.js
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // ONLY on server
});

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. Format your response in markdown.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ error: "Invalid ingredients" });
  }

  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe!` },
      ],
    });

    res.status(200).json({ recipe: msg.content[0].text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
}
