import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaCertificate, FaTools, FaGlobe } from 'react-icons/fa';

const ShortTermCourses = () => {
  const benefits = [
    {
      title: "Thời gian tối ưu",
      desc: "Chỉ từ 3-6 tháng đào tạo tập trung, giúp học viên nhanh chóng gia nhập thị trường lao động và có thu nhập ổn định.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bg: "bg-blue-50",
      icon: <FaCalendarAlt />,
      imagePosition: "right"
    },
    {
      title: "Chứng chỉ uy tín",
      desc: "Chứng chỉ nghề được công nhận bởi các doanh nghiệp lớn trong và ngoài nước, đặc biệt là thị trường Nhật Bản.",
      bg: "bg-amber-500",
      textColor: "text-yellow-900",
      icon: <FaCertificate />
    },
    {
      title: "Học đi đôi với hành",
      desc: "80% thời lượng là thực hành tại xưởng và phòng Lab chuyên dụng với trang thiết bị hiện đại bậc nhất.",
      bg: "bg-sky-950",
      textColor: "text-white",
      icon: <FaTools />
    },
    {
      title: "Cơ hội toàn cầu",
      desc: "Tư vấn và định hướng làm việc tại nước ngoài (Nhật Bản, Đức, Hàn Quốc) ngay trong quá trình đào tạo.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imagePosition: "left",
      bg: "bg-blue-100",
      icon: <FaGlobe />
    }
  ];

  const courses = [
    {
      title: "Kỹ thuật Hàn",
      desc: "Đào tạo hàn 3G, 6G, Tig, Mig theo tiêu chuẩn quốc tế.",
      duration: "3 Tháng",
      image: "https://images.unsplash.com/photo-1581092916376-296362a41dd5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Điện Công nghiệp",
      desc: "Lắp đặt, vận hành hệ thống điện và PLC trong nhà máy.",
      duration: "6 Tháng",
      image: "https://images.unsplash.com/photo-1621905251936-087d0b999ce3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Điều dưỡng",
      desc: "Kỹ năng chăm sóc người cao tuổi theo tiêu chuẩn Nhật Bản.",
      duration: "6 Tháng",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Nhà hàng",
      desc: "Nghiệp vụ bàn, Barista và quản lý vận hành cơ bản.",
      duration: "3 Tháng",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      <section className="relative bg-sky-950 py-28 px-6 md:px-12 lg:px-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block px-5 py-2 bg-amber-500 rounded-full mb-6 shadow-lg">
              <span className="text-yellow-900 text-sm font-bold uppercase tracking-wider">Hệ đào tạo ngắn hạn</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Vững Nghề Nghiệp, Sáng Tương Lai Trong 3-6 Tháng
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Chương trình đào tạo thực dụng, tập trung 100% vào kỹ năng tay nghề và tác phong làm việc chuẩn quốc tế. Cam kết việc làm ngay sau khi tốt nghiệp.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact/consultation"
                className="px-8 py-4 bg-amber-500 text-yellow-900 font-bold rounded-xl hover:bg-amber-600 transition-all shadow-lg text-sm uppercase tracking-wider"
              >
                Đăng ký tư vấn ngay
              </Link>
              <a href="#course-list" className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all text-sm uppercase tracking-wider">
                Xem danh sách khóa học
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-4">
              Tại sao chọn Hệ Ngắn hạn Suleco?
            </h2>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl flex items-center gap-8 ${benefit.bg} ${benefit.image ? 'col-span-1 lg:col-span-2 flex-col lg:flex-row' : 'col-span-1'}`}
              >
                {benefit.image && benefit.imagePosition === 'left' && (
                  <div className="w-full lg:w-64 h-48 rounded-2xl overflow-hidden shrink-0">
                    <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className={`flex-1 ${benefit.textColor || 'text-slate-800'}`}>
                  <div className={`text-3xl mb-4 ${benefit.textColor || 'text-sky-950'}`}>
                    {benefit.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${benefit.textColor || 'text-sky-950'}`}>
                    {benefit.title}
                  </h3>
                  <p className={`leading-relaxed ${benefit.textColor ? 'opacity-90' : 'text-zinc-600'}`}>
                    {benefit.desc}
                  </p>
                </div>
                {benefit.image && benefit.imagePosition === 'right' && (
                  <div className="w-full lg:w-64 h-48 rounded-2xl overflow-hidden shrink-0">
                    <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="course-list" className="bg-blue-50 py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-2">
                Danh mục đào tạo trọng điểm
              </h2>
              <p className="text-zinc-700">
                Các ngành nghề có nhu cầu nhân lực cao nhất hiện nay
              </p>
            </div>
            <Link to="#" className="flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors group">
              Tất cả khóa học
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group">
                <div className="relative h-48 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-sky-950 mb-2 flex-grow">{course.title}</h3>
                  <p className="text-zinc-600 text-sm mb-4 flex-grow">{course.desc}</p>
                  <div className="pt-4 border-t border-neutral-200 flex justify-between items-center">
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">
                      {course.duration}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-sky-900 text-white flex items-center justify-center transform transition-transform group-hover:bg-amber-500 group-hover:text-yellow-900 group-hover:rotate-45">
                      +
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-sky-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-3">
                  {stat.number}
                </div>
                <div className="text-white/70 text-xs font-semibold uppercase tracking-widest">
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
