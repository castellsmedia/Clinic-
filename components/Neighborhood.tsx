
import React from 'react';

interface NeighborhoodProps {
  videoUrl: string | null;
}

export const Neighborhood: React.FC<NeighborhoodProps> = ({ videoUrl }) => {
  return (
    <div className="absolute bottom-0 right-0 w-full h-[70vh] z-10 pointer-events-none overflow-hidden flex items-end justify-center">
      {videoUrl ? (
        <div className="relative w-full h-full">
             <div className="absolute inset-0 bg-gradient-to-t from-[#FDF6E9] via-transparent to-transparent z-20"></div>
             {/* Mask to blend the video into the background color at the bottom if needed, though the prompt asks for a scene. 
                 We use mix-blend-multiply or just normal blending depending on the generated asset. 
                 For now, standard cover. */}
            <video 
                src={videoUrl}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover object-bottom mask-image-gradient"
            />
        </div>
      ) : (
        /* Placeholder illustration or empty state while waiting for generation */
        <div className="w-full h-full flex items-end justify-center opacity-60">
             {/* We keep it empty or minimal so the gradient background shows through until the user generates the video. 
                 The user explicitly asked to remove the 'code houses', so we show nothing here by default. */}
        </div>
      )}
    </div>
  );
};
