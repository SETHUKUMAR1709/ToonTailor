// src/services/generatorService.js

/**
 * Send a character generation request to the GPT-4o API
 * 
 * @param {String} prompt - User's character description
 * @param {Object} contextData - Data from constants to help guide the AI
 * @returns {Promise<Object>} Generated character data
 */

export const generateCharacter = async (prompt, contextData) => {
  try {
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: "Bearer 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",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1:free',
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant that generates RPG character data based on user descriptions. You should only output valid JSON that matches the requested format.`,
            },
            {
              role: 'user',
              content: prompt,
            },
          ]
        }),
      },
    );
    if (!response.ok) {
      const errorData = await response.choices[0].message.content.json();
      throw new Error(errorData.error || 'Failed to generate character');
    }

    const data1 = await response.json();

		const data = data1.choices?.[0]?.message?.content || 'No response received.';
    console.log(data);
    // Parse the character data if it's returned as a string
    if(data==="No response received.") {
    return data;
    }
    let characterData;
try {
  if (typeof data === 'string') {
    // Remove Markdown-style code block
    const cleanedData = data.replace(/```json|```/g, '').trim();
    console.log("Cleaned Data:", cleanedData);

    characterData = JSON.parse(cleanedData);
  } else if (typeof data === 'object') {
    characterData = data;
  } else {
    throw new Error('Unexpected data format');
  }
} catch (e) {
  console.error("Error parsing character data:", e);
  throw new Error('Invalid character data received');
}

    
    return characterData;
  } catch (error) {
    console.error('Error in generateCharacter:', error);
    throw error;
  }
};