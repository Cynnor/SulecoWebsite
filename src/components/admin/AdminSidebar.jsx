import { useLocation, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Handshake, 
  FileText, 
  UserSquare2, 
  Settings, 
  LogOut, 
  PlusCircle,
  GraduationCap
} from 'lucide-react';

import logo from '../../assets/logo_transparent.png';

const AdminSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Tổng quan', path: '/admin' },
    { icon: <GraduationCap size={20} />, label: 'Tuyển sinh', path: '/admin/admission' },
    { icon: <BookOpen size={20} />, label: 'Khóa học', path: '/admin/courses' },
    // { icon: <Handshake size={20} />, label: 'Đối tác', path: '/admin/partners' },
    { icon: <FileText size={20} />, label: 'Bài viết', path: '/admin/posts' },
    { icon: <UserSquare2 size={20} />, label: 'Người dùng', path: '/admin/users' },
    { icon: <Settings size={20} />, label: 'Cài đặt', path: '/admin/settings' },
  ];

  const isActive = (path) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 h-screen bg-[#001529] text-white flex flex-col fixed left-0 top-0 shadow-2xl z-20">
      {/* Logo Section */}
      <div className="p-6 mb-4 flex flex-col items-center">
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-white/5 p-2 flex items-center justify-center group cursor-pointer hover:bg-white/10 transition-all border border-white/5">
           <img src={logo} alt="Newcity Suleco Academy" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
        </div>
        <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-[0.2em] font-black">Cổng thông tin giáo dục</p>
      </div>

      {/* Action Button */}
      <div className="px-4 mb-8">
        <button className="w-full py-3 px-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center gap-2 font-medium hover:from-orange-500 hover:to-orange-700 transition-all shadow-lg shadow-orange-900/20">
          <PlusCircle size={20} />
          <span>Hồ sơ mới</span>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => {
          const active = isActive(item.path);
          return (
            <Link
              key={index}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                active 
                  ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-md shadow-orange-900/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl transition-all">
          <div className="w-6 h-6 flex items-center justify-center text-xs font-bold italic border border-gray-400 rounded-full">?</div>
          <span className="font-medium">Hỗ trợ</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-red-400 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="font-medium">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
