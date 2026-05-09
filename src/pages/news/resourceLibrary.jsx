import React from 'react';

const ResourceLibrary = () => {
  const resources = [
    { title: "Cẩm nang Sinh viên 2024", type: "PDF", size: "4.5 MB", icon: "📘" },
    { title: "Quy trình thực tập quốc tế", type: "PDF", size: "2.1 MB", icon: "📂" },
    { title: "Video hướng dẫn vận hành máy CNC", type: "MP4", size: "125 MB", icon: "🎥" },
    { title: "Mẫu hồ sơ xét tuyển học bổng", type: "DOCX", size: "500 KB", icon: "📝" },
    { title: "Sơ đồ mặt bằng cơ sở vật chất", type: "IMG", size: "12 MB", icon: "🗺️" },
    { title: "Báo cáo thường niên 2023", type: "PDF", size: "8.2 MB", icon: "📊" }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 pb-24">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <div className="inline-block border-b-2 border-blue-500 pb-2 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.4em] text-xs uppercase">Knowledge Base</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Thư viện tư liệu
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-3xl mx-auto uppercase tracking-widest leading-relaxed">
            Kho lưu trữ tri thức và tài nguyên học thuật trực tuyến.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        
        {/* Search Bar */}
        <div className="mb-24 max-w-2xl mx-auto">
           <div className="relative group">
              <input 
                type="text" 
                placeholder="Tìm kiếm tài liệu, giáo trình, biểu mẫu..."
                className="w-full bg-slate-50 border border-slate-100 p-6 rounded-2xl outline-none focus:border-blue-700 focus:bg-white transition-all font-bold text-slate-700 shadow-sm"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-700 text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg">Tìm kiếm</button>
           </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {resources.map((res, idx) => (
             <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-md">
                   {res.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-700 transition-colors">{res.title}</h3>
                <div className="flex gap-4 items-center mb-10">
                   <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded text-[10px] font-black uppercase tracking-widest border border-slate-100">{res.type}</span>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{res.size}</span>
                </div>
                <button className="mt-auto w-full border-2 border-slate-900 py-4 rounded-xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-slate-900 hover:text-white transition-all">
                   Tải xuống tài liệu
                </button>
             </div>
           ))}
        </div>

        {/* Categories Section */}
        <section className="mt-32">
           <div className="bg-slate-900 p-12 md:p-20 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-700/5 -skew-x-12 -translate-x-16"></div>
              <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                 <div className="md:w-1/2">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Yêu cầu tài liệu đặc biệt?</h2>
                    <p className="text-slate-400 text-lg font-light leading-relaxed mb-10">
                       Nếu bạn không tìm thấy tài liệu mình cần trong thư viện số, vui lòng gửi yêu cầu để ban biên tập hỗ trợ bạn trong thời gian sớm nhất.
                    </p>
                    <button className="bg-blue-700 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-blue-800 transition-all">Gửi yêu cầu tài liệu</button>
                 </div>
                 <div className="md:w-1/2 grid grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center">
                       <p className="text-4xl font-black mb-2">1000+</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Tài liệu số</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center">
                       <p className="text-4xl font-black mb-2">50GB+</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Dung lượng</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default ResourceLibrary;
