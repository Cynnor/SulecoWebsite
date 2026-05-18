import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  BookOpen, 
  FileText, 
  ChevronRight, 
  Calendar, 
  Download,
  MoreHorizontal,
  TrendingUp,
  Activity,
  Globe,
  UserCheck
} from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard = () => {
  const stats = [
    {
      label: 'Tổng hồ sơ',
      value: '1,482',
      change: '+12%',
      icon: <Users className="text-blue-600" />,
      bg: 'bg-blue-50',
      trend: 'up'
    },
    {
      label: 'Yêu cầu chờ xử lý',
      value: '84',
      change: '+8%',
      icon: <Clock className="text-orange-600" />,
      bg: 'bg-orange-50',
      trend: 'up'
    },
    {
      label: 'Khóa học',
      value: '42',
      icon: <BookOpen className="text-purple-600" />,
      bg: 'bg-purple-50',
      extra: 'Nội dung trực tuyến'
    },
    {
      label: 'Bài viết',
      value: '128',
      icon: <FileText className="text-emerald-600" />,
      bg: 'bg-emerald-50',
      extra: 'Nội dung trực tuyến'
    }
  ];

  const activities = [
    { user: 'Jane Doe', action: 'đã tạo bản ghi', type: 'TUYỂN SINH', time: '2 phút trước', status: 'Thành công', color: 'text-emerald-600' },
    { user: 'Admin Sam', action: 'đã chỉnh sửa nội dung', type: 'KHÓA HỌC_CMS', time: '14 phút trước', status: 'Thành công', color: 'text-emerald-600' },
    { user: 'HS Thắng', action: 'tự động lưu trữ', type: 'BÀI VIẾT_LOG', time: '1 giờ trước', status: 'Thành công', color: 'text-emerald-600' },
    { user: 'Robert King', action: 'đã xóa đối tác', type: 'ĐỐI TÁC_REF', time: '3 giờ trước', status: 'Cảnh báo', color: 'text-amber-600' },
  ];

  const onlineStaff = [
    { name: 'Staff 1', img: 'https://i.pravatar.cc/150?u=1' },
    { name: 'Staff 2', img: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Staff 3', img: 'https://i.pravatar.cc/150?u=3' },
  ];

  return (
    <div className="space-y-8 p-8 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Tổng quan hệ thống</h2>
          <p className="text-gray-500 mt-1">Thống kê và hoạt động thời gian thực của Suleco Global Education.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all shadow-sm">
            <Calendar size={18} className="text-gray-400" />
            <span>30 ngày qua</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#001529] text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-sm shadow-slate-900/10">
            <Download size={18} />
            <span>Xuất báo cáo</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
                {React.cloneElement(stat.icon, { size: 24 })}
              </div>
              {stat.change && (
                <div className="flex items-center gap-1 text-emerald-600 text-sm font-bold bg-emerald-50 px-2 py-1 rounded-lg">
                  <TrendingUp size={14} />
                  {stat.change}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</h3>
              {stat.extra && (
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <Activity size={12} /> {stat.extra}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Activity Log */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-lg text-gray-900">Nhật ký hoạt động</h3>
              <button className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 group">
                Xem tất cả <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-gray-400 bg-gray-50/50">
                    <th className="px-6 py-4 font-semibold">Người thực hiện</th>
                    <th className="px-6 py-4 font-semibold">Hành động</th>
                    <th className="px-6 py-4 font-semibold">Loại thực thể</th>
                    <th className="px-6 py-4 font-semibold">Thời gian</th>
                    <th className="px-6 py-4 font-semibold">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {activities.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                            {item.user.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{item.user}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{item.action}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-gray-100 text-[10px] font-bold rounded text-gray-500">{item.type}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{item.time}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('text', 'bg')}`}></div>
                          <span className={`text-sm font-medium ${item.color}`}>{item.status}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="space-y-6">
          {/* Chart Widget Placeholder */}
          <div className="bg-gradient-to-br from-[#001529] to-[#1e293b] rounded-2xl p-6 text-white shadow-xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <Globe size={20} />
                <h4 className="font-bold">Di động toàn cầu</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">Trạng thái phê duyệt visa sinh viên theo thời gian thực tại các tổ chức đối tác.</p>
              
              {/* Mock Chart */}
              <div className="flex items-end gap-2 h-32 mb-4">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    key={i} 
                    className={`flex-1 rounded-t-lg ${i === 3 ? 'bg-orange-500' : 'bg-white/10 group-hover:bg-white/20'} transition-colors`}
                  />
                ))}
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
          </div>

          {/* Online Staff */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Nhân viên trực tuyến</h4>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-3">
                {onlineStaff.map((staff, i) => (
                  <img key={i} src={staff.img} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Staff" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-400">+12</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              15 nhân viên hiện đang quản lý cổng thông tin.
            </p>
          </div>

          {/* Help Widget */}
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 flex items-center justify-between group cursor-pointer hover:bg-orange-100 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:rotate-12 transition-transform">
                <UserCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-orange-900">Hỗ trợ kỹ thuật</p>
                <p className="text-xs text-orange-700">Liên hệ đội ngũ Dev</p>
              </div>
            </div>
            <ChevronRight className="text-orange-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
