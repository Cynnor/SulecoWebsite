import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ──────────────────────────────────────────── */
const programs = [
  {
    id: 'dieu-duong',
    title: 'Chứng chỉ điều dưỡng chuyên nghiệp',
    desc: 'Chương trình đào tạo chuyên sâu về kỹ năng chăm sóc sức khỏe, chuẩn bị cho học viên làm việc tại các bệnh viện và cơ sở y tế quốc tế. Thực hành trực tiếp 70% thời lượng.',
    img: 'https://placehold.co/192x192',
  },
  {
    id: 'co-khi',
    title: 'Kỹ thuật cơ khí bậc nghề',
    desc: 'Trang bị kiến thức và kỹ năng vận hành máy móc, bảo trì thiết bị công nghiệp theo tiêu chuẩn quốc tế. Cam kết 100% cơ hội việc làm sau khi tốt nghiệp.',
    img: 'https://placehold.co/192x192',
  },
  {
    id: 'thuc-pham',
    title: 'Chế biến thực phẩm quốc tế',
    desc: 'Khám phá thế giới ẩm thực và quản lý an toàn thực phẩm. Học viên được đào tạo trong hệ thống bếp công nghiệp hiện đại, đạt chuẩn xuất khẩu lao động.',
    img: 'https://placehold.co/192x192',
  },
  {
    id: 'o-to',
    title: 'Kỹ thuật ô tô bậc nghề',
    desc: 'Đào tạo chuyên gia sửa chữa và bảo dưỡng các dòng xe hiện đại. Học viên nắm vững hệ thống điện, cơ khí và các phần mềm chẩn đoán lỗi tiên tiến.',
    img: 'https://placehold.co/192x192',
  },
];

