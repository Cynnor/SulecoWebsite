import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────── */
const smallJobs = [
  {
    title: 'Nhân Viên Kinh Doanh',
    desc: 'Phát triển thị trường miền Nam cho mảng thiết bị y tế...',
    salary: '15 - 20 Triệu',
  },
  {
    title: 'Chuyên Viên Đào Tạo',
    desc: 'Xây dựng giáo án và trực tiếp giảng dạy kỹ năng mềm...',
    salary: 'Thỏa thuận',
  },
  {
    title: 'Kế Toán Tổng Hợp',
    desc: 'Ưu tiên ứng viên có kinh nghiệm trong ngành xây dựng...',
    salary: '12 - 18 Triệu',
  },
];

const workplaceFeatures = [
  {
    icon: <div className="w-6 h-3 bg-yellow-800 rounded-sm" />,
    iconBg: 'bg-red-200',
    title: 'Văn hóa Sẻ chia',
    desc: 'Chúng tôi khuyến khích sự trao đổi kiến thức và hỗ trợ lẫn nhau trong mọi dự án.',
  },
  {
    icon: <div className="w-5 h-3 bg-sky-950 rounded-sm" />,
    iconBg: 'bg-blue-100',
    title: 'Lộ trình thăng tiến',
    desc: 'Chương trình đào tạo định kỳ giúp bạn không ngừng nâng cao năng lực chuyên môn.',
  },
  {
    icon: <div className="w-4 h-5 bg-sky-950 rounded-sm" />,
    iconBg: 'bg-blue-100',
    title: 'Phúc lợi toàn diện',
    desc: 'Bảo hiểm cao cấp, thưởng KPI hấp dẫn và các chuyến du lịch hàng năm.',
  },
];

/* ─── ICON helpers ──────────────────────────────────── */
const LocationIcon = () => (
  <svg viewBox="0 0 10 12" fill="none" className="w-2.5 h-3">
    <path d="M5 1C3.07 1 1.5 2.57 1.5 4.5c0 3.25 3.5 6.5 3.5 6.5s3.5-3.25 3.5-6.5C8.5 2.57 6.93 1 5 1z" fill="#3f3f46"/>
    <circle cx="5" cy="4.5" r="1.5" fill="white"/>
  </svg>
);
const MoneyIcon = () => (
  <svg viewBox="0 0 12 10" fill="none" className="w-3 h-2.5">
    <rect x="1" y="1" width="10" height="8" rx="1" fill="#3f3f46"/>
    <circle cx="6" cy="5" r="2" fill="white" opacity="0.6"/>
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
    <circle cx="6" cy="6" r="5" stroke="#3f3f46" strokeWidth="1.2"/>
    <path d="M6 3.5V6l2 2" stroke="#3f3f46" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const ArrowRightIcon = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className}>
    <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const SearchIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <circle cx="7" cy="7" r="5" stroke="#71717a" strokeWidth="1.4"/>
    <path d="M11 11l3 3" stroke="#71717a" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <path d="M10 2C7.24 2 5 4.24 5 7c0 4.5 5 11 5 11s5-6.5 5-11c0-2.76-2.24-5-5-5z" fill="#71717a"/>
    <circle cx="10" cy="7" r="2" fill="white"/>
  </svg>
);
const BriefcaseIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5">
    <rect x="2" y="7" width="16" height="11" rx="2" stroke="#71717a" strokeWidth="1.4"/>
    <path d="M7 7V5a3 3 0 016 0v2" stroke="#71717a" strokeWidth="1.4"/>
    <path d="M2 12h16" stroke="#71717a" strokeWidth="1.4"/>
  </svg>
);
const BookmarkIcon = ({ dark }) => (
  <svg viewBox="0 0 14 16" fill="none" className="w-3.5 h-4">
    <path d="M2 1h10a1 1 0 011 1v13l-6-3-6 3V2a1 1 0 011-1z" stroke={dark ? '#0c4a6e' : '#0c4a6e'} strokeWidth="1.4" fill={dark ? '#0c4a6e' : 'none'}/>
  </svg>
);
const UserPlusIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="16" r="8" fill="white" opacity="0.9"/>
    <path d="M4 36c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="white" strokeWidth="2" opacity="0.7"/>
    <line x1="30" y1="8" x2="30" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="26" y1="12" x2="34" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

