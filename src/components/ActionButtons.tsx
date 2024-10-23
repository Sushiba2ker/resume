import React from 'react';
import { Play, Share2, MoreHorizontal } from 'lucide-react';

export default function ActionButtons() {
  return (
    <div className="flex items-center gap-2">
      <button className="w-8 h-8 bg-[#1DB954] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
        <Play className="w-4 h-4 text-black fill-black" />
      </button>
      <button className="w-5 h-5 text-[#b3b3b3] hover:text-white transition-colors">
        <Share2 className="w-full h-full" />
      </button>
      <button className="w-5 h-5 text-[#b3b3b3] hover:text-white transition-colors">
        <MoreHorizontal className="w-full h-full" />
      </button>
    </div>
  );
}