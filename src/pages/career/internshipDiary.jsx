import React from 'react';
import { Link } from 'react-router-dom';

/* ─── DATA ─────────────────────────────────────────── */
const stats = [
  { value: '5000+', label: 'HỌC VIÊN THÀNH CÔNG', color: 'text-sky-950' },
  { value: '100%',  label: 'CAM KẾT VIỆC LÀM',    color: 'text-amber-500' },
  { value: '200+',  label: 'ĐỐI TÁC CHIẾN LƯỢC',  color: 'text-sky-950' },
  { value: '20+',   label: 'NĂM KINH NGHIỆM',      color: 'text-amber-500' },
];

const roadmap = [
  {
    num: '01', bg: 'bg-sky-950', text: 'text-white',
    title: 'Sơ tuyển & Phỏng vấn',
    desc: 'Đánh giá năng lực, định hướng nghề nghiệp phù hợp với nguyện vọng và thế mạnh cá nhân.',
    hasLine: true,
  },
  {
    num: '02', bg: 'bg-amber-500', text: 'text-orange-950',
    title: 'Đào tạo Tập trung',
    desc: 'Học tập và sinh hoạt tại Suleco City - Mô hình "Tiểu Nhật Bản" thu nhỏ giữa lòng Sài Gòn.',
    hasLine: true,
  },
  {
    num: '03', bg: 'bg-sky-950', text: 'text-white',
    title: 'Xuất cảnh & Nhận việc',
    desc: 'Hoàn tất thủ tục, được đại diện SULECO đón tại sân bay và bàn giao công việc tại xí nghiệp Nhật.',
    hasLine: true,
  },
  {
    num: '04', bg: 'bg-amber-500', text: 'text-orange-950',
    title: 'Hỗ trợ sau Xuất cảnh',
    desc: 'Theo sát quá trình làm việc, hỗ trợ giải quyết khó khăn và định hướng chuyển đổi visa lâu dài.',
    hasLine: false,
  },
];

