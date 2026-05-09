import React from 'react';

const GeneralIntroduction = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      {/* Banner Section */}
      <section className="relative overflow-hidden bg-slate-900 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/20 skew-x-12 translate-x-20"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-block border-l-2 border-blue-500 pl-4 mb-4">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-sm uppercase">Academic Foundation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase">
            Giới thiệu tổng quan
          </h1>
          <nav className="flex items-center space-x-4 text-slate-400 font-medium text-sm">
            <span className="hover:text-white transition-colors cursor-pointer uppercase tracking-widest">Trang chủ</span>
            <span className="text-blue-500">/</span>
            <span className="text-white uppercase tracking-widest">Về chúng tôi</span>
            <span className="text-blue-500">/</span>
            <span className="text-blue-300 uppercase tracking-widest">Giới thiệu chung</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        
        {/* Message To Students */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-3 gap-16">
             <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase border-b-4 border-blue-700 pb-4 mb-6">Thông điệp <br/> học thuật</h2>
                <p className="text-slate-500 font-medium leading-relaxed">Cam kết nâng tầm tri thức và phát triển kỹ năng thực hành nghề nghiệp bền vững.</p>
             </div>
             <div className="lg:col-span-2">
                <div className="text-slate-600 leading-relaxed space-y-8 text-lg text-justify">
                  <p>
                    Chúng tôi rất vinh dự được chào đón cộng đồng học viên đến với Suleco City. Tại đây, chúng tôi không chỉ tập trung vào việc truyền thụ kiến thức mà còn chú trọng vào sứ mệnh cốt lõi: <strong>Nghiên cứu học thuật song hành cùng phát triển kỹ năng thực tiễn suốt đời.</strong>
                  </p>
                  <p>
                    Suleco City cam kết mang lại trải nghiệm giáo dục chuẩn mực nhất, giúp bạn đạt được những thành tựu vượt bậc trong học tập và chuyên môn. Chúng tôi mong muốn được đồng hành cùng bạn trên hành trình khám phá những đỉnh cao tri thức mới, chuẩn bị hành trang vững chắc cho sự nghiệp toàn cầu.
                  </p>
                  <div className="bg-slate-50 p-10 border border-slate-100 rounded-3xl italic shadow-inner relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-700"></div>
                    "Việc bắt đầu một lộ trình đào tạo chuyên sâu luôn đi kèm với những thách thức. Tại Suleco City, hệ thống hỗ trợ học thuật và dịch vụ sinh viên luôn sẵn sàng đồng hành để đảm bảo quá trình học tập của bạn diễn ra thuận lợi và hiệu quả nhất."
                  </div>
                  <p className="font-bold text-blue-800 uppercase tracking-wider text-right border-t border-slate-100 pt-6">
                    Hội đồng Quản trị & Ban Giám hiệu Suleco City
                  </p>
                </div>
             </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mb-24 grid lg:grid-cols-2 gap-12">
          <div className="bg-blue-700 p-12 rounded-3xl text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-4">Tầm nhìn chiến lược</h2>
            <p className="text-xl leading-relaxed font-light italic">
              "Trở thành định chế giáo dục hàng đầu khu vực, nơi hội tụ tinh hoa tri thức và là cầu nối vững chắc cho nguồn nhân lực chất lượng cao vươn tầm thế giới."
            </p>
          </div>
          <div className="bg-slate-900 p-12 rounded-3xl text-white shadow-xl relative overflow-hidden group">
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform"></div>
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest border-b border-white/20 pb-4">Sứ mệnh cốt lõi</h2>
            <p className="text-xl leading-relaxed font-light italic">
              "Cung cấp nền tảng học thuật hiện đại, thực tiễn; nuôi dưỡng tư duy sáng tạo và ý thức trách nhiệm cộng đồng cho thế hệ trí thức trẻ."
            </p>
          </div>
        </section>

        {/* Our Campus */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase inline-block border-x-4 border-blue-700 px-8">Hạ tầng học thuật</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-slate-600 leading-relaxed text-lg text-justify">
              <p>
                Cơ sở đào tạo của Suleco City tọa lạc tại vị trí chiến lược, được thiết kế theo mô hình <strong>Campus hiện đại</strong>. Chúng tôi đầu tư mạnh mẽ vào hệ thống phòng nghiên cứu, thư viện số và không gian hội thảo đạt tiêu chuẩn quốc tế.
              </p>
              <p>
                Học viên được tiếp cận các nguồn học liệu đa dạng, hệ thống hỗ trợ kỹ thuật 24/7 và môi trường học tập tương tác cao, giúp tối ưu hóa hiệu quả tiếp thu tri thức.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                    <span className="text-blue-700 font-bold">●</span>
                    <span className="text-sm font-bold uppercase">Digital Library</span>
                 </div>
                 <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                    <span className="text-blue-700 font-bold">●</span>
                    <span className="text-sm font-bold uppercase">Research Lab</span>
                 </div>
                 <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                    <span className="text-blue-700 font-bold">●</span>
                    <span className="text-sm font-bold uppercase">Study Hubs</span>
                 </div>
                 <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                    <span className="text-blue-700 font-bold">●</span>
                    <span className="text-sm font-bold uppercase">Hi-Tech Class</span>
                 </div>
              </div>
            </div>
            <div className="bg-slate-100 aspect-square rounded-[3rem] border-8 border-slate-50 shadow-2xl flex items-center justify-center text-8xl grayscale opacity-50">
               🏫
            </div>
          </div>
        </section>
        
        {/* Alumni/Current Students */}
        <section className="rounded-[3rem] bg-slate-50 p-12 md:p-20 text-center border border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-widest">Cộng đồng học thuật SULECO</h2>
          <p className="text-slate-500 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi tự hào với cộng đồng học viên năng động, sáng tạo và luôn khát khao chinh phục những nấc thang mới trong hành trình trí tuệ.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
             <button className="bg-blue-700 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all uppercase tracking-widest text-sm shadow-lg">
                Gia nhập cộng đồng
             </button>
             <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all uppercase tracking-widest text-sm">
                Báo cáo thường niên
             </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default GeneralIntroduction;
