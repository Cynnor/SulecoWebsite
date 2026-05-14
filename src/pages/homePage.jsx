import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: ''
  });

  const handleConsultationChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    alert("Yêu cầu tư vấn của bạn đã được gửi!");
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: '819px' }}>
        <img 
          src="https://placehold.co/1280x819" 
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-sky-950/90 via-sky-950/40 to-sky-950/0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center" style={{ minHeight: '600px' }}>
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Newcitygroup - Suleco<br/>Đào tạo nghề gắn kết doanh nghiệp
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Hệ thống đào tạo nghề và kết nối doanh nghiệp, giúp học viên lựa chọn chương trình phù hợp, đăng ký tuyển sinh trực tuyến và tiếp cận cơ hội việc làm sau đào tạo.
            </p>
            <div className="flex gap-4">
              <Link
                to="/admission/apply"
                className="px-8 py-4 bg-amber-500 text-yellow-900 font-semibold rounded-xl hover:bg-amber-600 transition-colors shadow-lg"
              >
                Đăng ký xét tuyển
              </Link>
              <Link
                to="/training/formal-education"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Xem chương trình được phê duyệt
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics Section - Overlay on bottom of hero */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 -translate-y-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "2,500+", label: "Học viên" },
              { number: "120+", label: "Đối tác" },
              { number: "90%", label: "Tỷ lệ hỗ trợ" },
              { number: "25+", label: "Chương trình" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-neutral-300/30 flex flex-col items-center text-center">
                <div className="w-8 h-4 bg-amber-500 mb-4"></div>
                <p className="text-3xl font-bold text-sky-950 mb-2">{stat.number}</p>
                <p className="text-zinc-700 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-sky-950 mb-4">Chương trình đào tạo trọng điểm</h2>
              <p className="text-zinc-700 text-base leading-relaxed">
                Các khóa học được thiết kế bám sát thực tiễn, kết nối trực tiếp với doanh nghiệp và mạng lưới Garage. Phù hợp cho cả người mới bắt đầu và kỹ thuật viên muốn nâng cao tay nghề.
              </p>
            </div>
            <Link to="/training/formal-education" className="flex items-center gap-2 text-sky-950 font-normal hover:text-blue-700 transition-colors">
              Xem tất cả chương trình
              <div className="w-4 h-4 bg-sky-950"></div>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Program Image - Left */}
            <div className="relative bg-sky-950 rounded-xl overflow-hidden" style={{ height: '500px' }}>
              <img 
                src="https://placehold.co/500x500" 
                alt="Program"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-linear-to-r from-sky-950 via-sky-950/40 to-sky-950/0"></div>
              <div className="absolute bottom-8 left-8 z-10">
                <div className="inline-block px-3 py-1 bg-amber-500 rounded-sm mb-4">
                  <span className="text-yellow-900 text-sm font-semibold">Hệ chính quy</span>
                </div>
                <h3 className="text-3xl font-semibold text-white mb-3">Công nghệ Ô tô</h3>
                <p className="text-white/90 text-base leading-relaxed">
                  Chương trình đào tạo toàn diện từ nền tảng đến chuyên sâu về kỹ thuật ô tô. Học viên được thực hành trực tiếp các quy trình bảo dưỡng, chẩn đoán và sửa chữa theo tiêu chuẩn xưởng dịch vụ hiện đại.
                </p>
              </div>
            </div>

            {/* Programs Cards - Right */}
            <div className="space-y-6">
              {/* Short Term Program */}
              <div className="bg-blue-50 p-6 rounded-xl border border-neutral-300 flex flex-col justify-between" style={{ height: '220px' }}>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="text-2xl mt-1">📋</div>
                    <div>
                      <h3 className="text-xl font-semibold text-sky-950">Đào tạo ngắn hạn</h3>
                    </div>
                  </div>
                  <p className="text-zinc-700 text-base leading-relaxed">
                    Lộ trình học tập trung 100% vào thực hành (điện ô tô, đồng sơn, cố vấn dịch vụ,...), giúp học viên nhanh chóng trang bị kỹ năng và sẵn sàng làm việc ngay.
                  </p>
                </div>
                <Link to="/training/short-term" className="flex items-center gap-1 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Tìm hiểu thêm 
                  <span>→</span>
                </Link>
              </div>

              {/* Advanced Skills Program */}
              <div className="bg-blue-50 p-6 rounded-xl border border-neutral-300 flex flex-col justify-between" style={{ height: '220px' }}>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="text-2xl mt-1">🔧</div>
                    <div>
                      <h3 className="text-xl font-semibold text-sky-950">Kỹ năng nâng cao</h3>
                    </div>
                  </div>
                  <p className="text-zinc-700 text-base leading-relaxed">
                    Thiết kế riêng cho các kỹ thuật viên đã có kinh nghiệm, muốn cập nhật công nghệ mới trên các dòng xe hiện đại và phát triển con đường chuyên môn sâu.
                  </p>
                </div>
                <Link to="/training/languages" className="flex items-center gap-1 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                  Tìm hiểu thêm 
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Career Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-950 text-center mb-12">Đối tác & Cơ hội nghề nghiệp</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                location: "Tokyo, Nhật Bản",
                title: "Doanh nghiệp liên kết",
                salary: "45-60 Tr/tháng",
                deadline: "Hạn: 30/11",
                desc: "Mạng lưới công ty, đơn vị tuyển dụng và đối tác hợp tác trong đào tạo - việc làm."
              },
              {
                location: "Berlin, Đức",
                title: "Gara & xưởng thực hành",
                salary: "65-80 Tr/tháng",
                deadline: "Hạn: 15/12",
                desc: "Kết nối các gara, xưởng dịch vụ và môi trường thực tế để học viên rèn luyện tay nghề."
              },
              {
                location: "Seoul, Hàn Quốc",
                title: "Trường học liên kết",
                salary: "40-55 Tr/tháng",
                deadline: "Hạn: 05/12",
                desc: "Hợp tác với các đơn vị giáo dục nhằm mở rộng chương trình đào tạo, định hướng nghề nghiệp."
              }
            ].map((partner, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-neutral-300 shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src="https://placehold.co/393x192" 
                    alt={partner.location}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-sky-950/90 rounded-sm">
                    <span className="text-white text-sm font-semibold">{partner.location}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-sky-950 mb-4">{partner.title}</h3>
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-2.5 bg-zinc-700"></div>
                      <span className="text-zinc-700 text-sm">{partner.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2.5 h-3 bg-zinc-700"></div>
                      <span className="text-zinc-700 text-sm">{partner.deadline}</span>
                    </div>
                  </div>
                  <p className="text-zinc-700 text-base mb-4">{partner.desc}</p>
                  <button className="w-full py-3 border-2 border-sky-950 text-sky-950 font-normal rounded-lg hover:bg-sky-50 transition-colors">
                    Xem đối tác
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="bg-sky-950 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Content */}
            <div className="text-white flex flex-col justify-center">
              <h2 className="text-5xl font-bold mb-6 leading-tight">Bạn cần tư vấn lộ trình học?</h2>
              <p className="text-lg mb-8 opacity-90 leading-relaxed">
                Để lại thông tin, đội ngũ tư vấn tuyển sinh sẽ liên hệ và hỗ trợ bạn chọn chương trình phù hợp.
              </p>
              <div className="space-y-4">
                {[
                  "Tư vấn chương trình đào tạo phù hợp",
                  "Hướng dẫn hồ sơ đăng ký",
                  "Kết nối thông tin học phí, lịch học và cơ hội nghề nghiệp"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="w-5 h-5 bg-amber-500 shrink-0"></div>
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-blue-100 p-8 rounded-xl">
              <form onSubmit={handleConsultationSubmit} className="space-y-4">
                <input 
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  value={consultationForm.name}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-4 bg-white rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                />
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={consultationForm.phone}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-4 bg-white rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                />
                <input 
                  type="email"
                  name="email"
                  placeholder="Email liên hệ"
                  value={consultationForm.email}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-4 bg-white rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                />
                <select 
                  name="program"
                  value={consultationForm.program}
                  onChange={handleConsultationChange}
                  className="w-full px-4 py-4 bg-white rounded-lg border border-neutral-300 text-slate-900 focus:outline-none focus:border-blue-400 appearance-none"
                >
                  <option value="">Chọn khóa học quan tâm</option>
                  <option value="short-term">Hệ ngắn hạn</option>
                  <option value="formal">Hệ chính quy</option>
                  <option value="languages">Ngoại ngữ</option>
                </select>
                <textarea 
                  name="message"
                  placeholder="Nội dung cần tư vấn"
                  value={consultationForm.message}
                  onChange={handleConsultationChange}
                  rows="4"
                  className="w-full px-4 py-4 bg-white rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full py-4 bg-amber-500 text-yellow-900 font-semibold rounded-xl hover:bg-amber-600 transition-colors shadow-lg"
                >
                  Gửi yêu cầu tư vấn
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-sky-950 mb-12 border-l-4 border-amber-500 pl-4">Tin tức & Sự kiện</h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://placehold.co/604x340",
                category: "Sự kiện",
                date: "12/11/2024",
                title: "Lễ ký kết hợp tác đào tạo cùng doanh nghiệp",
                featured: true
              },
              {
                image: "https://placehold.co/290x290",
                category: "Hợp tác",
                date: "",
                title: "Thông báo tuyển sinh các chương trình đào tạo mới",
                featured: false
              },
              {
                image: "https://placehold.co/290x290",
                category: "Tuyển sinh",
                date: "",
                title: "Hoạt động trải nghiệm nghề nghiệp cho học viên",
                featured: false
              }
            ].map((news, idx) => (
              <div key={idx} className={news.featured ? "lg:col-span-1" : ""}>
                <div className="rounded-xl overflow-hidden border border-neutral-300 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className={`relative overflow-hidden ${news.featured ? "h-80" : "h-72"}`}>
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-800 text-sm font-semibold">{news.category}</span>
                      {news.date && <span className="text-yellow-800 text-sm font-semibold">• {news.date}</span>}
                    </div>
                    <h3 className={`text-sky-950 font-semibold leading-relaxed ${news.featured ? "text-2xl" : "text-base"}`}>
                      {news.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
