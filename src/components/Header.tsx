import React from 'react';
import { BadgeCheck, Mail, LinkedinIcon, Briefcase, Github } from 'lucide-react';

export default function Header() {
  return (
    <div className="w-full bg-gradient-to-r from-[#121212] to-[#181818] p-6 text-white">
      <div className="flex items-center gap-2 mb-4">
        <BadgeCheck className="w-4 h-4 text-blue-400" />
        <span className="text-sm text-gray-300">Data Engineer</span>
      </div>
      
      <h1 className="text-3xl font-bold tracking-wider mb-4">Nguyễn Quốc Bảo</h1>
      
      <div className="flex items-center gap-3 text-xs text-gray-300 flex-wrap">
        <a href="mailto:baoqndtb@gmail.com" className="hover:text-blue-400 flex items-center gap-1">
          <Mail className="w-3 h-3" />
          baoqndtb@gmail.com
        </a>
        <span>|</span>
        <span>+84 932 085 135</span>
        <span>|</span>
        <a href="https://github.com/Sushiba2ker" className="hover:text-blue-400 flex items-center gap-1">
          <Github className="w-3 h-3" />
          Sushiba2ker
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/nguyen-bao-9a58b324a/" className="hover:text-blue-400 flex items-center gap-1">
          <LinkedinIcon className="w-3 h-3" />
          nguyen-bao-9a58b324a
        </a>
        <span>|</span>
        <a href="https://sushiba-portfolio.vercel.app" className="hover:text-blue-400 flex items-center gap-1">
          <Briefcase className="w-3 h-3" />
          sushiba-portfolio.vercel.app
        </a>
      </div>
    </div>
  );
}