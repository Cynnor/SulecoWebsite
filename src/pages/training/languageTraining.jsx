import React from 'react';

const LanguageTraining = () => {
  const languages = [
    {
      name: "Tiếng Nhật (Japanese)",
      levels: "N5 - N2",
      focus: "Định hướng tu nghiệp & Kỹ thuật",
      desc: "Chương trình trọng điểm bám sát giáo trình Minna no Nihongo kết hợp từ vựng chuyên ngành cơ khí, ô tô.",
      features: ["Giảng viên bản ngữ", "Phòng lab hiện đại", "Cam kết đầu ra N4/N3"],
      icon: "🎌",
      color: "border-red-100 bg-red-50/30"
    },
    {
      name: "Tiếng Anh (English)",
      levels: "IELTS / TOEIC",
      focus: "Giao tiếp Quốc tế & Kỹ thuật",
      desc: "Tập trung vào kỹ năng đọc tài liệu kỹ thuật và giao tiếp trong môi trường công nghiệp đa quốc gia.",
      features: ["Luyện thi IELTS 6.5+", "Tiếng Anh kỹ thuật", "Hệ thống học E-learning"],
      icon: "🇬🇧",
      color: "border-blue-100 bg-blue-50/30"
    },
    {
      name: "Tiếng Trung (Chinese)",
      levels: "HSK 1 - 4",
      focus: "Thương mại & Công nghệ",
      desc: "Đón đầu làn sóng đầu tư từ các tập đoàn công nghệ Trung Quốc, Đài Loan tại các khu công nghiệp.",
      features: ["Giao tiếp cấp tốc", "HSK Preparation", "Văn hóa doanh nghiệp Hoa"],
      icon: "🇨🇳",
      color: "border-amber-100 bg-amber-50/30"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 pb-24">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-4">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Global Communication</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Trung tâm Ngoại ngữ <br/> <span className="text-blue-500">Suleco City</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Ngôn ngữ là chìa khóa mở cánh cửa sự nghiệp toàn cầu.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Method Section */}
        <section className="mb-32 grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Phương pháp đào tạo <br/> "Kỹ thuật + Ngôn ngữ"</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 text-justify">
                 Tại Suleco City, chúng tôi không dạy ngoại ngữ suông. Học viên được học ngôn ngữ gắn liền với bối cảnh nghề nghiệp thực tế. Bạn sẽ học cách gọi tên các linh kiện máy móc bằng tiếng Nhật, cách đọc catalogue tiếng Anh và cách trao đổi công việc bằng tiếng Trung.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-slate-900 p-8 rounded-3xl text-white">
                    <p className="text-3xl font-black mb-1">500+</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Từ vựng chuyên ngành</p>
                 </div>
                 <div className="bg-blue-700 p-8 rounded-3xl text-white">
                    <p className="text-3xl font-black mb-1">100%</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-100">Giảng viên trình độ cao</p>
                 </div>
              </div>
           </div>
           <div className="aspect-video bg-slate-100 rounded-[3.5rem] shadow-inner flex items-center justify-center text-9xl grayscale opacity-20">
              🗣️
           </div>
        </section>

        {/* Language Grid */}
        <section className="space-y-20">
           <div className="text-center">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Các chương trình đào tạo</h2>
              <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
           </div>

           <div className="grid lg:grid-cols-3 gap-12">
              {languages.map((lang, idx) => (
                <div key={idx} className={`p-12 rounded-[4rem] border-2 ${lang.color} shadow-sm hover:shadow-2xl transition-all group flex flex-col`}>
                   <div className="text-6xl mb-10 group-hover:scale-110 transition-transform duration-500">{lang.icon}</div>
                   <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">{lang.name}</h3>
                   <p className="text-blue-700 font-black text-[10px] uppercase tracking-widest mb-8 border-b border-white pb-4">{lang.focus}</p>
                   <p className="text-slate-500 text-sm leading-relaxed mb-10 italic flex-1">{lang.desc}</p>
                   
                   <div className="space-y-4 mb-10">
                      {lang.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600 uppercase tracking-widest">
                           <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                           {f}
                        </div>
                      ))}
                   </div>

                   <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-blue-700 transition-colors shadow-lg">
                      Đăng ký xếp lớp
                   </button>
                </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};

export default LanguageTraining;
