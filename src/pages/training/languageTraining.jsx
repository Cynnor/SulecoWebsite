import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ────────────────────────────────────────────── */
const scheduleRows = [
  {
    name: 'Tiếng Nhật Sơ Cấp',
    badge: 'N5 - N4',
    badgeColor: 'bg-red-200 text-orange-950',
    date: '15/10/2024',
    fee: '4.500.000 / khóa',
  },
  {
    name: 'Luyện thi JLPT Cấp tốc',
    badge: 'N3 - N2',
    badgeColor: 'bg-red-200 text-orange-950',
    date: '20/10/2024',
    fee: '6.200.000 / khóa',
  },
  {
    name: 'IELTS Master Class',
    badge: '6.5+ Target',
    badgeColor: 'bg-blue-100 text-slate-900',
    date: '01/11/2024',
    fee: '12.000.000 / khóa',
  },
  {
    name: 'Tiếng Trung Giao Tiếp',
    badge: 'HSK 3',
    badgeColor: 'bg-blue-100 text-zinc-700',
    date: '12/10/2024',
    fee: '3.800.000 / khóa',
  },
];

/* ─── COMPONENT ───────────────────────────────────────── */
/**
 * Component: LanguageTraining
 * Trang giới thiệu các chương trình đào tạo ngoại ngữ (Nhật, Anh, Trung)
 */
