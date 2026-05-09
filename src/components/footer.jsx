export default function Footer() {
  return (
    <footer id="lien-he" className="border-t border-slate-900 bg-slate-950 text-slate-400 py-20">
      <div className="mx-auto grid max-w-[1400px] gap-20 px-6 lg:grid-cols-4 lg:px-20">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Suleco <span className="text-blue-500">City</span></h2>
          <p className="mt-6 text-sm leading-7 text-slate-500 text-justify">
            Hệ thống Giáo dục Quốc tế Suleco City - Nơi kiến tạo tương lai và nâng tầm trí tuệ cho thế hệ trẻ Việt Nam thông qua các chương trình đào tạo chuẩn mực.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 mb-6">
            Đào tạo
          </h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li><a href="/training/formal-education" className="transition hover:text-blue-500">Hệ chính quy</a></li>
            <li><a href="/training/short-term" className="transition hover:text-blue-500">Hệ ngắn hạn</a></li>
            <li><a href="/training/languages" className="transition hover:text-blue-500">Ngoại ngữ</a></li>
            <li><a href="/training/partnerships" className="transition hover:text-blue-500">Liên kết đào tạo</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 mb-6">
            Về chúng tôi
          </h3>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li><a href="/about-us/introduction" className="transition hover:text-blue-500">Giới thiệu chung</a></li>
            <li><a href="/about-us/experts" className="transition hover:text-blue-500">Hội đồng chuyên gia</a></li>
            <li><a href="/about-us/philosophy" className="transition hover:text-blue-500">Triết lý giáo dục</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 mb-6">
            Kết nối
          </h3>
          <div className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <p className="flex items-center gap-3"><span className="text-blue-500">E:</span> contact@sulecocity.edu.vn</p>
            <p className="flex items-center gap-3"><span className="text-blue-500">H:</span> 1900 1234</p>
            <p className="flex items-center gap-3"><span className="text-blue-500">A:</span> TP. Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] border-t border-white/5 mt-20 pt-8 px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600">
        <p>© {new Date().getFullYear()} Suleco City International Education. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}