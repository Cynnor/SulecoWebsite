import React from 'react';
import logo from '../assets/logo_transparent.png';

/**
 * Component: FooterColumn
 * Hiển thị một cột liên kết trong Footer
 */
const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 mb-6">
      {title}
    </h3>
    <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.to} className="transition hover:text-blue-500">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Component: Footer
 * Thành phần chân trang chính của Suleco City
 */
export default function Footer() {
  const footerData = [
    {
      title: "Đào tạo",
      links: [
        { label: "Hệ chính quy", to: "/training/formal-education" },
        { label: "Hệ ngắn hạn", to: "/training/short-term" },
        { label: "Ngoại ngữ", to: "/training/languages" },
        { label: "Liên kết đào tạo", to: "/training/partnerships" },
      ]
    },
    {
      title: "Tuyển sinh",
      links: [
        { label: "Hướng dẫn hồ sơ", to: "/admission/guide" },
        { label: "Học bổng & Học phí", to: "/admission/scholarships" },
        { label: "Đăng ký trực tuyến", to: "/admission/apply" },
      ]
    },
    {
      title: "Nghề nghiệp",
      links: [
        { label: "Mạng lưới đối tác", to: "/career/partners" },
        { label: "Việc làm trong nước", to: "/career/domestic" },
        { label: "Tu nghiệp quốc tế", to: "/career/international" },
        { label: "Nhật ký thực tập", to: "/career/diary" },
      ]
    },
    {
      title: "Tin tức",
      links: [
        { label: "Tin tức & Sự kiện", to: "/news/events" },
        { label: "Hoạt động sinh viên", to: "/news/student-activities" },
        { label: "Thông báo đào tạo", to: "/news/notifications" },
        { label: "Thư viện tư liệu", to: "/news/library" },
      ]
    },
    {
      title: "Về chúng tôi",
      links: [
        { label: "Giới thiệu chung", to: "/about-us/introduction" },
        { label: "Hội đồng chuyên gia", to: "/about-us/experts" },
        { label: "Triết lý giáo dục", to: "/about-us/philosophy" },
      ]
    }
  ];

  return (
    <footer id="lien-he" className="border-t border-slate-900 bg-slate-950 text-slate-400 py-20">
      <div className="mx-auto grid max-w-[1400px] gap-x-12 gap-y-16 px-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 lg:px-20">
        <div className="col-span-2 md:col-span-1 xl:col-span-1">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-2 mb-6 shadow-2xl">
             <img src={logo} alt="Suleco City Logo" className="w-full h-full object-contain" />
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Newcity <span className="text-blue-700">Suleco</span></h2>
          <p className="mt-4 text-[11px] leading-7 text-slate-500 text-justify">
            Hệ thống Giáo dục Quốc tế Newcity Suleco - Nơi kiến tạo tương lai và nâng tầm trí tuệ cho thế hệ trẻ Việt Nam thông qua các chương trình đào tạo chuẩn mực.
          </p>
        </div>

        {footerData.map((col, idx) => (
          <FooterColumn key={idx} title={col.title} links={col.links} />
        ))}

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 mb-6">
            Kết nối
          </h3>
          <div className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
            <p className="flex items-center gap-3"><span className="text-blue-500">E:</span> contact@sulecocity.edu.vn</p>
            <p className="flex items-center gap-3"><span className="text-blue-500">H:</span> 1900 1234</p>
            <p className="flex items-center gap-3"><span className="text-blue-500">A:</span> TP. Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] border-t border-white/5 mt-20 pt-8 px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600">
        <p>© {new Date().getFullYear()} Suleco City International Education. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors text-[10px]">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors text-[10px]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}