const reasons = [
  {
    id: 'kinh-nghiem',
    title: 'Kinh nghiệm thực tế',
    desc: 'Hơn 40 năm kinh nghiệm trong lĩnh vực đào tạo nghề và cung ứng nhân lực quốc tế.',
    icon: (
      <svg className="w-4 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    id: 'doi-tac',
    title: 'Đối tác chiến lược',
    desc: 'Hợp tác với hàng trăm doanh nghiệp tại Nhật Bản, Đức và Úc, đảm bảo đầu ra bền vững.',
    icon: (
      <svg className="w-6 h-5 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
  },
  {
    id: 'co-so',
    title: 'Cơ sở vật chất',
    desc: 'Hệ thống phòng thực hành mô phỏng chuẩn quốc tế giúp học viên không bỡ ngỡ khi ra trường.',
    icon: (
      <svg className="w-2.5 h-4 text-yellow-900" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

const infoCards = [
  {
    id: 'download',
    icon: (
      <svg className="w-6 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    title: 'Tải tài liệu giới thiệu',
    desc: 'Cung cấp đầy đủ thông tin về các khóa đào tạo và lộ trình nghề nghiệp.',
    cta: 'Tải ngay',
    href: '#',
  },
  {
    id: 'support',
    icon: (
      <svg className="w-6 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Hỗ trợ sinh viên',
    desc: 'Giải đáp thắc mắc về hồ sơ, học phí và các chương trình học bổng.',
    cta: 'Liên hệ tư vấn',
    href: '/contact/consultation',
  },
  {
    id: 'list',
    icon: (
      <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Danh sách khoa nghề',
    desc: 'Xem toàn bộ danh mục các khoa và phòng ban đào tạo tại Suleco.',
    cta: 'Xem danh sách',
    href: '#',
  },
];

/* ─── COMPONENT ─────────────────────────────────────── */
const LanguagesConnection = () => {
  const [search, setSearch] = useState('');
  const [levels, setLevels] = useState({ nghe: false, chungchi: false, nganhan: false });
  const [campus, setCampus] = useState({ hcm: false, binhduong: false, dongnai: false });
  const [nganh, setNganh] = useState('');

  const toggleLevel = (key) => setLevels((p) => ({ ...p, [key]: !p[key] }));
  const toggleCampus = (key) => setCampus((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 flex flex-col items-center">

      {/* ══════════════════════════════════════════════
          SECTION 1 — BREADCRUMB + INTRO
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] px-6 py-8 flex flex-col gap-4">
        {/* Breadcrumb */}
        <div className="inline-flex gap-2 items-center">
          <Link to="/" className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-4 tracking-wide hover:text-sky-950 transition-colors">
            Home
          </Link>
          <span className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-4">/</span>
          <span className="text-sky-950 text-sm font-bold font-['Inter'] leading-4 tracking-wide">
            Tuyển sinh
          </span>
        </div>

        {/* Label */}
        <p className="text-amber-500 text-base font-normal font-['Montserrat'] leading-6">
          Tìm kiếm khóa học nghề &amp; chứng chỉ
        </p>

        {/* Description */}
        <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6 max-w-[768px]">
          Khám phá chương trình đào tạo nghề nghiệp thực tiễn giúp bạn sẵn sàng cho tương lai. Dù bạn mới
          tốt nghiệp hay muốn chuyển đổi nghề nghiệp, chúng tôi có hơn 250 chương trình được thiết kế dựa
          trên kết quả thực tế.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 2 — SEARCH + FILTER PANEL
      ══════════════════════════════════════════════ */}
      <div className="self-stretch px-6 py-20 bg-red-200/30">
        <div className="w-full max-w-[1280px] mx-auto p-8 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300 shadow-lg flex flex-col gap-4">

          <p className="text-yellow-800 text-base font-normal font-['Montserrat'] leading-6">
            Tìm một chương trình
          </p>

          {/* Search row */}
          <div className="flex gap-6 items-stretch">
            {/* Input */}
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                id="search-program"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm kiếm khóa học..."
                className="w-full h-14 pl-12 pr-4 py-4 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-gray-500 text-base font-normal font-['Inter'] focus:outline-sky-400 focus:outline-2 transition-all"
              />
            </div>

            {/* Button */}
            <button
              id="search-btn"
              className="h-14 px-10 bg-amber-500 hover:bg-amber-400 rounded-lg flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-yellow-900 text-base font-normal font-['Inter'] leading-6">TÌM KIẾM</span>
            </button>
          </div>

          {/* Filters row */}
          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Cấp bậc đào tạo */}
            <div className="flex flex-col gap-2">
              <p className="text-yellow-800 text-base font-normal font-['Inter'] leading-6">Cấp bậc đào tạo</p>
              <div className="flex flex-col gap-3">
                {[
                  { key: 'nghe', label: 'Bậc nghề' },
                  { key: 'chungchi', label: 'Chứng chỉ' },
                  { key: 'nganhan', label: 'Khóa ngắn hạn' },
                ].map(({ key, label }) => (
                  <label key={key} className="inline-flex items-center gap-2 cursor-pointer select-none">
                    <div
                      onClick={() => toggleLevel(key)}
                      className={`w-5 h-5 rounded-sm border transition-colors flex items-center justify-center ${
                        levels[key] ? 'bg-sky-950 border-sky-950' : 'bg-white border-neutral-300'
                      }`}
                    >
                      {levels[key] && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Ngành học */}
            <div className="flex flex-col gap-2">
              <p className="text-yellow-800 text-base font-normal font-['Inter'] leading-6">Ngành học</p>
              <div className="relative">
                <select
                  id="nganh-select"
                  value={nganh}
                  onChange={(e) => setNganh(e.target.value)}
                  className="w-full h-12 px-4 py-2 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] appearance-none focus:outline-sky-400 focus:outline-2 transition-all"
                >
                  <option value="">Tất cả ngành học</option>
                  <option value="y-te">Y tế &amp; Điều dưỡng</option>
                  <option value="co-khi">Cơ khí &amp; Kỹ thuật</option>
                  <option value="thuc-pham">Chế biến thực phẩm</option>
                  <option value="o-to">Kỹ thuật ô tô</option>
                  <option value="ngoai-ngu">Ngoại ngữ</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Cơ sở đào tạo */}
            <div className="flex flex-col gap-2">
              <p className="text-yellow-800 text-base font-normal font-['Inter'] leading-6">Cơ sở đào tạo</p>
              <div className="flex flex-col gap-3">
                {[
                  { key: 'hcm', label: 'TP. Hồ Chí Minh' },
                  { key: 'binhduong', label: 'Bình Dương' },
                  { key: 'dongnai', label: 'Đồng Nai' },
                ].map(({ key, label }) => (
                  <label key={key} className="inline-flex items-center gap-2 cursor-pointer select-none">
                    <div
                      onClick={() => toggleCampus(key)}
                      className={`w-5 h-5 rounded-sm border transition-colors flex items-center justify-center ${
                        campus[key] ? 'bg-sky-950 border-sky-950' : 'bg-white border-neutral-300'
                      }`}
                    >
                      {campus[key] && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 3 — FEATURED PROGRAMS
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] px-6 py-20 flex flex-col gap-8">
        {/* Header row */}
        <div className="flex justify-between items-end">
          <p className="text-sky-950 text-base font-normal font-['Montserrat'] leading-6">
            Các chương trình tiêu biểu
          </p>
          <p className="text-zinc-500 text-base font-normal font-['Inter'] leading-6">
            Hiển thị 12/250 kết quả
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {programs.map((p) => (
            <div
              key={p.id}
              id={`program-card-${p.id}`}
              className="h-72 p-8 bg-blue-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300/30 flex justify-start items-start gap-6 hover:shadow-md transition-shadow"
            >
              {/* Text */}
              <div className="flex-1 flex flex-col justify-start items-start gap-2 h-full">
                <p className="text-amber-500 text-base font-normal font-['Montserrat'] leading-6">
                  {p.title}
                </p>
                <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6 pb-6 flex-1">
                  {p.desc}
                </p>
                <Link
                  to="/contact/consultation"
                  id={`program-cta-${p.id}`}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 rounded-lg inline-flex items-center gap-2 transition-colors"
                >
                  <span className="text-yellow-900 text-base font-normal font-['Inter'] leading-6">
                    TÌM HIỂU THÊM
                  </span>
                  <svg className="w-3.5 h-3.5 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className="w-48 h-48 rounded-lg overflow-hidden shrink-0">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 4 — WHY SULECO
      ══════════════════════════════════════════════ */}
      <div className="self-stretch px-6 py-20 bg-slate-50">
        <div className="w-full max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr_2fr] gap-10 items-center">

          {/* Left — text + reasons */}
          <div className="flex flex-col gap-8">
            <p className="text-sky-950 text-base font-normal font-['Montserrat'] leading-6">
              Tại sao chọn học nghề tại Suleco?
            </p>
            <div className="flex flex-col gap-8">
              {reasons.map((r) => (
                <div key={r.id} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex justify-center items-center shrink-0">
                    {r.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sky-950 text-base font-semibold font-['Montserrat'] leading-6">
                      {r.title}
                    </p>
                    <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                      {r.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle image — slight bottom offset for stagger */}
          <div className="mt-10">
            <img
              src="https://placehold.co/400x520"
              alt="Cơ sở vật chất Suleco"
              className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right image — slight top offset for stagger */}
          <div className="-mt-10">
            <img
              src="https://placehold.co/400x520"
              alt="Đối tác Suleco"
              className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════
          SECTION 5 — INFO CARDS
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] px-6 pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card) => (
            <div
              key={card.id}
              id={`info-card-${card.id}`}
              className="p-8 bg-blue-100 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="flex justify-center">{card.icon}</div>

              {/* Title */}
              <p className="text-center text-slate-900 text-base font-normal font-['Montserrat'] leading-6 pt-2">
                {card.title}
              </p>

              {/* Desc */}
              <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                {card.desc}
              </p>

              {/* CTA */}
              <a
                href={card.href}
                id={`info-cta-${card.id}`}
                className="pt-2 inline-flex items-center gap-2 text-yellow-800 text-base font-bold font-['Inter'] leading-6 hover:text-yellow-600 transition-colors"
              >
                {card.cta}
                <svg className="w-4 h-3 text-yellow-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LanguagesConnection;
