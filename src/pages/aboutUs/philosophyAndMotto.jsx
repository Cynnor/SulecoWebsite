import React from 'react';

const PhilosophyAndMotto = () => {
  const coreValues = [
    {
      title: "Tận Tâm",
      desc: "Luôn đặt lợi ích và sự phát triển của học viên lên hàng đầu trong mọi hoạt động giáo dục.",
      icon: "⚖️"
    },
    {
      title: "Chuyên Nghiệp",
      desc: "Xây dựng môi trường làm việc và học tập chuẩn mực, minh bạch và hiệu quả cao.",
      icon: "📜"
    },
    {
      title: "Sáng Tạo",
      desc: "Không ngừng đổi mới phương pháp giảng dạy và ứng dụng công nghệ hiện đại vào đào tạo.",
      icon: "💡"
    },
    {
      title: "Hội Nhập",
      desc: "Trang bị kỹ năng và tư duy toàn cầu, giúp học viên tự tin vươn ra thế giới.",
      icon: "🌐"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <div className="inline-block border-b-2 border-blue-500 pb-2 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.4em] text-sm uppercase">Academic Philosophy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight uppercase">
            Triết lý & Giá trị cốt lõi
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto uppercase tracking-widest">
            Hệ thống tư tưởng định hướng cho mọi hoạt động đào tạo và phát triển nhân lực tại Suleco City.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block text-blue-700 font-bold text-sm tracking-[0.2em] uppercase mb-4">TRIẾT LÝ GIÁO DỤC</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight uppercase tracking-tight">Khai phóng tiềm năng <br/> Kiến tạo tương lai</h2>
            <div className="text-slate-600 space-y-8 text-lg leading-relaxed text-justify">
              <p className="text-xl font-medium text-blue-700 italic border-l-4 border-blue-700 pl-8 py-3 bg-blue-50/50">
                "Học thuật chuyên sâu - Thực hành thực tiễn - Thái độ chuẩn mực"
              </p>
              <p>
                Tại Suleco City, chúng tôi tin rằng giáo dục không chỉ là việc truyền thụ tri thức chuyên môn đơn thuần, mà là quá trình rèn luyện tư duy, kỹ năng và đạo đức nghề nghiệp một cách toàn diện.
              </p>
              <p>
                Chúng tôi tập trung vào việc kiến tạo những con người có năng lực chuyên môn vượt trội, kỷ luật công nghiệp cao và tư duy hội nhập quốc tế mạnh mẽ. Đó chính là nền tảng cốt yếu để mỗi học viên có thể thích nghi và phát triển bền vững trong môi trường toàn cầu.
              </p>
            </div>
          </div>
          <div className="bg-slate-50 p-16 rounded-[2.5rem] border border-slate-100 flex items-center justify-center relative overflow-hidden group shadow-inner">
             <div className="absolute top-0 right-0 w-40 h-40 bg-blue-700/5 -mr-20 -mt-20 rounded-full group-hover:scale-150 transition-transform"></div>
             <div className="text-center relative z-10">
                <div className="text-8xl mb-10 grayscale group-hover:grayscale-0 transition-all">🎯</div>
                <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">Mục tiêu học thuật</h3>
                <p className="text-slate-500 mt-4 font-medium uppercase text-xs tracking-widest">Phát triển giá trị con người toàn diện</p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-[0.3em]">Hệ giá trị cốt lõi</h2>
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/10 transition-all flex flex-col items-center text-center group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-blue-400">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white border-l-8 border-blue-700 p-12 shadow-xl rounded-r-3xl rounded-l-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-widest flex items-center gap-4">
              <span className="text-3xl">🔭</span> Tầm nhìn
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed text-justify italic">
              Trở thành định chế giáo dục hàng đầu khu vực, là cầu nối học thuật tin cậy giữa Việt Nam và thị trường quốc tế, góp phần nâng tầm vị thế lao động Việt trên bản đồ tri thức thế giới.
            </p>
          </div>
          <div className="bg-slate-900 p-12 shadow-xl text-white border-l-8 border-slate-700 rounded-r-3xl rounded-l-lg">
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest flex items-center gap-4 text-white">
              <span className="text-3xl">🚀</span> Sứ mệnh
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed text-justify italic">
              Cung cấp hệ sinh thái giáo dục thực tiễn và cơ hội nghề nghiệp bền vững; nuôi dưỡng tư duy sáng tạo, kỹ năng thích ứng và bản lĩnh cho thế hệ trí thức trẻ Việt Nam trong kỷ nguyên số.
            </p>
          </div>
        </div>
      </section>

      {/* Motto Quote */}
      <section className="py-24 bg-slate-50 text-center relative overflow-hidden border-t border-slate-100">
        <div className="relative z-10 px-6 max-w-5xl mx-auto">
          <span className="text-blue-700 text-7xl font-serif opacity-20">"</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic mb-10 leading-tight tracking-tighter">
            Chúng tôi định hướng tri thức, <br/>
            Bạn kiến tạo tương lai vươn tầm.
          </h2>
          <div className="h-1 w-32 bg-blue-700 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 font-bold tracking-[0.4em] uppercase text-xs">Phương châm định danh Suleco City</p>
        </div>
      </section>
    </div>
  );
};

export default PhilosophyAndMotto;
