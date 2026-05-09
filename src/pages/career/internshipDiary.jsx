import React from 'react';

const InternshipDiary = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn Hùng",
      program: "Kỹ thuật Ô tô",
      company: "Toyota Hiroshima Tân Cảng",
      content: "Quá trình thực tập tại Toyota giúp mình làm quen với quy trình bảo dưỡng 5S của Nhật Bản. Những kiến thức tại Suleco City thực sự bám sát với thực tế xưởng.",
      avatar: "👨‍🔧"
    },
    {
      name: "Trần Thị Lan",
      program: "Nghiệp vụ Khách sạn",
      company: "Vinpearl Resort Nha Trang",
      content: "Môi trường thực tập 5 sao đòi hỏi sự chuyên nghiệp và tỉ mỉ. Nhờ các buổi giả lập tại trường mà mình không quá bỡ ngỡ khi bước vào thực tế.",
      avatar: "👩‍💼"
    },
    {
      name: "Lê Minh Tuấn",
      program: "Cơ khí chế tạo",
      company: "Tập đoàn Hòa Phát",
      content: "Được trực tiếp vận hành các dàn máy CNC công suất lớn tại Hòa Phát là một trải nghiệm tuyệt vời. Mình đã được nhận làm chính thức ngay sau kỳ thực tập.",
      avatar: "👨‍🏭"
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
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Success Stories</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Nhật ký thực tập <br/> & Cam kết việc làm
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Minh chứng cho chất lượng đào tạo và tương lai vững bền.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Job Commitment */}
        <section className="mb-32 grid lg:grid-cols-2 gap-20 items-center">
           <div className="bg-slate-900 p-12 md:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700/20 rounded-full -ml-16 -mb-16"></div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-10 border-b border-white/10 pb-6 text-blue-400">Cam kết 100% việc làm</h2>
              <div className="space-y-8">
                 <p className="text-slate-400 leading-relaxed text-justify italic">
                    "Suleco City ký kết hợp đồng cam kết việc làm bằng văn bản với 100% học viên ngay từ khi nhập học. Chúng tôi chịu trách nhiệm về đầu ra nghề nghiệp cho mỗi học viên hoàn thành chương trình đào tạo."
                 </p>
                 <div className="space-y-4">
                    {[
                      "Hoàn trả 100% học phí nếu không bố trí được việc làm",
                      "Đúng chuyên ngành đào tạo và trình độ tay nghề",
                      "Mức lương khởi điểm tối thiểu theo cam kết",
                      "Hỗ trợ tư vấn nghề nghiệp trọn đời"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <span className="text-blue-500 font-bold">●</span>
                         <span className="text-sm font-medium text-slate-300">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div>
              <div className="inline-block text-blue-700 font-bold text-xs tracking-[0.2em] uppercase mb-4 border-b-2 border-blue-700 pb-2">Academic Journal</div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Trải nghiệm học thuật thực tế</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8 text-justify">
                 Mỗi kỳ thực tập là một trang nhật ký trưởng thành của học viên Suleco. Tại đây, những lý thuyết khô khan được chuyển hóa thành kỹ năng điêu luyện dưới sự giám sát của các sư phụ (mentors) từ doanh nghiệp.
              </p>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-center justify-between">
                 <div className="text-center">
                    <p className="text-3xl font-black text-slate-900">100%</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hợp đồng đào tạo</p>
                 </div>
                 <div className="w-px h-12 bg-slate-200"></div>
                 <div className="text-center">
                    <p className="text-3xl font-black text-slate-900">03</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Kỳ thực tập / Khóa</p>
                 </div>
                 <div className="w-px h-12 bg-slate-200"></div>
                 <div className="text-center">
                    <p className="text-3xl font-black text-slate-900">A+</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Đánh giá doanh nghiệp</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Testimonials / Diary Entries */}
        <section className="space-y-16">
          <div className="text-center">
             <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Góc nhìn từ học viên</h2>
             <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
             {testimonials.map((t, idx) => (
               <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all relative group">
                  <div className="absolute top-0 right-0 p-8 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">"</div>
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 grayscale group-hover:grayscale-0 transition-all">
                     {t.avatar}
                  </div>
                  <p className="text-slate-600 italic text-sm leading-relaxed mb-8 text-justify">
                     {t.content}
                  </p>
                  <div className="border-t border-slate-50 pt-6">
                     <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{t.name}</h4>
                     <p className="text-blue-700 text-[10px] font-black uppercase tracking-widest mt-1">Ngành: {t.program}</p>
                     <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">Tại: {t.company}</p>
                  </div>
               </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default InternshipDiary;
