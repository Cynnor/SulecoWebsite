import React from 'react';

const ScholarshipsAndTuition = () => {
  const scholarships = [
    {
      name: "Học bổng Suleco City Diamond",
      value: "100% Học phí toàn khóa",
      condition: "Dành cho thủ khoa đầu vào hoặc học viên đạt giải Nhất các kỳ thi kỹ năng tay nghề cấp Quốc gia.",
      icon: "💎",
      color: "bg-blue-50 text-blue-700"
    },
    {
      name: "Học bổng Khuyến học Tài năng",
      value: "50% Học phí",
      condition: "Học viên có GPA > 8.5 hoặc đạt trình độ ngoại ngữ JLPT N3/IELTS 6.5 trở lên.",
      icon: "🌟",
      color: "bg-amber-50 text-amber-600"
    },
    {
      name: "Học bổng Thủ lĩnh trẻ",
      value: "30% Học phí",
      condition: "Dành cho học viên có thành tích xuất sắc trong các hoạt động Đoàn, Hội và phong trào sinh viên.",
      icon: "👑",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      name: "Hỗ trợ Vượt khó Học giỏi",
      value: "Hỗ trợ 10-20 Triệu/năm",
      condition: "Học viên có hoàn cảnh khó khăn, gia đình chính sách nhưng có ý chí vươn lên trong học tập.",
      icon: "🤝",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  const tuitionDetails = [
    { category: "Hệ Cao đẳng chính quy", fee: "12.500.000 VNĐ", unit: "Học kỳ", duration: "2.5 - 3 Năm" },
    { category: "Hệ Trung cấp chính quy", fee: "9.500.000 VNĐ", unit: "Học kỳ", duration: "1.5 - 2 Năm" },
    { category: "Khóa đào tạo Kỹ thuật ngắn hạn", fee: "6.000.000 - 8.000.000 VNĐ", unit: "Khóa học", duration: "3 - 6 Tháng" },
    { category: "Chương trình Ngoại ngữ cấp tốc", fee: "4.500.000 VNĐ", unit: "Khóa học", duration: "4 Tháng" }
  ];

  const faqs = [
    { q: "Học phí có tăng trong suốt khóa học không?", a: "Suleco City cam kết không tăng học phí quá 5% mỗi năm và được thông báo lộ trình rõ ràng ngay từ khi nhập học." },
    { q: "Có hỗ trợ trả góp học phí không?", a: "Nhà trường liên kết với các ngân hàng đối tác hỗ trợ trả góp học phí với lãi suất 0% cho phụ huynh và học viên." },
    { q: "Làm sao để duy trì học bổng?", a: "Học viên cần duy trì điểm GPA tối thiểu từ 7.5 và không vi phạm quy chế đào tạo để tiếp tục nhận học bổng cho học kỳ kế tiếp." }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 pb-24">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <div className="inline-block border-b-2 border-blue-500 pb-2 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.4em] text-xs uppercase">Financial Investment</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Học bổng & Học phí
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl mx-auto uppercase tracking-widest leading-relaxed">
            Đầu tư cho tri thức - Kiến tạo tương lai bền vững.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Scholarships Section */}
        <section className="mb-32">
           <div className="text-center mb-20 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Chính sách Học bổng Tài năng</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm uppercase tracking-widest">Khuyến khích nỗ lực học tập và tôn vinh những cá nhân xuất sắc.</p>
              <div className="h-1.5 w-24 bg-blue-700 mx-auto rounded-full"></div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {scholarships.map((s, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all relative group h-full flex flex-col">
                   <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-md`}>
                      {s.icon}
                   </div>
                   <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-tight">{s.name}</h3>
                   <p className="text-blue-700 font-black text-sm mb-6">{s.value}</p>
                   <p className="text-slate-500 text-xs leading-relaxed italic border-t border-slate-50 pt-4 mt-auto">
                      {s.condition}
                   </p>
                </div>
              ))}
           </div>
        </section>

        {/* Tuition Table Section */}
        <section className="mb-32">
           <div className="bg-slate-900 rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <div className="relative z-10">
                 <h2 className="text-3xl font-black uppercase tracking-tight mb-12 border-b border-white/10 pb-6">Biểu phí Đào tạo Chi tiết</h2>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 border-b border-white/10">
                             <th className="py-6">Hệ đào tạo</th>
                             <th className="py-6">Học phí định kỳ</th>
                             <th className="py-6">Đơn vị tính</th>
                             <th className="py-6">Thời gian đào tạo</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          {tuitionDetails.map((item, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                               <td className="py-6 font-black uppercase tracking-tight text-sm group-hover:text-blue-400">{item.category}</td>
                               <td className="py-6 text-sm font-bold">{item.fee}</td>
                               <td className="py-6 text-xs text-slate-400 uppercase tracking-widest">{item.unit}</td>
                               <td className="py-6 text-xs text-slate-400 uppercase tracking-widest">{item.duration}</td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </section>

        {/* Financial Aid & FAQ */}
        <section className="grid lg:grid-cols-2 gap-20">
           <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">Chính sách hỗ trợ tài chính</h3>
              <div className="space-y-6">
                 {[
                   { title: "Gói vay ưu đãi giáo dục", desc: "Liên kết với HD Bank và Vietcombank hỗ trợ vay vốn với thủ tục nhanh chóng." },
                   { title: "Giảm học phí khi nộp trọn gói", desc: "Giảm ngay 5-10% tổng học phí khi học viên hoàn thành học phí theo năm hoặc theo khóa." },
                   { title: "Gói học bổng gia đình", desc: "Giảm thêm 15% học phí cho anh/chị/em ruột cùng theo học tại hệ thống Suleco City." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 items-start bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all">
                      <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-black shrink-0">✓</div>
                      <div>
                         <h4 className="font-black text-slate-900 uppercase tracking-tight mb-2 text-sm">{item.title}</h4>
                         <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">Câu hỏi thường gặp (FAQ)</h3>
              <div className="space-y-8">
                 {faqs.map((f, i) => (
                   <div key={i} className="border-b border-slate-100 pb-8 last:border-0">
                      <h4 className="font-black text-slate-900 uppercase tracking-tight mb-4 text-sm flex gap-4">
                         <span className="text-blue-700 italic">Q:</span> {f.q}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed pl-8">
                         <span className="text-slate-300 font-bold mr-2 uppercase tracking-widest italic">Ans:</span> {f.a}
                      </p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default ScholarshipsAndTuition;
