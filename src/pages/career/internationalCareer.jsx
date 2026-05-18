import React from 'react';

/**
 * Component: InternationalCareer
 * Trang giới thiệu lộ trình liên kết và tu nghiệp quốc tế
 */
const InternationalCareer = () => {
  const internationalPrograms = [
    {
      country: "Nhật Bản (Japan)",
      title: "Kỹ sư Thực tập sinh (Ginou Jisshuu)",
      duration: "3 - 5 Năm",
      desc: "Làm việc tại các nhà máy ô tô, cơ khí hàng đầu Nhật Bản. Cơ hội tích lũy vốn và kinh nghiệm chuẩn quốc tế.",
      benefits: ["Lương từ 30-45 Triệu/tháng", "Hỗ trợ nhà ở, bảo hiểm", "Cấp chứng chỉ tay nghề Nhật"],
      icon: "🇯🇵"
    },
    {
      country: "Australia",
      title: "Tu nghiệp sinh kỹ thuật cao",
      duration: "2 - 4 Năm",
      desc: "Chương trình dành cho kỹ thuật viên tay nghề cao (Hàn, CNC). Làm việc trong môi trường đa quốc gia hiện đại.",
      benefits: ["Lương tiêu chuẩn Úc", "Hỗ trợ định cư lâu dài", "Môi trường tiếng Anh 100%"],
      icon: "🦘"
    },
    {
      country: "Đức (Germany)",
      title: "Chương trình Đào tạo kép",
      duration: "3 Năm",
      desc: "Vừa học vừa làm tại các bệnh viện, trung tâm y tế CHLB Đức. Miễn học phí và hỗ trợ lương học nghề.",
      benefits: ["Lương thực tập 25-35 Triệu", "Bằng cấp CHLB Đức", "Cam kết việc làm tại Đức"],
      icon: "🇩🇪"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-4">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Global Pathways</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Liên kết & Tu nghiệp <br/> Quốc tế
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Vươn tầm thế giới, kiến tạo sự nghiệp toàn cầu.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Global Strategy */}
        <section className="mb-32">
           <div className="bg-blue-700 p-12 md:p-20 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl font-black uppercase tracking-tight mb-8 leading-tight">Chiến lược xuất khẩu <br/> lao động trí tuệ</h2>
                    <p className="text-blue-100 text-lg font-light leading-relaxed mb-12 text-justify italic">
                       "Suleco City không chỉ đưa lao động đi làm việc, chúng tôi đưa tri thức và kỹ năng Việt vươn tầm thế giới. Mỗi học viên là một đại sứ thương hiệu của nền giáo dục Suleco tại các thị trường phát triển."
                    </p>
                    <div className="flex gap-8">
                       <div>
                          <p className="text-4xl font-black mb-1">5000+</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Học viên tại Nhật</p>
                       </div>
                       <div>
                          <p className="text-4xl font-black mb-1">98%</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Học viên hài lòng</p>
                       </div>
                    </div>
                 </div>
                 <div className="bg-white/10 border border-white/20 p-12 rounded-[2.5rem] backdrop-blur-md">
                    <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Thị trường trọng điểm</h3>
                    <div className="space-y-6">
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold uppercase tracking-widest">Nhật Bản</span>
                          <span className="px-3 py-1 bg-blue-500 rounded text-[10px] font-black uppercase">Active</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold uppercase tracking-widest">Australia</span>
                          <span className="px-3 py-1 bg-blue-500 rounded text-[10px] font-black uppercase">Active</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold uppercase tracking-widest">CHLB Đức</span>
                          <span className="px-3 py-1 bg-blue-500 rounded text-[10px] font-black uppercase">Active</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold uppercase tracking-widest">Hàn Quốc</span>
                          <span className="px-3 py-1 bg-white/20 rounded text-[10px] font-black uppercase">Developing</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Programs Grid */}
        <section className="space-y-16">
          <div className="text-center">
             <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Các lộ trình tu nghiệp tiêu biểu</h2>
             <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
             {internationalPrograms.map((prog, idx) => (
               <div key={idx} className="bg-white border border-slate-100 rounded-[3rem] p-12 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
                  <div className="text-6xl mb-10 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-500">
                     {prog.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 leading-tight">{prog.title}</h3>
                  <p className="text-blue-700 font-black text-[10px] uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-2">{prog.country} | {prog.duration}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-10 text-justify italic">
                     {prog.desc}
                  </p>
                  <ul className="space-y-4 mb-12">
                     {prog.benefits.map((b, i) => (
                       <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                          {b}
                       </li>
                     ))}
                  </ul>
                  <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10">
                     Đăng ký xét duyệt hồ sơ
                  </button>
               </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default InternationalCareer;
