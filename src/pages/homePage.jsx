import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const stats = [
    { label: "Năm kinh nghiệm", value: "20+", icon: "⏳" },
    { label: "Học viên tốt nghiệp", value: "15,000+", icon: "👨‍🎓" },
    { label: "Đối tác chiến lược", value: "500+", icon: "🤝" },
    { label: "Tỷ lệ có việc làm", value: "100%", icon: "🎯" }
  ];

  const coreValues = [
    { title: "Tâm thế", desc: "Luôn đặt đạo đức nghề nghiệp và trách nhiệm xã hội lên hàng đầu trong mọi hoạt động đào tạo.", icon: "💎" },
    { title: "Trí tuệ", desc: "Không ngừng cập nhật kiến thức công nghệ hiện đại, nâng tầm trí tuệ cho thế hệ trẻ Việt Nam.", icon: "💡" },
    { title: "Tầm vóc", desc: "Kiến tạo môi trường học thuật chuẩn quốc tế, giúp học viên sẵn sàng vươn ra thế giới.", icon: "🌍" }
  ];

  const newsPreview = [
    { category: "Sự kiện", date: "30/05/2024", title: "Khai mạc tuần lễ đổi mới sáng tạo Suleco City 2024", img: "🚀" },
    { category: "Đào tạo", date: "28/05/2024", title: "Hợp tác đào tạo nhân lực kỹ thuật cao với đối tác Đức", img: "🇩🇪" },
    { category: "Sinh viên", date: "25/05/2024", title: "Vinh danh thủ khoa tốt nghiệp ngành Công nghệ Ô tô", img: "🥇" }
  ];

  return (
    <div className="w-full bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-700/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
               <span className="w-2 h-2 bg-blue-700 rounded-full animate-pulse"></span>
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-700">Tuyển sinh kỳ Thu 2024</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight uppercase">
              Kiến tạo <span className="text-blue-700">Tương lai</span> <br/>
              Nâng tầm <span className="text-slate-400">Trí tuệ</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-xl leading-relaxed italic border-l-4 border-blue-700 pl-6">
              "Suleco City không chỉ là một ngôi trường, đó là nơi bắt đầu của những giấc mơ toàn cầu. Chúng tôi cung cấp nền tảng học thuật vững chắc và cơ hội nghề nghiệp không biên giới."
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
               <Link to="/admission/apply" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-blue-700 transition-all hover:-translate-y-1">
                  Đăng ký xét tuyển
               </Link>
               <Link to="/about-us/introduction" className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-lg hover:bg-slate-50 transition-all">
                  Khám phá Suleco
               </Link>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-[4/5] bg-slate-100 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[15rem] opacity-20 grayscale group-hover:scale-110 transition-transform duration-700">🏛️</div>
                <div className="absolute bottom-12 left-12 right-12 text-white">
                   <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">Campus Overview</p>
                   <h3 className="text-3xl font-black uppercase leading-tight">Môi trường học tập <br/> hiện đại bậc nhất</h3>
                </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-blue-50 animate-bounce-slow">
                <p className="text-4xl font-black text-blue-700 mb-1">98%</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tỷ lệ hài lòng</p>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {stats.map((stat, i) => (
                 <div key={i} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-blue-700 transition-all duration-500 hover:-translate-y-2">
                    <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{stat.icon}</div>
                    <p className="text-4xl font-black text-slate-900 mb-2 group-hover:text-white transition-colors">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-100 transition-colors">{stat.label}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative overflow-hidden bg-slate-50">
         <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/5 -skew-x-12 translate-x-20"></div>
         <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
            <div className="text-center mb-24 space-y-4">
               <h2 className="text-blue-700 font-black uppercase tracking-[0.4em] text-xs">Our Foundation</h2>
               <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">Giá trị cốt lõi</h3>
               <div className="w-24 h-1.5 bg-blue-700 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
               {coreValues.map((val, i) => (
                 <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all group">
                    <div className="w-20 h-20 bg-blue-50 text-blue-700 rounded-3xl flex items-center justify-center text-4xl mb-10 group-hover:bg-blue-700 group-hover:text-white transition-all shadow-md">
                       {val.icon}
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">{val.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-justify italic">
                       {val.desc}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Programs */}
      <section className="py-32 bg-white">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
               <div className="space-y-4">
                  <h2 className="text-blue-700 font-black uppercase tracking-[0.4em] text-xs">Excellence in Training</h2>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">Chương trình Đào tạo <br/> Trọng điểm</h3>
               </div>
               <Link to="/training/formal-education" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-700 border-b-2 border-slate-100 hover:border-blue-700 pb-2 transition-all">
                  Xem tất cả khóa học →
               </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               <div className="group relative rounded-[4rem] overflow-hidden aspect-video bg-slate-900 text-white">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="relative h-full p-16 flex flex-col justify-end">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-4">Hệ chính quy</span>
                     <h4 className="text-4xl font-black uppercase tracking-tight mb-6">Công nghệ Ô tô</h4>
                     <p className="text-slate-300 text-sm max-w-md mb-8 leading-relaxed">Đào tạo kỹ sư thực hành với công nghệ chẩn đoán hiện đại, cam kết đầu ra tại các hãng xe lớn.</p>
                     <Link to="/training/formal-education" className="inline-block w-fit bg-white text-slate-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px]">Chi tiết ngành học</Link>
                  </div>
               </div>
               <div className="group relative rounded-[4rem] overflow-hidden aspect-video bg-blue-800 text-white shadow-2xl shadow-blue-900/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="relative h-full p-16 flex flex-col justify-end">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-200 mb-4">Hệ ngắn hạn</span>
                     <h4 className="text-4xl font-black uppercase tracking-tight mb-6">Cơ khí Chế tạo</h4>
                     <p className="text-blue-100 text-sm max-w-md mb-8 leading-relaxed">Kỹ năng vận hành CNC và hàn công nghiệp theo tiêu chuẩn quốc tế AWS.</p>
                     <Link to="/training/short-term" className="inline-block w-fit bg-slate-900 text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px]">Khám phá ngay</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Global Partnership Strip */}
      <section className="py-20 border-y border-slate-100 bg-slate-50/50">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-20 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12">Trusted by Global Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
               <span className="text-2xl font-black tracking-tighter">TOYOTA</span>
               <span className="text-2xl font-black tracking-tighter">VINFAST</span>
               <span className="text-2xl font-black tracking-tighter">MITSUBISHI</span>
               <span className="text-2xl font-black tracking-tighter">KOMATSU</span>
               <span className="text-2xl font-black tracking-tighter">FPT SHOP</span>
            </div>
         </div>
      </section>

      {/* News Preview Section */}
      <section className="py-32 bg-white">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="flex justify-between items-end mb-20">
               <div>
                  <h2 className="text-blue-700 font-black uppercase tracking-[0.4em] text-xs mb-4">News & Media</h2>
                  <h3 className="text-4xl font-black uppercase tracking-tight text-slate-900">Tin tức & Sự kiện</h3>
               </div>
               <Link to="/news/events" className="text-blue-700 font-black text-xs uppercase tracking-widest border-b-2 border-blue-700 pb-2">Xem tất cả</Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
               {newsPreview.map((item, i) => (
                 <div key={i} className="group cursor-pointer">
                    <div className="aspect-[16/10] bg-slate-50 rounded-[2.5rem] mb-8 flex items-center justify-center text-7xl shadow-inner border border-slate-100 group-hover:bg-blue-50 transition-colors">
                       <div className="group-hover:scale-110 transition-transform duration-500">{item.img}</div>
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
                          <span className="text-blue-700">{item.category}</span>
                          <span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span>
                          <span className="text-slate-400">{item.date}</span>
                       </div>
                       <h4 className="text-xl font-black uppercase leading-tight text-slate-900 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-700/20 rounded-full blur-[120px]"></div>
               <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-700/10 rounded-full blur-[120px]"></div>
               
               <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1]">Bắt đầu hành trình <br/> tại Suleco City</h2>
                  <p className="text-slate-400 text-lg md:text-xl font-light italic leading-relaxed">
                     Tham gia cộng đồng học thuật tiên phong và mở khóa những cơ hội nghề nghiệp toàn cầu ngay hôm nay.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 pt-6">
                     <Link to="/admission/apply" className="bg-blue-700 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-white hover:text-slate-900 transition-all">Nộp hồ sơ ngay</Link>
                     <Link to="/contact/consultation" className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all">Nhận tư vấn 1:1</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default HomePage;
