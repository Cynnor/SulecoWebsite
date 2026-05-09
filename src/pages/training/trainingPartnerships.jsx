import React from 'react';

const TrainingPartnerships = () => {
  const partners = [
    {
      country: "Nhật Bản",
      institution: "Học viện Ngôn ngữ Tokyo",
      program: "Chương trình chuyển tiếp Đại học",
      desc: "Học viên học 1-2 năm tại Việt Nam và chuyển tiếp học tập tại Nhật Bản để lấy bằng cử nhân quốc tế.",
      icon: "🏯"
    },
    {
      country: "Australia",
      institution: "Swinburne University (Hợp tác)",
      program: "Thực tập sinh kỹ năng cao",
      desc: "Chương trình đào tạo và đưa kỹ thuật viên sang làm việc tại các tập đoàn công nghệ lớn tại Australia.",
      icon: "🦘"
    },
    {
      country: "Đức",
      institution: "Tập đoàn Y tế Berlin",
      program: "Đào tạo điều dưỡng quốc tế",
      desc: "Liên kết đào tạo chuyên môn điều dưỡng theo tiêu chuẩn Châu Âu và cam kết làm việc tại CHLB Đức.",
      icon: "🇩🇪"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/10 skew-x-12 translate-x-32"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Strategic Alliance</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Liên Kết Đào Tạo</h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed italic">
            "Hợp tác xuyên biên giới - Kiến tạo cơ hội nghề nghiệp toàn cầu."
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="grid lg:grid-cols-5 gap-16 mb-32 items-center">
           <div className="lg:col-span-3">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Tầm nhìn quốc tế</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 text-justify">
                 Suleco City không ngừng mở rộng mạng lưới đối tác với các trường đại học, học viện và tập đoàn kinh tế uy tín trên toàn thế giới. Mục tiêu của chúng tôi là tạo ra những lộ trình đào tạo linh hoạt, giúp học viên tiếp cận với tinh hoa tri thức nhân loại và mở ra cơ hội làm việc tại các quốc gia phát triển.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div className="border-l-4 border-blue-700 pl-6">
                    <p className="text-3xl font-black text-slate-900">50+</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Đối tác quốc tế</p>
                 </div>
                 <div className="border-l-4 border-blue-700 pl-6">
                    <p className="text-3xl font-black text-slate-900">12</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Quốc gia liên kết</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-2">
              <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 flex items-center justify-center text-8xl grayscale opacity-30 shadow-inner">
                 🌍
              </div>
           </div>
        </div>

        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-16 text-center">Các chương trình tiêu biểu</h2>
        <div className="space-y-8">
           {partners.map((p, idx) => (
             <div key={idx} className="bg-white border border-slate-100 p-10 md:p-16 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all flex flex-col md:flex-row gap-12 items-center group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                <div className="w-32 h-32 bg-slate-50 rounded-3xl flex items-center justify-center text-6xl group-hover:bg-blue-700 group-hover:text-white transition-all shrink-0">
                   {p.icon}
                </div>
                <div className="flex-1">
                   <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full font-black text-[10px] uppercase tracking-widest">{p.country}</span>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{p.institution}</h3>
                   </div>
                   <h4 className="text-lg font-bold text-blue-700 mb-6 uppercase tracking-wider">{p.program}</h4>
                   <p className="text-slate-500 leading-relaxed text-justify">{p.desc}</p>
                </div>
                <div className="shrink-0">
                   <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] group-hover:bg-blue-700 transition-colors shadow-lg">
                      Tìm hiểu lộ trình
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPartnerships;
