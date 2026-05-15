import React from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────── */
const regionCards = [
  {
    id: 'south-asia',
    title: 'South Asia',
    desc: 'Dành cho sinh viên từ Afghanistan, India, Pakistan, Bangladesh, Sri Lanka, Nepal, Bhutan, Maldives.',
  },
  {
    id: 'southeast-asia',
    title: 'Southeast Asia',
    desc: 'Dành cho sinh viên từ Vietnam, Thailand, Singapore, Malaysia, Indonesia, Philippines, Cambodia, Laos.',
  },
  {
    id: 'north-asia',
    title: 'North Asia',
    desc: 'Dành cho sinh viên từ China, Hong Kong, Japan, South Korea, Taiwan, Mongolia.',
  },
  {
    id: 'europe',
    title: 'Europe',
    desc: 'Các chương trình hỗ trợ đặc biệt dành cho sinh viên đến từ các quốc gia khu vực Châu Âu.',
  },
];

const tuitionRows = [
  { program: 'Cử nhân (Bachelor Degrees)',    duration: '3 - 4 Năm',    fee: '32,000 - 45,000 NZD/năm' },
  { program: 'Thạc sĩ (Master Degrees)',       duration: '1.5 - 2 Năm',  fee: '38,000 - 52,000 NZD/năm' },
  { program: 'Tiến sĩ (PhD)',                  duration: '3 - 4 Năm',    fee: '7,000 - 9,500 NZD/năm*' },
  { program: 'Chứng chỉ nghề (Diplomas)',      duration: '1 Năm',         fee: '18,000 - 28,000 NZD/năm' },
];

const govScholarships = [
  'Vietnam (Chương trình học bổng Chính phủ)',
  'China',
  'Germany (DAAD)',
  'Thailand',
];

