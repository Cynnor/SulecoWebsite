import React from 'react';

const StudentActivities = () => {
  const clubs = [
    { name: "CLB Kỹ thuật trẻ", icon: "🛠️", members: "150+" },
    { name: "CLB Tiếng Nhật", icon: "🎌", members: "200+" },
    { name: "CLB Bóng đá", icon: "⚽", members: "100+" },
    { name: "CLB Văn nghệ", icon: "🎸", members: "80+" }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-4">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Extra-Curricular</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Hoạt động sinh viên <br/> & Góc ngoại khóa
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Nơi tài năng tỏa sáng và tình bạn nảy nở.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Intro */}
        <section className="mb-32 grid lg:grid-cols-2 gap-20 items-center">
           <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-l-4 border-blue-700 pl-6">Học hết sức - Chơi hết mình</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 text-justify">
                 Tại Suleco City, chúng tôi tin rằng giáo dục toàn diện không chỉ nằm ở sách vở. Các hoạt động ngoại khóa, CLB và sự kiện văn thể mỹ là môi trường quan trọng để học viên rèn luyện kỹ năng mềm, tinh thần đồng đội và sự tự tin.
              </p>
              <div className="flex gap-4">
                 <button className="bg-blue-700 text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg">Gia nhập CLB</button>
                 <button className="bg-slate-50 text-slate-400 px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] border border-slate-100 hover:bg-slate-100">Xem lịch sự kiện</button>
              </div>
           </div>
           <div className="order-1 lg:order-2 bg-slate-100 aspect-video rounded-[3rem] shadow-inner flex items-center justify-center text-9xl grayscale opacity-20">
              🎭
           </div>
        </section>

        {/* Clubs Grid */}
        <section className="mb-32">
           <div className="text-center mb-20">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Hệ thống Câu lạc bộ</h2>
              <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
           </div>

           <div className="grid md:grid-cols-4 gap-8">
              {clubs.map((club, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all text-center group">
                   <div className="w-20 h-20 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-md">
                      {club.icon}
                   </div>
                   <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{club.name}</h3>
                   <p className="text-blue-700 font-black text-[10px] uppercase tracking-widest">{club.members} Thành viên</p>
                </div>
              ))}
           </div>
        </section>

        {/* Highlight Activities */}
        <section className="bg-slate-900 p-12 md:p-20 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/5 skew-x-12 translate-x-16"></div>
           <h2 className="text-3xl font-black uppercase tracking-tight mb-12 text-center border-b border-white/10 pb-6">Hoạt động tiêu biểu trong năm</h2>
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: "Hội thao Suleco City", date: "Tháng 03", desc: "Đại hội thể thao thường niên thu hút hàng ngàn học viên tham gia." },
                { title: "Suleco Got Talent", date: "Tháng 11", desc: "Sân chơi nghệ thuật tìm kiếm những tài năng âm nhạc, vũ đạo." },
                { title: "Ngày hội Việc làm", date: "Tháng 05", desc: "Cầu nối trực tiếp giữa học viên và các nhà tuyển dụng hàng đầu." }
              ].map((act, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all">
                   <span className="text-blue-500 font-black text-xs uppercase tracking-widest block mb-4">{act.date}</span>
                   <h4 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:text-blue-400 transition-colors">{act.title}</h4>
                   <p className="text-slate-400 text-sm leading-relaxed">{act.desc}</p>
                </div>
              ))}
           </div>
        </section>

      </div>
    </div>
  );
};

export default StudentActivities;
