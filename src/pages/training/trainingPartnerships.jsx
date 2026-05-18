import React from 'react';
import { Link } from 'react-router-dom';

/* ─── SMALL CARD DATA ──────────────────────────────── */
const smallCards = [
  {
    id: 'sau-dai-hoc',
    iconClass: 'w-5 h-4',
    title: 'Đào tạo sau đại học',
    desc: 'Liên kết thạc sĩ và các chứng chỉ chuyên gia quốc tế trong lĩnh vực quản trị và kỹ thuật.',
  },
  {
    id: 'dia-phuong',
    iconClass: 'w-5 h-4',
    title: 'Đối tác Địa phương',
    desc: 'Mạng lưới 100+ trường Cao đẳng và Đại học trên toàn lãnh thổ Việt Nam hợp tác tuyển sinh.',
  },
  {
    id: 'internship',
    iconClass: 'w-5 h-5',
    title: 'Global Internship',
    desc: 'Chương trình thực tập hưởng lương tại các doanh nghiệp đa quốc gia tại Singapore và Đức.',
  },
];

/* ─── COMPONENT ────────────────────────────────────── */
/**
 * Component: TrainingPartnerships
 * Trang giới thiệu các chương trình liên kết đào tạo chiến lược
 */
const TrainingPartnerships = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ══════════════════════════════════════════════
          SECTION 1 — HERO  (h-500, bg-indigo-800)
      ══════════════════════════════════════════════ */}
      <section className="relative w-full h-[500px] bg-indigo-800 overflow-hidden flex justify-center items-center">
        {/* Sky-900/50 overlay */}
        <div className="absolute left-0 top-0 w-full h-full bg-sky-900/50" />

        {/* Content */}
        <div className="relative z-10 flex-1 max-w-[1280px] px-6">
          <div className="w-[672px] max-w-full flex flex-col justify-start items-start gap-3.5">
            {/* Headline */}
            <h1 className="self-stretch text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
              Liên kết đào tạo chiến lược
            </h1>

            {/* Subtitle */}
            <div className="self-stretch opacity-90">
              <p className="self-stretch text-white text-lg font-normal font-['Inter'] leading-7">
                Kiến tạo tương lai thông qua mạng lưới đối tác giáo dục và doanh nghiệp hàng đầu thế giới.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — PARTNERS  (py-20, px-6, gap-20)
      ══════════════════════════════════════════════ */}
      <section className="w-full py-20 px-6">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start items-start gap-20">

          {/* Section header */}
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
              Đối tác chiến lược quốc tế
            </h2>
            <div className="w-20 h-1 bg-amber-500 rounded-full" />
          </div>

          {/* Card grid */}
          <div className="self-stretch grid grid-cols-3 gap-6">

            {/* ── Row 1: Japan featured (col-span-2) + Exchange (col-span-1) ── */}

            {/* Card 1: Japan Partners — bg-blue-50, h-full, col-span-2 */}
            <div className="col-span-2 p-8 bg-blue-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-row justify-center items-start gap-8 min-h-96">
              {/* Left text */}
              <div className="flex-1 flex flex-col justify-start items-start gap-2">
                {/* Tag */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <p className="text-yellow-800 text-base font-normal font-['Inter'] uppercase leading-6 tracking-widest">
                    DOANH NGHIỆP HÀNG ĐẦU
                  </p>
                </div>

                {/* Title */}
                <div className="self-stretch flex flex-col justify-start items-start">
                  <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                    Hợp tác Nhật Bản (Toyota,<br />Hitachi, Panasonic)
                  </h3>
                </div>

                {/* Desc */}
                <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                  <p className="self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-6">
                    Suleco tự hào là đối tác đào tạo nguồn nhân lực chất lượng cao cho các tập đoàn công nghệ và sản xuất hàng đầu Nhật Bản, đảm bảo đầu ra sự nghiệp vững chắc cho học viên.
                  </p>
                </div>

                {/* Feature list */}
                <div className="self-stretch pt-6 flex flex-col justify-start items-start gap-2">
                  {[
                    'Đào tạo kỹ năng chuyên sâu theo tiêu chuẩn 5S',
                    'Cam kết cơ hội làm việc trực tiếp tại Nhật',
                    'Học bổng toàn phần từ các nghiệp đoàn lớn',
                  ].map((item, i) => (
                    <div key={i} className="self-stretch inline-flex justify-start items-start gap-2">
                      <div className="shrink-0 w-5 h-5 bg-amber-500 rounded-sm mt-0.5" />
                      <p className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right image */}
              <div className="flex-1 self-stretch min-h-72 rounded-lg overflow-hidden">
                <img
                  src="https://placehold.co/358x379"
                  alt="Đối tác Nhật Bản"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 2: Exchange Program — bg-sky-950, col-span-1 */}
            <div className="col-span-1 px-8 py-8 bg-sky-950 rounded-xl flex flex-col justify-between items-start">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {/* Title */}
                <h3 className="self-stretch text-white text-2xl font-semibold font-['Montserrat'] leading-8">
                  Chương trình trao đổi sinh viên
                </h3>
                {/* Desc */}
                <div className="self-stretch opacity-80">
                  <p className="self-stretch text-white text-base font-normal font-['Inter'] leading-6">
                    Mở rộng tầm nhìn quốc tế thông qua các chương trình liên kết với hơn 50 trường đại học danh tiếng tại Châu Á và Châu Âu.
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="self-stretch pt-8">
                <Link
                  to="/contact/consultation"
                  id="exchange-network-btn"
                  className="self-stretch py-4 bg-amber-500 hover:bg-amber-400 rounded-lg flex justify-center items-center transition-all duration-200"
                >
                  <span className="text-yellow-900 text-base font-normal font-['Inter'] leading-6">
                    Xem mạng lưới trường học
                  </span>
                </Link>
              </div>
            </div>

            {/* ── Row 2: 3 small white cards ── */}
            {smallCards.map((card) => (
              <div
                key={card.id}
                id={`partner-card-${card.id}`}
                className="col-span-1 p-8 bg-white/70 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 backdrop-blur-[5px] flex flex-col justify-start items-start gap-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex justify-center items-center">
                  <div className={`${card.iconClass} bg-sky-950`} />
                </div>

                {/* Title */}
                <div className="self-stretch pt-2">
                  <h4 className="self-stretch text-sky-950 text-lg font-semibold font-['Montserrat'] leading-7">
                    {card.title}
                  </h4>
                </div>

                {/* Desc */}
                <p className="self-stretch text-zinc-700 text-sm font-normal font-['Inter'] leading-5">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — CTA BANNER  (bg-blue-50, px-64, py-20)
      ══════════════════════════════════════════════ */}
      <section className="w-full bg-blue-50 px-6 py-20">
        <div className="w-full max-w-[768px] mx-auto flex flex-col justify-start items-start gap-3.5">
          {/* Headline */}
          <div className="self-stretch flex flex-col justify-start items-center">
            <h2 className="text-center text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">
              Trở thành đối tác chiến lược của Suleco
            </h2>
          </div>

          {/* Subtitle */}
          <div className="self-stretch flex flex-col justify-start items-center">
            <p className="text-center text-zinc-700 text-lg font-normal font-['Inter'] leading-7">
              Cùng chúng tôi xây dựng hệ sinh thái giáo dục và cung ứng lao động bền vững, chuyên nghiệp theo tiêu chuẩn toàn cầu.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="self-stretch pt-4 inline-flex justify-center items-start gap-4 flex-wrap">
            <Link
              to="/contact/consultation"
              id="cta-partner-apply"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-full inline-flex justify-center items-center shadow-md transition-all duration-200"
            >
              <span className="text-yellow-900 text-base font-normal font-['Inter'] leading-6">
                Gửi hồ sơ hợp tác
              </span>
            </Link>
            <button
              id="cta-partner-brochure"
              className="px-8 py-4 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-950 hover:bg-sky-950/5 inline-flex justify-center items-center transition-all duration-200"
            >
              <span className="text-sky-950 text-base font-normal font-['Inter'] leading-6">
                Tải Brochure giới thiệu
              </span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrainingPartnerships;