/* ─── COMPONENT ─────────────────────────────────────── */
const InternshipDiary = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800 pb-20">

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO (h-600, gradient left→right)
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-[600px] overflow-hidden flex justify-center items-center">
        <img
          src="https://placehold.co/1280x600"
          alt="Hero"
          className="absolute left-0 top-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-sky-950/90 to-sky-950/0" />

        <div className="relative z-10 w-full max-w-[1280px] px-6 flex flex-col justify-start items-start">
          <div className="w-[672px] max-w-full flex flex-col justify-start items-start gap-3.5">
            {/* Badge */}
            <div className="px-4 py-1 bg-amber-500 rounded-full inline-flex">
              <span className="text-orange-950 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">CAM KẾT VIỆC LÀM 100%</span>
            </div>

            {/* Title */}
            <h1 className="self-stretch text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
              Hành Trình Kiến Tạo Sự<br />Nghiệp Toàn Cầu
            </h1>

            {/* Subtitle */}
            <p className="self-stretch pt-4 text-blue-100 text-lg font-normal font-['Inter'] leading-7">
              Tại SULECO, chúng tôi không chỉ đào tạo, chúng tôi cam kết tương lai. Nhật ký thực tập là minh chứng cho sự nỗ lực và phát triển vượt bậc của từng học viên trên con đường vươn ra thế giới.
            </p>

            {/* Buttons */}
            <div className="self-stretch pt-4 inline-flex justify-start items-start gap-4 flex-wrap">
              <Link
                to="/admission/apply"
                id="hero-start-btn"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-xl flex justify-center items-center shadow-lg transition-all duration-200"
              >
                <span className="text-orange-950 text-base font-semibold font-['Inter'] leading-4">Bắt đầu ngay</span>
              </Link>
              <Link
                to="#diary"
                id="hero-learn-btn"
                className="px-8 py-4 rounded-xl outline outline-2 outline-offset-[-2px] outline-white hover:bg-white/10 flex justify-center items-center transition-all duration-200"
              >
                <span className="text-white text-base font-semibold font-['Inter'] leading-4">Tìm hiểu thêm</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — NHẬT KÝ THỰC TẬP (bento grid)
      ══════════════════════════════════════════════ */}
      <section id="diary" className="w-full max-w-[1280px] mx-auto px-6 py-20 flex flex-col justify-start items-start gap-8">

        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">Nhật Ký Thực Tập</h2>
          <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6 max-w-[672px]">
            Từng bước chân, từng bài học được ghi lại chân thực thông qua hành trình rèn luyện tại Suleco City.
          </p>
        </div>

        {/* Bento grid */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Row 1: Diary card (col-span-2) + Job Policy (col-span-1) */}
          {/* Diary card */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 overflow-hidden flex flex-col justify-start items-start">
            <div className="px-8 py-12 flex flex-col justify-center items-start">
              {/* Phase label */}
              <div className="pb-4 inline-flex justify-start items-center gap-2">
                <div className="w-4 h-5 bg-amber-500 rounded-sm" />
                <span className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">Giai đoạn: Tuần 1-4</span>
              </div>
              <h3 className="text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8 mb-4">
                Hội nhập &amp; Khai phóng<br />tiềm năng
              </h3>
              <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6 pb-6">
                Những ngày đầu tiên làm quen với văn hóa doanh nghiệp Nhật Bản và rèn luyện kỷ luật thép tại Suleco City.
              </p>
              <div className="inline-flex justify-start items-center gap-2 cursor-pointer hover:gap-3 transition-all duration-200">
                <span className="text-sky-950 text-base font-bold font-['Inter'] leading-6">Xem chi tiết</span>
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="#0c4a6e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="self-stretch overflow-hidden">
              <img
                src="https://placehold.co/406x336"
                alt="Thực tập"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Job Policy card (col-span-1) */}
          <div className="p-8 bg-sky-950 rounded-3xl flex flex-col justify-between items-start">
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="w-8 h-8 bg-orange-300 rounded-sm" />
              <h3 className="self-stretch text-white text-2xl font-semibold font-['Montserrat'] leading-8">
                Chính sách 100% Việc làm
              </h3>
              <p className="self-stretch text-white/80 text-base font-normal font-['Inter'] leading-6">
                Văn bản cam kết được ký kết ngay khi nhập học, đảm bảo vị trí công việc ổn định tại các đối tác chiến lược tại Nhật Bản.
              </p>
            </div>
            <div className="self-stretch pt-8 flex flex-col justify-start items-start gap-4">
              {['Hỗ trợ phí Visa & Thủ tục', 'Đảm bảo mức lương cơ bản tối thiểu'].map((item) => (
                <div key={item} className="self-stretch inline-flex justify-start items-start gap-3">
                  <div className="w-5 h-5 bg-orange-300 rounded-sm shrink-0 mt-0.5" />
                  <span className="text-white text-base font-normal font-['Inter'] leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: 3 mini-cards */}
          {/* Đào tạo Ngôn ngữ */}
          <div className="p-8 bg-sky-100 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-2">
            <div className="w-12 h-12 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
              <div className="w-5 h-5 bg-sky-950 rounded-sm" />
            </div>
            <h3 className="self-stretch pt-4 text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">Đào tạo Ngôn ngữ</h3>
            <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
              Vượt qua rào cản ngôn ngữ với chương trình học tiếng Nhật cấp tốc, tập trung vào giao tiếp thực tế.
            </p>
          </div>

          {/* Kỹ năng Nghề */}
          <div className="p-8 bg-white rounded-3xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-2">
            <div className="w-12 h-12 bg-amber-500 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
              <div className="w-5 h-4 bg-orange-950 rounded-sm" />
            </div>
            <h3 className="self-stretch pt-4 text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">Kỹ năng Nghề</h3>
            <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
              Trực tiếp thực hành trên các dây chuyền hiện đại, mô phỏng chính xác môi trường làm việc tại nước ngoài.
            </p>
          </div>

          {/* Phát triển Mềm */}
          <div className="px-8 pt-8 pb-14 bg-blue-100 rounded-3xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-2">
            <div className="w-12 h-12 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] flex justify-center items-center">
              <div className="w-5 h-4 bg-sky-950 rounded-sm" />
            </div>
            <h3 className="self-stretch pt-4 text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">Phát triển Mềm</h3>
            <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
              Tư duy làm việc nhóm, quản lý thời gian và thái độ chuyên nghiệp Omotenashi.
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — STATS BAR (bg-blue-50, border-t/b)
      ══════════════════════════════════════════════ */}
      <section className="w-full py-20 bg-blue-50 border-t border-b border-neutral-300">
        <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col justify-start items-center gap-2">
              <p className={`${stat.color} text-5xl font-bold font-['Montserrat'] leading-[57.60px]`}>{stat.value}</p>
              <p className="text-center text-zinc-700 text-sm font-semibold font-['Inter'] uppercase leading-4 tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — LỘ TRÌNH (2-col: title + timeline)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-[1280px] mx-auto px-6 py-20 flex flex-col md:flex-row justify-start items-start gap-8">

        {/* Left title */}
        <div className="w-full md:w-96 shrink-0 flex flex-col justify-start items-start gap-4">
          <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
            Lộ trình rèn luyện tại<br />SULECO CITY
          </h2>
          <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">
            Quy trình khép kín từ khâu tuyển sinh đến khi học viên ổn định cuộc sống tại Nhật Bản.
          </p>
        </div>

        {/* Right timeline */}
        <div className="flex-1 flex flex-col justify-start items-start gap-8">
          {roadmap.map((step, i) => (
            <div key={i} className="self-stretch inline-flex justify-start items-start gap-8">
              {/* Number circle + connector */}
              <div className="flex flex-col justify-start items-center shrink-0">
                <div className={`w-10 h-10 ${step.bg} rounded-full flex justify-center items-center`}>
                  <span className={`${step.text} text-base font-bold font-['Inter'] leading-6`}>{step.num}</span>
                </div>
                {step.hasLine && (
                  <div className="w-0.5 h-24 mt-2 bg-neutral-300" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 p-8 bg-white/80 backdrop-blur-[6px] rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-2">
                <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">{step.title}</h3>
                <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 — CTA (bg-sky-900, rounded-[40px])
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="w-full px-12 py-12 relative bg-sky-900 rounded-[40px] flex flex-col justify-start items-center gap-3.5 overflow-hidden">
          {/* Amber glow circle */}
          <div className="absolute right-0 -top-32 w-64 h-64 bg-amber-500 rounded-full opacity-20" />

          {/* Headline */}
          <h2 className="relative z-10 self-stretch text-center text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
            Sẵn sàng cho chương mới?
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 text-center text-white/90 text-lg font-normal font-['Inter'] leading-7 max-w-[576px]">
            Chúng tôi luôn đồng hành cùng bạn trên mọi nẻo đường sự nghiệp.
          </p>

          {/* Buttons */}
          <div className="relative z-10 self-stretch pt-4 inline-flex justify-center items-start gap-4 flex-wrap">
            <Link
              to="/contact/consultation"
              id="cta-consult-btn"
              className="px-10 py-5 bg-amber-500 hover:bg-amber-400 rounded-2xl flex justify-center items-center transition-all duration-200"
            >
              <span className="text-orange-950 text-base font-semibold font-['Inter'] leading-4">Đăng ký Tư vấn miễn phí</span>
            </Link>
            <a
              href="tel:19001234"
              id="cta-hotline-btn"
              className="px-10 py-5 bg-white hover:bg-slate-50 rounded-2xl flex justify-center items-center transition-all duration-200"
            >
              <span className="text-sky-950 text-base font-semibold font-['Inter'] leading-4">Hotline: 1900 1234</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InternshipDiary;
