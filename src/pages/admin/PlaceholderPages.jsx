import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-500 max-w-md">Tính năng này hiện đang trong quá trình phát triển. Vui lòng quay lại sau.</p>
        <button 
          onClick={() => window.history.back()}
          className="mt-8 px-6 py-2.5 bg-[#001529] text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
};

export const CoursesManagement = () => <PlaceholderPage title="Quản lý Khóa học" />;
export const PartnersManagement = () => <PlaceholderPage title="Quản lý Đối tác" />;
export const PostsManagement = () => <PlaceholderPage title="Quản lý Bài viết" />;
export const StaffManagement = () => <PlaceholderPage title="Quản lý Nhân viên" />;
export const SettingsPage = () => <PlaceholderPage title="Cài đặt hệ thống" />;
