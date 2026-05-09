import React from 'react';

const AdmissionGuide = () => {
  const steps = [
    {
      title: "Tìm hiểu & Tư vấn",
      desc: "Học viên tìm hiểu thông tin qua website hoặc đến trực tiếp văn phòng tuyển sinh để được tư vấn lộ trình phù hợp.",
      icon: "🔍"
    },
    {
      title: "Nộp hồ sơ xét tuyển",
      desc: "Hoàn thiện bộ hồ sơ theo hướng dẫn và nộp trực tuyến hoặc trực tiếp tại trường.",
      icon: "📄"
    },
    {
      title: "Phỏng vấn & Kiểm tra",
      desc: "Tham gia buổi phỏng vấn đánh giá năng lực và kiểm tra trình độ ngoại ngữ (nếu có).",
      icon: "🤝"
    },
    {
      title: "Nhập học chính thức",
      desc: "Nhận giấy báo nhập học, hoàn tất thủ tục học phí và chính thức bắt đầu hành trình tại Suleco City.",
      icon: "🎉"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 pb-24">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-4">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Enrolment Process</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Hướng dẫn nộp hồ sơ
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl uppercase tracking-widest leading-relaxed">
            Quy trình minh bạch - Thủ tục nhanh chóng - Hỗ trợ tận tâm.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Admission Schedule */}
        <section className="mb-32">
           <div className="bg-blue-700 p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl font-black uppercase tracking-tight mb-8 leading-tight">Thời gian Tuyển sinh <br/> Năm học 2024 - 2025</h2>
                    <div className="space-y-6">
                       <div className="flex gap-6 items-center">
                          <div className="w-16 h-16 bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/20">
                             <span className="text-[10px] font-black">Kỳ</span>
                             <span className="text-xl font-black">01</span>
                          </div>
                          <div>
                             <p className="text-lg font-black uppercase">Nhập học Đợt 1</p>
                             <p className="text-blue-100 text-sm">Hạn nộp hồ sơ: 15/06/2024</p>
                          </div>
                       </div>
                       <div className="flex gap-6 items-center">
                          <div className="w-16 h-16 bg-white/10 rounded-2xl flex flex-col items-center justify-center border border-white/20">
                             <span className="text-[10px] font-black">Kỳ</span>
                             <span className="text-xl font-black">02</span>
                          </div>
                          <div>
                             <p className="text-lg font-black uppercase">Nhập học Đợt 2</p>
                             <p className="text-blue-100 text-sm">Hạn nộp hồ sơ: 15/09/2024</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="bg-white p-12 rounded-[3rem] text-slate-900 shadow-xl">
                    <h3 className="text-xl font-black uppercase tracking-widest mb-8 border-b border-slate-100 pb-4">Đối tượng tuyển sinh</h3>
                    <ul className="space-y-4">
                       {["Học sinh tốt nghiệp THCS (Hệ 9+)", "Học sinh tốt nghiệp THPT", "Sinh viên các trường CĐ/ĐH muốn chuyển ngành", "Người lao động muốn học nghề cấp tốc"].map((item, i) => (
                         <li key={i} className="flex gap-4 items-start text-sm">
                            <span className="text-blue-700 font-bold">●</span>
                            <span className="text-slate-600 italic leading-relaxed">{item}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* Steps Section */}
        <section className="mb-32">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">4 Bước đăng ký đơn giản</h2>
              <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
           </div>
           
           <div className="grid md:grid-cols-4 gap-12">
              {steps.map((step, i) => (
                <div key={i} className="relative group">
                   <div className="w-20 h-20 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-md">
                      {step.icon}
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                         <span className="text-blue-700 mr-2">0{i+1}.</span>
                         {step.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed text-justify">{step.desc}</p>
                   </div>
                   {i < 3 && (
                     <div className="hidden lg:block absolute top-10 -right-6 text-slate-200 text-3xl">→</div>
                   )}
                </div>
              ))}
           </div>
        </section>

        {/* Document Checklist */}
        <section className="bg-slate-50 p-12 md:p-24 rounded-[4rem] shadow-inner">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-8 leading-tight">Danh mục Hồ sơ cần chuẩn bị</h2>
                 <div className="space-y-4">
                    {[
                      "Bản sao công chứng Học bạ THCS/THPT",
                      "Bản sao công chứng Bằng tốt nghiệp hoặc Giấy chứng nhận tốt nghiệp tạm thời",
                      "Bản sao công chứng CMND/CCCD",
                      "Sơ yếu lý lịch có xác nhận của địa phương",
                      "04 ảnh thẻ 3x4 (chụp không quá 06 tháng)"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                         <span className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                         <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-slate-900 p-16 rounded-[4rem] text-white text-center shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-blue-700/10 blur-3xl"></div>
                 <div className="relative z-10 space-y-8">
                    <h3 className="text-2xl font-black uppercase tracking-tight">Bạn đã sẵn sàng?</h3>
                    <p className="text-slate-400 font-light italic">Tiết kiệm thời gian bằng cách nộp hồ sơ trực tuyến ngay bây giờ.</p>
                    <div className="flex flex-col gap-4">
                       <button className="bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-lg">Nộp hồ sơ Online</button>
                       <button className="bg-transparent border-2 border-white/20 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px]">Tải biểu mẫu (PDF)</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default AdmissionGuide;
