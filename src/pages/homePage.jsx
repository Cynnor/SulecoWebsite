import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCourses } from '../services/courseService';
import { getPartners } from '../services/partnerService';
import { getPosts } from '../services/postService';
import { getSettings } from '../services/settingService';
import { submitContact } from '../services/contactService';

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
    icon: "🚗",
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
    date: "15/05/2026",
    title: "Lễ ký kết hợp tác chiến lược cùng tập đoàn ô tô Nhật Bản",
    desc: "Mở ra cơ hội thực tập và việc làm cho học viên ngành Công nghệ Ô tô tại thị trường Nhật Bản.",
    emoji: "🏆",
  },
  {
    category: "Tuyển sinh",
    date: "10/05/2026",
    title: "Thông báo tuyển sinh đợt 2 năm 2026 - Hệ chính quy Công nghệ Ô tô",
    desc: "Nhận hồ sơ xét tuyển từ ngày 15/05. Hạn cuối 30/06. Ưu đãi học bổng 20% cho 50 hồ sơ đầu tiên.",
    emoji: "📢",
  },
  {
    category: "Hợp tác quốc tế",
    date: "05/05/2026",
    title: "Chương trình tu nghiệp tại Australia năm 2026",
    desc: "Dành cho kỹ thuật viên tay nghề cao ngành Hàn, CNC. Hỗ trợ định cư lâu dài.",
    emoji: "🌏",
  },
];

/* ─────────────── CONSULTATION FORM (inline mini-form) ─────────────── */
const MiniConsultForm = () => {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', dateOfBirth: '', address: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitContact({
        fullName: form.fullName,
        phone: form.phone,
        email: form.email || undefined,
        dateOfBirth: form.dateOfBirth || undefined,
        address: form.address || undefined,
        message: form.message || undefined,
      });
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ fullName: '', phone: '', email: '', dateOfBirth: '', address: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Gửi yêu cầu thất bại, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 bg-white/15 border border-amber-300/30 rounded-xl text-white placeholder-amber-200/60 focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all backdrop-blur-sm";
  const selectClass = "w-full px-4 py-3.5 bg-white/15 border border-amber-300/30 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:bg-white/20 transition-all backdrop-blur-sm appearance-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {sent && (
        <div className="flex items-center gap-3 p-4 bg-emerald-500/30 border border-emerald-400/50 rounded-xl text-emerald-200 text-sm font-semibold backdrop-blur-sm">
          <span className="text-xl">✓</span> Yêu cầu tư vấn đã được gửi thành công! Chúng tôi sẽ liên hệ bạn sớm.
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-500/30 border border-red-400/50 rounded-xl text-red-200 text-sm font-semibold">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <input type="text" name="fullName" required placeholder="Họ và tên *" value={form.fullName} onChange={handleChange} className={inputClass} />
        <input type="tel" name="phone" required placeholder="Số điện thoại *" value={form.phone} onChange={handleChange} className={inputClass} />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input type="email" name="email" placeholder="Email liên hệ" value={form.email} onChange={handleChange} className={inputClass} />
        <input type="date" name="dateOfBirth" placeholder="Ngày sinh" value={form.dateOfBirth} onChange={handleChange} className={inputClass} />
      </div>

      <input type="text" name="address" placeholder="Địa chỉ liên hệ" value={form.address} onChange={handleChange} className={inputClass} />

      <p className="text-amber-200/50 text-[10px] font-semibold uppercase tracking-wider ml-1">
        * Chọn chương trình bạn quan tâm, ghi rõ trong nội dung — chúng tôi sẽ tư vấn lộ trình phù hợp nhất
      </p>

      <textarea name="message" placeholder="Nội dung cần tư vấn (VD: Công nghệ Ô tô, Tu nghiệp quốc tế...)" value={form.message} onChange={handleChange} rows="3" className={`${inputClass} resize-none`} />

      <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-amber-950 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/40 hover:shadow-amber-400/50 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide disabled:opacity-60">
        {loading ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn →'}
      </button>
    </form>
  );
};

