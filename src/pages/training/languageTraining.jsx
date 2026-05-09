import React from 'react';

const LanguageTraining = () => {
  const languages = [
    {
      name: "Tiếng Nhật (Japanese)",
      levels: "N5 - N1",
      desc: "Chương trình đào tạo chuyên sâu phục vụ nhu cầu du học, làm việc tại Nhật Bản. Tập trung vào kỹ năng nghe nói và văn hóa công sở Nhật.",
      features: ["Giảng viên bản ngữ", "Lộ trình JLPT cấp tốc", "Phòng Lab hiện đại"],
      icon: "🇯🇵"
    },
    {
      name: "Tiếng Anh (English)",
      levels: "IELTS / TOEIC",
      desc: "Đào tạo tiếng Anh giao tiếp và luyện thi chứng chỉ quốc tế. Phương pháp học tương tác, giúp học viên tự tin sử dụng tiếng Anh.",
      features: ["Cam kết đầu ra", "Môi trường 100% tiếng Anh", "Lớp học quy mô nhỏ"],
      icon: "🇬🇧"
    },
    {
      name: "Tiếng Trung (Chinese)",
      levels: "HSK 1 - 6",
      desc: "Đáp ứng nhu cầu ngôn ngữ trong kinh doanh và du lịch. Đào tạo bài bản từ chữ Hán đến giao tiếp thương mại chuyên nghiệp.",
      features: ["Học chữ Hán bài bản", "Giao tiếp thương mại", "Hỗ trợ học bổng Trung Quốc"],
      icon: "🇨🇳"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <span className="text-blue-500 font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Global Communication</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Đào Tạo Ngoại Ngữ</h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed italic">
            "Mở cánh cửa tri thức toàn cầu thông qua sức mạnh ngôn ngữ."
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {languages.map((lang, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-[2.5rem] p-12 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group">
               <div className="text-6xl mb-10 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-500">
                  {lang.icon}
               </div>
               <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{lang.name}</h3>
               <span className="text-blue-700 font-black text-[10px] uppercase tracking-widest block mb-8 border-b border-slate-100 pb-2">Trình độ: {lang.levels}</span>
               <p className="text-slate-500 text-sm leading-relaxed mb-10 text-justify">
                  {lang.desc}
               </p>
               <ul className="space-y-4 mb-12">
                  {lang.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-widest">
                       <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                       {f}
                    </li>
                  ))}
               </ul>
               <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs group-hover:bg-blue-700 transition-colors shadow-lg">
                  Đăng ký tư vấn lộ trình
               </button>
            </div>
          ))}
        </div>

        <section className="mt-32 bg-blue-700 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-black uppercase tracking-tight mb-6 leading-tight">Phương pháp đào tạo <br/> Phản xạ tự nhiên</h2>
                 <p className="text-blue-100 text-lg font-light leading-relaxed mb-10 italic">
                    Chúng tôi không chỉ dạy từ vựng và ngữ pháp, mà tập trung vào việc kiến tạo môi trường để học viên được thực hành ngôn ngữ mỗi ngày, giúp hình thành phản xạ tự nhiên như người bản xứ.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <p className="text-3xl font-black mb-1">100%</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Phòng học đa phương tiện</p>
                    </div>
                    <div>
                       <p className="text-3xl font-black mb-1">20+</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-200">Giảng viên bản ngữ</p>
                    </div>
                 </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                 <div className="w-64 h-64 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-8xl grayscale opacity-30 animate-pulse">
                    🗣️
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default LanguageTraining;
