import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, BookOpen, FileText, ChevronRight, Calendar, Download, TrendingUp, Activity, Globe, UserCheck } from 'lucide-react';
import { getAdmissions } from '../../services/admissionService';
import { getCourses } from '../../services/courseService';
import { getPartners } from '../../services/partnerService';
import { getPosts } from '../../services/postService';
import { getUsers } from '../../services/userService';

const AdminDashboard = () => {
  const [data, setData] = useState({ admissions: 0, pendingAdmissions: 0, courses: 0, posts: 0, partners: 0, users: 0 });
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [admRes, courses, partnersRes, postsRes, usersRes] = await Promise.allSettled([
          getAdmissions({ limit: 1 }),
          getCourses({ limit: 100 }),
          getPartners({ limit: 1 }),
          getPosts({ limit: 1 }),
          getUsers({ limit: 1 }),
        ]);

        const totalAdmissions = admRes.status === 'fulfilled' ? Number(admRes.value?.data?.total || admRes.value?.total || admRes.value?.data?.admissions?.length || 0) : 0;
        const pendingAdm = admRes.status === 'fulfilled' ? Number(admRes.value?.data?.pending || admRes.value?.pending || 0) : 0;
        const totalCourses = Array.isArray(courses) ? courses.length : (courses.value ? (Array.isArray(courses.value) ? courses.value.length : 0) : 0);
        const totalPartners = partnersRes.status === 'fulfilled' ? Number(partnersRes.value?.data?.total || partnersRes.value?.total || 0) : 0;
        const totalPosts = postsRes.status === 'fulfilled' ? Number(postsRes.value?.data?.total || postsRes.value?.total || 0) : 0;
        const totalUsers = usersRes.status === 'fulfilled' ? Number(usersRes.value?.data?.total || usersRes.value?.total || 0) : 0;

        setData({
          admissions: totalAdmissions || 0,
          pendingAdmissions: pendingAdm || 0,
          courses: totalCourses || 0,
          posts: totalPosts || 0,
          partners: totalPartners || 0,
          users: totalUsers || 0,
        });
      } catch (err) {
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const stats = [
    { label: 'Tổng hồ sơ', value: data.admissions.toLocaleString(), change: '', icon: <Users className="text-blue-600" />, bg: 'bg-blue-50', trend: 'up' },
    { label: 'Yêu cầu chờ xử lý', value: data.pendingAdmissions.toLocaleString(), change: '', icon: <Clock className="text-orange-600" />, bg: 'bg-orange-50', trend: 'up' },
    { label: 'Khóa học', value: data.courses.toLocaleString(), icon: <BookOpen className="text-purple-600" />, bg: 'bg-purple-50', extra: 'Đang hoạt động' },
    { label: 'Bài viết', value: data.posts.toLocaleString(), icon: <FileText className="text-emerald-600" />, bg: 'bg-emerald-50', extra: 'Đã xuất bản' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-8 max-w-[1600px] mx-auto">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={index}
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
              {stat.extra && <p className="text-xs text-gray-400 mt-2 flex items-center gap-1"><Activity size={12} /> {stat.extra}</p>}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h3 className="font-bold text-lg text-gray-900">Tổng quan dữ liệu</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-6">
              {[
                { label: 'Đối tác', value: data.partners, color: 'bg-blue-500' },
                { label: 'Người dùng', value: data.users, color: 'bg-emerald-500' },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{item.value.toLocaleString()}</p>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full mt-4 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} className={`h-full ${item.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#001529] to-[#1e293b] rounded-2xl p-6 text-white shadow-xl shadow-slate-900/20 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <Globe size={20} />
                <h4 className="font-bold">Di động toàn cầu</h4>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">Trạng thái phê duyệt visa sinh viên theo thời gian thực tại các tổ chức đối tác.</p>
              <div className="flex items-end gap-2 h-32 mb-4">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: i * 0.1 }} key={i}
                    className={`flex-1 rounded-t-lg ${i === 3 ? 'bg-orange-500' : 'bg-white/10 group-hover:bg-white/20'} transition-colors`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Tài khoản người dùng</h4>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              {data.users} người dùng trong hệ thống.
            </p>
          </div>

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
