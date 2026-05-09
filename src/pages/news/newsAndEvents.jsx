import React from 'react';

const NewsAndEvents = () => {
  const newsItems = [
    {
      title: "Suleco City ký kết hợp tác chiến lược với VinFast Service",
      date: "25/05/2024",
      category: "Sự kiện",
      desc: "Mở rộng cơ hội thực tập và làm việc cho sinh viên ngành Công nghệ Ô tô tại hệ thống xưởng dịch vụ VinFast trên toàn quốc.",
      image: "🚗"
    },
    {
      title: "Lễ tốt nghiệp và trao bằng đợt 1 năm 2024",
      date: "20/05/2024",
      category: "Tin tức",
      desc: "Hơn 500 sinh viên các ngành Kỹ thuật và Dịch vụ đã chính thức nhận bằng và sẵn sàng bước vào thị trường lao động.",
      image: "🎓"
    },
    {
      title: "Hội thảo: Xu hướng công nghiệp 4.0 trong ngành Cơ khí",
      date: "15/05/2024",
      category: "Hội thảo",
      desc: "Các chuyên gia từ tập đoàn ABB chia sẻ về lộ trình chuyển đổi số và ứng dụng robot trong sản xuất công nghiệp.",
      image: "⚙️"
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
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Campus Life</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Tin tức & Sự kiện
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Cập nhật những chuyển động mới nhất tại Suleco City.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Featured News */}
        <section className="mb-32">
           <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 p-8 md:p-12 shadow-sm hover:shadow-xl transition-all group">
              <div className="aspect-video bg-white rounded-3xl flex items-center justify-center text-9xl shadow-inner group-hover:scale-105 transition-transform duration-500">
                 📰
              </div>
              <div>
                 <span className="px-4 py-1 bg-blue-700 text-white rounded-full font-black text-[10px] uppercase tracking-widest mb-6 inline-block">Tiêu điểm</span>
                 <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-6 leading-tight">
                    Khai giảng khóa đào tạo tiếng Nhật cấp tốc cho tu nghiệp sinh khóa 2024
                 </h2>
                 <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    Chương trình được thiết kế riêng biệt nhằm đáp ứng yêu cầu khắt khe từ các đối tác Nhật Bản, giúp học viên đạt trình độ N4 chỉ sau 6 tháng học tập trung.
                 </p>
                 <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span>Admin</span>
                    <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                    <span>30/05/2024</span>
                 </div>
              </div>
           </div>
        </section>

        {/* News Grid */}
        <section className="grid md:grid-cols-3 gap-12">
           {newsItems.map((item, idx) => (
             <div key={idx} className="flex flex-col bg-white group cursor-pointer">
                <div className="aspect-[16/10] bg-slate-50 rounded-3xl mb-8 flex items-center justify-center text-6xl group-hover:bg-blue-50 transition-colors shadow-sm overflow-hidden border border-slate-100">
                   <div className="group-hover:scale-125 transition-transform duration-500">
                      {item.image}
                   </div>
                </div>
                <span className="text-blue-700 font-black text-[10px] uppercase tracking-widest mb-4">{item.category} | {item.date}</span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                   {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                   {item.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-50">
                   <span className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">Đọc tiếp →</span>
                </div>
             </div>
           ))}
        </section>

        {/* Pagination placeholder */}
        <div className="mt-24 flex justify-center gap-4">
           {[1, 2, 3, "..."].map((n, i) => (
             <button key={i} className={`w-12 h-12 rounded-xl font-black text-xs uppercase transition-all ${i === 0 ? 'bg-blue-700 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                {n}
             </button>
           ))}
        </div>

      </div>
    </div>
  );
};

export default NewsAndEvents;
