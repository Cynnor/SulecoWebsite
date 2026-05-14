import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { number: "2.500+", label: "Học viên tốt nghiệp", icon: "🎓" },
  { number: "120+",   label: "Doanh nghiệp đối tác", icon: "🤝" },
  { number: "90%",    label: "Có việc làm sau tốt nghiệp", icon: "📈" },
  { number: "25+",    label: "Chương trình đào tạo", icon: "📚" },
];

const programs = [
  {
    tag: "Hệ chính quy",
    title: "Công nghệ Ô tô",
    desc: "Chương trình đào tạo toàn diện từ nền tảng đến chuyên sâu về kỹ thuật ô tô. Học viên thực hành trực tiếp các quy trình bảo dưỡng, chẩn đoán và sửa chữa theo tiêu chuẩn xưởng dịch vụ hiện đại.",
    link: "/training/formal-education",
    duration: "2 – 3 năm",
    featured: true,
  },
  {
    icon: "📋",
    title: "Đào tạo ngắn hạn",
    desc: "Lộ trình thực hành 100% — điện ô tô, đồng sơn, cố vấn dịch vụ — giúp học viên trang bị kỹ năng và sẵn sàng làm việc ngay.",
    link: "/training/short-term",
    duration: "3 – 6 tháng",
    featured: false,
  },
  {
    icon: "🔧",
    title: "Kỹ năng nâng cao",
    desc: "Dành cho kỹ thuật viên có kinh nghiệm muốn cập nhật công nghệ mới trên các dòng xe hiện đại và phát triển chuyên môn sâu.",
    link: "/training/languages",
    duration: "1 – 3 tháng",
    featured: false,
  },
];

const partners = [
  {
    title: "Doanh nghiệp liên kết",
    desc: "Mạng lưới công ty, đơn vị tuyển dụng và đối tác hợp tác trong đào tạo — việc làm.",
    icon: "🏢",
    color: "from-sky-900 to-sky-700",
  },
  {
    title: "Gara & Xưởng thực hành",
    desc: "Kết nối các gara, xưởng dịch vụ và môi trường thực tế để học viên rèn luyện tay nghề.",
    icon: "🔩",
    color: "from-amber-700 to-amber-500",
  },
  {
    title: "Trường học liên kết",
    desc: "Hợp tác với các đơn vị giáo dục nhằm mở rộng chương trình đào tạo và định hướng nghề nghiệp.",
    icon: "🏫",
    color: "from-teal-700 to-teal-500",
  },
];

const news = [
  {
    category: "Sự kiện",
    date: "12/11/2024",
    title: "Lễ ký kết hợp tác đào tạo cùng doanh nghiệp",
    featured: true,
  },
  {
    category: "Hợp tác",
    date: "08/11/2024",
    title: "Thông báo tuyển sinh các chương trình đào tạo mới",
    featured: false,
  },
  {
    category: "Tuyển sinh",
    date: "01/11/2024",
    title: "Hoạt động trải nghiệm nghề nghiệp cho học viên",
    featured: false,
  },
];

/* ─────────────── CONSULTATION FORM (inline mini-form) ─────────────── */
const MiniConsultForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', program: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', email: '', program: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {sent && (
        <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-400/40 rounded-xl text-green-300 text-sm font-semibold">
          <span>✔</span> Yêu cầu tư vấn đã được gửi thành công! Chúng tôi sẽ liên hệ bạn sớm.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text" name="name" required
          placeholder="Họ và tên *"
          value={form.name} onChange={handleChange}
          className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-sm"
        />
        <input
          type="tel" name="phone" required
          placeholder="Số điện thoại *"
          value={form.phone} onChange={handleChange}
          className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-sm"
        />
      </div>

      <input
        type="email" name="email"
        placeholder="Email liên hệ"
        value={form.email} onChange={handleChange}
        className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-sm"
      />

      <select
        name="program" required
        value={form.program} onChange={handleChange}
        className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-sm appearance-none"
        style={{ color: form.program ? 'white' : 'rgba(255,255,255,0.5)' }}
      >
        <option value="" className="text-gray-800">Chọn chương trình quan tâm *</option>
        <option value="short-term" className="text-gray-800">Hệ ngắn hạn</option>
        <option value="formal" className="text-gray-800">Hệ chính quy</option>
        <option value="languages" className="text-gray-800">Kỹ năng nâng cao</option>
      </select>

      <textarea
        name="message"
        placeholder="Nội dung cần tư vấn (tuỳ chọn)"
        value={form.message} onChange={handleChange}
        rows="3"
        className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors backdrop-blur-sm resize-none"
      />

      <button
        type="submit"
        className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
      >
        Gửi yêu cầu tư vấn →
      </button>
    </form>
  );
};

