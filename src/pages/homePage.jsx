import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const stats = [
    { value: "20+", label: "Năm kinh nghiệm", icon: "🏆" },
    { value: "5000+", label: "Học viên thành đạt", icon: "👨‍🎓" },
    { value: "100+", label: "Đối tác Nhật Bản", icon: "🤝" },
    { value: "98%", label: "Tỉ lệ có việc làm", icon: "📈" },
  ];

  const services = [
    {
      title: "Tuyển sinh Trung cấp",
      desc: "Chương trình đào tạo thực tiễn, cam kết đầu ra và hỗ trợ việc làm ngay sau khi tốt nghiệp.",
      features: ["Đào tạo 1.5 - 2 năm", "Học phí ưu đãi", "Bằng chính quy"],
      link: "/admissions",
      color: "blue"
    },
    {
      title: "XKLĐ Nhật Bản",
      desc: "Cung cấp các đơn hàng chất lượng cao, chi phí minh bạch và quy trình hỗ trợ tận tâm.",
      features: ["Đơn hàng đa dạng", "Lương cao", "Hỗ trợ vay vốn"],
      link: "/career-export",
      color: "indigo"
    }
  ];

  const highlights = [
    {
      title: "Môi trường hiện đại",
      desc: "Cơ sở vật chất chuẩn quốc tế, trang thiết bị tiên tiến phục vụ tối đa cho việc học.",
      icon: "🏢"
    },
    {
      title: "Chương trình chuẩn",
      desc: "Giáo trình được biên soạn bởi các chuyên gia hàng đầu, cập nhật theo xu hướng thị trường.",
      icon: "📜"
    },
    {
      title: "Hỗ trợ tận tâm",
      desc: "Đội ngũ tư vấn và giảng viên luôn sẵn sàng đồng hành cùng học viên 24/7.",
      icon: "🎧"
    }
  ];

  return (
    <div className="w-full bg-white font-sans text-slate-800 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 md:px-12 lg:px-20 py-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 opacity-70 hidden lg:block"></div>
        <div className="absolute top-20 right-40 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-[1400px] mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 border-l-4 border-blue-600 bg-blue-50/50 px-4 py-2 text-sm font-bold text-blue-700 mb-8 uppercase tracking-widest">
              Hệ thống Giáo dục Quốc tế Suleco City
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight uppercase">
              Nâng tầm trí tuệ <br/> 
              <span className="text-blue-700">Kiến tạo sự nghiệp</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-xl">
              Suleco City cung cấp các chương trình đào tạo học thuật chuyên sâu và giải pháp cung ứng nhân lực trình độ cao cho thị trường quốc tế.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-700 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all shadow-lg flex items-center gap-2">
                Chương trình đào tạo
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all">
                Tư vấn học thuật
              </button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative z-10 w-full aspect-[4/3] bg-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex items-center justify-center text-8xl">
               🏫
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-blue-100 pb-2 mb-2">Chứng nhận quốc tế</p>
              <p className="text-xs text-slate-500 font-medium">Standard Academic Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-20 -mt-12 relative z-30 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 flex items-start gap-4 hover:border-blue-200 transition-colors">
              <div className="text-3xl">{stat.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-slate-100 aspect-video rounded-3xl mb-6 shadow-inner flex items-center justify-center text-4xl text-slate-300">CAMPUS PHOTO</div>
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-700 h-32 rounded-3xl shadow-lg flex items-center justify-center text-white font-bold">KHÁT VỌNG</div>
                <div className="bg-slate-900 h-32 rounded-3xl shadow-lg flex items-center justify-center text-white font-bold">THÀNH CÔNG</div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-block text-blue-700 font-bold text-sm tracking-[0.2em] uppercase mb-4">VỀ CHÚNG TÔI</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Định chế giáo dục uy tín <br/> với tầm nhìn chiến lược
            </h2>
            <div className="text-slate-600 text-lg leading-relaxed space-y-6 text-justify">
              <p>
                Suleco City được thành lập với mục tiêu xây dựng một hệ sinh thái giáo dục hiện đại, nơi tri thức và kỹ năng thực tiễn được kết hợp hài hòa để tạo ra giá trị bền vững cho người học.
              </p>
              <p>
                Chúng tôi không ngừng đầu tư vào công tác nghiên cứu học thuật và phát triển các chương trình đào tạo đạt chuẩn quốc tế, đảm bảo học viên được tiếp cận với những tinh hoa tri thức mới nhất của nhân loại.
              </p>
              <Link to="/about-us/introduction" className="inline-flex items-center gap-3 text-blue-700 font-bold hover:gap-5 transition-all">
                Tìm hiểu chi tiết về tổ chức
                <span className="text-xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Chương trình đào tạo trọng điểm</h2>
            <div className="h-1 w-24 bg-blue-700"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all flex flex-col h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                      {feat}
                    </div>
                  ))}
                </div>
                <button className="inline-flex items-center justify-center py-4 px-8 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-all uppercase text-sm tracking-widest">
                  Chi tiết chương trình
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-16 uppercase tracking-widest">Giá trị khác biệt</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="p-10 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-2xl transition-all">
              <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
             <div className="lg:col-span-1">
                <h2 className="text-4xl font-bold mb-6 uppercase leading-tight">Cảm nhận từ <br/> <span className="text-blue-500">Người trong cuộc</span></h2>
                <p className="text-slate-400 mb-8 leading-relaxed">Sự thành công của học viên là minh chứng rõ rệt nhất cho giá trị học thuật mà Suleco City mang lại.</p>
                <div className="flex gap-4">
                   <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">←</button>
                   <button className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">→</button>
                </div>
             </div>
             <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 relative">
                  <div className="text-6xl text-blue-500 font-serif absolute top-6 right-10 opacity-20">"</div>
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">K</div>
                    <div>
                      <h4 className="text-xl font-bold">Kaushi Rowel Jayathilake</h4>
                      <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mt-1">Học viên xuất sắc</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-xl leading-relaxed italic font-light">
                    "Chương trình đào tạo tại Suleco City thực sự chuyên sâu và có tính ứng dụng rất cao. Tôi đã được trang bị không chỉ kiến thức chuyên môn mà còn là tư duy giải quyết vấn đề trong môi trường làm việc chuyên nghiệp."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Partners & Presence Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Mạng lưới kết nối toàn cầu</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Suleco City duy trì mối quan hệ hợp tác chiến lược với các tổ chức giáo dục và tập đoàn hàng đầu thế giới, mở ra cơ hội không giới hạn cho học viên.
              </p>
              <div className="grid grid-cols-2 gap-8 grayscale opacity-50">
                 <div className="font-black italic text-2xl text-slate-400">STUDY MELBOURNE</div>
                 <div className="font-black italic text-2xl text-slate-400">velg</div>
                 <div className="font-black italic text-2xl text-slate-400">Southern Cross</div>
                 <div className="font-black italic text-2xl text-slate-400">iteca</div>
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 text-center">
               <h3 className="text-5xl font-black text-blue-700 mb-4">50+</h3>
               <p className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Quốc gia & Vùng lãnh thổ</p>
               <p className="text-slate-500 leading-relaxed">Học viên của chúng tôi hiện diện và thành công tại nhiều quốc gia, khẳng định chất lượng đào tạo quốc tế.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
               <div className="aspect-video bg-slate-900 flex items-center justify-center text-white text-4xl uppercase font-bold">Academic Environment</div>
            </div>
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 uppercase">Môi trường học thuật hiện đại</h2>
               <p className="text-slate-600 text-lg leading-relaxed mb-10">
                 Hệ thống phòng học, thư viện và trung tâm thực hành được thiết kế theo tiêu chuẩn quốc tế, tạo điều kiện lý tưởng cho việc nghiên cứu và học tập chuyên sâu.
               </p>
               <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all uppercase tracking-widest text-sm">
                 Tham quan Virtual Tour 360
               </button>
            </div>
         </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="bg-blue-700 p-12 md:p-16 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-white text-center lg:text-left max-w-xl">
              <h2 className="text-3xl font-bold mb-4 uppercase">Đăng ký bản tin học thuật</h2>
              <p className="text-blue-100 opacity-80">Nhận thông tin mới nhất về các chương trình đào tạo, hội thảo và cơ hội nghề nghiệp quốc tế.</p>
            </div>
            <form className="flex w-full max-w-lg">
              <input type="email" placeholder="Địa chỉ email của bạn" className="flex-grow px-6 py-4 rounded-l-xl outline-none" />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-r-xl font-bold hover:bg-slate-800 transition-all uppercase text-sm">Gửi</button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="lien-he" className="py-24 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 uppercase leading-tight">Bắt đầu hành trình <br/> <span className="text-blue-700">Chinh phục tri thức</span></h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn định hướng con đường học tập và nghề nghiệp phù hợp nhất với năng lực và mục tiêu cá nhân.
            </p>
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold">📍</div>
                  <div>
                     <p className="text-sm font-bold uppercase text-slate-400">Địa chỉ</p>
                     <p className="text-slate-900 font-bold">Suleco City Building, Hồ Chí Minh, Việt Nam</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold">📞</div>
                  <div>
                     <p className="text-sm font-bold uppercase text-slate-400">Hotline</p>
                     <p className="text-slate-900 font-bold">1900 1234 - 090 123 4567</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-3xl border border-slate-100 shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-wider text-center">Form tư vấn học thuật</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="Họ và tên" className="w-full border-b border-slate-200 py-3 outline-none focus:border-blue-700 transition-colors" />
                <input type="tel" placeholder="Số điện thoại" className="w-full border-b border-slate-200 py-3 outline-none focus:border-blue-700 transition-colors" />
              </div>
              <input type="email" placeholder="Địa chỉ email" className="w-full border-b border-slate-200 py-3 outline-none focus:border-blue-700 transition-colors" />
              <select className="w-full border-b border-slate-200 py-3 outline-none focus:border-blue-700 transition-colors text-slate-500">
                <option>Chương trình quan tâm</option>
                <option>Trung cấp chuyên nghiệp</option>
                <option>XKLĐ Nhật Bản chất lượng cao</option>
              </select>
              <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all uppercase tracking-widest text-sm shadow-xl">
                Gửi yêu cầu tư vấn ngay
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
