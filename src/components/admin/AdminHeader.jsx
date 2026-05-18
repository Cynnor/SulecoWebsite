import React from 'react';
import { Search, Bell, HelpCircle } from 'lucide-react';

const AdminHeader = () => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
      {/* Search Bar */}
      <div className="relative w-96">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm hồ sơ, nhật ký hoặc khóa học..."
          className="w-full bg-gray-50 border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all outline-none"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-gray-500 border-r border-gray-100 pr-6">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
            <HelpCircle size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Quản trị viên</p>
            <p className="text-xs text-gray-500">Super User</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-orange-200 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
