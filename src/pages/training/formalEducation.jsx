import React from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────────────── */
const programs = [
  {
    id: 'chinh-quy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-sky-950">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"/>
      </svg>
    ),
    title: 'Hệ chính quy',
    desc: 'Chương trình đào tạo bài bản, phù hợp với học viên muốn xây dựng nền tảng nghề nghiệp lâu dài.',
    link: '/training/formal-education',
  },
  {
    id: 'ngan-han',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-sky-950">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
      </svg>
    ),
    title: 'Khóa học ngắn hạn',
    desc: 'Các khóa học thực hành tập trung, giúp học viên nhanh chóng bổ sung kỹ năng và ứng dụng vào công việc.',
    link: '/training/short-term',
  },
  {
    id: 'nang-cao',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-sky-950">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
      </svg>
    ),
    title: 'Đào tạo nâng cao',
    desc: 'Chương trình dành cho học viên đã có nền tảng và muốn phát triển chuyên môn sâu hơn.',
    link: '/training/languages',
  },
];

const roadmap = [
  {
    num: '01',
    active: true,
    title: 'Năm 1: Tư vấn & chọn khóa học',
    desc: 'Tập trung học tiếng Nhật (N3), văn hóa và kỹ năng mềm cơ bản. Học viên được tư vấn chương trình phù hợp với năng lực, mục tiêu và định hướng nghề nghiệp.',
  },
  {
    num: '02',
    active: false,
    title: 'Năm 2: Học tập & thực hành',
    desc: 'Tham gia chương trình đào tạo với nội dung lý thuyết kết hợp thực hành, rèn luyện kỹ năng nghề.',
  },
  {
    num: '03',
    active: false,
    title: 'Năm 3: Định hướng nghề nghiệp',
    desc: 'Học viên được hỗ trợ thông tin về đối tác, môi trường làm việc và cơ hội phát triển sau đào tạo.',
  },
];

/* ─── COMPONENT ─────────────────────────────────────────────── */
/**
 * Component: FormalEducation
 * Trang giới thiệu chương trình đào tạo chính quy, lộ trình 3 năm
 */
