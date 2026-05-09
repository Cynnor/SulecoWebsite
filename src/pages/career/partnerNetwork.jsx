import React from 'react';

const PartnerNetwork = () => {
  const partnerTypes = [
    {
      title: "Hệ thống Gara Ô tô",
      desc: "Hợp tác chiến lược với hơn 50 Gara quy mô lớn, trung tâm bảo dưỡng chính hãng trên toàn quốc.",
      partners: ["Toyota Service", "Honda Auto", "VinFast Service", "Mercedes-Benz VN"],
      icon: "🚗"
    },
    {
      title: "Tập đoàn Công nghiệp",
      desc: "Các doanh nghiệp trong lĩnh vực cơ khí, chế tạo máy và tự động hóa hàng đầu.",
      partners: ["THACO Group", "Hòa Phát", "Tập đoàn Gelex", "ABB Vietnam"],
      icon: "⚙️"
    },
    {
      title: "Khách sạn & Du lịch",
      desc: "Chuỗi khách sạn 4-5 sao và các đơn vị lữ hành quốc tế.",
      partners: ["Vinpearl", "Muong Thanh", "InterContinental", "Saigontourist"],
      icon: "🏨"
    },
    {
      title: "Đơn vị Công nghệ",
      desc: "Các công ty phần mềm và trung tâm giải pháp chuyển đổi số.",
      partners: ["FPT Software", "VNG Corporation", "Viettel Solutions", "CMC Global"],
      icon: "💻"
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
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Corporate Ecosystem</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Mạng lưới đối tác <br/> & Doanh nghiệp
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Kết nối tri thức với thực tiễn sản xuất kinh doanh toàn cầu.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Intro */}
        <section className="mb-32 grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-b-4 border-blue-700 pb-4 inline-block">Liên minh học thuật - doanh nghiệp</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 text-justify">
                 Tại Suleco City, chúng tôi xây dựng một hệ sinh thái kết nối chặt chẽ giữa nhà trường và doanh nghiệp. Điều này đảm bảo chương trình đào tạo luôn bám sát thực tiễn và mở ra cơ hội nghề nghiệp rộng mở cho học viên ngay từ khi còn ngồi trên ghế nhà trường.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <p className="text-4xl font-black text-blue-700 mb-1">200+</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Doanh nghiệp đối tác</p>
                 </div>
                 <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <p className="text-4xl font-black text-blue-700 mb-1">15+</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tập đoàn đa quốc gia</p>
                 </div>
              </div>
           </div>
           <div className="bg-slate-100 aspect-square rounded-[3rem] flex items-center justify-center text-8xl grayscale opacity-30 shadow-inner">
              🤝
           </div>
        </section>

        {/* Partner Categories */}
        <section className="space-y-12">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Phân khúc đối tác chiến lược</h2>
             <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             {partnerTypes.map((type, idx) => (
               <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group">
                  <div className="flex items-center gap-6 mb-8">
                     <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-blue-700 group-hover:text-white transition-all">
                        {type.icon}
                     </div>
                     <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{type.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 border-b border-slate-50 pb-6">{type.desc}</p>
                  <div className="flex flex-wrap gap-3">
                     {type.partners.map((p, i) => (
                       <span key={i} className="px-4 py-2 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-slate-100 group-hover:border-blue-200 group-hover:text-blue-700 transition-colors">
                          {p}
                       </span>
                     ))}
                  </div>
               </div>
             ))}
          </div>
        </section>

        {/* Call to Action for businesses */}
        <section className="mt-32 bg-slate-900 p-12 md:p-20 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-700/5 -skew-x-12 -translate-x-16"></div>
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl">
                 <h2 className="text-3xl font-black uppercase tracking-tight mb-6 leading-tight text-blue-400">Trở thành đối tác chiến lược</h2>
                 <p className="text-slate-400 text-lg mb-0 font-light leading-relaxed">
                    Suleco City luôn hoan nghênh các doanh nghiệp tham gia vào mạng lưới đào tạo và cung ứng nhân lực chất lượng cao. Chúng tôi cam kết mang lại những giá trị cộng hưởng bền vững.
                 </p>
              </div>
              <button className="bg-blue-700 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-800 transition-all shadow-xl shrink-0">
                 Đăng ký hợp tác doanh nghiệp
              </button>
           </div>
        </section>

      </div>
    </div>
  );
};

export default PartnerNetwork;