/* ─────────────────────────── HOMEPAGE ─────────────────────────── */
const HomePage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-sky-950" style={{ minHeight: '760px' }}>
        {/* Background gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-950/60 to-transparent" />
        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

        {/* Hero image */}
        <img
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1400&auto=format&fit=crop&q=80"
          alt="Suleco đào tạo nghề ô tô"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          onLoad={() => setHeroLoaded(true)}
        />

        {/* Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center"
          style={{ minHeight: '760px' }}
        >
          <div
            className="max-w-2xl transition-all duration-700"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)',
            }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">Newcitygroup – Suleco</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Đào tạo nghề<br />
              <span className="text-amber-400">gắn kết</span> doanh nghiệp
            </h1>

            <p className="text-lg text-white/75 mb-10 leading-relaxed max-w-xl">
              Hệ thống đào tạo nghề và kết nối doanh nghiệp — giúp học viên lựa chọn chương trình phù hợp, đăng ký tuyển sinh trực tuyến và tiếp cận cơ hội việc làm sau đào tạo.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/admission/apply"
                id="hero-cta-apply"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
              >
                Đăng ký xét tuyển
              </Link>
              <Link
                to="/training/formal-education"
                id="hero-cta-programs"
                className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-sm tracking-wide"
              >
                Xem chương trình →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white py-0 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto -mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-sky-950/8 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-200"
              >
                <span className="text-3xl mb-3">{stat.icon}</span>
                <p className="text-3xl font-black text-sky-950 mb-1">{stat.number}</p>
                <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wide leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-14">
            <div className="max-w-xl">
              <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Chương trình nổi bật</p>
              <h2 className="text-4xl font-black text-sky-950 leading-tight">Đào tạo trọng điểm</h2>
              <p className="text-zinc-500 mt-3 leading-relaxed">
                Các khóa học bám sát thực tiễn, kết nối trực tiếp với doanh nghiệp và mạng lưới Garage.
              </p>
            </div>
            <Link
              to="/training/formal-education"
              id="programs-view-all"
              className="flex items-center gap-2 text-sky-950 font-bold hover:text-amber-600 transition-colors text-sm whitespace-nowrap group"
            >
              Xem tất cả chương trình
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Featured big card */}
            {programs.filter(p => p.featured).map((p, i) => (
              <div key={i} className="lg:col-span-2 relative rounded-3xl overflow-hidden group" style={{ minHeight: '460px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800" />
                <img
                  src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=900&auto=format&fit=crop&q=80"
                  alt="Công nghệ ô tô"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block px-3 py-1 bg-amber-500 rounded-full mb-4">
                    <span className="text-amber-950 text-xs font-black uppercase tracking-wider">{p.tag}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3">{p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">⏱ {p.duration}</span>
                    <Link
                      to={p.link}
                      className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                    >
                      Tìm hiểu thêm
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Two small cards */}
            <div className="flex flex-col gap-6">
              {programs.filter(p => !p.featured).map((p, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-3xl p-7 flex flex-col justify-between group hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-1 transition-all duration-200"
                >
                  <div>
                    <span className="text-3xl">{p.icon}</span>
                    <h3 className="text-xl font-black text-sky-950 mt-3 mb-2">{p.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-sky-700 text-xs font-bold uppercase tracking-wider">⏱ {p.duration}</span>
                    <Link
                      to={p.link}
                      className="flex items-center gap-1 text-amber-600 font-bold text-sm hover:text-amber-700 group-hover:gap-2 transition-all"
                    >
                      Tìm hiểu thêm <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Hệ sinh thái</p>
            <h2 className="text-4xl font-black text-sky-950">Đối tác &amp; Cơ hội nghề nghiệp</h2>
            <p className="text-zinc-500 mt-3 max-w-xl mx-auto leading-relaxed">
              Mạng lưới doanh nghiệp, gara và đối tác giáo dục giúp học viên tiếp cận việc làm ngay sau tốt nghiệp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                <div className="p-8">
                  <span className="text-4xl">{p.icon}</span>
                  <h3 className="text-xl font-black text-sky-950 mt-4 mb-3">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <button className="w-full py-3 border-2 border-sky-950/20 text-sky-950 font-bold rounded-xl hover:bg-sky-950 hover:text-white hover:border-sky-950 transition-all duration-200 text-sm">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION CTA ── */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12 lg:px-20 bg-sky-950">
        {/* Decorative */}
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-white">
              <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-4">Tư vấn miễn phí</p>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Bạn cần tư vấn<br />
                <span className="text-amber-400">lộ trình học?</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Để lại thông tin, đội ngũ tư vấn tuyển sinh sẽ liên hệ và hỗ trợ bạn chọn chương trình phù hợp.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "✅", text: "Tư vấn chương trình đào tạo phù hợp" },
                  { icon: "📋", text: "Hướng dẫn hồ sơ đăng ký từng bước" },
                  { icon: "💼", text: "Kết nối cơ hội việc làm sau tốt nghiệp" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white/85 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Hotline tư vấn 24/7</p>
                <p className="text-2xl font-black text-amber-400">1900 1234</p>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-black text-white mb-6">Đăng ký tư vấn ngay</h3>
              <MiniConsultForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS & EVENTS ── */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-14">
            <div>
              <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Cập nhật mới nhất</p>
              <h2 className="text-4xl font-black text-sky-950">Tin tức &amp; Sự kiện</h2>
            </div>
            <Link
              to="/news/events"
              id="news-view-all"
              className="flex items-center gap-2 text-sky-950 font-bold hover:text-amber-600 transition-colors text-sm whitespace-nowrap group"
            >
              Xem tất cả tin tức <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-1 transition-all duration-200 bg-white flex flex-col"
              >
                {/* Image placeholder with gradient */}
                <div
                  className={`relative overflow-hidden ${item.featured ? 'h-56' : 'h-44'}`}
                  style={{
                    background: `linear-gradient(135deg, ${['#0c4a6e','#164e63','#134e4a'][i]} 0%, ${['#0369a1','#0e7490','#0f766e'][i]} 100%)`
                  }}
                >
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 text-7xl font-black select-none">
                    {['🏆','📢','🎯'][i]}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <span className="text-white text-xs font-bold">{item.category}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-600 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                    {item.date && <>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-400 text-xs">{item.date}</span>
                    </>}
                  </div>
                  <h3 className="text-sky-950 font-black leading-snug text-base group-hover:text-sky-700 transition-colors flex-1">
                    {item.title}
                  </h3>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="text-amber-600 font-bold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                      Đọc tiếp <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
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