const LanguageTraining = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO
          Figma: h-600, bg-sky-950/60 overlay, flex justify-center items-center
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-[600px] overflow-hidden inline-flex justify-center items-center">
        {/* Background */}
        <div className="absolute left-0 top-0 w-full h-full inline-flex flex-col justify-center items-start">
          <img
            src="https://placehold.co/1280x600"
            alt="Đào tạo ngoại ngữ Suleco"
            className="self-stretch flex-1 object-cover w-full"
          />
          <div className="absolute left-0 top-0 w-full h-full bg-sky-950/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 max-w-[1280px] px-6 inline-flex flex-col justify-start items-start">
          <div className="w-[672px] max-w-full flex flex-col justify-start items-start gap-4">
            {/* Badge */}
            <div className="px-4 py-1 bg-amber-500 rounded-full inline-flex justify-start items-start">
              <span className="text-yellow-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                CHƯƠNG TRÌNH ĐÀO TẠO 2024
              </span>
            </div>

            {/* Headline */}
            <div className="self-stretch flex flex-col justify-start items-start">
              <h1 className="self-stretch text-white text-5xl font-bold font-['Montserrat'] leading-[60px]">
                Mở Cửa Tương Lai Với<br />Ngoại Ngữ Chuyên Sâu
              </h1>
            </div>

            {/* Subtitle */}
            <div className="self-stretch pt-3.5 opacity-90 flex flex-col justify-start items-start">
              <p className="self-stretch text-white text-lg font-normal font-['Inter'] leading-7">
                Suleco Academy cung cấp lộ trình đào tạo Tiếng Nhật, Tiếng Anh và Tiếng Trung
                cam kết đầu ra, giúp bạn sẵn sàng cho hành trình sự nghiệp toàn cầu.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="self-stretch pt-4 inline-flex justify-start items-start gap-6 flex-wrap">
              <Link
                to="/contact/consultation"
                id="hero-cta-consult"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-xl inline-flex flex-col justify-center items-center transition-all duration-200"
              >
                <span className="text-yellow-900 text-base font-semibold font-['Inter'] leading-4">
                  Đăng ký tư vấn
                </span>
              </Link>
              <a
                href="#schedule"
                id="hero-cta-schedule"
                className="px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-white inline-flex flex-col justify-center items-center hover:bg-white/10 transition-all duration-200"
              >
                <span className="text-white text-base font-semibold font-['Inter'] leading-4">
                  Xem lịch khai giảng
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — LỘ TRÌNH ĐA NGÔN NGỮ
          Figma: top-600, px-6, py-20, gap-20
                 → Section header (center)
                 → Card stack: Japanese featured (h-96, bg-blue-50)
                               + IELTS card (bg-white, outline)
                               + Chinese card (bg-white, outline)
                               + Cam kết (bg-sky-950)
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] mx-auto px-6 py-20 flex flex-col justify-start items-start gap-20">

        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-center gap-2">
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
              Lộ Trình Đào Tạo Đa Ngôn Ngữ
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-amber-500 rounded-full" />
        </div>

        {/* Card grid — 3 columns: Japanese col-span-2 | IELTS col-span-1 / Chinese col-span-1 | CamKet col-span-2 */}
        <div className="self-stretch grid grid-cols-3 gap-6">

          {/* ── Card 1: Tiếng Nhật (featured, bg-blue-50, col-span-2) ── */}
          <div className="col-span-2 p-8 bg-blue-50 rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-center items-start gap-6 overflow-hidden">
            {/* Left content */}
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-4">
              {/* Tag */}
              <div className="self-stretch inline-flex justify-start items-center gap-2">
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="w-5 h-3 bg-yellow-800" />
                </div>
                <span className="text-yellow-800 text-base font-normal font-['Inter'] leading-6">
                  TIẾNG NHẬT SULECO
                </span>
              </div>

              {/* Title */}
              <div className="self-stretch flex flex-col justify-start items-start">
                <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                  Từ N5 đến N1 &amp; Tiếng Nhật<br />Chuyên Ngành
                </h3>
              </div>

              {/* Desc */}
              <div className="self-stretch flex flex-col justify-start items-start">
                <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                  Lộ trình được thiết kế riêng cho người đi làm và du học sinh.
                  Tập trung 4 kỹ năng và văn hóa doanh nghiệp Nhật Bản.
                </p>
              </div>

              {/* Feature list */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                {[
                  'Cam kết N3 trong 6 tháng',
                  'Giáo viên bản ngữ trực tiếp đứng lớp',
                  'Học phí ưu đãi cho ứng viên Suleco',
                ].map((item, i) => (
                  <div key={i} className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="inline-flex flex-col justify-start items-start shrink-0">
                      <div className="w-5 h-5 bg-amber-500" />
                    </div>
                    <span className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{item}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <div className="pt-[0.70px] inline-flex justify-start items-center gap-2">
                <Link
                  to="/training/formal-education"
                  id="japanese-learn-more"
                  className="text-sky-950 text-base font-normal font-['Inter'] leading-6 hover:underline"
                >
                  Tìm hiểu thêm
                </Link>
                <div className="inline-flex flex-col justify-start items-center">
                  <div className="w-4 h-4 bg-sky-950" />
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="flex-1 self-stretch min-h-60 rounded-2xl inline-flex flex-col justify-center items-start overflow-hidden">
              <img
                src="https://placehold.co/363x363"
                alt="Tiếng Nhật Suleco"
                className="self-stretch flex-1 object-cover w-full"
              />
            </div>
          </div>

          {/* ── Card 2: IELTS Intensive (bg-white, outline, col-span-1) ── */}
          <div className="col-span-1 px-8 pt-8 pb-8 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start gap-2">
            {/* Icon */}
            <div className="w-16 h-16 bg-sky-900 rounded-2xl inline-flex justify-center items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="w-7 h-6 bg-white" />
              </div>
            </div>

            {/* Title */}
            <div className="self-stretch pt-2 flex flex-col justify-start items-start">
              <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                IELTS Intensive
              </h3>
            </div>

            {/* Desc */}
            <div className="self-stretch flex flex-col justify-start items-start">
              <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                Luyện thi chứng chỉ quốc tế IELTS 4.5 - 7.5+. Phương pháp học tư duy ngôn ngữ hiện đại.
              </p>
            </div>

            {/* Tags */}
            <div className="self-stretch py-6 inline-flex justify-start items-start gap-2">
              {['4 Kỹ năng', 'Mock Test'].map((tag) => (
                <div key={tag} className="self-stretch px-3 py-1 bg-sky-100 rounded-full inline-flex flex-col justify-start items-start">
                  <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">{tag}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <Link
              to="/contact/consultation"
              id="ielts-view-btn"
              className="self-stretch px-6 py-3 bg-sky-950 hover:bg-sky-800 rounded-xl inline-flex justify-center items-start transition-all duration-200"
            >
              <span className="text-white text-base font-normal font-['Inter'] leading-6">Xem lộ trình</span>
            </Link>
          </div>

          {/* ── Card 3: Tiếng Trung HSK (bg-white, outline, col-span-1) ── */}
          <div className="col-span-1 p-8 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 inline-flex flex-col justify-start items-start gap-2">
            {/* Icon */}
            <div className="w-16 h-16 bg-amber-500 rounded-2xl inline-flex justify-center items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="w-5 h-5 bg-white" />
              </div>
            </div>

            {/* Title */}
            <div className="self-stretch pt-2 flex flex-col justify-start items-start">
              <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                Tiếng Trung HSK
              </h3>
            </div>

            {/* Desc */}
            <div className="self-stretch flex flex-col justify-start items-start">
              <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                Khóa học giao tiếp và luyện thi HSK 1-6. Phù hợp cho mục tiêu kinh doanh và du học.
              </p>
            </div>

            {/* Tags */}
            <div className="self-stretch py-6 inline-flex justify-start items-start gap-2">
              {['HSK 1-6', 'Giao tiếp'].map((tag) => (
                <div key={tag} className="self-stretch px-3 py-1 bg-sky-100 rounded-full inline-flex flex-col justify-start items-start">
                  <span className="text-slate-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">{tag}</span>
                </div>
              ))}
            </div>

            {/* Button outline */}
            <Link
              to="/contact/consultation"
              id="chinese-detail-btn"
              className="self-stretch px-6 py-3 rounded-xl outline outline-2 outline-offset-[-2px] outline-sky-950 hover:bg-sky-50 inline-flex justify-center items-start transition-all duration-200"
            >
              <span className="text-sky-950 text-base font-normal font-['Inter'] leading-6">Chi tiết khóa học</span>
            </Link>
          </div>

          {/* ── Card 4: Cam Kết Đầu Ra (bg-sky-950, col-span-2) ── */}
          <div className="col-span-2 px-8 py-12 relative bg-sky-950 rounded-3xl inline-flex flex-col justify-center items-start overflow-hidden">
            {/* Decorative checkmark shape */}
            <div className="w-72 h-64 absolute right-8 top-1/2 -translate-y-1/2 opacity-10 bg-white rounded-3xl" />

            <div className="w-full max-w-[480px] flex flex-col justify-start items-start gap-3.5">
              <div className="self-stretch flex flex-col justify-start items-start">
                <h3 className="self-stretch text-white text-3xl font-bold font-['Montserrat'] leading-10">
                  Cam Kết Đầu Ra 100%
                </h3>
              </div>

              <div className="self-stretch pb-[0.60px] opacity-80 flex flex-col justify-start items-start">
                <p className="self-stretch text-white text-lg font-normal font-['Inter'] leading-7">
                  Chúng tôi không chỉ dạy ngôn ngữ, chúng tôi xây dựng sự nghiệp.
                  Hoàn trả học phí nếu không đạt mục tiêu đầu ra sau lộ trình.
                </p>
              </div>

              {/* Stats — side by side (flex-row) */}
              <div className="self-stretch pt-4 inline-flex flex-row justify-start items-start gap-4">
                {[
                  { value: '10,000+', label: 'Học viên tốt nghiệp' },
                  { value: '98%',     label: 'Tỉ lệ có việc ngay' },
                ].map((stat) => (
                  <div
                    key={stat.value}
                    className="flex-1 p-4 bg-white/10 rounded-xl backdrop-blur-[2px] inline-flex flex-col justify-start items-start"
                  >
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <span className="self-stretch text-amber-500 text-base font-normal font-['Montserrat'] leading-6">
                        {stat.value}
                      </span>
                    </div>
                    <div className="self-stretch opacity-70 flex flex-col justify-start items-start">
                      <span className="self-stretch text-white text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — LỊCH KHAI GIẢNG & HỌC PHÍ
          Figma: bg-white, py-20, px-6
                 → Header row (title + tab toggle)
                 → Table card (bg-white, outline, rounded-3xl)
                 → Footnote
      ══════════════════════════════════════════════ */}
      <section id="schedule" className="w-full bg-white py-20 px-6">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-4">

          {/* Header row */}
          <div className="self-stretch inline-flex justify-between items-end flex-wrap gap-4">
            <div className="inline-flex flex-col justify-start items-start gap-2">
              <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
                Lịch Khai Giảng &amp; Học Phí
              </h2>
              <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                Cập nhật mới nhất tháng 10/2024
              </p>
            </div>

            {/* Tab toggle */}
            <div className="p-1 bg-sky-100 rounded-full flex justify-start items-start">
              <div className="px-6 py-2 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-center items-center">
                <span className="text-sky-950 text-base font-normal font-['Inter'] leading-6">Cơ sở 1 (HCM)</span>
              </div>
              <div className="px-6 py-2 rounded-full inline-flex flex-col justify-center items-center">
                <span className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Cơ sở 2 (Đà Nẵng)</span>
              </div>
            </div>
          </div>

          {/* Table card */}
          <div className="self-stretch pt-4 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start overflow-hidden">
            {/* Table header */}
            <div className="self-stretch bg-sky-950">
              <div className="self-stretch inline-flex justify-center items-start">
                <div className="w-80 p-6"><span className="text-white text-base font-bold font-['Inter']">KHÓA HỌC</span></div>
                <div className="w-48 p-6"><span className="text-white text-base font-bold font-['Inter']">TRÌNH ĐỘ</span></div>
                <div className="w-64 p-6"><span className="text-white text-base font-bold font-['Inter']">NGÀY KHAI GIẢNG</span></div>
                <div className="w-64 p-6"><span className="text-white text-base font-bold font-['Inter']">HỌC PHÍ (VNĐ)</span></div>
                <div className="w-52 p-6 flex justify-end"><span className="text-white text-base font-bold font-['Inter'] text-right">HÀNH ĐỘNG</span></div>
              </div>
            </div>

            {/* Table rows */}
            <div className="self-stretch flex flex-col justify-start items-start">
              {scheduleRows.map((row, i) => (
                <div
                  key={i}
                  className={`self-stretch inline-flex justify-center items-start ${i > 0 ? 'border-t border-neutral-300' : ''}`}
                >
                  <div className="w-80 p-6">
                    <span className="text-slate-900 text-base font-semibold font-['Inter']">{row.name}</span>
                  </div>
                  <div className="w-48 px-6 pt-5 pb-6 flex items-start">
                    <span className={`px-3 py-1 rounded-md text-xs font-bold font-['Inter'] leading-4 ${row.badgeColor}`}>
                      {row.badge}
                    </span>
                  </div>
                  <div className="w-64 p-6">
                    <span className="text-slate-900 text-base font-normal font-['Inter']">{row.date}</span>
                  </div>
                  <div className="w-64 p-6">
                    <span className="text-slate-900 text-base font-normal font-['Inter']">{row.fee}</span>
                  </div>
                  <div className="w-52 p-6 flex justify-end">
                    <Link
                      to="/contact/consultation"
                      id={`schedule-register-${i}`}
                      className="text-yellow-800 text-base font-normal font-['Inter'] hover:underline hover:text-yellow-700 transition-colors"
                    >
                      Đăng ký ngay
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <div className="self-stretch flex flex-col justify-start items-start">
            <p className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
              * Học phí đã bao gồm giáo trình và lệ phí thi thử tại trung tâm.
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — CTA AMBER BANNER (centered)
      ══════════════════════════════════════════════ */}
      <section className="w-full px-6 pb-20 bg-white">
        <div className="w-full max-w-[1232px] mx-auto p-20 bg-amber-500 rounded-[40px] flex justify-center items-center gap-16 overflow-hidden">

          {/* Center text + form */}
          <div className="flex-1 flex flex-col items-center gap-6 text-center">
            {/* Headline */}
            <h2 className="text-yellow-900 text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
              Bắt Đầu Hành Trình Ngay Hôm Nay
            </h2>

            {/* Subtitle */}
            <p className="text-yellow-900/80 text-lg font-normal font-['Inter'] leading-7 max-w-[600px]">
              Liên hệ với chuyên viên tư vấn để nhận bài test năng lực miễn phí và lộ trình học cá nhân hóa.
            </p>

            {/* Email input row */}
            <form
              onSubmit={handleSend}
              className="w-full max-w-[640px] flex justify-center items-stretch gap-4"
            >
              <div className="flex-1 px-6 py-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex items-center overflow-hidden">
                <input
                  id="cta-email-input"
                  type="text"
                  placeholder="Email hoặc Số điện thoại của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-gray-500 text-base font-normal font-['Inter'] bg-transparent outline-none placeholder-gray-400"
                />
              </div>
              <button
                id="cta-send-btn"
                type="submit"
                className="px-10 py-4 bg-sky-950 hover:bg-sky-800 rounded-xl inline-flex justify-center items-center transition-all duration-200 whitespace-nowrap"
              >
                <span className="text-white text-base font-normal font-['Inter'] leading-6">
                  {sent ? 'Đã gửi ✓' : 'Gửi yêu cầu'}
                </span>
              </button>
            </form>
          </div>

          {/* Right decorative circle */}
          <div className="shrink-0">
            <div className="w-64 h-64 bg-white/20 rounded-full outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[6px] inline-flex justify-center items-center">
              <div className="w-24 h-24 bg-yellow-900 rounded-sm" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LanguageTraining;
