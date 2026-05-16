import React from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = ({ label, items, title }) => (
  <div className="relative group">
    <button className="flex items-center gap-2 py-2 hover:text-blue-700 transition-colors border-b-2 border-transparent group-hover:border-blue-700 font-bold uppercase tracking-widest text-[11px]">
      {label}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div className="absolute top-full left-0 mt-0 w-72 origin-top-left bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60] rounded-2xl overflow-hidden">
      <div className="p-2 bg-slate-50 border-b border-slate-100">
         <p className="text-[10px] text-slate-400 px-4 py-2 font-black uppercase tracking-tighter">{title}</p>
      </div>
      {items.map((item, idx) => (
        <Link 
          key={idx} 
          to={item.to} 
          className={`block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest ${idx !== items.length - 1 ? 'border-b border-slate-50' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  </div>
);

export default function Header() {
  const navData = {
    aboutUs: {
      label: "Giới thiệu",
      title: "About Suleco City",
      items: [
        { label: "Giới thiệu chung", to: "/about-us/introduction" },
        { label: "Triết lý & Phương châm", to: "/about-us/philosophy" },
        { label: "Đội ngũ chuyên gia", to: "/about-us/experts" },
        { label: "Cơ sở vật chất & Tour", to: "/about-us/facilities" },
      ]
    },
    training: {
      label: "Đào tạo",
      title: "Training Programs",
      items: [
        { label: "Liên kết Ngoại ngữ", to: "/training/languages-connection" },
      ]
    },
    admission: {
      label: "Tuyển sinh",
      title: "Admission Portal",
      items: [
        { label: "Thông tin & Hướng dẫn", to: "/admission/guide" },
        { label: "Học bổng & Học phí", to: "/admission/scholarships" },
        { label: "Đăng ký trực tiếp", to: "/admission/apply" },
      ]
    },
    career: {
      label: "Nghề nghiệp",
      title: "Career & Linkage",
      items: [
        { label: "Mạng lưới đối tác", to: "/career/partners" },
        { label: "Việc làm trong nước", to: "/career/domestic" },
        { label: "Tu nghiệp quốc tế", to: "/career/international" },
        { label: "Nhật ký & Cam kết", to: "/career/diary" },
      ]
    },
    news: {
      label: "Tin tức",
      title: "News & Resources",
      items: [
        { label: "Tin tức & Sự kiện", to: "/news/events" },
        { label: "Góc Nhật Bản", to: "/news/student-activities" },
        { label: "Thông báo đào tạo", to: "/news/notifications" },
        { label: "Thư viện tư liệu", to: "/news/library" },
      ]
    },
    contact: {
      label: "Liên hệ",
      title: "Contact & Support",
      items: [
        { label: "Thông tin liên hệ", to: "/contact/info" },
        { label: "Đăng ký tư vấn", to: "/contact/consultation" },
      ]
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-20">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-xl font-black text-white shadow-xl shadow-blue-900/10 group-hover:bg-slate-900 transition-colors">S</div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase">
              Suleco <span className="text-blue-700">City</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Hệ thống Giáo dục Quốc tế</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex text-slate-500">
          <Link to="/" className="py-2 hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700 font-bold uppercase tracking-widest text-[11px]">
            Trang chủ
          </Link>
          <NavDropdown {...navData.aboutUs} />
          <NavDropdown {...navData.training} />
          <NavDropdown {...navData.admission} />
          <NavDropdown {...navData.career} />
          <NavDropdown {...navData.news} />
          <NavDropdown {...navData.contact} />
        </nav>

        <Link 
          to="/contact/consultation"
          className="bg-blue-700 px-7 py-3 text-[11px] font-black text-white uppercase tracking-widest shadow-xl shadow-blue-900/10 transition-all hover:bg-slate-900 active:scale-95 rounded-xl hidden xl:block"
        >
          Tư vấn học thuật
        </Link>
      </div>
    </header>
  );
}
