import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-xl font-black text-white shadow-xl shadow-blue-900/10 group-hover:bg-slate-900 transition-colors">
            S
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase">
              Suleco <span className="text-blue-700">City</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              Hệ thống Giáo dục Quốc tế
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 text-xs font-bold text-slate-500 md:flex uppercase tracking-widest">
          {/* Dropdown Giới thiệu */}
          <div className="relative group">
            <button className="flex items-center gap-2 py-2 hover:text-blue-700 transition-colors border-b-2 border-transparent group-hover:border-blue-700">
              Giới thiệu
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-0 w-72 origin-top-left bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60] rounded-2xl overflow-hidden">
              <div className="p-2 bg-slate-50 border-b border-slate-100">
                 <p className="text-[10px] text-slate-400 px-4 py-2 font-black uppercase tracking-tighter">Academic Divisions</p>
              </div>
              <Link to="/about-us/introduction" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all border-b border-slate-50">
                Giới thiệu chung
              </Link>
              <Link to="/about-us/facilities" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all border-b border-slate-50">
                Cơ sở vật chất & 360 Tour
              </Link>
              <Link to="/about-us/experts" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all border-b border-slate-50">
                Hội đồng chuyên gia
              </Link>
              <Link to="/about-us/philosophy" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all">
                Triết lý giáo dục
              </Link>
            </div>
          </div>

          {/* Dropdown Đào tạo */}
          <div className="relative group">
            <button className="flex items-center gap-2 py-2 hover:text-blue-700 transition-colors border-b-2 border-transparent group-hover:border-blue-700">
              Đào tạo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-0 w-72 origin-top-left bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60] rounded-2xl overflow-hidden">
              <div className="p-2 bg-slate-50 border-b border-slate-100">
                 <p className="text-[10px] text-slate-400 px-4 py-2 font-black uppercase tracking-tighter">Training Programs</p>
              </div>
              <Link to="/training/formal-education" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all border-b border-slate-50">
                Hệ chính quy
              </Link>
              <Link to="/training/short-term" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all border-b border-slate-50">
                Hệ ngắn hạn
              </Link>
              <Link to="/training/languages" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all border-b border-slate-50">
                Đào tạo Ngoại ngữ
              </Link>
              <Link to="/training/partnerships" className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all">
                Liên kết đào tạo
              </Link>
            </div>
          </div>
          <a href="#quy-trinh" className="hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700 py-2">
            Quy trình
          </a>
          <a href="#lien-he" className="hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700 py-2">
            Liên hệ
          </a>
        </nav>

        <a
          href="#lien-he"
          className="bg-blue-700 px-7 py-3 text-xs font-black text-white uppercase tracking-widest shadow-xl shadow-blue-900/10 transition-all hover:bg-slate-900 active:scale-95 rounded-xl"
        >
          Tư vấn học thuật
        </a>
      </div>
    </header>
  );
}
