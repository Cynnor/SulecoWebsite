import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, CheckCircle2, XCircle, Search, Filter, Download, MoreVertical, Calendar, ExternalLink, MessageSquare } from 'lucide-react';
import { getAdmissions, updateAdmissionStatus, exportAdmissions } from '../../services/admissionService';

const statusConfig = {
  new: { label: 'MỚI', color: 'text-blue-600', dot: 'bg-blue-500' },
  contacted: { label: 'ĐÃ LIÊN HỆ', color: 'text-blue-600', dot: 'bg-blue-500' },
  interviewing: { label: 'ĐANG PHỎNG VẤN', color: 'text-orange-600', dot: 'bg-orange-500' },
  accepted: { label: 'THÀNH CÔNG', color: 'text-emerald-600', dot: 'bg-emerald-500' },
  rejected: { label: 'THẤT BẠI', color: 'text-red-600', dot: 'bg-red-500' },
};

const AdmissionManagement = () => {
  const [admissions, setAdmissions] = useState([]);
  const [stats, setStats] = useState({ new: 0, interviewing: 0, accepted: 0, rejected: 0 });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getAdmissions({ limit: 100 });
      const list = res?.data?.admissions || res?.admissions || [];
      setAdmissions(list);
      const counts = { new: 0, interviewing: 0, accepted: 0, rejected: 0 };
      list.forEach((a) => {
        const s = (a.status || '').toLowerCase();
        if (s === 'new' || s === 'mới') counts.new++;
        else if (s.includes('interview') || s.includes('phỏng vấn')) counts.interviewing++;
        else if (s === 'accepted' || s === 'thành công') counts.accepted++;
        else if (s === 'rejected' || s === 'thất bại') counts.rejected++;
      });
      setStats(counts);
    } catch (err) {
      console.error('AdmissionManagement fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateAdmissionStatus(id, { status });
      fetchData();
    } catch (e) {
      alert('Cập nhật thất bại');
    }
  };

  const handleExport = async () => {
    try {
      const blob = await exportAdmissions();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'admissions.xlsx'; a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      alert('Xuất thất bại');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-96"><div className="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full"></div></div>;
  }

  const total = admissions.length;
  const statCards = [
    { label: 'Hồ sơ mới', value: stats.new, icon: <UserPlus className="text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'Đang phỏng vấn', value: stats.interviewing, icon: <MessageSquare className="text-orange-500" />, bg: 'bg-orange-50' },
    { label: 'Thành công', value: stats.accepted, icon: <CheckCircle2 className="text-emerald-500" />, bg: 'bg-emerald-50' },
    { label: 'Thất bại', value: stats.rejected, icon: <XCircle className="text-red-500" />, bg: 'bg-red-50' },
  ];

  const avatarBadge = (status) => {
    const s = (status || '').toLowerCase();
    if (s === 'accepted' || s === 'thành công') return 'bg-emerald-50 text-emerald-600';
    if (s === 'rejected' || s === 'thất bại') return 'bg-red-50 text-red-600';
    if (s.includes('interview') || s.includes('phỏng vấn')) return 'bg-orange-50 text-orange-600';
    return 'bg-blue-50 text-blue-600';
  };

  const getStatusInfo = (status) => {
    const s = (status || '').toLowerCase();
    if (s === 'new' || s === 'mới' || s === 'contacted' || s === 'đã liên hệ') return statusConfig.contacted;
    if (s.includes('interview') || s.includes('phỏng vấn')) return statusConfig.interviewing;
    if (s === 'accepted' || s === 'thành công') return statusConfig.accepted;
    if (s === 'rejected' || s === 'thất bại') return statusConfig.rejected;
    return { label: status || 'MỚI', color: 'text-blue-600', dot: 'bg-blue-500' };
  };

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Quản lý Tuyển sinh</h2>
          <p className="text-gray-500 mt-1">Xem xét và xử lý các quy trình nhập học của học viên.</p>
        </div>
        <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all shadow-sm">
          <Download size={18} className="text-gray-400" /><span>Xuất CSV/Excel</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={index}
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

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-gray-400 bg-gray-50/50 border-b border-gray-50">
                <th className="px-8 py-5 font-bold">Học viên</th>
                <th className="px-6 py-5 font-bold">Khóa học</th>
                <th className="px-6 py-5 font-bold">Ngày nộp</th>
                <th className="px-6 py-5 font-bold">Trạng thái</th>
                <th className="px-8 py-5 font-bold text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {admissions.map((a) => {
                const st = getStatusInfo(a.status);
                const initials = (a.fullName || a.name || '??').split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
                return (
                  <tr key={a._id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${avatarBadge(a.status)}`}>{initials}</div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{a.fullName || a.name}</p>
                          <p className="text-xs text-gray-400">{a.email || a.phone}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-gray-700">{a.intendedCourse || a.course || 'Chưa chọn'}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm text-gray-500">{a.createdAt ? new Date(a.createdAt).toLocaleDateString('vi-VN') : '-'}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${st.dot}`}></div>
                        <span className={`text-xs font-bold ${st.color}`}>{st.label}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex justify-center gap-2">
                        <select
                          value={a.status || 'new'}
                          onChange={(e) => handleStatusChange(a._id, e.target.value)}
                          className="text-[10px] bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-orange-500/20"
                        >
                          <option value="new">Mới</option>
                          <option value="contacted">Đã liên hệ</option>
                          <option value="interviewing">Đang phỏng vấn</option>
                          <option value="accepted">Thành công</option>
                          <option value="rejected">Thất bại</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {admissions.length === 0 && (
          <div className="p-12 text-center text-gray-400 text-sm">Chưa có hồ sơ tuyển sinh nào.</div>
        )}

        <div className="p-6 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-500">Hiển thị {admissions.length} hồ sơ</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionManagement;
