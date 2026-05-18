import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Plus, Settings2, Search, MoreHorizontal, Clock, MapPin, Calendar, ExternalLink, Edit3, Trash2, Filter, CheckCircle2, TrendingUp, Image as ImageIcon, ChevronRight, Monitor, HeartPulse, Car, Coffee } from 'lucide-react';
import { getCourses, getCourseCategories, deleteCourse, deleteCourseCategory } from '../../services/courseService';

const categoryIcons = { 'Kỹ thuật ô tô': <Car size={20} />, 'Dịch vụ': <Coffee size={20} />, 'CNTT': <Monitor size={20} />, 'Y dược': <HeartPulse size={20} /> };

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courseList, catRes] = await Promise.all([
          getCourses({ limit: 100 }),
          getCourseCategories({ limit: 100 }),
        ]);
        setCourses(Array.isArray(courseList) ? courseList : []);
        setCategories(catRes?.data?.categories || catRes?.categories || []);
      } catch (err) {
        console.error('CourseManagement fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Xóa khóa học này?')) return;
    try { await deleteCourse(id); setCourses((p) => p.filter((c) => c._id !== id)); } catch (e) { alert('Xóa thất bại'); }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Xóa danh mục này?')) return;
    try { await deleteCourseCategory(id); setCategories((p) => p.filter((c) => c._id !== id)); } catch (e) { alert('Xóa thất bại'); }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-96"><div className="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full"></div></div>;
  }

  const categoryBadgeBg = (name) => {
    const map = { 'Kỹ thuật ô tô': 'bg-orange-500', 'Dịch vụ': 'bg-yellow-500', 'Y dược': 'bg-blue-500', 'CNTT': 'bg-purple-500' };
    return map[name] || 'bg-gray-500';
  };

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span>Bảng điều khiển</span><ChevronRight size={12} /><span className="text-gray-900 font-bold">Quản lý khóa học</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Chương trình học thuật</h2>
          <p className="text-gray-500 mt-1">Quản lý và cấu hình các khóa học đào tạo nghề và giáo dục quốc tế.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all shadow-sm">
            <Settings2 size={18} className="text-gray-400" /><span>Quản lý danh mục</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-xl text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
            <Plus size={20} /><span>Tạo khóa học mới</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
          <div className="flex items-center gap-2 border-r border-gray-100 pr-6">
            <Filter size={18} className="text-gray-400" />
            <span className="text-sm font-bold text-gray-600">Bộ lọc khóa học</span>
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-400 rounded-full">{courses.length} Tổng số khóa học</span>
          </div>
        </div>
        <div className="lg:w-80 bg-[#001529] rounded-2xl p-6 text-white shadow-xl shadow-slate-900/20 flex flex-col justify-center relative overflow-hidden group">
          <div className="relative z-10 flex justify-between items-start">
            <div>
              <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Khóa học đang hoạt động</p>
              <h3 className="text-3xl font-bold">{courses.length}</h3>
              <p className="text-[10px] text-gray-400 mt-1">{categories.length} danh mục</p>
            </div>
            <TrendingUp className="text-orange-500" size={24} />
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, courses.length)}%` }} className="h-full bg-orange-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <motion.div key={course._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all group"
          >
            <div className="relative h-48 overflow-hidden bg-gray-100">
              {course.imageUrl ? (
                <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300"><ImageIcon size={48} /></div>
              )}
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-bold text-white ${categoryBadgeBg(course.categoryId?.name)}`}>
                {course.categoryId?.name || 'Chưa phân loại'}
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-all">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">{course.title}</h3>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2"><Clock size={14} className="text-orange-500" /><span>{course.courseDuration || course.duration || 'Chưa cập nhật'}</span></div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-orange-500" /><span>Cơ sở: {course.campus || 'Chưa cập nhật'}</span></div>
                <div className="flex items-center gap-2"><Calendar size={14} className="text-orange-500" /><span>Kỳ nhập học: {course.intake || 'Chưa cập nhật'}</span></div>
              </div>
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">{course.tuitionFee ? `${Number(course.tuitionFee).toLocaleString()} VNĐ` : 'Liên hệ'}</span>
                <div className="flex gap-2">
                  <button onClick={() => handleDelete(course._id)} className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition-all"><Trash2 size={16} /></button>
                  <button className="px-4 py-2 bg-gray-50 text-gray-900 rounded-lg text-xs font-bold hover:bg-gray-100 transition-all">Xem chi tiết</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {categories.length > 0 && (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Quản lý danh mục</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#001529] text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">
              <Plus size={16} /><span>Danh mục mới</span>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat._id} className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100/50 hover:border-orange-200 hover:bg-white hover:shadow-md transition-all group cursor-pointer">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-orange-600 group-hover:scale-110 transition-transform">
                    {categoryIcons[cat.name] || <BookOpen size={20} />}
                  </div>
                  <button onClick={() => handleDeleteCategory(cat._id)} className="text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
                <div className="mt-6">
                  <h4 className="font-bold text-gray-900">{cat.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{cat.displayOrder || 0} Thứ tự</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseManagement;
