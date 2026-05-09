import React from 'react';

const ShortTermCourses = () => {
  const courses = [
    {
      title: "Hàn Công Nghệ Cao (3G/6G)",
      duration: "3-6 Tháng",
      desc: "Đào tạo kỹ thuật hàn điện, hàn Argon, hàn CO2 theo tiêu chuẩn quốc tế. Cấp chứng chỉ nghề có giá trị toàn quốc.",
      icon: "🧑‍🏭"
    },
    {
      title: "Vận hành Máy CNC",
      duration: "4 Tháng",
      desc: "Kỹ năng lập trình và vận hành máy tiện CNC, phay CNC. Tập trung vào thực hành trực tiếp trên máy hiện đại.",
      icon: "📠"
    },
    {
      title: "Nghiệp vụ Buồng phòng",
      duration: "2 Tháng",
      desc: "Đào tạo quy chuẩn phục vụ phòng khách sạn 4-5 sao. Kỹ năng giao tiếp và xử lý tình huống chuyên nghiệp.",
      icon: "🧹"
    },
    {
      title: "Pha chế (Barista/Bartender)",
      duration: "2 Tháng",
      desc: "Kiến thức về các loại đồ uống, kỹ thuật pha chế hiện đại và nghệ thuật trang trí đồ uống chuyên nghiệp.",
      icon: "☕"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <span className="text-blue-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Professional Training</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Hệ Ngắn Hạn</h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed italic">
            "Nâng cao tay nghề, bứt phá thu nhập - Khóa học thực chiến cấp tốc."
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
           <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 border-l-4 border-blue-700 pl-6">Học nhanh - Làm ngay</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 text-justify">
                 Chương trình ngắn hạn tại Suleco City dành cho các cá nhân muốn nâng cao kỹ năng nghề nghiệp trong thời gian ngắn nhất. Chương trình lược bỏ các phần lý thuyết rườm rà, tập trung 90% thời lượng vào cầm tay chỉ việc.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-full text-blue-700 font-bold text-xs uppercase tracking-widest">Cấp chứng chỉ ngay</div>
                 <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-full text-blue-700 font-bold text-xs uppercase tracking-widest">Hỗ trợ giới thiệu việc làm</div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-10 rounded-3xl text-center border border-slate-100">
                 <p className="text-4xl font-black text-blue-700 mb-2">02</p>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tháng tối thiểu</p>
              </div>
              <div className="bg-slate-900 p-10 rounded-3xl text-center text-white">
                 <p className="text-4xl font-black text-blue-500 mb-2">90%</p>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Thực hành</p>
              </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {courses.map((course, idx) => (
            <div key={idx} className="flex gap-8 bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
               <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl group-hover:bg-blue-700 group-hover:text-white transition-all shrink-0">
                  {course.icon}
               </div>
               <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2 leading-tight">{course.title}</h3>
                  <span className="inline-block text-[10px] font-black text-blue-700 uppercase tracking-widest mb-4 bg-blue-50 px-3 py-1 rounded">Thời gian: {course.duration}</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{course.desc}</p>
                  <button className="mt-6 text-blue-700 font-black text-xs uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">Đăng ký khóa học →</button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortTermCourses;
