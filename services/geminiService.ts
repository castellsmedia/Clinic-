
import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the Gemini API client
// The API key is obtained from the environment variable process.env.API_KEY
// Note: For Veo, we will re-initialize this inside the function to ensure we have the user-selected key.
let ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a "Los Angeles" themed sky/backdrop.
 */
export const generateLABackground = async (): Promise<string | null> => {
  try {
    // Ensure we use the latest key if available
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const model = 'gemini-2.5-flash-image';
    const prompt = `
      A breathtaking abstract vector art background of a Los Angeles sky at sunset.
      Colors: Deep purple/blue at top fading to warm oranges and golden yellows.
      Style: Clean, flat vector style, noise texture.
      Composition: Panoramic, wide, minimal details.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts: [{ text: prompt }] },
      config: { imageConfig: { aspectRatio: "16:9" } }
    });

    for (const candidate of response.candidates || []) {
        for (const part of candidate.content.parts) {
            if (part.inlineData && part.inlineData.data) {
                return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
        }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

/**
 * Generates an animated video loop of the neighborhood using Veo.
 */
export const generateLAVideo = async (): Promise<string | null> => {
  try {
    // Check for API Key selection as required for Veo
    if (window.aistudio && !await window.aistudio.hasSelectedApiKey()) {
      await window.aistudio.openSelectKey();
    }

    // Re-initialize with the potentially new key
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `
      Vector art animation of a charming Los Angeles neighborhood on a gentle hill at sunset.
      Style: High-quality flat vector illustration, similar to Airbnb or Headspace art style.
      Elements: Spanish colonial homes with terracotta roofs, modern white houses, swaying palm trees.
      Lighting: Golden hour, warm oranges and purples, silhouettes of hills in background.
      Motion: Gentle swaying of trees, subtle clouds moving, cinematic slow pan.
      Atmosphere: Peaceful, premium, clean.
    `;

    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    // Poll for completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Check every 5 seconds
      operation = await ai.operations.getVideosOperation({ operation: operation });
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (videoUri) {
        // Append key for download access
        return `${videoUri}&key=${process.env.API_KEY}`;
    }

    return null;

  } catch (error) {
    console.error("Error generating video:", error);
    return null;
  }
};

/**
 * Creates a chat session for the AI Dispatcher.
 */
export const createChatSession = (): Chat => {
  // Re-initialize to ensure latest key is used
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `You are "Unit 01", the AI Dispatcher for Appliance Repair Clinic (Cool Doc) in Los Angeles. 
      
      Your Mission:
      - Act as the first line of support for customers needing appliance repair.
      - Tone: Professional, efficient, slightly robotic/technical but very helpful. Use terms like "Diagnostic", "System Check", "Dispatch", "Unit".
      - Capabilities: You can answer questions about our services (Refrigerators, Ovens, Washers, Dryers, etc.), warranty (90-day parts & labor), and coverage area (LA/San Fernando Valley).
      - Goal: Encourage the user to call (818) 731-0445 or fill out the quote form to book a technician. You cannot book appointments directly, but you can explain the process.
      
      Key Info:
      - Phone: (818) 731-0445
      - Location: Los Angeles, CA
      - Benefits: Same-day service, Upfront pricing, Licensed & Bonded.
      
      If asked about pricing: "We provide upfront flat-rate pricing after a diagnostic. The service call fee is waived with any repair."
      If asked about availability: "Technicians are currently active in the area. I recommend calling immediately to secure a slot."
      `,
    }
  });
};
