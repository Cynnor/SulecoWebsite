import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: "🎯",
    title: "Tư vấn 1:1 chuyên sâu",
    desc: "Trực tiếp cùng chuyên gia định hướng nghề nghiệp và chọn lộ trình phù hợp.",
  },
  {
    icon: "🏭",
    title: "Tham quan cơ sở vật chất",
    desc: "Trải nghiệm thực tế xưởng thực hành và môi trường học tập hiện đại.",
  },
  {
    icon: "💳",
    title: "Thiết kế lộ trình học phí",
    desc: "Hỗ trợ các giải pháp tài chính linh hoạt, phù hợp với mọi gia đình.",
  },
];

const faqs = [
  {
    q: "Tôi cần chuẩn bị gì khi đến tư vấn?",
    a: "Bạn không cần chuẩn bị gì đặc biệt. Đội ngũ tư vấn sẽ hỗ trợ bạn từ bước xác định nguyện vọng đến lựa chọn chương trình phù hợp nhất.",
  },
  {
    q: "Tư vấn có mất phí không?",
    a: "Hoàn toàn miễn phí. Suleco cung cấp dịch vụ tư vấn tuyển sinh miễn phí cho tất cả học viên quan tâm.",
  },
  {
    q: "Bao lâu sau khi gửi form tôi sẽ được liên hệ?",
    a: "Trong vòng 24 giờ làm việc, tư vấn viên sẽ chủ động liên hệ qua số điện thoại bạn đã để lại.",
  },
];

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    schedule: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', phone: '', email: '', interest: '', schedule: '', message: '' });
  };

  return (
    <div className="w-full min-h-screen bg-slate-50">

      {/* ── BANNER ── */}
      <section className="relative overflow-hidden bg-sky-950 py-24 px-6 md:px-12 lg:px-20">
        {/* Decorative */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/40 text-xs font-semibold mb-8 uppercase tracking-wider">
            <Link to="/" className="hover:text-white/70 transition-colors">Trang chủ</Link>
            <span>/</span>
            <span className="text-amber-400">Đăng ký tư vấn</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-300 text-xs font-bold tracking-widest uppercase">Tư vấn miễn phí</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Đăng ký tư vấn<br />
              <span className="text-amber-400">chuyên sâu</span>
            </h1>

            <p className="text-white/65 text-lg leading-relaxed">
              Để lại thông tin để nhận lộ trình đào tạo và định hướng nghề nghiệp miễn phí từ đội ngũ chuyên gia của Suleco.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">

            {/* ── LEFT COLUMN (info) ── */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Tại sao chọn Suleco?</p>
                <h2 className="text-3xl font-black text-sky-950 leading-tight mb-4">
                  Chúng tôi lắng nghe ước mơ của bạn
                </h2>
                <p className="text-zinc-500 leading-relaxed text-sm">
                  Đội ngũ tư vấn tại Suleco không chỉ cung cấp thông tin khóa học — chúng tôi giúp bạn khám phá thế mạnh bản thân và lựa chọn con đường sự nghiệp phù hợp nhất với xu thế thị trường toàn cầu.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-5">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    <div className="w-11 h-11 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-sky-950 text-sm mb-1 uppercase tracking-tight">{b.title}</h4>
                      <p className="text-zinc-500 text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hotline CTA */}
              <div className="p-6 bg-gradient-to-br from-sky-950 to-sky-800 rounded-2xl text-white">
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Hotline Tư vấn 24/7</p>
                <p className="text-3xl font-black text-amber-400 mb-1">1900 1234</p>
                <p className="text-white/60 text-xs">Gặp trực tiếp tư vấn viên ngay</p>
              </div>

              {/* FAQ */}
              <div>
                <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-4">Câu hỏi thường gặp</p>
                <div className="space-y-2">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                      <button
                        id={`faq-toggle-${i}`}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left text-sky-950 font-black text-sm hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <span className={`text-amber-500 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-4 text-zinc-500 text-xs leading-relaxed border-t border-slate-100">
                          <div className="pt-3">{faq.a}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN (form) ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                /* Success state */
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                    ✅
                  </div>
                  <h3 className="text-2xl font-black text-sky-950 mb-3">Yêu cầu đã được gửi!</h3>
                  <p className="text-zinc-500 leading-relaxed mb-8 max-w-md mx-auto">
                    Cảm ơn bạn đã để lại thông tin. Tư vấn viên Suleco sẽ liên hệ bạn trong vòng <strong className="text-sky-950">24 giờ làm việc</strong>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      id="form-reset-btn"
                      onClick={handleReset}
                      className="px-6 py-3 border-2 border-sky-950 text-sky-950 font-bold rounded-xl hover:bg-sky-950 hover:text-white transition-all text-sm"
                    >
                      Gửi yêu cầu khác
                    </button>
                    <Link
                      to="/"
                      className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-xl transition-all text-sm text-center"
                    >
                      Về trang chủ
                    </Link>
                  </div>
                </div>
              ) : (
                /* Form */
                <form
                  id="consultation-form"
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6"
                >
                  <div className="mb-2">
                    <h3 className="text-xl font-black text-sky-950">Điền thông tin tư vấn</h3>
                    <p className="text-zinc-400 text-xs mt-1">Các trường có dấu * là bắt buộc</p>
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="cf-name" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                      Họ và tên *
                    </label>
                    <input
                      id="cf-name"
                      type="text" name="name" required
                      placeholder="VD: Nguyễn Văn An"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all text-slate-800 font-semibold text-sm placeholder-slate-400"
                    />
                  </div>

                  {/* Phone + Email */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="cf-phone" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                        Số điện thoại *
                      </label>
                      <input
                        id="cf-phone"
                        type="tel" name="phone" required
                        placeholder="09xx xxx xxx"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all text-slate-800 font-semibold text-sm placeholder-slate-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="cf-email" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                        Email liên hệ
                      </label>
                      <input
                        id="cf-email"
                        type="email" name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all text-slate-800 font-semibold text-sm placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Program Interest */}
                  <div className="space-y-1.5">
                    <label htmlFor="cf-interest" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                      Chương trình quan tâm *
                    </label>
                    <div className="relative">
                      <select
                        id="cf-interest"
                        name="interest" required
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all text-slate-800 font-semibold text-sm appearance-none"
                      >
                        <option value="">Chọn chương trình đào tạo</option>
                        <option value="chinh-quy">Hệ chính quy (Công nghệ ô tô, Cơ khí...)</option>
                        <option value="ngan-han">Hệ ngắn hạn (Hàn, CNC, Điện ô tô...)</option>
                        <option value="ky-nang">Kỹ năng nâng cao (Dành cho kỹ thuật viên)</option>
                        <option value="ngoai-ngu">Ngoại ngữ (Nhật, Anh, Trung)</option>
                        <option value="tuyen-sinh">Thông tin tuyển sinh 2024 – 2025</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">▾</div>
                    </div>
                  </div>

                  {/* Preferred Schedule */}
                  <div className="space-y-1.5">
                    <label htmlFor="cf-schedule" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                      Thời gian tư vấn thuận tiện
                    </label>
                    <div className="relative">
                      <select
                        id="cf-schedule"
                        name="schedule"
                        value={formData.schedule}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all text-slate-800 font-semibold text-sm appearance-none"
                      >
                        <option value="">Chọn khung giờ thuận tiện</option>
                        <option value="sang">Buổi sáng (8:00 – 12:00)</option>
                        <option value="chieu">Buổi chiều (13:00 – 17:00)</option>
                        <option value="toi">Buổi tối (18:00 – 21:00)</option>
                        <option value="bat-ky">Bất kỳ giờ nào</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">▾</div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="cf-message" className="text-xs font-black text-slate-500 uppercase tracking-widest">
                      Nội dung câu hỏi / nguyện vọng
                    </label>
                    <textarea
                      id="cf-message"
                      name="message" rows="4"
                      placeholder="Hãy cho chúng tôi biết nguyện vọng của bạn, chúng tôi sẽ tư vấn phù hợp nhất..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-2xl focus:border-sky-500 focus:bg-white outline-none transition-all text-slate-800 font-semibold text-sm resize-none placeholder-slate-400"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Bằng cách gửi form, bạn đồng ý để Suleco liên hệ theo số điện thoại / email đã cung cấp. Thông tin của bạn được bảo mật tuyệt đối.
                  </p>

                  {/* Submit */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full py-5 bg-sky-950 hover:bg-sky-800 disabled:bg-sky-900 text-white font-black rounded-2xl transition-all duration-200 shadow-xl shadow-sky-950/20 hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wider uppercase flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Đang gửi...
                      </>
                    ) : (
                      'Gửi yêu cầu tư vấn →'
                    )}
                  </button>
                </form>
              )}

              {/* Trust badges */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { icon: "🔒", label: "Bảo mật thông tin" },
                  { icon: "⚡", label: "Phản hồi trong 24h" },
                  { icon: "🎁", label: "Tư vấn miễn phí" },
                ].map((badge, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center text-center gap-1.5 shadow-sm">
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-xs font-black text-sky-950 uppercase tracking-tight">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ConsultationForm;
