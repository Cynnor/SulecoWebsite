import React from 'react';
import { Link } from 'react-router-dom';

const levels = [
  { label: 'Sơ cấp (N5)', desc: 'Làm quen với bảng chữ cái, từ vựng cơ bản và ngữ pháp đơn giản, đủ giao tiếp hàng ngày.' },
  { label: 'Trung cấp (N4)', desc: 'Mở rộng vốn từ, hội thoại trôi chảy trong công việc và đời sống, đọc hiểu văn bản ngắn.' },
  { label: 'Trung cao cấp (N3)', desc: 'Giao tiếp tự nhiên, xử lý tình huống phức tạp tại môi trường làm việc chuyên nghiệp.' },
  { label: 'Cao cấp (N2)', desc: 'Thành thạo cả bốn kỹ năng, sẵn sàng làm việc và sinh sống lâu dài tại Nhật Bản.' },
];

const infoCards = [
  { icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4', title: 'Tải tài liệu giới thiệu', desc: 'Cung cấp đầy đủ thông tin về các khóa đào tạo và lộ trình nghề nghiệp.', cta: 'Tải ngay', href: '#' },
  { icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', title: 'Hỗ trợ sinh viên', desc: 'Giải đáp thắc mắc về hồ sơ, học phí và các chương trình học bổng.', cta: 'Liên hệ tư vấn', href: '/contact/consultation' },
  { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m0 0v2m-7 7h3m-3 4h3m-6-4h.01M9 16h.01', title: 'Danh sách khóa học', desc: 'Xem toàn bộ các khóa ngoại ngữ và lộ trình đào tạo tại Suleco.', cta: 'Xem danh sách', href: '#' },
];

const faqs = [
  { q: 'Khóa học ngoại ngữ kéo dài bao lâu?', a: 'Tùy theo cấp độ đầu vào và mục tiêu, mỗi cấp độ kéo dài khoảng 3–6 tháng. Học viên có thể hoàn thành sớm nếu đạt đủ năng lực.' },
  { q: 'Hình thức giảng dạy như thế nào?', a: 'Kết hợp trực tuyến, trực tiếp tại trung tâm và thực hành giao tiếp với giáo viên bản ngữ. Lớp học tương tác cao, tối đa 15 học viên.' },
  { q: 'Tôi có cần phải có trình độ đầu vào không?', a: 'Hoàn toàn không. Chúng tôi có bài kiểm tra đầu vào miễn phí để xếp lớp phù hợp, từ mới bắt đầu đến nâng cao.' },
  { q: 'Chứng chỉ có giá trị quốc tế không?', a: 'Có. Học viên sẽ được chuẩn bị để thi lấy các chứng chỉ JLPT (Nhật), IELTS/TOEIC (Anh) hoặc Goethe (Đức) tùy theo khóa học.' },
  { q: 'Sau khóa học tôi có cơ hội việc làm không?', a: 'Suleco ký kết trực tiếp với hàng trăm doanh nghiệp tại Nhật Bản, Đức và Úc. Học viên được hỗ trợ giới thiệu việc làm ngay sau khi tốt nghiệp.' },
  { q: 'Học phí có thể đóng theo đợt không?', a: 'Có. Học phí được chia thành nhiều đợt linh hoạt theo tiến độ khóa học. Chúng tôi cũng có các chương trình học bổng hỗ trợ học viên xuất sắc.' },
];

const LanguagesConnection = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* ─── HERO ─────────────────────────────────── */}
      <div className="w-full bg-sky-950 py-12">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-4">
          <div className="inline-flex gap-2 items-center">
            <Link to="/" className="text-amber-400 text-sm font-semibold font-['Inter'] hover:text-amber-300 transition-colors">Home</Link>
            <span className="text-amber-400 text-sm font-semibold font-['Inter']">/</span>
            <span className="text-white text-sm font-bold font-['Inter'] tracking-wide">Đào tạo ngoại ngữ</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold font-['Montserrat'] leading-tight">
            Chương trình đào tạo ngoại ngữ
          </h1>
          <p className="text-blue-200 text-base font-normal font-['Inter'] leading-6 max-w-2xl">
            Mở cánh cửa hội nhập quốc tế — trang bị kỹ năng ngôn ngữ Nhật, Anh, Đức
            để làm việc và sinh sống tại các thị trường lao động hàng đầu thế giới.
          </p>
        </div>
      </div>

      {/* ─── COURSE INFO BAR ──────────────────────── */}
      <div className="w-full bg-blue-50 border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Thời lượng', value: '3–6 tháng / cấp độ' },
            { label: 'Khai giảng', value: 'Hàng tháng' },
            { label: 'Cơ sở', value: 'TP. HCM & Bình Dương' },
            { label: 'Học phí', value: 'Liên hệ để biết chi tiết' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <p className="text-amber-500 text-xs font-bold font-['Inter'] uppercase tracking-wider">{item.label}</p>
              <p className="text-sky-950 text-sm font-semibold font-['Inter']">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MAIN CONTENT ─────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">

        {/* ── LEFT: Content ────────────────────────── */}
        <div className="flex flex-col gap-12">

          {/* Overview */}
          <section id="overview">
            <h2 className="text-sky-950 text-xl font-bold font-['Montserrat'] mb-4">Tổng quan chương trình</h2>
            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7">
              Chương trình đào tạo ngoại ngữ tại Suleco được thiết kế dành riêng cho học viên có mục tiêu
              xuất khẩu lao động và làm việc trong môi trường quốc tế. Với đội ngũ giảng viên bản ngữ giàu
              kinh nghiệm, giáo trình chuẩn quốc tế và phương pháp giảng dạy thực hành giao tiếp, học viên
              sẽ nhanh chóng đạt được năng lực ngôn ngữ cần thiết để tự tin bước vào thị trường lao động
              Nhật Bản, Đức, Úc và các nước phát triển khác.
            </p>
            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7 mt-4">
              Chúng tôi cung cấp các khóa học Nhật ngữ (JLPT N5–N2), Anh ngữ (IELTS/TOEIC) và Đức ngữ
              (Goethe A1–B2), phù hợp với từng lộ trình nghề nghiệp cụ thể.
            </p>
          </section>

          {/* Entry Requirements */}
          <section id="entry-requirements">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-sky-950 text-xl font-bold font-['Montserrat']">Yêu cầu đầu vào</h2>
            </div>
            <ul className="list-disc pl-6 text-zinc-700 text-base font-normal font-['Inter'] leading-7 space-y-1">
              <li>Từ đủ 18 tuổi trở lên</li>
              <li>Tốt nghiệp THPT hoặc tương đương</li>
              <li>Hoàn thành bài kiểm tra năng lực đầu vào của trung tâm</li>
              <li>Có mục tiêu làm việc tại nước ngoài (không bắt buộc)</li>
            </ul>
            <p className="text-zinc-600 text-sm font-normal font-['Inter'] leading-6 mt-3">
              Học viên chưa có nền tảng ngoại ngữ vẫn có thể đăng ký — chúng tôi có lớp vỡ lòng dành
              cho người mới bắt đầu.
            </p>
          </section>

          {/* Course Structure / Levels */}
          <section id="levels">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-sky-950 text-xl font-bold font-['Montserrat']">Cấp độ đào tạo</h2>
            </div>
            <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7 mb-6">
              Chương trình được chia thành các cấp độ từ cơ bản đến nâng cao, phù hợp với khung năng lực
              quốc tế:
            </p>
            <div className="space-y-4">
              {levels.map((lv) => (
                <div key={lv.label} className="p-5 bg-blue-50 rounded-xl border border-neutral-200">
                  <p className="text-amber-500 text-sm font-bold font-['Inter'] uppercase tracking-wider">{lv.label}</p>
                  <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-7 mt-1">{lv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pathways */}
          <section id="pathways">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
              </div>
              <h2 className="text-sky-950 text-xl font-bold font-['Montserrat']">Lộ trình phát triển</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-xl border border-neutral-200">
                <p className="text-sky-950 text-base font-bold font-['Montserrat'] mb-2">Học lên cao</p>
                <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                  Sau khi đạt trình độ yêu cầu, học viên có thể tham gia các khóa đào tạo nghề chuyên sâu
                  tại đối tác nước ngoài hoặc chương trình đại học liên kết.
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl border border-neutral-200">
                <p className="text-sky-950 text-base font-bold font-['Montserrat'] mb-2">Cơ hội nghề nghiệp</p>
                <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                  Vị trí phổ biến: kỹ thuật viên ô tô, chế biến thực phẩm, điều dưỡng, kỹ sư cơ khí
                  tại Nhật Bản, Đức, Úc với mức lương hấp dẫn.
                </p>
              </div>
            </div>
          </section>

          {/* Training Methodology */}
          <section id="methodology">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-sky-950 text-xl font-bold font-['Montserrat']">Phương pháp giảng dạy</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Thực hành giao tiếp với giáo viên bản ngữ',
                'Lớp học tương tác, tối đa 15 học viên',
                'Giáo trình chuẩn quốc tế (JLPT, IELTS, Goethe)',
                'Học qua tình huống thực tế tại doanh nghiệp',
                'Hỗ trợ luyện thi chứng chỉ miễn phí',
                'Cố vấn học tập theo sát từng học viên',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                  <svg className="w-4 h-4 mt-1 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h2 className="text-sky-950 text-xl font-bold font-['Montserrat']">Câu hỏi thường gặp</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group p-4 bg-blue-50 rounded-xl border border-neutral-200 cursor-pointer">
                  <summary className="text-sky-950 text-base font-semibold font-['Inter'] leading-6 list-none flex justify-between items-center">
                    {faq.q}
                    <svg className="w-4 h-4 text-amber-500 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-zinc-700 text-sm font-normal font-['Inter'] leading-6">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

        </div>

        {/* ── RIGHT: Sidebar ────────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Enquiry Form */}
          <div className="p-6 bg-blue-50 rounded-xl border border-neutral-300 shadow-sm">
            <p className="text-sky-950 text-base font-bold font-['Montserrat'] mb-4">Đăng ký tư vấn</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Họ và tên *" className="w-full h-11 px-4 rounded-lg border border-neutral-300 text-sm font-['Inter'] focus:outline-sky-400 focus:outline-2" required />
              <input type="tel" placeholder="Số điện thoại *" className="w-full h-11 px-4 rounded-lg border border-neutral-300 text-sm font-['Inter'] focus:outline-sky-400 focus:outline-2" required />
              <input type="email" placeholder="Email" className="w-full h-11 px-4 rounded-lg border border-neutral-300 text-sm font-['Inter'] focus:outline-sky-400 focus:outline-2" />
              <select className="w-full h-11 px-4 rounded-lg border border-neutral-300 text-sm font-['Inter'] focus:outline-sky-400 focus:outline-2">
                <option value="">Chọn khóa học</option>
                <option value="n5">Nhật ngữ sơ cấp (N5)</option>
                <option value="n4">Nhật ngữ trung cấp (N4)</option>
                <option value="n3">Nhật ngữ trung cao cấp (N3)</option>
                <option value="ielts">Anh ngữ (IELTS)</option>
                <option value="german">Đức ngữ (Goethe)</option>
              </select>
              <button type="submit" className="w-full h-11 bg-amber-500 hover:bg-amber-400 rounded-lg text-yellow-900 text-sm font-bold font-['Inter'] transition-colors">
                GỬI YÊU CẦU
              </button>
            </form>
          </div>

          {/* Download Flyer */}
          <a href="#" className="p-6 bg-blue-100 rounded-xl border border-neutral-300 flex items-center gap-4 hover:shadow-md transition-shadow group">
            <svg className="w-8 h-8 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <div>
              <p className="text-sky-950 text-sm font-bold font-['Montserrat'] group-hover:underline">Tải tài liệu giới thiệu</p>
              <p className="text-zinc-600 text-xs font-normal font-['Inter']">PDF - 2.4 MB</p>
            </div>
          </a>

          {/* Contact Info */}
          <div className="p-6 bg-amber-50 rounded-xl border border-amber-200 flex flex-col gap-3">
            <p className="text-sky-950 text-sm font-bold font-['Montserrat']">Liên hệ trực tiếp</p>
            <div className="flex items-start gap-3 text-zinc-700 text-sm font-normal font-['Inter']">
              <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0909 123 456</span>
            </div>
            <div className="flex items-start gap-3 text-zinc-700 text-sm font-normal font-['Inter']">
              <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@suleco.edu.vn</span>
            </div>
            <div className="flex items-start gap-3 text-zinc-700 text-sm font-normal font-['Inter']">
              <svg className="w-4 h-4 mt-0.5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Nguyễn Văn Linh, Q.7, TP. HCM</span>
            </div>
          </div>

        </div>
      </div>

      {/* ─── INFO CARDS ───────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {infoCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="p-8 bg-blue-100 rounded-xl flex flex-col items-center gap-2 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d={card.icon} />
                </svg>
              </div>
              <p className="text-center text-slate-900 text-base font-normal font-['Montserrat'] leading-6 pt-2">{card.title}</p>
              <p className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
              <span className="pt-2 inline-flex items-center gap-2 text-yellow-800 text-base font-bold font-['Inter'] leading-6 group-hover:text-yellow-600 transition-colors">
                {card.cta}
                <svg className="w-4 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LanguagesConnection;
