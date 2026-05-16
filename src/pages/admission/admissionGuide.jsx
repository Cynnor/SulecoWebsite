import React from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ──────────────────────────────────────────── */
const steps = [
  {
    num: '1',
    title: 'Tư vấn',
    desc: 'Tiếp nhận yêu cầu, định hướng nghề nghiệp và quốc gia phù hợp.',
  },
  {
    num: '2',
    title: 'Hồ sơ',
    desc: 'Hướng dẫn chuẩn bị và hoàn thiện danh mục giấy tờ cần thiết.',
  },
  {
    num: '3',
    title: 'Phỏng vấn',
    desc: 'Sơ tuyển và phỏng vấn trực tiếp với đối tác nước ngoài.',
  },
  {
    num: '4',
    title: 'Đào tạo',
    desc: 'Đào tạo ngoại ngữ, tay nghề và định hướng văn hóa.',
  },
];

const docGroups = [
  {
    id: 'ca-nhan',
    title: 'Giấy Tờ Cá Nhân',
    items: [
      'CCCD / Hộ chiếu (Bản gốc & Photo)',
      'Giấy khai sinh (Bản sao/Trích lục)',
      'Sổ hộ khẩu (hoặc xác nhận cư trú)',
      '12 ảnh thẻ (3x4 & 4x6 nền trắng)',
      'Giấy xác nhận tình trạng hôn nhân',
    ],
  },
  {
    id: 'bang-cap',
    title: 'Bằng Cấp & Chứng Chỉ',
    items: [
      'Bằng tốt nghiệp THPT/TC/CĐ/ĐH',
      'Học bạ hoặc Bảng điểm chính thức',
      'Chứng chỉ ngoại ngữ (JLPT, TOPIK, IELTS...)',
      'Các chứng chỉ nghề, bằng lái xe (nếu có)',
      'Giấy khen, giải thưởng liên quan',
    ],
  },
  {
    id: 'suc-khoe',
    title: 'Sức Khỏe',
    items: [
      'Giấy khám sức khỏe tổng quát',
      'Xét nghiệm máu (Viêm gan B, HIV...)',
      'Giấy xác nhận tiêm chủng (nếu yêu cầu)',
      'Hồ sơ bệnh lý đặc biệt (nếu có)',
    ],
  },
];

const scheduleRows = [
  { market: 'Nhật Bản',  program: 'Thực tập sinh & Kỹ sư',           period: '15/05 - 30/06',   interview: 'Tuần 2 tháng 07',          quota: '50 chỉ tiêu' },
  { market: 'Hàn Quốc',  program: 'Du học nghề D4-6',                 period: 'Tháng 06/2024',   interview: 'Theo lịch Đại sứ quán',    quota: '30 chỉ tiêu' },
  { market: 'CHLB Đức',  program: 'Điều dưỡng viên & KS Cơ khí',     period: 'Đang tiếp nhận',  interview: 'Liên tục hàng tháng',      quota: '20 chỉ tiêu' },
  { market: 'Úc',        program: 'Lao động kỳ nghỉ (Subclass 462)', period: 'Từ 01/07/2024',   interview: 'Xét duyệt hồ sơ online',   quota: 'Không giới hạn' },
];

/* ─── COMPONENT ─────────────────────────────────────── */
const AdmissionGuide = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ══════════════════════════════════════════════
          HERO — bg-sky-950, h-500
      ══════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[420px] bg-sky-950 overflow-hidden flex justify-center items-center py-20 px-6">
        <img
          src="https://placehold.co/1280x420"
          alt="Hướng dẫn hồ sơ Suleco"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 w-full max-w-[1280px] flex flex-col justify-center items-center gap-3.5 text-center">
          <h1 className="text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px] max-w-[720px]">
            Thông Tin &amp; Hướng Dẫn Nộp Hồ Sơ
          </h1>
          <p className="text-white/80 text-lg font-normal font-['Inter'] leading-7 max-w-[560px]">
            Khởi đầu hành trình vươn tầm thế giới cùng Suleco. Chúng tôi cung cấp quy trình minh bạch, tận tâm và chuyên nghiệp để hiện thực hóa ước mơ sự nghiệp quốc tế của bạn.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BODY — px-6 py-20, gap-20
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] mx-auto px-6 py-20 flex flex-col justify-start items-start gap-20">

        {/* Cards */}
<div className="self-stretch flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {steps.map((step) => (
      <div
        key={step.num}
        id={`step-card-${step.num}`}
        className="group relative w-[260px] p-6 rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-sky-950 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Step Number */}
          <div className="text-right">
            <p className="text-xs font-semibold tracking-[0.25em] text-amber-600 uppercase font-['Inter']">
              BƯỚC
            </p>
            <span className="text-3xl font-bold text-slate-200 leading-none">
              0{step.num}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sky-950 text-2xl font-bold font-['Montserrat'] leading-8">
            {step.title}
          </h3>

          <p className="text-zinc-600 text-sm md:text-base leading-6 font-['Inter']">
            {step.desc}
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-8">
          <div className="w-12 h-1 bg-amber-500 rounded-full group-hover:w-24 transition-all duration-300" />
        </div>

        {/* Background Glow */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-100 opacity-0 group-hover:opacity-30 rounded-full blur-3xl transition-all duration-500" />
      </div>
    ))}
  </div>
