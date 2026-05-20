import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_transparent.png';
import { getCourseCategories, getCourses } from '../services/courseService';

const NavDropdown = ({ label, items, title }) => (
  <div className="relative group">
    <button className="flex items-center gap-2 py-2 hover:text-blue-700 transition-colors border-b-2 border-transparent group-hover:border-blue-700 font-bold uppercase tracking-widest text-[11px]">
      {label}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div className="absolute top-full left-0 mt-0 w-72 origin-top-left bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60] rounded-none overflow-hidden">

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

const TrainingMegaMenu = () => {
  const [categories, setCategories] = useState([]);
  const [courseMap, setCourseMap] = useState({});
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    getCourseCategories({ limit: 100 }).then((res) => {
      const cats = res.data?.categories || [];
      setCategories(cats);
    }).catch(() => {});
    getCourses({ limit: 100 }).then((courses) => {
      const map = {};
      courses.forEach((c) => {
        const catId = c.categoryId?._id || 'other';
        if (!map[catId]) map[catId] = [];
        map[catId].push(c);
      });
      setCourseMap(map);
    }).catch(() => {});
  }, []);

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 py-2 hover:text-blue-700 transition-colors border-b-2 border-transparent group-hover:border-blue-700 font-bold uppercase tracking-widest text-[11px]"
      >
        Đào tạo
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="absolute top-full left-0 mt-0 w-[780px] origin-top-left bg-white shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[60] rounded-none overflow-hidden">

        <div className="flex">
          <div className="w-[260px] border-r border-slate-100 shrink-0">
            <div
              onMouseEnter={() => setShowCategories(true)}
              className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-all text-[11px] font-bold uppercase tracking-widest ${
                showCategories ? 'bg-blue-700 text-white' : 'hover:bg-blue-50 text-slate-700'
              }`}
            >
              <span>Danh mục đào tạo</span>
              <span className="text-[10px] text-slate-400">
                ({Object.values(courseMap).reduce((sum, arr) => sum + arr.length, 0)})
              </span>
            </div>
          </div>

          {showCategories && (
            <div className="w-[260px] border-r border-slate-100 shrink-0 overflow-y-auto max-h-[400px]">
              {categories.map((cat) => {
                const count = (courseMap[cat._id] || []).length;
                return (
                  <div
                    key={cat._id}
                    onMouseEnter={() => setSelectedCat(cat._id)}
                    className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-all text-[11px] font-bold uppercase tracking-widest ${
                      selectedCat === cat._id ? 'bg-blue-700 text-white' : 'hover:bg-blue-50 text-slate-700'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-400">({count})</span>
                  </div>
                );
              })}
            </div>
          )}

          {selectedCat && (
            <div className="flex-1 overflow-y-auto max-h-[400px]">
              {(courseMap[selectedCat] || []).length > 0 ? (
                (courseMap[selectedCat] || []).map((course) => (
                  <Link
                    key={course._id}
                    to={`/training/courses?course=${course._id}`}
                    className="block px-6 py-4 hover:bg-blue-700 hover:text-white transition-all text-[11px] font-bold uppercase tracking-widest border-b border-slate-50 last:border-b-0 text-slate-600"
                    onClick={() => setOpen(false)}
                  >
                    {course.title}
                  </Link>
                ))
              ) : (
                <div className="px-6 py-8 text-center text-slate-400 text-[11px] uppercase tracking-widest">
                  Chưa có khóa học
                </div>
              )}
            </div>
          )}
        </div>
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
          <Link to="/training/courses" className="text-[10px] text-blue-700 font-bold uppercase tracking-widest hover:underline" onClick={() => setOpen(false)}>
            Xem tất cả khóa học →
          </Link>
        </div>
      </div>
    </div>
  );
};

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
    admission: {
      label: "Tuyển sinh",
      title: "Admission Portal",
      items: [
        { label: "Thông tin & Hướng dẫn", to: "/admission/guide" },
        { label: "Học bổng & Học phí", to: "/admission/scholarships" },
        { label: "Đăng ký trực tiếp", to: "/admission/apply" },
      ]
    },
    // career: {
    //   label: "Nghề nghiệp",
    //   title: "Career & Linkage",
    //   items: [
    //     { label: "Mạng lưới đối tác", to: "/career/partners" },
    //     { label: "Việc làm trong nước", to: "/career/domestic" },
    //     { label: "Tu nghiệp quốc tế", to: "/career/international" },
    //     { label: "Nhật ký & Cam kết", to: "/career/diary" },
    //   ]
    // },
    news: {
      label: "Tin tức",
      title: "News & Resources",
      items: [
        { label: "Tin tức & Sự kiện", to: "/news/events" },
        // { label: "Thông báo đào tạo", to: "/news/notifications" },
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 lg:px-20">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg border border-slate-50 group-hover:scale-105 transition-transform overflow-hidden p-1">
             <img src={logo} alt="Suleco City Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase">
              Newcity <span className="text-blue-700">Suleco</span>
            </h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Hệ thống Giáo dục Quốc tế</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex text-slate-800">
          <Link to="/" className="py-2 hover:text-blue-700 transition-colors border-b-2 border-transparent hover:border-blue-700 font-bold uppercase tracking-widest text-[11px]">
            Trang chủ
          </Link>
          <NavDropdown {...navData.aboutUs} />
          <TrainingMegaMenu />
          <NavDropdown {...navData.admission} />
          {/* <NavDropdown {...navData.career} /> */}
          <NavDropdown {...navData.news} />
          <NavDropdown {...navData.contact} />
        </nav>

        <Link 
          to="/admin/login"
          className="bg-blue-700 px-7 py-3 text-[11px] font-black text-white uppercase tracking-widest shadow-xl shadow-blue-900/10 transition-all hover:bg-slate-900 active:scale-95 rounded-xl hidden xl:block"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
