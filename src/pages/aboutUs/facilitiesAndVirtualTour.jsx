import React from 'react';

const FacilitiesAndVirtualTour = () => {
  const facilityCategories = [
    {
      title: "Hệ thống phòng học",
      desc: "Không gian lý thuyết đạt chuẩn sư phạm, trang bị hệ thống nghe nhìn hiện đại phục vụ giảng dạy.",
      icon: "🏫"
    },
    {
      title: "Trung tâm thực hành",
      desc: "Khu vực đào tạo kỹ năng chuyên sâu với thiết bị công nghiệp chuẩn quốc tế cho mọi ngành nghề.",
      icon: "⚙️"
    },
    {
      title: "Thư viện & Học liệu",
      desc: "Hệ thống thư viện số và phòng đọc yên tĩnh, cung cấp nguồn tài liệu học thuật phong phú.",
      icon: "📚"
    },
    {
      title: "Khu phức hợp nội trú",
      desc: "Cơ sở lưu trú chuẩn mực, đảm bảo môi trường sinh hoạt an toàn và tiện nghi cho học viên.",
      icon: "🏠"
    }
  ];

  const galleryImages = [
    { title: "Lab Nghiên cứu", category: "Kỹ thuật" },
    { title: "Sân vận động", category: "Thể chất" },
    { title: "Trung tâm ẩm thực", category: "Dịch vụ" },
    { title: "Hội trường lớn", category: "Học thuật" },
    { title: "Phòng Seminar", category: "Thảo luận" },
    { title: "Không gian xanh", category: "Thư giãn" }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <div className="inline-block border-b-2 border-blue-500 pb-2 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.4em] text-sm uppercase">Infrastructure Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase">
            Cơ sở vật chất học thuật
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto uppercase tracking-wide">
            Hệ thống hạ tầng hiện đại là nền tảng vững chắc cho quá trình nghiên cứu và phát triển kỹ năng chuyên sâu.
          </p>
        </div>
      </section>

      {/* Virtual Tour 360 Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase mb-4">Trải nghiệm không gian ảo 360°</h2>
            <p className="text-slate-500 font-medium">Khám phá toàn bộ khuôn viên Suleco City thông qua công nghệ thực tế ảo tiên tiến nhất hiện nay.</p>
          </div>
          <div className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded text-sm font-bold tracking-widest uppercase">
            <span className="animate-pulse h-2.5 w-2.5 bg-blue-500 rounded-full"></span>
            Academic Viewport
          </div>
        </div>

        <div className="relative aspect-video w-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-800 p-6 text-center z-10">
            <div className="w-24 h-24 bg-white shadow-2xl rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform cursor-pointer border border-slate-100">
               <span className="text-4xl text-blue-700">▶</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider">Bắt đầu chuyến tham quan</h3>
            <p className="text-slate-500 max-w-lg">Tương tác trực quan với mọi không gian học tập và thực hành tại Suleco City.</p>
          </div>
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
          
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border-l-4 border-blue-700 max-w-xs">
              <p className="text-slate-900 text-sm font-bold uppercase tracking-widest mb-1">Central Campus</p>
              <p className="text-slate-500 text-xs font-medium">Hệ thống 15 điểm quan sát chi tiết.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-[0.2em]">Danh mục hạ tầng</h2>
            <div className="h-1.5 w-24 bg-blue-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {facilityCategories.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-500 transition-all flex flex-col items-center text-center group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase">Thư viện ảnh định chế</h2>
          <div className="h-1 w-20 bg-blue-700 mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative aspect-[4/3] bg-slate-50 rounded-2xl shadow-md overflow-hidden group cursor-pointer border border-slate-100">
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold tracking-widest uppercase text-xs">
                Asset Archive 0{idx + 1}
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-slate-900 font-bold uppercase tracking-widest text-sm">{img.title}</p>
                <p className="text-blue-700 text-[10px] font-black uppercase mt-1 tracking-tighter">{img.category} Category</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visit Invitation */}
      <section className="mb-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="bg-slate-900 p-12 md:p-20 text-white relative overflow-hidden rounded-[3rem] shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700/10 skew-x-12 translate-x-32"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-8 uppercase tracking-tight">Kế hoạch tham quan học thuật</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Chúng tôi khuyến khích quý phụ huynh và ứng viên thực hiện các chuyến tham quan trực tiếp để đánh giá khách quan về môi trường học tập và các nguồn lực hỗ trợ tại Suleco City.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all uppercase tracking-widest text-sm shadow-xl">
                  Đăng ký tham quan
                </button>
                <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-sm">
                  Yêu cầu brochure
                </button>
              </div>
            </div>
            <div className="w-full lg:w-80 h-80 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-7xl grayscale opacity-30">
               🏢
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesAndVirtualTour;
