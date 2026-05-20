import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCourses } from '../services/courseService';
import { getPartners } from '../services/partnerService';
import { getPosts } from '../services/postService';
import { getSettings } from '../services/settingService';
import { submitContact } from '../services/contactService';

const defaultStats = [
  { number: "--", label: "Học viên tốt nghiệp" },
  { number: "--", label: "Doanh nghiệp đối tác" },
  { number: "--", label: "Có việc làm sau tốt nghiệp" },
  { number: "--", label: "Chương trình đào tạo" },
];

const MiniConsultForm = () => {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', dateOfBirth: '', address: '', intendedCourse: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  useEffect(() => {
    getCourses({ limit: 100 })
      .then(setCourses)
      .catch(() => {})
      .finally(() => setCoursesLoading(false));
  }, []);

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
        dateOfBirth: form.dateOfBirth ? form.dateOfBirth.split('-').reverse().join('/') : undefined,
        address: form.address || undefined,
        intendedCourse: form.intendedCourse || undefined,
        message: form.message || undefined,
      });
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ fullName: '', phone: '', email: '', dateOfBirth: '', address: '', intendedCourse: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Gửi yêu cầu thất bại, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      {sent && (
        <div className="flex items-center gap-3 p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-emerald-300 text-sm font-medium backdrop-blur-sm">
          <span className="text-lg">✓</span> Yêu cầu tư vấn đã được gửi thành công!
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-300 text-sm">{error}</div>
      )}

      <div className="grid md:grid-cols-2 gap-3.5">
        <input type="text" name="fullName" required placeholder="Họ và tên *" value={form.fullName} onChange={handleChange} className={inputClass} />
        <input type="tel" name="phone" required placeholder="Số điện thoại *" value={form.phone} onChange={handleChange} className={inputClass} />
      </div>
      <div className="grid md:grid-cols-2 gap-3.5">
        <input type="email" name="email" placeholder="Email liên hệ" value={form.email} onChange={handleChange} className={inputClass} />
        <input type="date" name="dateOfBirth" placeholder="Ngày sinh" value={form.dateOfBirth} onChange={handleChange} className={inputClass} />
      </div>
      <input type="text" name="address" placeholder="Địa chỉ liên hệ" value={form.address} onChange={handleChange} className={inputClass} />
      <select name="intendedCourse" value={form.intendedCourse} onChange={handleChange} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 focus:bg-white/15 transition-all text-sm" style={{ color: form.intendedCourse ? 'white' : 'rgba(255,255,255,0.5)' }}>
        <option value="" className="text-gray-800">{coursesLoading ? 'Đang tải...' : 'Chương trình quan tâm'}</option>
        {!coursesLoading && courses.map((c) => (
          <option key={c._id} value={c._id} className="text-gray-800">{c.title}</option>
        ))}
      </select>
      <textarea name="message" placeholder="Nội dung cần tư vấn (tuỳ chọn)" value={form.message} onChange={handleChange} rows="3" className={`${inputClass} resize-none`} />
      <button type="submit" disabled={loading} className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-amber-950 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-400/40 hover:-translate-y-0.5 active:translate-y-0 text-sm disabled:opacity-60">
        {loading ? 'Đang gửi...' : 'Gửi yêu cầu tư vấn →'}
      </button>
    </form>
  );
};

