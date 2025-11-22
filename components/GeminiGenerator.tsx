
import React, { useState } from 'react';
import { Clapperboard, Loader2, Sparkles } from 'lucide-react';
import { GenerationStatus } from '../types';
import { generateLAVideo } from '../services/geminiService';

interface GeminiGeneratorProps {
  onVideoGenerated: (url: string) => void;
}

export const GeminiGenerator: React.FC<GeminiGeneratorProps> = ({ onVideoGenerated }) => {
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);

  const handleGenerate = async () => {
    setStatus(GenerationStatus.LOADING);
    // We generate a video for the "Motion Design" request
    const videoUrl = await generateLAVideo();
    if (videoUrl) {
      onVideoGenerated(videoUrl);
      setStatus(GenerationStatus.SUCCESS);
    } else {
      setStatus(GenerationStatus.ERROR);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={handleGenerate}
        disabled={status === GenerationStatus.LOADING}
        className="group flex items-center gap-2 bg-gray-900/90 backdrop-blur-md border border-gray-700 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-black hover:scale-105 transition-all text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === GenerationStatus.LOADING ? (
          <>
            <Loader2 className="animate-spin text-orange-500" size={18} />
            <div className="flex flex-col items-start text-xs">
                <span className="font-bold">Generating Motion...</span>
                <span className="text-gray-400 font-light">This takes ~1 min</span>
            </div>
          </>
        ) : (
          <>
            {status === GenerationStatus.SUCCESS ? (
                 <Sparkles size={18} className="text-yellow-400 group-hover:animate-pulse"/>
            ) : (
                 <Clapperboard size={18} className="text-orange-400" />
            )}
            <span className="tracking-wide">
                {status === GenerationStatus.IDLE ? 'Generate Animated Scene' : 'Regenerate Scene'}
            </span>
          </>
        )}
      </button>
    </div>
  );
};
