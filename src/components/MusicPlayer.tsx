import React from 'react';
import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, ListMusic, MonitorSpeaker, Volume2, Maximize2 } from 'lucide-react';

export default function MusicPlayer() {
  return (
    <div className="bg-[#181818] border-t border-[#282828] px-4 py-3">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        {/* Currently Playing */}
        <div className="flex items-center min-w-[180px]">
          <img 
            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=100&h=100&q=80" 
            alt="Album cover"
            className="w-14 h-14 rounded"
          />
          <div className="ml-3">
            <h4 className="text-sm text-white font-medium">Resume.mp3</h4>
            <p className="text-xs text-[#b3b3b3]">Brooke George</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center max-w-[722px] w-full px-4">
          <div className="flex items-center gap-4 mb-1">
            <button className="text-[#b3b3b3] hover:text-white">
              <Shuffle className="w-4 h-4" />
            </button>
            <button className="text-[#b3b3b3] hover:text-white">
              <SkipBack className="w-4 h-4" />
            </button>
            <button className="bg-white rounded-full p-2 hover:scale-105">
              <Play className="w-4 h-4 text-black" fill="black" />
            </button>
            <button className="text-[#b3b3b3] hover:text-white">
              <SkipForward className="w-4 h-4" />
            </button>
            <button className="text-[#b3b3b3] hover:text-white">
              <Repeat className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-[#b3b3b3]">2:56</span>
            <div className="h-1 bg-[#4d4d4d] rounded-full flex-grow">
              <div className="h-full w-[60%] bg-white rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 hover:opacity-100"></div>
              </div>
            </div>
            <span className="text-xs text-[#b3b3b3]">5:01</span>
          </div>
        </div>

        {/* Extra Controls */}
        <div className="flex items-center gap-3 min-w-[180px] justify-end">
          <button className="text-[#b3b3b3] hover:text-white">
            <Mic2 className="w-4 h-4" />
          </button>
          <button className="text-[#b3b3b3] hover:text-white">
            <ListMusic className="w-4 h-4" />
          </button>
          <button className="text-[#b3b3b3] hover:text-white">
            <MonitorSpeaker className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#b3b3b3]" />
            <div className="w-24 h-1 bg-[#4d4d4d] rounded-full">
              <div className="h-full w-[80%] bg-white rounded-full"></div>
            </div>
          </div>
          <button className="text-[#b3b3b3] hover:text-white">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
