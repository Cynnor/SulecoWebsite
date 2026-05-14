import React from 'react';
import { Link } from 'react-router-dom';

const ShortTermCourses = () => {
  const benefits = [
    {
      title: "Thời gian tối ưu",
      desc: "Chỉ từ 3-6 tháng đào tạo tập trung, giúp học viên nhanh chóng gia nhập thị trường lao động và có thu nhập ổn định.",
      image: "https://placehold.co/256x192",
      bg: "bg-blue-50",
      icon: "📅"
    },
    {
      title: "Chứng chỉ uy tín",
      desc: "Chứng chỉ nghề được công nhận bởi các doanh nghiệp lớn trong và ngoài nước, đặc biệt là thị trường Nhật Bản.",
      bg: "bg-amber-500",
      textColor: "text-yellow-900",
      icon: "🏆"
    },
    {
      title: "Học đi đôi với hành",
      desc: "80% thời lượng là thực hành tại xưởng và phòng Lab chuyên dụng với trang thiết bị hiện đại bậc nhất.",
      bg: "bg-sky-950",
      textColor: "text-white",
      icon: "🔧"
    },
    {
      title: "Cơ hội toàn cầu",
      desc: "Tư vấn và định hướng làm việc tại nước ngoài (Nhật Bản, Đức, Hàn Quốc) ngay trong quá trình đào tạo.",
      image: "https://placehold.co/256x192",
      imagePosition: "left",
      bg: "bg-blue-100",
      icon: "🌍"
    }
  ];

  const courses = [
    {
      title: "Kỹ thuật Hàn",
      desc: "Đào tạo hàn 3G, 6G, Tig, Mig theo tiêu chuẩn quốc tế.",
      duration: "3 Tháng",
      image: "https://placehold.co/290x192"
    },
    {
      title: "Điện Công nghiệp",
      desc: "Lắp đặt, vận hành hệ thống điện và PLC trong nhà máy.",
      duration: "6 Tháng",
      image: "https://placehold.co/290x192"
    },
    {
      title: "Điều dưỡng",
      desc: "Kỹ năng chăm sóc người cao tuổi theo tiêu chuẩn Nhật Bản.",
      duration: "6 Tháng",
      image: "https://placehold.co/290x192"
    },
    {
      title: "Nhà hàng",
      desc: "Nghiệp vụ bàn, Barista và quản lý vận hành cơ bản.",
      duration: "3 Tháng",
      image: "https://placehold.co/290x192"
    }
  ];

  const stats = [
    { number: "95%", label: "HỌC VIÊN CÓ VIỆC LÀM" },
    { number: "200+", label: "ĐỐI TÁC DOANH NGHIỆP" },
    { number: "15k+", label: "HỌC VIÊN TỐT NGHIỆP" },
    { number: "05", label: "TRUNG TÂM ĐÀO TẠO" }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sky-950 py-24 px-6" style={{ minHeight: '512px' }}>
        <img 
          src="https://placehold.co/1280x512" 
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-2 bg-amber-500 rounded-full mb-6">
              <span className="text-yellow-900 text-base font-semibold">Hệ đào tạo ngắn hạn</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Vững Nghề Nghiệp, Sáng Tương Lai Trong 3-6 Tháng
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl">
              Chương trình đào tạo thực dụng, tập trung 100% vào kỹ năng tay nghề và tác phong làm việc chuẩn quốc tế. Cam kết việc làm ngay sau khi tốt nghiệp.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact/consultation"
                className="px-8 py-4 bg-amber-500 text-yellow-900 font-semibold rounded-xl hover:bg-amber-600 transition-colors"
              >
                Đăng ký tư vấn ngay
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Xem danh sách khóa học
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-4">
              Tại sao chọn Hệ Ngắn hạn Suleco?
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {benefits.map((benefit, idx) => (
              idx === 3 ? (
                // Last benefit - image on left
                <div key={idx} className={`${benefit.bg} p-8 rounded-3xl flex gap-6 items-center`} style={{ height: '256px' }}>
                  <div className="w-64 h-48 bg-sky-950 rounded-2xl overflow-hidden shrink-0">
                    <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                  </div>
                  <div className={`flex-1 ${benefit.textColor}`}>
                    <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-base leading-relaxed opacity-90">{benefit.desc}</p>
                  </div>
                </div>
              ) : benefit.bg === "bg-blue-50" ? (
                // First benefit - with image
                <div key={idx} className={`${benefit.bg} p-8 rounded-3xl flex gap-6 items-center`} style={{ height: '256px' }}>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-sky-950 mb-4">{benefit.title}</h3>
                    <p className="text-base text-zinc-700 leading-relaxed">{benefit.desc}</p>
                  </div>
                  <div className="w-64 h-48 bg-sky-900 rounded-2xl overflow-hidden shrink-0">
                    <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                  </div>
                </div>
              ) : (
                // Other benefits without image
                <div key={idx} className={`${benefit.bg} p-8 rounded-3xl`}>
                  <div className={`text-2xl mb-4 w-6 h-6 ${benefit.textColor ? 'text-4xl' : 'bg-yellow-900'}`}>
                    {benefit.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold mb-4 ${benefit.textColor || 'text-yellow-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-base leading-relaxed ${benefit.textColor ? 'opacity-80' : 'text-yellow-900'}`}>
                    {benefit.desc}
                  </p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-2">
                Danh mục đào tạo trọng điểm
              </h2>
              <p className="text-zinc-700 text-base">
                Các ngành nghề có nhu cầu nhân lực cao nhất hiện nay
              </p>
            </div>
            <Link to="#" className="flex items-center gap-2 text-yellow-800 font-semibold hover:text-yellow-900">
              Tất cả khóa học
              <span className="w-4 h-4 bg-yellow-800"></span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-sky-950 mb-4">{course.title}</h3>
                  <p className="text-zinc-700 text-base mb-6 leading-relaxed">{course.desc}</p>
                  <div className="pt-4 border-t border-neutral-300 flex justify-between items-center">
                    <span className="text-amber-500 text-sm font-semibold tracking-wide">
                      {course.duration}
                    </span>
                    <span className="w-4 h-4 bg-sky-950"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-sky-950 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-amber-500 mb-4">
                  {stat.number}
                </div>
                <div className="text-white text-sm md:text-base font-semibold uppercase tracking-wide opacity-70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortTermCourses;
