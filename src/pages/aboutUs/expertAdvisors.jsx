import React from 'react';

const ExpertAdvisors = () => {
  const advisors = [
    {
      name: "TS. Nguyễn Văn A",
      role: "Cố vấn chiến lược đào tạo",
      desc: "Hơn 20 năm kinh nghiệm trong quản lý giáo dục và hợp tác quốc tế.",
      image: "👤"
    },
    {
      name: "ThS. Trần Thị B",
      role: "Chuyên gia Ngôn ngữ học",
      desc: "Nguyên giảng viên khoa tiếng Nhật, chuyên gia về phương pháp sư phạm hiện đại.",
      image: "👤"
    },
    {
      name: "Mr. Tanaka Ichiro",
      role: "Cố vấn văn hóa & Việc làm Nhật Bản",
      desc: "Chuyên gia tư vấn nhân sự cấp cao tại Tokyo, hơn 15 năm kết nối doanh nghiệp Nhật - Việt.",
      image: "👤"
    },
    {
      name: "Bà Lê Thu C",
      role: "Chuyên gia Đào tạo kỹ năng mềm",
      desc: "Nhà huấn luyện doanh nghiệp, chuyên đào tạo tác phong và kỷ luật công nghiệp.",
      image: "👤"
    },
    {
      name: "Ông Phạm Văn D",
      role: "Cố vấn kỹ thuật công nghệ",
      desc: "Kỹ sư trưởng tại tập đoàn lớn, chuyên gia về tự động hóa và sản xuất công nghiệp.",
      image: "👤"
    },
    {
      name: "Dr. Elizabeth Smith",
      role: "Cố vấn chương trình quốc tế",
      desc: "Chuyên gia giáo dục từ Australia, hỗ trợ xây dựng lộ trình hội nhập toàn cầu.",
      image: "👤"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      {/* Banner */}
      <section className="bg-slate-900 py-24 px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 -skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-4">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Academic Leadership</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">Đội ngũ chuyên gia & Cố vấn</h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl uppercase tracking-widest leading-relaxed">
            Hội đồng học thuật định hình tiêu chuẩn đào tạo quốc tế tại Suleco City.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
             <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-8">Nguồn lực tri thức tinh hoa</h2>
             <div className="text-slate-600 text-lg leading-relaxed space-y-6 text-justify">
                <p>
                  Tại Suleco City, chúng tôi quy tụ đội ngũ chuyên gia và cố vấn giàu kinh nghiệm, tâm huyết từ nhiều lĩnh vực: quản trị giáo dục, ngôn ngữ học, kỹ thuật công nghiệp và văn hóa quốc tế.
                </p>
                <p>
                  Đội ngũ học thuật của chúng tôi không chỉ tham gia giảng dạy mà còn đóng vai trò then chốt trong việc nghiên cứu và phát triển giáo trình, đảm bảo tính cập nhật và tương thích với yêu cầu khắt khe của thị trường lao động toàn cầu.
                </p>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
             <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center shadow-sm">
                <p className="text-4xl font-black text-blue-700 mb-2">20+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Học hàm / Học vị cao</p>
             </div>
             <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center shadow-lg text-white">
                <p className="text-4xl font-black text-blue-500 mb-2">15+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Năm kinh nghiệm tb</p>
             </div>
             <div className="bg-blue-700 p-8 rounded-3xl text-center shadow-lg text-white">
                <p className="text-4xl font-black text-white mb-2">05+</p>
                <p className="text-xs font-bold text-blue-200 uppercase tracking-widest">Chuyên gia quốc tế</p>
             </div>
             <div className="bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-sm">
                <p className="text-4xl font-black text-slate-900 mb-2">100%</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cam kết chất lượng</p>
             </div>
          </div>
        </div>
      </section>

      {/* Advisors Grid */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-widest inline-block border-b-4 border-blue-700 pb-4">Hội đồng cố vấn học thuật</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {advisors.map((advisor, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-700 scale-y-0 group-hover:scale-y-100 transition-transform"></div>
                <div className="w-16 h-16 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-3xl mb-8 grayscale group-hover:grayscale-0 transition-all">
                  {advisor.image}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">{advisor.name}</h3>
                  <p className="text-blue-700 font-black text-[10px] mb-6 uppercase tracking-widest border-b border-slate-100 pb-2">{advisor.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{advisor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
         <div className="bg-slate-900 p-12 md:p-20 text-white relative overflow-hidden rounded-[3rem] shadow-2xl">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-700/5 -skew-x-12 -translate-x-16"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
               <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest border-b border-white/10 pb-6">Liên minh giáo dục & Đối tác học thuật</h2>
               <p className="text-slate-400 text-lg mb-16 font-light leading-relaxed">
                  Chúng tôi duy trì sự kết nối chặt chẽ với các định chế giáo dục uy tín và hiệp hội ngành nghề quốc tế để đảm bảo quy chuẩn đào tạo luôn ở mức cao nhất.
               </p>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                  <div className="text-xl font-black italic border border-white/20 p-6 flex items-center justify-center rounded-xl">ACADEMIC 1</div>
                  <div className="text-xl font-black italic border border-white/20 p-6 flex items-center justify-center rounded-xl">INSTITUTE 2</div>
                  <div className="text-xl font-black italic border border-white/20 p-6 flex items-center justify-center rounded-xl">GLOBAL 3</div>
                  <div className="text-xl font-black italic border border-white/20 p-6 flex items-center justify-center rounded-xl">PARTNER 4</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ExpertAdvisors;
