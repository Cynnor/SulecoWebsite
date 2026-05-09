import React from 'react';

const ContactInfo = () => {
  const offices = [
    {
      name: "Trụ sở chính (TP. Hồ Chí Minh)",
      address: "Số xxx, Đường xxx, Phường xxx, Quận xxx, TP. HCM",
      phone: "1900 1234 - (028) xxx xxxx",
      email: "contact@sulecocity.edu.vn",
      map: "📍"
    },
    {
      name: "Văn phòng Đại diện Miền Trung",
      address: "Số xxx, Đường xxx, Quận Hải Châu, TP. Đà Nẵng",
      phone: "(0236) xxx xxxx",
      email: "danang@sulecocity.edu.vn",
      map: "📍"
    },
    {
      name: "Trung tâm Đào tạo Kỹ thuật Cao",
      address: "Khu Công nghệ cao, TP. Thủ Đức, TP. HCM",
      phone: "(028) xxx xxxx",
      email: "training.center@sulecocity.edu.vn",
      map: "📍"
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
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Thông tin liên hệ
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Luôn sẵn sàng lắng nghe và hỗ trợ bạn mọi lúc, mọi nơi.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Contact Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
           {offices.map((office, idx) => (
             <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-700/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform"></div>
                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{office.map}</div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-6 leading-tight border-b border-slate-50 pb-4">{office.name}</h3>
                
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <span className="text-blue-700 font-bold text-xs uppercase tracking-widest w-12 shrink-0">Địa chỉ:</span>
                      <p className="text-slate-500 text-sm leading-relaxed">{office.address}</p>
                   </div>
                   <div className="flex gap-4">
                      <span className="text-blue-700 font-bold text-xs uppercase tracking-widest w-12 shrink-0">Hotline:</span>
                      <p className="text-slate-900 font-black text-sm">{office.phone}</p>
                   </div>
                   <div className="flex gap-4">
                      <span className="text-blue-700 font-bold text-xs uppercase tracking-widest w-12 shrink-0">Email:</span>
                      <p className="text-slate-500 text-sm font-bold">{office.email}</p>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Global Support Channels */}
        <section className="bg-slate-900 p-12 md:p-20 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/5 skew-x-12 translate-x-16"></div>
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-blue-400">Kênh hỗ trợ trực tuyến</h2>
                 <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed italic">
                    "Kết nối với chúng tôi qua các nền tảng mạng xã hội để cập nhật thông tin nhanh nhất và nhận tư vấn 24/7."
                 </p>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["Facebook", "Zalo", "YouTube", "LinkedIn"].map((social, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center group hover:bg-blue-700 transition-all cursor-pointer shadow-lg">
                         <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white">{social}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md">
                 <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Giờ làm việc</h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-400 uppercase tracking-widest">Thứ 2 - Thứ 6:</span>
                       <span className="font-black">08:00 - 17:30</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-400 uppercase tracking-widest">Thứ 7:</span>
                       <span className="font-black">08:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-slate-400 uppercase tracking-widest">Chủ nhật:</span>
                       <span className="text-red-500 font-black uppercase tracking-widest">Nghỉ</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Map Placeholder */}
        <div className="mt-32 aspect-[21/9] bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center justify-center text-8xl grayscale opacity-20 shadow-inner overflow-hidden">
           🗺️
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
