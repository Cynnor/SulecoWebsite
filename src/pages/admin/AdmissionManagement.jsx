import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  UserPlus, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Filter, 
  Download, 
  MoreVertical,
  Calendar,
  ExternalLink,
  MessageSquare
} from 'lucide-react';

const AdmissionManagement = () => {
  const stats = [
    { label: 'Hồ sơ mới', value: '124', icon: <UserPlus className="text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'Đang phỏng vấn', value: '48', icon: <MessageSquare className="text-orange-500" />, bg: 'bg-orange-50' },
    { label: 'Tỷ lệ thành công', value: '82%', icon: <CheckCircle2 className="text-emerald-500" />, bg: 'bg-emerald-50' },
    { label: 'Thất bại', value: '12', icon: <XCircle className="text-red-500" />, bg: 'bg-red-50' },
  ];

  const students = [
    {
      id: 'AK',
      name: 'Anish Kapoor',
      email: 'anish.k@example.com',
      course: 'MSc Data Science',
      university: 'University of London',
      source: 'Website',
      staff: 'Jane Doe',
      date: '12 thg 10, 2023',
      progress: 2,
      status: 'ĐÃ LIÊN HỆ',
      statusColor: 'text-blue-600',
      dotColor: 'bg-blue-500'
    },
    {
      id: 'ML',
      name: 'Meera Lingam',
      email: 'm.lingam@web.com',
      course: 'Nursing Diploma',
      university: 'Melbourne Institute',
      source: 'Mạng xã hội',
      staff: 'John Smith',
      date: '10 thg 10, 2023',
      progress: 3,
      status: 'ĐANG PHỎNG VẤN',
      statusColor: 'text-orange-600',
      dotColor: 'bg-orange-500'
    },
    {
      id: 'PT',
      name: 'Peter Thorne',
      email: 'p.thorne@provider.net',
      course: 'MBA Global',
      university: 'Toronto Business School',
      source: 'Giới thiệu',
      staff: 'Jane Doe',
      date: '08 thg 10, 2023',
      progress: 4,
      status: 'THÀNH CÔNG',
      statusColor: 'text-emerald-600',
      dotColor: 'bg-emerald-500'
    },
    {
      id: 'ST',
      name: 'Sita Thapa',
      email: 'sita.thapa@email.com',
      course: 'Bachelors IT',
      university: 'University of Auckland',
      source: 'Triển lãm',
      staff: 'Sarah Wilson',
      date: '05 thg 10, 2023',
      progress: 4,
      status: 'THẤT BẠI',
      statusColor: 'text-red-600',
      dotColor: 'bg-red-500'
    },
  ];

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Quản lý Tuyển sinh</h2>
          <p className="text-gray-500 mt-1">Xem xét và xử lý các quy trình nhập học của học viên.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all shadow-sm">
          <Download size={18} className="text-gray-400" />
          <span>Xuất CSV/Excel</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5"
          >
            <div className={`w-14 h-14 rounded-xl ${stat.bg} flex items-center justify-center`}>
              {React.cloneElement(stat.icon, { size: 28 })}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">Trạng thái</label>
          <select className="w-full bg-gray-50 border-none rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none">
            <option>Tất cả trạng thái</option>
            <option>Mới</option>
            <option>Đang xử lý</option>
            <option>Hoàn thành</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nguồn</label>
          <select className="w-full bg-gray-50 border-none rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none">
            <option>Tất cả nguồn</option>
            <option>Website</option>
            <option>Facebook</option>
            <option>Giới thiệu</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">Nhân viên phụ trách</label>
          <select className="w-full bg-gray-50 border-none rounded-xl py-2.5 px-4 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none">
            <option>Tất cả nhân viên</option>
            <option>Jane Doe</option>
            <option>John Smith</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase ml-1">Khoảng thời gian</label>
          <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              defaultValue="30 ngày qua" 
              className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
            />
          </div>
        </div>
        <button className="bg-[#001529] text-white py-2.5 px-6 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 h-[42px]">
          <Filter size={18} />
          <span>Áp dụng bộ lọc</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-gray-400 bg-gray-50/50 border-b border-gray-50">
                <th className="px-8 py-5 font-bold">Tên học viên</th>
                <th className="px-6 py-5 font-bold">Chương trình / Khóa học</th>
                <th className="px-6 py-5 font-bold">Nguồn</th>
                <th className="px-6 py-5 font-bold">Nhân viên phụ trách</th>
                <th className="px-6 py-5 font-bold">Ngày nộp</th>
                <th className="px-6 py-5 font-bold">Tiến trình / Trạng thái</th>
                <th className="px-8 py-5 font-bold text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {students.map((student, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                        student.status === 'THÀNH CÔNG' ? 'bg-emerald-50 text-emerald-600' : 
                        student.status === 'THẤT BẠI' ? 'bg-red-50 text-red-600' :
                        student.status === 'ĐANG PHỎNG VẤN' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {student.id}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{student.name}</p>
                        <p className="text-xs text-gray-400">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-gray-700">{student.course}</p>
                    <p className="text-xs text-gray-400">{student.university}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2.5 py-1 bg-blue-50 text-[10px] font-bold text-blue-600 rounded uppercase">{student.source}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-100 border border-white"></div>
                      <span className="text-sm text-gray-600 font-medium">{student.staff}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-500">{student.date}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((step) => (
                          <div 
                            key={step} 
                            className={`w-2 h-2 rounded-full transition-colors ${
                              step <= student.progress ? student.dotColor : 'bg-gray-200'
                            }`}
                          />
                        ))}
                        <span className={`text-[10px] font-bold ml-2 ${student.statusColor}`}>{student.status}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex justify-center">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600 transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-6 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-500">Hiển thị 1-10 trong số 248 học viên</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-400 hover:bg-gray-50">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#001529] text-white text-sm font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">3</button>
            <span className="flex items-end px-1 text-gray-400 pb-1">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">25</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-400 hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-600/40 z-20 group"
      >
        <UserPlus size={24} />
        <span className="absolute right-16 bg-[#001529] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">Thêm học viên mới</span>
      </motion.button>
    </div>
  );
};

export default AdmissionManagement;
