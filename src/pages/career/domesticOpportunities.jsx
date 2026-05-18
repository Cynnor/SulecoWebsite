import React from 'react';

/**
 * Component: DomesticOpportunities
 * Trang giới thiệu cơ hội thực tập và việc làm trong nước
 */
const DomesticOpportunities = () => {
  const jobPositions = [
    {
      title: "Kỹ thuật viên Sửa chữa Ô tô",
      company: "Hệ thống Gara Đối tác (TP.HCM, Bình Dương)",
      salary: "10 - 15 Triệu VNĐ",
      type: "Full-time",
      icon: "🛠️"
    },
    {
      title: "Nhân viên Vận hành Máy CNC",
      company: "KCN VSIP, KCN Amata",
      salary: "9 - 12 Triệu VNĐ",
      type: "Full-time",
      icon: "🔧"
    },
    {
      title: "Quản trị viên Tập sự (Khách sạn)",
      company: "Chuỗi Resort Vinpearl / InterContinental",
      salary: "Thỏa thuận",
      type: "Internship / Full-time",
      icon: "🏢"
    },
    {
      title: "Chuyên viên Lập trình Java/Web",
      company: "FPT Software / VNG",
      salary: "12 - 20 Triệu VNĐ",
      type: "Full-time",
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
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Domestic Employment</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Thực tập & Việc làm <br/> trong nước
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Khởi đầu sự nghiệp vững chắc tại các tập đoàn hàng đầu Việt Nam.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Recruitment Board */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Bảng tin tuyển sinh & Việc làm</h2>
                <div className="h-1.5 w-24 bg-blue-700 rounded-full"></div>
             </div>
             <div className="flex gap-4">
                <button className="px-6 py-2 bg-blue-700 text-white rounded-full font-bold uppercase tracking-widest text-[10px]">Tất cả</button>
                <button className="px-6 py-2 bg-slate-50 text-slate-400 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-slate-100">Kỹ thuật</button>
                <button className="px-6 py-2 bg-slate-50 text-slate-400 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-slate-100">Dịch vụ</button>
             </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
             {jobPositions.map((job, idx) => (
               <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex items-center gap-8 group">
                  <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-4xl group-hover:bg-blue-700 group-hover:text-white transition-all shrink-0">
                     {job.icon}
                  </div>
                  <div className="flex-1">
                     <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                     <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">{job.company}</p>
                     <div className="flex justify-between items-center">
                        <span className="text-blue-700 font-black text-sm">{job.salary}</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-black uppercase tracking-tighter">{job.type}</span>
                     </div>
                  </div>
               </div>
             ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="bg-slate-900 text-white px-12 py-4 rounded-xl font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-700 transition-all shadow-xl">
                Xem tất cả cơ hội việc làm
             </button>
          </div>
        </section>

        {/* Internship Policy */}
        <section className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="bg-slate-100 aspect-video rounded-[3rem] shadow-inner relative overflow-hidden flex items-center justify-center text-8xl grayscale opacity-20">
              🎓
           </div>
           <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8">Chính sách thực tập học thuật</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 text-justify">
                 Chương trình thực tập tại Suleco City không chỉ là học việc, mà là quá trình nhúng mình vào môi trường làm việc chuyên nghiệp. Học viên được hướng dẫn bởi các chuyên gia doanh nghiệp và có cơ hội nhận lương thực tập ngay trong quá trình học.
              </p>
              <div className="space-y-6">
                 {[
                   "Thực tập tại các Gara/Nhà máy đạt chuẩn ISO",
                   "Được đóng bảo hiểm và hỗ trợ phụ cấp sinh hoạt",
                   "Cơ hội được giữ lại làm việc chính thức đạt 90%",
                   "Chứng chỉ thực tập từ các tập đoàn lớn"
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-center">
                      <span className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">✓</span>
                      <span className="text-slate-700 font-bold uppercase tracking-widest text-[10px]">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default DomesticOpportunities;