</div>

        {/* ── SECTION 2: DANH MỤC GIẤY TỜ ── */}
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          {/* Header row */}
          <div className="self-stretch inline-flex justify-between items-end flex-wrap gap-4">
            <div className="flex flex-col justify-start items-start gap-2">
              <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
                Danh Mục Giấy Tờ Cần Thiết
              </h2>
              <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                Vui lòng chuẩn bị các bản sao công chứng không quá 6 tháng.
              </p>
            </div>
            <button
              id="download-pdf-btn"
              className="px-8 py-2 bg-amber-500 hover:bg-amber-400 rounded-full inline-flex justify-center items-center shadow-md transition-all duration-200"
            >
              <span className="text-white text-base font-normal font-['Inter'] leading-6">
                Tải File PDF Hướng Dẫn
              </span>
            </button>
          </div>

          {/* 3 doc cards — grid 3 cols */}
          <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
            {docGroups.map((group) => (
              <div
                key={group.id}
                id={`doc-group-${group.id}`}
                className="p-8 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-4"
              >
                {/* Title row */}
                <div className="self-stretch inline-flex justify-start items-center gap-2">
                  <div className="w-5 h-5 bg-sky-950 rounded-sm shrink-0" />
                  <h3 className="text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                    {group.title}
                  </h3>
                </div>

                {/* Items */}
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  {group.items.map((item, i) => (
                    <div key={i} className="self-stretch inline-flex justify-start items-start gap-2">
                      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 shrink-0 mt-0.5">
                        <circle cx="10" cy="10" r="10" fill="#16a34a" opacity="0.15"/>
                        <path d="M6 10l3 3 5-5" stroke="#15803d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 3: LỊCH TUYỂN SINH 2024 ── */}
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          {/* Header */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
              Lịch Tuyển Sinh Dự Kiến 2024
            </h2>
            <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6 max-w-[672px]">
              Cập nhật những đợt tuyển sinh mới nhất cho các thị trường trọng điểm Nhật Bản, Hàn Quốc, Úc và Châu Âu.
            </p>
          </div>

          {/* Table */}
          <div className="self-stretch rounded-xl shadow-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start overflow-hidden">
            {/* Table header */}
            <div className="self-stretch bg-sky-950">
              <div className="self-stretch inline-flex justify-center items-start">
                <div className="w-40 px-8 py-4"><span className="text-white text-base font-bold font-['Montserrat']">Thị trường</span></div>
                <div className="w-80 px-8 py-4"><span className="text-white text-base font-bold font-['Montserrat']">Chương trình</span></div>
                <div className="w-64 px-8 py-4"><span className="text-white text-base font-bold font-['Montserrat']">Thời gian nhận hồ sơ</span></div>
                <div className="w-72 px-8 py-4"><span className="text-white text-base font-bold font-['Montserrat']">Ngày phỏng vấn dự kiến</span></div>
                <div className="w-52 px-8 py-4"><span className="text-white text-base font-bold font-['Montserrat']">Số lượng</span></div>
              </div>
            </div>

            {/* Table rows */}
            <div className="self-stretch bg-white flex flex-col justify-start items-start">
              {scheduleRows.map((row, i) => (
                <div
                  key={i}
                  className={`self-stretch inline-flex justify-center items-start ${i > 0 ? 'border-t border-neutral-300' : ''}`}
                >
                  <div className="w-40 px-8 py-4">
                    <span className="text-sky-950 text-base font-bold font-['Inter'] leading-6">{row.market}</span>
                  </div>
                  <div className="w-80 px-8 py-4">
                    <span className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{row.program}</span>
                  </div>
                  <div className="w-64 px-8 py-4">
                    <span className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{row.period}</span>
                  </div>
                  <div className="w-72 px-8 py-4">
                    <span className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{row.interview}</span>
                  </div>
                  <div className="w-52 px-8 py-3.5">
                    <span className="px-3 py-0.5 bg-blue-100 rounded-full text-sky-950 text-base font-bold font-['Inter'] leading-6">
                      {row.quota}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── SECTION 4: CTA — Bạn Cần Hỗ Trợ ── */}
        <div className="self-stretch p-8 bg-sky-950 rounded-2xl flex flex-col justify-start items-start gap-3.5">
          {/* Headline */}
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-center text-white text-3xl font-bold font-['Montserrat'] leading-10">
              Bạn Cần Hỗ Trợ Trực Tiếp?
            </h2>
          </div>

          {/* Subtitle */}
          <div className="self-stretch opacity-90 flex flex-col justify-start items-center">
            <p className="text-center text-white text-lg font-normal font-['Inter'] leading-7">
              Đội ngũ tư vấn viên của Suleco luôn sẵn sàng giải đáp mọi thắc mắc của bạn về hồ sơ và thủ tục.
            </p>
          </div>

          {/* Buttons */}
          <div className="self-stretch pt-4 inline-flex justify-center items-center gap-4 flex-wrap">
            <a
              href="tel:1900xxxx"
              id="cta-call-btn"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-400 rounded-lg flex justify-center items-center gap-2 shadow-md transition-all duration-200"
            >
              <div className="w-4 h-4 bg-white rounded-sm" />
              <span className="text-white text-base font-normal font-['Inter'] leading-6">Gọi ngay: 1900 XXXX</span>
            </a>
            <Link
              to="/contact/consultation"
              id="cta-zalo-btn"
              className="px-8 py-3 bg-white hover:bg-slate-50 rounded-lg flex justify-center items-center gap-2 shadow-md transition-all duration-200"
            >
              <div className="w-5 h-5 bg-sky-950 rounded-sm" />
              <span className="text-sky-950 text-base font-normal font-['Inter'] leading-6">Tư vấn qua Zalo</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdmissionGuide;
