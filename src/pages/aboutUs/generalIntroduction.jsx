import React from 'react';

const GeneralIntroduction = () => {
  const milestones = [
    { year: "2002", event: "Tiền thân là Trung tâm Đào tạo nghề Suleco, cung cấp lao động cho thị trường Nhật Bản." },
    { year: "2010", event: "Mở rộng quan hệ hợp tác với hơn 100 doanh nghiệp FDI tại Việt Nam." },
    { year: "2018", event: "Bắt đầu dự án Suleco City - Hệ sinh thái giáo dục và nghề nghiệp hiện đại." },
    { year: "2024", event: "Chính thức vận hành mô hình Đào tạo học thuật kết hợp trải nghiệm doanh nghiệp toàn diện." }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-4">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">About Our Institution</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Giới thiệu chung
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Hành trình 20 năm kiến tạo giá trị và nâng tầm lao động Việt.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Story Section */}
        <section className="mb-32 grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight border-l-4 border-blue-700 pl-6">Câu chuyện của chúng tôi</h2>
              <p className="text-slate-500 text-lg leading-relaxed text-justify">
                 Suleco City không chỉ là một cơ sở đào tạo, mà là hiện thực hóa của khát vọng nâng tầm vị thế lao động Việt Nam trên bản đồ quốc tế. Với bề dày lịch sử hơn hai thập kỷ, chúng tôi thấu hiểu rằng: Giáo dục thực chất phải đi đôi với cơ hội nghề nghiệp bền vững.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed text-justify">
                 Chúng tôi xây dựng một "thành phố tri thức" thu nhỏ, nơi học viên được đắm mình trong môi trường công nghệ hiện đại, rèn luyện kỷ luật như một chuyên gia thực thụ trước khi bước chân ra thị trường toàn cầu.
              </p>
              <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 italic text-blue-700 font-medium">
                 "Mục tiêu của chúng tôi là tạo ra những thế hệ kỹ thuật viên không chỉ giỏi tay nghề mà còn giàu tâm thế và trí tuệ."
              </div>
           </div>
           <div className="relative group">
              <div className="aspect-[4/3] bg-slate-100 rounded-[3.5rem] shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-blue-700/10 mix-blend-multiply"></div>
                 <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20 grayscale group-hover:scale-110 transition-transform duration-700">🏢</div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-blue-50">
                 <p className="text-4xl font-black text-blue-700 mb-1">20+</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Năm hình thành</p>
              </div>
           </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="mb-32 grid md:grid-cols-2 gap-12">
           <div className="bg-slate-900 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-700/20 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-8 text-blue-400">Tầm nhìn</h3>
              <p className="text-slate-400 text-lg leading-relaxed italic text-justify">
                 Trở thành hệ sinh thái giáo dục nghề nghiệp hàng đầu khu vực, là biểu tượng cho chất lượng đào tạo nhân lực kỹ thuật cao của Việt Nam tại các thị trường phát triển như Nhật Bản, Đức, và Australia.
              </p>
           </div>
           <div className="bg-blue-700 p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform"></div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-8">Sứ mệnh</h3>
              <p className="text-blue-100 text-lg leading-relaxed italic text-justify">
                 Đào tạo và cung ứng nguồn nhân lực chất lượng cao, có đầy đủ Kỹ năng - Ngoại ngữ - Đạo đức, góp phần nâng cao năng lực cạnh tranh toàn cầu của lực lượng lao động trẻ Việt Nam.
              </p>
           </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-32">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Cột mốc phát triển</h2>
              <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
           </div>
           
           <div className="grid md:grid-cols-4 gap-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative pt-12 border-t-2 border-slate-100 hover:border-blue-700 transition-all group">
                   <div className="absolute -top-4 left-0 w-8 h-8 bg-white border-4 border-blue-700 rounded-full group-hover:bg-blue-700 transition-all"></div>
                   <h4 className="text-2xl font-black text-blue-700 mb-4">{m.year}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{m.event}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Core Pillars */}
        <section className="bg-slate-50 p-12 md:p-24 rounded-[4rem] text-center shadow-inner">
           <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-16">3 Trụ cột Giáo dục</h3>
           <div className="grid md:grid-cols-3 gap-16">
              {[
                { title: "Thực hành thực tế", icon: "🛠️", desc: "70% thời lượng học tập tại xưởng với thiết bị chuẩn công nghiệp." },
                { title: "Ngoại ngữ chuyên ngành", icon: "🗣️", desc: "Đào tạo tiếng Nhật/Anh/Đức bám sát thực tế làm việc." },
                { title: "Kỷ luật doanh nghiệp", icon: "⚖️", desc: "Rèn luyện tác phong 5S và đạo đức nghề nghiệp khắt khe." }
              ].map((p, i) => (
                <div key={i} className="space-y-6">
                   <div className="text-6xl">{p.icon}</div>
                   <h4 className="text-xl font-black uppercase tracking-tight text-slate-900">{p.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};

export default GeneralIntroduction;
