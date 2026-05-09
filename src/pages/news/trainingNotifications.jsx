import React from 'react';

const TrainingNotifications = () => {
  const notifications = [
    {
      title: "Thông báo về việc nghỉ lễ Quốc khánh 02/09",
      date: "01/06/2024",
      priority: "High",
      category: "Lịch học",
      desc: "Toàn thể học viên và giảng viên được nghỉ từ ngày 01/09 đến hết ngày 03/09/2024."
    },
    {
      title: "Lịch thi kết thúc học kỳ II - Khối ngành Kỹ thuật",
      date: "28/05/2024",
      priority: "Normal",
      category: "Khảo thí",
      desc: "Chi tiết phòng thi và danh sách thí sinh đã được cập nhật trên cổng thông tin sinh viên."
    },
    {
      title: "Đăng ký học phần bổ trợ kỹ năng mềm khóa 2024",
      date: "25/05/2024",
      priority: "Normal",
      category: "Đào tạo",
      desc: "Học viên nhanh chóng đăng ký các lớp kỹ năng giao tiếp và tư duy phản biện trước ngày 15/06."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 pb-24">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-b-2 border-blue-500 pb-2 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">Academic Affairs</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Thông báo Phòng Đào tạo
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl uppercase tracking-[0.2em] leading-relaxed">
            Kênh thông tin chính thống về học thuật và quy chế tại Suleco City.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-16">
        <div className="grid lg:grid-cols-4 gap-12">
           
           {/* Sidebar Filter */}
           <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-24">
                 <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 border-b border-slate-50 pb-4">Phân loại</h3>
                 <div className="space-y-3">
                    {["Tất cả thông báo", "Lịch học & Lịch thi", "Quy chế & Học vụ", "Học phí & Học bổng"].map((cat, i) => (
                      <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-tighter transition-all ${i === 0 ? 'bg-blue-700 text-white shadow-md' : 'hover:bg-slate-50 text-slate-400'}`}>
                         {cat}
                      </button>
                    ))}
                 </div>
              </div>
           </div>

           {/* Notifications List */}
           <div className="lg:col-span-3 space-y-6">
              {notifications.map((note, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col md:flex-row gap-8 items-start">
                   <div className="flex flex-col items-center justify-center w-24 h-24 bg-slate-50 rounded-2xl shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all">
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">{note.date.split('/')[2]}</span>
                      <span className="text-2xl font-black">{note.date.split('/')[0]}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest opacity-50 mt-1">Tháng {note.date.split('/')[1]}</span>
                   </div>
                   <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                         <span className={`px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest ${note.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-700'}`}>
                            {note.category}
                         </span>
                         {note.priority === 'High' && <span className="animate-pulse text-red-600 text-[10px] font-black uppercase tracking-widest">● Khẩn</span>}
                      </div>
                      <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                         {note.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                         {note.desc}
                      </p>
                      <button className="text-blue-700 font-black text-[10px] uppercase tracking-widest hover:underline">Chi tiết thông báo →</button>
                   </div>
                </div>
              ))}
           </div>

        </div>
      </div>
    </div>
  );
};

export default TrainingNotifications;