/* ─── COMPONENT ─────────────────────────────────────── */
const DomesticOpportunities = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO (h-500, gradient left→right)
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-[500px] overflow-hidden flex justify-center items-center">
        <img
          src="https://placehold.co/1280x500"
          alt="Cơ hội việc làm trong nước"
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-sky-950/90 to-sky-950/0" />

        <div className="relative z-10 w-full max-w-[1280px] px-6 flex flex-col justify-start items-start">
          <div className="w-[672px] max-w-full flex flex-col justify-start items-start gap-3.5">
            <h1 className="self-stretch text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
              Kiến Tạo Sự Nghiệp Tại Việt<br />Nam
            </h1>
            <p className="self-stretch text-white/90 text-lg font-normal font-['Inter'] leading-7">
              Kết nối nhân tài Việt với những cơ hội nghề nghiệp hàng đầu tại các tập đoàn đa quốc gia và doanh nghiệp nội địa uy tín.
            </p>
            <div className="self-stretch pt-4 inline-flex justify-start items-start gap-4 flex-wrap">
              <Link
                to="/admission/apply"
                id="hero-apply-btn"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-lg flex justify-center items-center shadow-lg transition-all duration-200"
              >
                <span className="text-yellow-900 text-base font-semibold font-['Inter'] leading-4">Ứng Tuyển Ngay</span>
              </Link>
              <a
                href="#workplace"
                id="hero-explore-btn"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[2px] flex justify-center items-center transition-all duration-200"
              >
                <span className="text-white text-base font-semibold font-['Inter'] leading-4">Khám Phá Môi Trường</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEARCH BAR (overlapping hero, white card)
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="-mt-14 relative z-20 p-6 bg-white rounded-xl shadow-xl flex flex-col sm:flex-row gap-3 items-stretch">

          {/* Keyword */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2"><SearchIcon /></div>
            <input
              id="search-keyword"
              type="text"
              placeholder="Vị trí tuyển dụng..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all"
            />
          </div>

          {/* Location */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2"><MapPinIcon /></div>
            <select
              id="search-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all cursor-pointer appearance-none"
            >
              <option value="">Tất cả địa điểm</option>
              <option>Hồ Chí Minh</option>
              <option>Hà Nội</option>
              <option>Bình Dương</option>
              <option>Đồng Nai</option>
            </select>
          </div>

          {/* Industry */}
          <div className="flex-1 relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2"><BriefcaseIcon /></div>
            <select
              id="search-industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all cursor-pointer appearance-none"
            >
              <option value="">Ngành nghề</option>
              <option>Kỹ thuật - Sản xuất</option>
              <option>Kinh doanh - Sales</option>
              <option>Kế toán - Tài chính</option>
              <option>Giáo dục - Đào tạo</option>
            </select>
          </div>

          {/* CTA button — sky-950 */}
          <button
            id="search-submit-btn"
            className="shrink-0 px-8 py-3.5 bg-sky-950 hover:bg-sky-800 rounded-lg text-white font-semibold font-['Inter'] leading-4 transition-all duration-200 whitespace-nowrap"
          >
            Tìm Việc Làm
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 — VỊ TRÍ NỔI BẬT
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-[1280px] mx-auto px-6 py-20 flex flex-col justify-start items-start gap-8">

        {/* Header row */}
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">Vị trí nổi bật</h2>
            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Cập nhật những cơ hội nghề nghiệp mới nhất hôm nay</p>
          </div>
          <a href="#" id="view-all-jobs-link" className="flex justify-start items-center gap-2 hover:gap-3 transition-all duration-200">
            <span className="text-yellow-800 text-base font-normal font-['Inter'] leading-6">Xem tất cả</span>
            <ArrowRightIcon className="w-4 h-4 text-yellow-800" />
          </a>
        </div>

        {/* Grid: 3 columns — row1: featured(col-span-2) + small1 | row2: small2 + CTA + small3 */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured card — col-span-2 */}
          <div className="lg:col-span-2 p-8 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-between items-start">
              <div className="flex justify-start items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex justify-center items-center shrink-0">
                  <div className="w-7 h-7 bg-sky-950 rounded-sm" />
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                  <h3 className="text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                    Kỹ Sư Quản Lý Sản Xuất (Lương tới 35Tr)
                  </h3>
                  <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Tập Đoàn Công Nghệ Cao Việt Nam</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-red-200 rounded-full shrink-0">
                <span className="text-orange-950 text-xs font-bold font-['Inter'] uppercase leading-4">HOT JOB</span>
              </div>
            </div>
            <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
              Chịu trách nhiệm giám sát dây chuyền sản xuất tự động, tối ưu hóa quy trình và đảm bảo tiêu chuẩn chất lượng ISO. Yêu cầu 3 năm kinh nghiệm trong lĩnh vực điện tử.
            </p>
            <div className="self-stretch pt-6 border-t border-neutral-300 inline-flex justify-start items-start gap-4 flex-wrap">
              <div className="flex justify-start items-center gap-2"><LocationIcon /><span className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">Bình Dương</span></div>
              <div className="flex justify-start items-center gap-2"><MoneyIcon /><span className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">25 - 35 Triệu</span></div>
              <div className="flex justify-start items-center gap-2"><ClockIcon /><span className="text-zinc-700 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">2 ngày trước</span></div>
            </div>
          </div>

          {/* Small job card 1 (Nhân Viên Kinh Doanh) */}
          <div id="job-card-0" className="px-8 pt-8 pb-6 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-all duration-200">
            <h3 className="self-stretch text-sky-950 text-base font-normal font-['Montserrat'] leading-6">{smallJobs[0].title}</h3>
            <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6 flex-1">{smallJobs[0].desc}</p>
            <div className="self-stretch inline-flex justify-between items-center mt-auto">
              <span className="text-yellow-800 text-base font-bold font-['Inter'] leading-6">{smallJobs[0].salary}</span>
              <button className="text-sky-950 hover:scale-110 transition-transform duration-200" aria-label="Lưu việc làm"><BookmarkIcon /></button>
            </div>
          </div>

          {/* Small job card 2 (Chuyên Viên Đào Tạo) */}
          <div id="job-card-1" className="px-8 pt-8 pb-6 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-all duration-200">
            <h3 className="self-stretch text-sky-950 text-base font-normal font-['Montserrat'] leading-6">{smallJobs[1].title}</h3>
            <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6 flex-1">{smallJobs[1].desc}</p>
            <div className="self-stretch inline-flex justify-between items-center mt-auto">
              <span className="text-yellow-800 text-base font-bold font-['Inter'] leading-6">{smallJobs[1].salary}</span>
              <button className="text-sky-950 hover:scale-110 transition-transform duration-200" aria-label="Lưu việc làm"><BookmarkIcon /></button>
            </div>
          </div>

          {/* CTA card — Tạo Hồ Sơ */}
          <div id="create-profile-card" className="p-8 bg-sky-950 rounded-xl flex flex-col justify-center items-center text-center">
            <div className="pb-4"><UserPlusIcon /></div>
            <p className="text-white text-base font-normal font-['Montserrat'] leading-6 pb-2">Tạo Hồ Sơ Ngay</p>
            <p className="text-white/80 text-sm font-semibold font-['Inter'] leading-4 tracking-wide pb-6">Để nhà tuyển dụng chủ động tìm thấy bạn</p>
            <Link to="/admission/apply" id="cta-create-profile-btn" className="px-6 py-2 bg-amber-500 hover:bg-amber-400 rounded-lg text-yellow-900 text-base font-normal font-['Inter'] leading-6 transition-all duration-200">
              Bắt đầu
            </Link>
          </div>

          {/* Small job card 3 (Kế Toán Tổng Hợp) */}
          <div id="job-card-2" className="px-8 pt-8 pb-6 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-all duration-200">
            <h3 className="self-stretch text-sky-950 text-base font-normal font-['Montserrat'] leading-6">{smallJobs[2].title}</h3>
            <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6 flex-1">{smallJobs[2].desc}</p>
            <div className="self-stretch inline-flex justify-between items-center mt-auto">
              <span className="text-yellow-800 text-base font-bold font-['Inter'] leading-6">{smallJobs[2].salary}</span>
              <button className="text-sky-950 hover:scale-110 transition-transform duration-200" aria-label="Lưu việc làm"><BookmarkIcon /></button>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — MÔI TRƯỜNG LÀM VIỆC (bg-blue-50)
      ══════════════════════════════════════════════ */}
      <section id="workplace" className="w-full py-20 bg-blue-50 border-t border-b border-neutral-300">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col justify-start items-start gap-8">

          {/* Header */}
          <div className="self-stretch flex flex-col justify-start items-center gap-3.5">
            <h2 className="self-stretch text-center text-sky-950 text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
              Môi Trường Làm Việc
            </h2>
            <p className="text-center text-zinc-700 text-lg font-normal font-['Inter'] leading-7 max-w-[672px]">
              Tại Newcitygroup - Suleco, chúng tôi không chỉ cung cấp công việc, mà còn xây dựng một cộng đồng phát triển bền vững.
            </p>
          </div>

          {/* 2-column: images + features */}
          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left: image mosaic — tall left + 2 stacked right */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">
              {/* Tall image — spans 2 rows on the left */}
              <img
                src="https://placehold.co/292x500"
                alt="Team Suleco"
                className="row-span-2 w-full h-full object-cover rounded-xl"
              />
              {/* Top-right image */}
              <img
                src="https://placehold.co/292x240"
                alt="Văn phòng Suleco"
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Bottom-right image */}
              <img
                src="https://placehold.co/292x240"
                alt="Workshop"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Right: feature cards */}
            <div className="flex flex-col justify-center gap-4">
              {workplaceFeatures.map((feat, i) => (
                <div
                  key={i}
                  id={`workplace-feature-${i}`}
                  className="p-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] inline-flex justify-start items-start gap-4"
                >
                  <div className={`w-12 h-12 ${feat.iconBg} rounded-full flex justify-center items-center shrink-0`}>
                    {feat.icon}
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-sky-950 text-base font-normal font-['Montserrat'] leading-6">{feat.title}</h3>
                    <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — CTA (bg-sky-950, rounded-3xl)
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] mx-auto px-6 py-16">
        <div className="w-full px-16 py-16 relative bg-sky-950 rounded-3xl flex flex-col justify-start items-center gap-3.5 overflow-hidden">
          {/* Glows */}
          <div className="absolute right-0 -top-32 w-64 h-64 bg-amber-500 rounded-full opacity-20 blur-[32px]" />
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-sky-900 rounded-full opacity-40 blur-[32px]" />

          {/* Content */}
          <h2 className="relative z-10 self-stretch text-center text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
            Sẵn sàng cho bước tiến mới?
          </h2>
          <p className="relative z-10 text-center text-white/80 text-lg font-normal font-['Inter'] leading-7 max-w-[576px]">
            Hãy gửi CV của bạn ngay hôm nay để không bỏ lỡ những cơ hội việc làm tốt nhất tại thị trường Việt Nam.
          </p>
          <div className="relative z-10 self-stretch pt-4 inline-flex justify-center items-start gap-4 flex-wrap">
            <Link
              to="/admission/apply"
              id="cta-submit-cv-btn"
              className="px-10 py-4 bg-amber-500 hover:bg-amber-400 rounded-full flex justify-center items-center shadow-xl transition-all duration-200"
            >
              <span className="text-yellow-900 text-base font-semibold font-['Inter'] leading-4">Gửi Hồ Sơ Ứng Tuyển</span>
            </Link>
            <Link
              to="/contact/consultation"
              id="cta-career-consult-btn"
              className="px-10 py-4 rounded-full outline outline-2 outline-offset-[-2px] outline-white/40 hover:bg-white/10 flex justify-center items-center transition-all duration-200"
            >
              <span className="text-white text-base font-semibold font-['Inter'] leading-4">Tư Vấn Nghề Nghiệp</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DomesticOpportunities;