const HomePage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [courses, setCourses] = useState([]);
  const [partners, setPartners] = useState([]);
  const [posts, setPosts] = useState([]);
  const [hotline, setHotline] = useState('1900 1234');
  const [stats, setStats] = useState(defaultStats);

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, partnersRes, postsRes, settingsRes] = await Promise.allSettled([
          getCourses({ limit: 4 }),
          getPartners({ limit: 100 }),
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
        const courseLen = Array.isArray(coursesRes.value) ? coursesRes.value.length : (coursesRes.value?.data?.courses?.length || coursesRes.value?.data?.length || 0);
        const partnerTotal = partnersRes.value?.data?.total || partnersRes.value?.total || (Array.isArray(partnersRes.value?.data?.partners) ? partnersRes.value.data.partners.length : 0);
        const postTotal = postsRes.value?.data?.total || postsRes.value?.total || (Array.isArray(postsRes.value?.data?.posts) ? postsRes.value.data.posts.length : 0);
        setStats([
          { number: `${courseLen || 0}+`, label: "Chương trình đào tạo" },
          { number: `${partnerTotal || 0}+`, label: "Doanh nghiệp đối tác" },
          { number: "90%", label: "Có việc làm sau tốt nghiệp" },
          { number: `${postTotal || 0}+`, label: "Bài viết & tin tức" },
        ]);
      } catch (e) {}
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-sky-950" style={{ minHeight: '760px' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-950/60 to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl" />

        <img
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1400&auto=format&fit=crop&q=80"
          alt="Suleco đào tạo nghề ô tô"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          onLoad={() => setHeroLoaded(true)}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center" style={{ minHeight: '760px' }}>
          <div className="max-w-2xl transition-all duration-700" style={{ opacity: heroLoaded ? 1 : 0, transform: heroLoaded ? 'translateY(0)' : 'translateY(24px)' }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">Newcitygroup – Suleco</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.15] tracking-tight">
              Đào tạo nghề<br />
              <span className="text-amber-400">gắn kết</span> doanh nghiệp
            </h1>

            <p className="text-base md:text-lg text-white/75 mb-10 leading-relaxed max-w-xl">
              Hệ thống đào tạo nghề và kết nối doanh nghiệp — giúp học viên lựa chọn chương trình phù hợp, đăng ký tuyển sinh trực tuyến và tiếp cận cơ hội việc làm sau đào tạo.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/admission/apply" id="hero-cta-apply" className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide">
                Đăng ký xét tuyển
              </Link>
              <Link to="/training/formal-education" id="hero-cta-programs" className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-sm tracking-wide">
                Xem chương trình →
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-7xl mx-auto -mt-8 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg shadow-sky-950/5 border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-200 min-h-[140px]">
                <p className="text-4xl md:text-5xl font-black text-sky-950 mb-3 group-hover:text-amber-500 transition-colors">{stat.number}</p>
                <p className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWCITY GROUP – SULECO ── */}
      <section className="relative overflow-hidden bg-sky-950 py-20 px-6 md:px-12 lg:px-20">
        <div className="absolute -top-40 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-sky-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full mb-5">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">Newcitygroup – Suleco</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5 tracking-tight">
                Hệ thống đào tạo nghề<br />
                <span className="text-amber-400">gắn kết doanh nghiệp</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg">
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
                    <p className="text-2xl md:text-3xl font-black text-amber-400">{item.number}</p>
                    <p className="text-white/50 text-xs font-bold uppercase tracking-wider mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Đào tạo bài bản", desc: "Chương trình chuẩn quốc tế, giáo trình cập nhật, giảng viên giàu kinh nghiệm thực tế." },
                { title: "Thực hành 100%", desc: "Mô hình đào tạo gắn xưởng thực tế — học viên được cầm tay chỉ việc trên xe thật." },
                { title: "Kết nối doanh nghiệp", desc: "Liên kết trực tiếp với 120+ doanh nghiệp, gara, xưởng dịch vụ trên toàn quốc." },
                { title: "Cơ hội quốc tế", desc: "Lộ trình tu nghiệp & việc làm tại Nhật Bản, Australia, CHLB Đức." },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/15 transition-all flex flex-col justify-center min-h-[140px]">
                  <h3 className="text-white font-bold text-sm md:text-base mb-2 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROGRAMS ── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
            <div className="max-w-xl">
              <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">Chương trình nổi bật</p>
              <h2 className="text-3xl md:text-4xl font-black text-sky-950 leading-tight tracking-tight">Đào tạo trọng điểm</h2>
              <p className="text-zinc-500 mt-2 leading-relaxed text-sm">
                Các khóa học bám sát thực tiễn, kết nối trực tiếp với doanh nghiệp và mạng lưới Garage.
              </p>
            </div>
            <Link to="/training/formal-education" id="programs-view-all" className="flex items-center gap-2 text-sky-950 font-bold hover:text-amber-600 transition-colors text-sm whitespace-nowrap group">
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
              <div key={p._id} className="lg:col-span-2 relative rounded-2xl overflow-hidden group" style={{ minHeight: '380px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-sky-900 to-sky-800" />
                <img
                  src={p.coverImageUrl || 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=900&auto=format&fit=crop&q=80'}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/60 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="inline-block px-3 py-1 bg-amber-500 rounded-full mb-3">
                    <span className="text-amber-950 text-xs font-black uppercase tracking-wider">Hệ chính quy</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{p.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-2xl">{p.description || p.courseOverview || ''}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">⏱ {p.courseDuration || 'Liên hệ'}</span>
                    <Link to="/training/formal-education" className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl text-sm transition-all hover:-translate-y-0.5">
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
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">Hệ sinh thái</p>
            <h2 className="text-3xl md:text-4xl font-black text-sky-950 tracking-tight">Đối tác &amp; Cơ hội nghề nghiệp</h2>
            <p className="text-zinc-500 mt-2 max-w-xl mx-auto leading-relaxed text-sm">
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
                <div key={p._id || i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-sky-950/5 hover:-translate-y-1 transition-all duration-200 group">
                  <div className={`h-1.5 bg-gradient-to-r ${cfg.color}`} />
                  <div className="p-6">
                    {p.logoUrl ? (
                      <img src={p.logoUrl} alt={p.name} className="h-10 object-contain mb-4" />
                    ) : (
                      <span className="text-3xl block mb-4">{cfg.icon}</span>
                    )}
                    <h3 className="text-lg font-black text-sky-950 mb-2">{p.name || cfg.label}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-5">{p.description || cfg.label}</p>
                    <button className="w-full py-2.5 border-2 border-sky-950/20 text-sky-950 font-bold rounded-xl hover:bg-sky-950 hover:text-white hover:border-sky-950 transition-all duration-200 text-sm">
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
      <section className="relative overflow-hidden py-20 px-6 md:px-12 lg:px-20 bg-sky-950">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-white">
              <p className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-3">Tư vấn miễn phí</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5 tracking-tight">
                Bạn cần tư vấn<br />
                <span className="text-amber-400">lộ trình học?</span>
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Để lại thông tin, đội ngũ tư vấn tuyển sinh sẽ liên hệ và hỗ trợ bạn chọn chương trình phù hợp.
              </p>
              <div className="space-y-3.5">
                {[
                  { icon: "✅", text: "Tư vấn chương trình đào tạo phù hợp" },
                  { icon: "📋", text: "Hướng dẫn hồ sơ đăng ký từng bước" },
                  { icon: "💼", text: "Kết nối cơ hội việc làm sau tốt nghiệp" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-white/85 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-sm">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Hotline tư vấn 24/7</p>
                <p className="text-xl md:text-2xl font-black text-amber-400">{hotline}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-amber-600/20 border border-amber-400/30 rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-2xl shadow-amber-500/20">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">📝</span>
                <h3 className="text-lg font-black text-white">Đăng ký tư vấn ngay</h3>
              </div>
              <MiniConsultForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWS & EVENTS ── */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
            <div>
              <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2">Cập nhật mới nhất</p>
              <h2 className="text-3xl md:text-4xl font-black text-sky-950 tracking-tight">Tin tức &amp; Sự kiện</h2>
            </div>
            <Link to="/news/events" id="news-view-all" className="flex items-center gap-2 text-sky-950 font-bold hover:text-amber-600 transition-colors text-sm whitespace-nowrap group">
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
                <div key={item._id || i} className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-sky-950/5 hover:-translate-y-1 transition-all duration-200 bg-white flex flex-col">
                  <div className="relative overflow-hidden h-40" style={{ background: `linear-gradient(135deg, ${gradients[i % 3][0]} 0%, ${gradients[i % 3][1]} 100%)` }}>
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    {item.coverImageUrl ? (
                      <img src={item.coverImageUrl} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/15 text-6xl font-black select-none">
                        {emojis[i % 3]}
                      </div>
                    )}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-amber-500/90 backdrop-blur-sm rounded-full">
                      <span className="text-amber-950 text-xs font-black uppercase tracking-wider">{item.category || 'Tin tức'}</span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-slate-400 mb-2">{date}</span>
                    <h3 className="text-sky-950 font-black text-sm leading-snug group-hover:text-sky-700 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed flex-1">
                      {item.excerpt || ''}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <span className="text-amber-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
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