const FormalEducation = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO (2-column: text left | glass card right)
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-sky-950 min-h-[600px] py-20 px-6 flex justify-center items-center">
        {/* Background image */}
        <img
          src="https://placehold.co/1280x600"
          alt="Đào tạo nghề Suleco"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-30"
        />

        {/* 2-column inner layout */}
        <div className="relative z-10 w-full max-w-[1280px] flex flex-row justify-between items-center gap-12">

          {/* LEFT — text block */}
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-3.5 max-w-[560px]">
            {/* Badge */}
            <div className="px-4 py-1 bg-amber-500 rounded-full inline-flex justify-start items-start">
              <span className="text-yellow-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">
                Chương trình đào tạo
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
              Đào tạo nghề thực tiễn, mở rộng cơ hội nghề nghiệp
            </h1>

            {/* Subtitle */}
            <p className="text-indigo-400 text-lg font-normal font-['Inter'] leading-7 max-w-[456px]">
              Newcitygroup - Suleco cung cấp các chương trình đào tạo nghề theo hướng thực hành, giúp học viên phát triển kỹ năng chuyên môn, tác phong làm việc và định hướng nghề nghiệp phù hợp.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 inline-flex justify-start items-start gap-4 flex-wrap">
              <Link
                to="/contact/consultation"
                id="hero-cta-consult"
                className="px-8 py-3 bg-amber-500 hover:bg-amber-400 rounded-lg flex justify-start items-center gap-2 transition-all duration-200"
              >
                <span className="text-yellow-900 text-base font-normal font-['Inter'] leading-6">Đăng ký tư vấn</span>
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-yellow-900">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </Link>
              <Link
                to="/training/short-term"
                id="hero-cta-courses"
                className="px-8 py-3 rounded-lg outline outline-1 outline-offset-[-1px] outline-white inline-flex flex-col justify-center items-center hover:bg-white/10 transition-all duration-200"
              >
                <span className="text-white text-base font-normal font-['Inter'] leading-6">Xem khóa học</span>
              </Link>
            </div>
          </div>

          {/* RIGHT — glass card */}
          <div className="w-[520px] shrink-0 p-8 bg-white/80 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[6px] flex flex-col justify-start items-start gap-4 shadow-xl">
            {/* Card header row */}
            <div className="inline-flex justify-start items-center gap-4">
              <div className="p-3 bg-amber-500/20 rounded-lg inline-flex flex-col justify-start items-start">
                <div className="w-4 h-5 bg-amber-500" />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <p className="text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">Lộ trình học rõ ràng</p>
                <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Chứng chỉ nghề nghiệp uy tín từ Nhật Bản</p>
              </div>
            </div>

            {/* Stat rows */}
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch py-2 border-b border-neutral-300 inline-flex justify-between items-center">
                <span className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Thời gian học</span>
                <span className="text-sky-950 text-base font-bold font-['Inter'] leading-6">36 tháng</span>
              </div>
              <div className="self-stretch py-2 border-b border-neutral-300 inline-flex justify-between items-center">
                <span className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Chuyên ngành</span>
                <span className="text-sky-950 text-base font-bold font-['Inter'] leading-6">Đa dạng, mũi nhọn</span>
              </div>
              <div className="self-stretch py-2 inline-flex justify-between items-center">
                <span className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Tỷ lệ có việc làm</span>
                <span className="text-sky-950 text-base font-bold font-['Inter'] leading-6">100%</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — CHƯƠNG TRÌNH ĐÀO TẠO NỔI BẬT
          Layout: 3-column grid
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-slate-50 py-20 px-6">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-8">

          {/* Section header — centered */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
              Chương trình đào tạo nổi bật
            </h2>
            <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6 max-w-[672px]">
              Các khóa học được xây dựng theo nhu cầu thực tế của học viên và doanh nghiệp, phù hợp cho nhiều mục tiêu học tập khác nhau.
            </p>
          </div>

          {/* Program cards — 3-column grid */}
          <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.id}
                id={`program-card-${p.id}`}
                className="p-8 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-2 hover:shadow-md transition-shadow duration-200"
              >
                {/* Icon circle */}
                <div className="w-16 h-16 bg-sky-950/5 rounded-full inline-flex justify-center items-center">
                  {p.icon}
                </div>

                {/* Title */}
                <div className="self-stretch pt-2">
                  <h3 className="text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                    {p.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6 flex-1">
                  {p.desc}
                </p>

                {/* Link row */}
                <div className="self-stretch pt-2 inline-flex justify-start items-center gap-1">
                  <Link
                    to={p.link}
                    id={`program-link-${p.id}`}
                    className="text-yellow-800 text-base font-bold font-['Inter'] leading-6 hover:underline"
                  >
                    Xem chi tiết
                  </Link>
                  <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 ml-0.5">
                    <path d="M1 1l4 4-4 4" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — LỘ TRÌNH 3 NĂM
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white px-6 py-20">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-12">

            {/* Left — steps */}
            <div className="w-full lg:w-[499px] shrink-0 flex flex-col justify-start items-start gap-4">
              <h2 className="self-stretch text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
                Lộ trình 3 năm: Từ Học viên<br />đến Chuyên gia
              </h2>
              <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                Quy trình đào tạo khép kín được thiết kế bởi các chuyên gia Nhật Bản, tập trung tối đa vào hiệu quả thực tế và khả năng thích nghi quốc tế.
              </p>

              {/* Step cards */}
              <div className="self-stretch pt-4 flex flex-col justify-start items-start gap-4">
                {roadmap.map((step) => (
                  <div
                    key={step.num}
                    id={`roadmap-step-${step.num}`}
                    className={`self-stretch p-4 bg-blue-50 rounded-lg border-l-4 flex justify-start items-start gap-4 ${
                      step.active ? 'border-amber-500' : 'border-sky-950'
                    }`}
                  >
                    <span className={`text-2xl font-bold font-['Inter'] leading-8 shrink-0 ${step.active ? 'text-amber-500' : 'text-sky-950'}`}>
                      {step.num}
                    </span>
                    <div className="flex flex-col justify-start items-start">
                      <h4 className="text-sky-950 text-base font-bold font-['Inter'] leading-6">{step.title}</h4>
                      <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="flex-1 self-stretch relative rounded-3xl shadow-2xl overflow-hidden min-h-96">
              <img
                src="https://placehold.co/709x399"
                alt="Học viên thực hành tại Suleco"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay + quote */}
              <div className="absolute left-0 top-0 w-full h-full p-8 bg-gradient-to-l from-sky-950/60 to-sky-950/0 flex justify-start items-end">
                <p className="text-white text-base font-normal font-['Inter'] leading-6 max-w-xs">
                  "Hành trình vươn ra biển lớn bắt đầu từ những bước chân vững chắc tại Suleco."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — CTA BANNER
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-white px-6 py-20">
        <div className="max-w-[864px] mx-auto relative bg-sky-950 rounded-3xl shadow-2xl p-16 flex flex-col justify-start items-center gap-4 overflow-hidden w-full">
          {/* Decorative circle */}
          <div className="absolute w-64 h-64 right-0 -top-32 bg-amber-500/10 rounded-full" />

          <h2 className="text-center text-white text-3xl font-bold font-['Montserrat'] leading-10 relative z-10">
            Bắt đầu lộ trình học của bạn ngay hôm nay
          </h2>

          <p className="w-[548px] max-w-full text-center text-indigo-400 text-lg font-normal font-['Inter'] leading-7 relative z-10">
            Đăng ký tư vấn để được hỗ trợ chọn chương trình đào tạo phù hợp với nhu cầu, năng lực và mục tiêu nghề nghiệp của bạn.
          </p>

          <div className="pt-4 relative z-10">
            <Link
              to="/admission/apply"
              id="cta-apply-btn"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-xl inline-flex justify-center items-center transition-all duration-200"
            >
              <span className="text-yellow-900 text-base font-normal font-['Inter'] leading-6">
                Đăng ký tuyển sinh
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FormalEducation;
