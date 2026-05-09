import React from 'react';
import { Link } from 'react-router-dom';

const FormalEducation = () => {
  const courses = [
    {
      id: "oto",
      title: "Công nghệ Kỹ thuật Ô tô",
      level: "Cao đẳng / Trung cấp",
      duration: "2.5 - 3 Năm",
      desc: "Chương trình trọng điểm quốc gia, đào tạo kỹ thuật viên chẩn đoán và sửa chữa ô tô hiện đại theo chuẩn Nhật Bản.",
      skills: ["Chẩn đoán điện tử", "Bảo dưỡng 5S", "Kỹ thuật Hybrid/EV"],
      img: "🚗"
    },
    {
      id: "co-khi",
      title: "Cơ khí Chế tạo (CNC)",
      level: "Cao đẳng / Trung cấp",
      duration: "2.5 - 3 Năm",
      desc: "Làm chủ công nghệ vận hành máy CNC, lập trình gia công chi tiết máy với độ chính xác cực cao.",
      skills: ["Lập trình CNC", "Đọc bản vẽ kỹ thuật", "Vận hành máy phay/tiện"],
      img: "⚙️"
    },
    {
      id: "dien-tu",
      title: "Điện - Điện tử Công nghiệp",
      level: "Cao đẳng / Trung cấp",
      duration: "2.5 - 3 Năm",
      desc: "Thiết kế, lắp đặt và bảo trì các hệ thống điện tự động hóa trong nhà máy hiện đại.",
      skills: ["Lập trình PLC", "Lắp đặt tủ điện", "Tự động hóa"],
      img: "⚡"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] font-sans text-slate-800">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-32 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Mainstream Programs</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase leading-[1.1]">
            Hệ chính quy <br/> <span className="text-blue-500">Chất lượng cao</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Đào tạo chuyên sâu, bám sát thực tiễn doanh nghiệp.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Intro Section */}
        <section className="mb-32 grid lg:grid-cols-2 gap-20 items-center">
           <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Triết lý đào tạo hệ chính quy</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 text-justify">
                 Hệ chính quy tại Suleco City được thiết kế theo mô hình 70% thực hành - 30% lý thuyết. Chúng tôi tập trung vào việc hình thành kỹ năng nghề nghiệp vững chắc, tư duy giải quyết vấn đề và tác phong công nghiệp khắt khe.
              </p>
              <ul className="space-y-4">
                 {["Bằng tốt nghiệp chuẩn quốc gia", "Cam kết 100% việc làm đúng chuyên ngành", "Hỗ trợ học ngoại ngữ song song"].map((item, i) => (
                   <li key={i} className="flex items-center gap-4 text-slate-700 font-bold uppercase tracking-widest text-xs">
                      <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-700 p-10 rounded-[3rem] text-white shadow-xl shadow-blue-900/20">
                 <p className="text-4xl font-black mb-2">70%</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-100">Thời lượng thực hành</p>
              </div>
              <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-xl">
                 <p className="text-4xl font-black mb-2">3000+</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Giờ đào tạo / Khóa</p>
              </div>
              <div className="bg-slate-100 p-10 rounded-[3rem] text-slate-900 col-span-2 shadow-inner border border-slate-200">
                 <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-blue-700">Môi trường giả lập</p>
                 <p className="text-lg font-light leading-relaxed">Học tập trong các xưởng thực hành hiện đại, mô phỏng chính xác quy trình tại doanh nghiệp.</p>
              </div>
           </div>
        </section>

        {/* Courses Grid */}
        <section className="mb-32">
           <div className="text-center mb-20">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Danh mục Ngành đào tạo</h2>
              <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
           </div>

           <div className="grid lg:grid-cols-3 gap-12">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col">
                   <div className="aspect-square bg-slate-50 rounded-3xl mb-10 flex items-center justify-center text-7xl group-hover:bg-blue-700 group-hover:text-white transition-all shadow-inner border border-slate-100 overflow-hidden">
                      <div className="group-hover:scale-110 transition-transform duration-500">{course.img}</div>
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight group-hover:text-blue-700 transition-colors">{course.title}</h3>
                   <div className="flex gap-4 mb-8">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-[10px] font-black uppercase tracking-widest">{course.level}</span>
                      <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded text-[10px] font-black uppercase tracking-widest">{course.duration}</span>
                   </div>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 italic">{course.desc}</p>
                   <div className="space-y-3 mb-10">
                      {course.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                           <span className="w-1.5 h-1.5 bg-blue-700 rounded-full"></span>
                           {skill}
                        </div>
                      ))}
                   </div>
                   <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-blue-700 transition-colors shadow-lg">
                      Chi tiết chương trình
                   </button>
                </div>
              ))}
           </div>
        </section>

        {/* Global Opportunities */}
        <section className="bg-slate-900 p-16 md:p-24 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700/5 skew-x-12 translate-x-32"></div>
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl font-black uppercase tracking-tight mb-8 text-blue-400 leading-tight">Cơ hội liên thông <br/> & Tu nghiệp Quốc tế</h2>
                 <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                    Học viên hoàn thành hệ chính quy tại Suleco City có cơ hội tham gia các chương trình tu nghiệp 3-5 năm tại Nhật Bản, CHLB Đức hoặc Australia với mức thu nhập cực kỳ hấp dẫn.
                 </p>
                 <div className="flex flex-wrap gap-8">
                    <div>
                       <p className="text-4xl font-black mb-1">95%</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Được phỏng vấn ngay</p>
                    </div>
                    <div>
                       <p className="text-4xl font-black mb-1">0%</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Rủi ro nghề nghiệp</p>
                    </div>
                 </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md">
                 <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Đối tác đào tạo</h3>
                 <div className="grid grid-cols-2 gap-8 grayscale opacity-50 group-hover:opacity-100 transition-opacity">
                    <span className="font-black tracking-tighter text-2xl">MITSUBISHI</span>
                    <span className="font-black tracking-tighter text-2xl">KOMATSU</span>
                    <span className="font-black tracking-tighter text-2xl">DENSO</span>
                    <span className="font-black tracking-tighter text-2xl">TOYOTA</span>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default FormalEducation;
