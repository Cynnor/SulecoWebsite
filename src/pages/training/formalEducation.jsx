import React from 'react';

const FormalEducation = () => {
  const programs = [
    {
      title: "Công nghệ Kỹ thuật Ô tô",
      code: "AUTO-2024",
      duration: "2.5 Năm",
      desc: "Đào tạo chuyên sâu về bảo dưỡng, sửa chữa và vận hành các hệ thống trên ô tô hiện đại. Học viên được thực hành trên các dòng xe đời mới.",
      highlights: ["Hệ thống truyền động", "Điện - Điện tử ô tô", "Chẩn đoán lỗi bằng máy"]
    },
    {
      title: "Cơ khí chế tạo máy",
      code: "MECH-2024",
      duration: "2.5 Năm",
      desc: "Kỹ thuật gia công, chế tạo các chi tiết máy. Sử dụng thành thạo các loại máy công cụ và máy CNC hiện đại.",
      highlights: ["Tiện, phay, bào", "Lập trình CNC", "Đọc bản vẽ kỹ thuật"]
    },
    {
      title: "Điện - Điện tử công nghiệp",
      code: "ELEC-2024",
      duration: "2.5 Năm",
      desc: "Thiết kế, lắp đặt và bảo trì hệ thống điện công nghiệp, hệ thống tự động hóa và PLC.",
      highlights: ["Lắp đặt tủ điện", "Lập trình PLC", "Thiết bị điện tử"]
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-blue-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <span className="text-blue-300 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Formal Education</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Hệ Chính Quy</h1>
          <p className="text-blue-100 text-lg md:text-xl font-light max-w-2xl leading-relaxed italic">
            "Vững kiến thức, giỏi kỹ năng - Sẵn sàng cho sự nghiệp chuyên nghiệp."
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-b-4 border-blue-700 pb-4 inline-block">Tổng quan chương trình</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify">
              Hệ chính quy tại Suleco City được thiết kế theo chuẩn đào tạo nghề nghiệp quốc tế, tập trung 70% thời lượng vào thực hành thực tế. Chúng tôi cam kết đào tạo đội ngũ kỹ thuật viên có tay nghề cao, tác phong công nghiệp và kỷ luật tốt.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="font-black text-blue-700 uppercase tracking-widest text-xs mb-4">Bằng cấp</h3>
                  <p className="text-slate-900 font-bold text-lg">Bằng Cao đẳng/Trung cấp chính quy</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                  <h3 className="font-black text-blue-700 uppercase tracking-widest text-xs mb-4">Đối tượng</h3>
                  <p className="text-slate-900 font-bold text-lg">Tốt nghiệp THPT hoặc tương đương</p>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-700/20 rounded-full -mr-12 -mt-12"></div>
             <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Lợi thế đào tạo</h3>
             <ul className="space-y-6">
                {[
                  "Phòng xưởng hiện đại 100%",
                  "Giảng viên là chuyên gia đầu ngành",
                  "Cam kết việc làm sau tốt nghiệp",
                  "Hỗ trợ vay vốn học tập"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                     <span className="text-blue-500 font-bold">✓</span>
                     <span className="text-sm font-medium text-slate-300">{item}</span>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-12 text-center">Các ngành đào tạo trọng điểm</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-blue-700 scale-y-0 group-hover:scale-y-100 transition-transform"></div>
               <span className="text-[10px] font-black text-blue-700 uppercase tracking-[0.2em] mb-2 block">{p.code}</span>
               <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-700 transition-colors leading-tight">{p.title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-8">{p.desc}</p>
               <div className="space-y-3 mb-8">
                  {p.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-tighter">
                       <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                       {h}
                    </div>
                  ))}
               </div>
               <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Thời gian: {p.duration}</span>
                  <button className="text-blue-700 font-black text-xs uppercase tracking-widest hover:underline">Xem chi tiết</button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormalEducation;