/* ─── COMPONENT ────────────────────────────────────── */
const ScholarshipsAndTuition = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO BANNER (full-width bg image)
          h-535, gradient from-sky-950/90 to-sky-950/40
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-[535px] overflow-hidden flex justify-center items-center">
        {/* BG image + gradient */}
        <img
          src="https://placehold.co/1280x535"
          alt="Học bổng Suleco"
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-sky-950/90 to-sky-950/40" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1280px] px-6">
          <div className="w-[768px] max-w-full flex flex-col justify-start items-start gap-6">
            <h1 className="self-stretch text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
              Học bổng &amp; Học phí
            </h1>
            <p className="self-stretch text-white/90 text-lg font-normal font-['Inter'] leading-7">
              SULECO đồng hành cùng ước mơ vươn ra biển lớn. Chúng tôi cung cấp các gói học bổng hấp dẫn và giải pháp tài chính minh bạch cho lộ trình học tập quốc tế tại các đối tác hàng đầu thế giới.
            </p>
            <div className="self-stretch pt-2 inline-flex justify-start items-start gap-4 flex-wrap">
              <Link
                to="#scholarships"
                id="hero-scholarship-btn"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-lg flex justify-center items-center gap-2 shadow-lg transition-all duration-200"
              >
                <span className="text-white text-base font-normal font-['Inter'] leading-6">Tìm hiểu học bổng</span>
              </Link>
              <Link
                to="/contact/consultation"
                id="hero-consult-btn"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[6px] flex justify-center items-center transition-all duration-200"
              >
                <span className="text-white text-base font-normal font-['Inter'] leading-6">Tư vấn miễn phí</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — SCHOLARSHIPS (2-col: cards + sidebar)
      ══════════════════════════════════════════════ */}
      <section id="scholarships" className="w-full py-20 px-6">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — scholarship list (col-span-2) */}
          <div className="lg:col-span-2 flex flex-col justify-start items-start gap-8">
            {/* Badge + header */}
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="px-4 py-1 bg-sky-100 rounded-full inline-flex justify-start items-start">
                <span className="text-sky-950 text-base font-normal font-['Inter'] uppercase leading-6 tracking-wide">OPPORTUNITIES</span>
              </div>
              <h2 className="text-sky-900 text-3xl font-bold font-['Montserrat'] leading-10">
                Chương trình học bổng quốc tế tiêu biểu
              </h2>
              <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6 max-w-[672px]">
                Khám phá hàng loạt cơ hội hỗ trợ tài chính dành cho sinh viên quốc tế xuất sắc, từ các suất học bổng chỗ ở đến hỗ trợ học phí toàn phần từ các khoa chuyên biệt.
              </p>
            </div>

            {/* Scholarship cards */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">

              {/* Card 1 */}
              <div className="self-stretch p-6 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,51,102,0.08)] outline outline-1 outline-offset-[-1px] outline-neutral-300/30 flex flex-row justify-start items-start gap-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex justify-center items-center shrink-0">
                  <div className="w-5 h-3.5 bg-yellow-800 rounded-sm" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                    AUT International Student Accommodation Scholarship
                  </h3>
                  <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                    Hỗ trợ một phần chi phí lưu trú tại Te Āhuru Mayoral Drive Student Accommodation – không gian sống hiện đại ngay giữa lòng Auckland City.
                  </p>
                  <div className="pt-2 inline-flex justify-start items-center gap-2">
                    <span className="text-yellow-800 text-base font-normal font-['Inter'] leading-6 hover:underline cursor-pointer">
                      More information [PDF, 232.6 KB]
                    </span>
                    <svg viewBox="0 0 14 14" className="w-3.5 h-3.5"><path d="M2 7h10M7 2l5 5-5 5" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="self-stretch p-6 bg-white rounded-xl shadow-[0px_4px_20px_0px_rgba(0,51,102,0.08)] outline outline-1 outline-offset-[-1px] outline-neutral-300/30 flex flex-row justify-start items-start gap-6">
                <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex justify-center items-center shrink-0">
                  <div className="w-5 h-4 bg-yellow-800 rounded-sm" />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-2">
                  <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                    International Scholarships by Faculty
                  </h3>
                  <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                    Các suất học bổng chuyên biệt dành cho sinh viên xuất sắc đăng ký vào các khoa: Kinh tế &amp; Luật, Thiết kế &amp; Công nghệ sáng tạo, Y tế &amp; Khoa học môi trường.
                  </p>
                  <div className="pt-2 inline-flex justify-start items-start gap-3 flex-wrap">
                    {['Business & Law', 'Design & Creative', 'Health Sciences'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 rounded-sm outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right sidebar (col-span-1) */}
          <div className="flex flex-col justify-start items-start gap-6">

            {/* Why AUT card */}
            <div className="self-stretch p-6 bg-blue-100 rounded-xl flex flex-col justify-start items-start gap-3.5">
              <img
                src="https://placehold.co/347x192"
                alt="Why study at AUT"
                className="self-stretch h-48 object-cover rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              />
              <div className="self-stretch pt-2.5">
                <h3 className="text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">Why study at AUT?</h3>
              </div>
              <p className="self-stretch pb-2.5 text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                AUT là một trong những trường đại học hiện đại nhất thế giới với hơn 250 chương trình đào tạo và mạng lưới 150.000 cựu sinh viên toàn cầu.
              </p>
              <button
                id="sidebar-view-more-btn"
                className="self-stretch py-3 bg-sky-950 hover:bg-sky-800 rounded-lg inline-flex justify-center items-center gap-2 transition-all duration-200"
              >
                <span className="text-white text-base font-normal font-['Inter'] leading-6">View More</span>
                <div className="w-3 h-3 bg-white rounded-sm" />
              </button>
            </div>

            {/* Apply Online card */}
            <div className="self-stretch p-6 bg-blue-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300/20 flex flex-col justify-start items-start gap-4">
              <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">Apply Online</h3>
              <p className="self-stretch pb-2.5 text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                Bắt đầu hành trình của bạn ngay hôm nay với quy trình nộp đơn trực tuyến đơn giản và nhanh chóng.
              </p>
              <Link
                to="/admission/apply"
                id="sidebar-apply-btn"
                className="self-stretch py-3 bg-amber-500 hover:bg-amber-400 rounded-lg inline-flex justify-center items-center gap-2 transition-all duration-200"
              >
                <span className="text-white text-base font-normal font-['Inter'] leading-6">Apply Now</span>
                <div className="w-3.5 h-3 bg-white rounded-sm" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — HỌC BỔNG THEO KHU VỰC (4-col grid)
      ══════════════════════════════════════════════ */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-12">

          {/* Header */}
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
              Học bổng theo khu vực
            </h2>
          </div>

          {/* 4-column region cards */}
          <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionCards.map((region) => (
              <div
                key={region.id}
                id={`region-${region.id}`}
                className="p-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start"
              >
                {/* Amber top bar */}
                <div className="self-stretch pb-4">
                  <div className="self-stretch h-8 bg-yellow-800 rounded-sm" />
                </div>

                {/* Title */}
                <div className="self-stretch pb-4">
                  <h3 className="text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">{region.title}</h3>
                </div>

                {/* Desc */}
                <p className="self-stretch flex-1 text-zinc-700 text-base font-normal font-['Inter'] leading-6 min-h-24">
                  {region.desc}
                </p>

                {/* Divider */}
                <div className="self-stretch py-6">
                  <div className="self-stretch h-px border-t border-neutral-300/30" />
                </div>

                {/* Link */}
                <div className="self-stretch inline-flex justify-start items-center gap-2">
                  <span className="text-yellow-800 text-base font-normal font-['Inter'] leading-6 hover:underline cursor-pointer">View details</span>
                  <svg viewBox="0 0 8 12" className="w-2 h-3"><path d="M1 1l6 5-6 5" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — HỌC PHÍ (table)
      ══════════════════════════════════════════════ */}
      <section className="w-full px-6 py-20">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-4">

          {/* Header */}
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
              Học phí (Ước tính)
            </h2>
            <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6">
              Thông tin học phí mang tính chất tham khảo, có thể thay đổi tùy theo thời điểm và lộ trình học cụ thể.
            </p>
          </div>

          {/* Table */}
          <div className="self-stretch pt-4 bg-white rounded-xl shadow-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start overflow-hidden">
            {/* Header row */}
            <div className="self-stretch bg-sky-950 flex flex-row justify-center items-start">
              <div className="flex-1 p-6"><span className="text-white text-base font-bold font-['Montserrat']">Chương Trình Đào Tạo</span></div>
              <div className="w-44 p-6"><span className="text-white text-base font-bold font-['Montserrat']">Thời Gian</span></div>
              <div className="flex-1 p-6"><span className="text-white text-base font-bold font-['Montserrat']">Học Phí (Ước Tính)</span></div>
              <div className="w-36 p-6 text-right"><span className="text-white text-base font-bold font-['Montserrat']">Chi tiết</span></div>
            </div>

            {/* Data rows */}
            <div className="self-stretch flex flex-col justify-start items-start">
              {tuitionRows.map((row, i) => (
                <div
                  key={i}
                  className={`self-stretch flex flex-row justify-center items-center ${i > 0 ? 'border-t border-neutral-300/30' : ''}`}
                >
                  <div className="flex-1 px-6 py-7">
                    <span className="text-slate-900 text-base font-medium font-['Inter']">{row.program}</span>
                  </div>
                  <div className="w-44 px-6 py-7">
                    <span className="text-slate-900 text-base font-normal font-['Inter']">{row.duration}</span>
                  </div>
                  <div className="flex-1 px-6 py-7">
                    <span className="text-sky-950 text-base font-bold font-['Inter']">{row.fee}</span>
                  </div>
                  <div className="w-36 px-6 py-6 flex justify-end">
                    <svg viewBox="0 0 16 20" className="w-4 h-5 text-zinc-400"><path d="M8 2v16M2 8l6-6 6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <p className="self-stretch text-zinc-700 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
            * Học phí tiến sĩ dành cho sinh viên quốc tế tại NZ thường tương đương sinh viên bản xứ.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — HỌC BỔNG CHÍNH PHỦ (accordion list)
      ══════════════════════════════════════════════ */}
      <section className="w-full px-6 py-20">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-8">

          {/* Header */}
          <h2 className="self-stretch text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
            Học bổng từ Chính phủ nước ngoài
          </h2>

          {/* Accordion rows */}
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            {govScholarships.map((name, i) => (
              <div
                key={i}
                id={`gov-scholarship-${i}`}
                className="self-stretch h-16 px-6 bg-sky-950 rounded-lg flex justify-between items-center shadow-md cursor-pointer hover:bg-sky-800 transition-all duration-200"
              >
                <div className="inline-flex justify-start items-center gap-4">
                  <div className="w-3.5 h-4 bg-white rounded-sm" />
                  <span className="text-white text-base font-normal font-['Montserrat'] leading-6">{name}</span>
                </div>
                <svg viewBox="0 0 12 8" className="w-3 h-2"><path d="M1 1l5 5 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 6 — FINAL CTA (bg-sky-900, radial amber)
      ══════════════════════════════════════════════ */}
      <section className="w-full px-6 py-20 relative bg-sky-900 overflow-hidden">
        {/* Radial amber glow */}
        <div className="absolute left-0 top-0 w-full h-96 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_#f59e0b,_transparent_60%)]" />

        <div className="relative z-10 w-full max-w-[896px] mx-auto flex flex-col justify-start items-center gap-6">
          {/* Headline */}
          <h2 className="self-stretch text-center text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
            Sẵn sàng bắt đầu hành trình của bạn?
          </h2>

          {/* Subtitle */}
          <p className="self-stretch text-center text-white/80 text-base font-normal font-['Inter'] leading-6">
            Hãy liên hệ với đội ngũ tư vấn chuyên nghiệp của SULECO để được hỗ trợ lập kế hoạch học tập và săn học bổng hiệu quả nhất.
          </p>

          {/* Buttons */}
          <div className="self-stretch pt-2 inline-flex justify-center items-start gap-6 flex-wrap">
            <Link
              to="/admission/apply"
              id="cta-apply-btn"
              className="px-12 py-4 bg-amber-500 hover:bg-amber-400 rounded-lg flex justify-center items-center gap-2 shadow-xl transition-all duration-200"
            >
              <span className="text-white text-base font-normal font-['Inter'] leading-6">Nộp đơn ngay</span>
              <div className="w-4 h-4 bg-white rounded-sm" />
            </Link>
            <Link
              to="/contact/consultation"
              id="cta-schedule-btn"
              className="px-12 py-4 rounded-lg outline outline-2 outline-offset-[-2px] outline-white/30 hover:bg-white/10 flex justify-center items-center transition-all duration-200"
            >
              <span className="text-white text-base font-normal font-['Inter'] leading-6">Đặt lịch tư vấn</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScholarshipsAndTuition;