/* ─────────────────────────── HOMEPAGE ─────────────────────────── */
const HomePage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [courses, setCourses] = useState([]);
  const [partners, setPartners] = useState([]);
  const [posts, setPosts] = useState([]);
  const [hotline, setHotline] = useState('1900 1234');

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, partnersRes, postsRes, settingsRes] = await Promise.allSettled([
          getCourses({ limit: 4 }),
          getPartners({ limit: 6 }),
          getPosts({ limit: 3 }),
          getSettings(),
        ]);
        if (coursesRes.value?.data) setCourses(coursesRes.value.data);
        if (partnersRes.value?.data) setPartners(partnersRes.value.data);
        if (postsRes.value?.data) setPosts(postsRes.value.data);
        if (settingsRes.value?.data) {
          const s = settingsRes.value.data;
          if (s.hotline) setHotline(s.hotline);
        }
      } catch (e) {
        /* fallback to static data */
      }
    };
    fetchData();
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

      {/* ── NEWCITY GROUP – SULECO ── */}
      <section className="relative overflow-hidden bg-sky-950 py-24 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-40 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: info */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">Newcitygroup – Suleco</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Hệ thống đào tạo nghề<br />
                <span className="text-amber-400">gắn kết doanh nghiệp</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
                Trực thuộc Newcity Group, Suleco là hệ thống giáo dục nghề nghiệp tiên phong 
                kết nối đào tạo chuyên môn với thực tiễn doanh nghiệp, mở ra cơ hội việc làm 
                bền vững cho học viên tại Việt Nam và quốc tế.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "40+", label: "Năm kinh nghiệm" },
                  { number: "15+", label: "Cơ sở đào tạo" },
                  { number: "90%", label: "Việc làm sau tốt nghiệp" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-amber-400">{item.number}</p>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-wider mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Đào tạo bài bản", desc: "Chương trình chuẩn quốc tế, giáo trình cập nhật, giảng viên giàu kinh nghiệm thực tế.", icon: "📚" },
                { title: "Thực hành 100%", desc: "Mô hình đào tạo gắn xưởng thực tế — học viên được cầm tay chỉ việc trên xe thật.", icon: "🔧" },
                { title: "Kết nối doanh nghiệp", desc: "Liên kết trực tiếp với 120+ doanh nghiệp, gara, xưởng dịch vụ trên toàn quốc.", icon: "🤝" },
                { title: "Cơ hội quốc tế", desc: "Lộ trình tu nghiệp & việc làm tại Nhật Bản, Australia, CHLB Đức.", icon: "🌏" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/15 transition-all">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
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

          <div className="grid lg:grid-cols-2 gap-6">
            {(courses.length > 0 ? courses.slice(0, 1) : [{
              _id: '1', title: 'Công nghệ Ô tô', courseDuration: '2 – 3 năm',
              description: 'Chương trình đào tạo toàn diện từ nền tảng đến chuyên sâu về kỹ thuật ô tô.',
              coverImageUrl: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=900&auto=format&fit=crop&q=80'
            }]).map((p) => (
              <div key={p._id} className="lg:col-span-2 relative rounded-3xl overflow-hidden group" style={{ minHeight: '420px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800" />
                <img
                  src={p.coverImageUrl || 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=900&auto=format&fit=crop&q=80'}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="inline-block px-3 py-1 bg-amber-500 rounded-full mb-4">
                    <span className="text-amber-950 text-xs font-black uppercase tracking-wider">Hệ chính quy</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-2xl">{p.description || p.courseOverview || ''}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">⏱ {p.courseDuration || 'Liên hệ'}</span>
                    <Link
                      to={`/training/formal-education`}
                      className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                    >
                      Tìm hiểu thêm
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
            {(partners.length > 0 ? partners : []).slice(0, 6).map((p, i) => {
              const categoryConfig = {
                enterprise: { icon: '🏢', color: 'from-sky-900 to-sky-700', label: 'Doanh nghiệp liên kết' },
                garage: { icon: '🔩', color: 'from-amber-700 to-amber-500', label: 'Gara & Xưởng thực hành' },
                school: { icon: '🏫', color: 'from-teal-700 to-teal-500', label: 'Trường học liên kết' },
              };
              const cfg = categoryConfig[p.category] || { icon: '🤝', color: 'from-slate-700 to-slate-500', label: 'Đối tác' };
              return (
                <div key={p._id || i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-1 transition-all duration-200 group">
                  <div className={`h-2 bg-gradient-to-r ${cfg.color}`} />
                  <div className="p-8">
                    {p.logoUrl ? (
                      <img src={p.logoUrl} alt={p.name} className="h-12 object-contain mb-4" />
                    ) : (
                      <span className="text-4xl">{cfg.icon}</span>
                    )}
                    <h3 className="text-xl font-black text-sky-950 mt-4 mb-3">{p.name || cfg.label}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">{p.description || cfg.label}</p>
                    <button className="w-full py-3 border-2 border-sky-950/20 text-sky-950 font-bold rounded-xl hover:bg-sky-950 hover:text-white hover:border-sky-950 transition-all duration-200 text-sm">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              );
            })}
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
                <p className="text-2xl font-black text-amber-400">{hotline}</p>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-600/20 border border-amber-400/30 rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl shadow-amber-500/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📝</span>
                <h3 className="text-xl font-black text-white">Đăng ký tư vấn ngay</h3>
              </div>
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
            {(posts.length > 0 ? posts : []).slice(0, 3).map((item, i) => {
              const emojis = ['🏆', '📢', '🌏'];
              const gradients = [
                ['#1e3a5f', '#0c4a6e'],
                ['#2d4a6f', '#164e63'],
                ['#3a5a7f', '#134e4a'],
              ];
              const date = item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('vi-VN') : '';
              return (
                <div key={item._id || i} className="group rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-sky-950/8 hover:-translate-y-1 transition-all duration-200 bg-white flex flex-col">
                  <div className="relative overflow-hidden h-44" style={{
                    background: `linear-gradient(135deg, ${gradients[i % 3][0]} 0%, ${gradients[i % 3][1]} 100%)`
                  }}>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    {item.coverImageUrl ? (
                      <img src={item.coverImageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/15 text-7xl font-black select-none">
                        {emojis[i % 3]}
                      </div>
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full">
                      <span className="text-amber-950 text-xs font-black uppercase tracking-wider">{item.category || 'Tin tức'}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-slate-400">{date}</span>
                    </div>
                    <h3 className="text-sky-950 font-black leading-snug text-sm group-hover:text-sky-700 transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed flex-1">
                      {item.excerpt || ''}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-amber-600 font-bold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                        Đọc tiếp <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
