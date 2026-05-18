import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Plus, 
  Settings2, 
  Search, 
  MoreHorizontal, 
  Clock, 
  MapPin, 
  Calendar,
  ExternalLink,
  Edit3,
  Trash2,
  Filter,
  CheckCircle2,
  TrendingUp,
  Image as ImageIcon,
  ChevronRight,
  Monitor,
  HeartPulse,
  Car,
  Coffee
} from 'lucide-react';

const CourseManagement = () => {
  const courses = [
    {
      title: 'Kỹ thuật xe điện nâng cao',
      category: 'Kỹ thuật ô tô',
      duration: '24 Tháng (Toàn thời gian)',
      location: 'Tokyo, Nhật Bản',
      intake: 'Tháng 9/2024',
      price: '$12,500 / Năm',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'bg-orange-500',
    },
    {
      title: 'Quản trị khách sạn quốc tế',
      category: 'Dịch vụ',
      duration: '18 Tháng',
      location: 'Sydney, Úc',
      intake: 'Tháng 7/2024',
      price: '$15,000 / Năm',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'bg-yellow-500',
    },
    {
      title: 'Điều dưỡng chuyên nghiệp (Đức)',
      category: 'Y dược',
      duration: '36 Tháng',
      location: 'Berlin/Munich, Đức',
      intake: 'Tháng 10/2024',
      price: 'Hỗ trợ học bổng',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      badge: 'bg-blue-500',
    }
  ];

  const categories = [
    { name: 'Dịch vụ', count: 8, icon: <Coffee size={20} /> },
    { name: 'Kỹ thuật ô tô', count: 12, icon: <Car size={20} /> },
    { name: 'CNTT', count: 15, icon: <Monitor size={20} /> },
    { name: 'Y dược', count: 6, icon: <HeartPulse size={20} /> },
  ];

  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span>Bảng điều khiển</span>
            <ChevronRight size={12} />
            <span className="text-gray-900 font-bold">Quản lý khóa học</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Chương trình học thuật</h2>
          <p className="text-gray-500 mt-1">Quản lý và cấu hình các khóa học đào tạo nghề và giáo dục quốc tế.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all shadow-sm">
            <Settings2 size={18} className="text-gray-400" />
            <span>Quản lý danh mục</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-xl text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
            <Plus size={20} />
            <span>Tạo khóa học mới</span>
          </button>
        </div>
      </div>

      {/* Filter & Stats Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
          <div className="flex items-center gap-2 border-r border-gray-100 pr-6">
            <Filter size={18} className="text-gray-400" />
            <span className="text-sm font-bold text-gray-600">Bộ lọc khóa học</span>
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-[10px] font-bold text-gray-400 rounded-full">24 Tổng số khóa học</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-[#001529] text-white rounded-lg text-xs font-bold">Tất cả chương trình</button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors">Dịch vụ F&B</button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors">Kỹ thuật ô tô</button>
            <button className="px-4 py-2 bg-gray-50 text-gray-500 rounded-lg text-xs font-bold hover:bg-gray-100 transition-colors">Y tế</button>
          </div>
        </div>
        <div className="lg:w-80 bg-[#001529] rounded-2xl p-6 text-white shadow-xl shadow-slate-900/20 flex flex-col justify-center relative overflow-hidden group">
          <div className="relative z-10 flex justify-between items-start">
             <div>
                <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Trạng thái ghi danh</p>
                <h3 className="text-3xl font-bold">842</h3>
                <p className="text-[10px] text-gray-400 mt-1">Sinh viên đang theo học trên toàn thế giới</p>
             </div>
             <TrendingUp className="text-orange-500" size={24} />
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="h-full bg-orange-500" />
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all"></div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-bold text-white ${course.badge}`}>
                {course.category}
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-all">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">{course.title}</h3>
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                   <Clock size={14} className="text-orange-500" />
                   <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                   <MapPin size={14} className="text-orange-500" />
                   <span>Cơ sở: {course.location}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Calendar size={14} className="text-orange-500" />
                   <span>Kỳ nhập học tới: {course.intake}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900">{course.price}</span>
                <div className="flex gap-2">
                   <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-orange-600 transition-all">
                      <Edit3 size={16} />
                   </button>
                   <button className="px-4 py-2 bg-gray-50 text-gray-900 rounded-lg text-xs font-bold hover:bg-gray-100 transition-all">
                      Xem chi tiết
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Category Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-xl font-bold text-gray-900">Quản lý danh mục</h3>
           <button className="flex items-center gap-2 px-4 py-2 bg-[#001529] text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-all">
              <Plus size={16} />
              <span>Danh mục mới</span>
           </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100/50 hover:border-orange-200 hover:bg-white hover:shadow-md transition-all group cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white rounded-xl shadow-sm text-orange-600 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <ExternalLink size={14} className="text-gray-300 group-hover:text-orange-500" />
              </div>
              <div className="mt-6">
                <h4 className="font-bold text-gray-900">{cat.name}</h4>
                <p className="text-xs text-gray-400 mt-1">{cat.count} Khóa học</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Draft Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
         <div className="bg-[#001529] px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
               <Edit3 size={20} className="text-orange-500" />
               <span className="font-bold">Bản thảo: Xuất sắc trong quản trị kinh doanh</span>
            </div>
            <div className="flex gap-3">
               <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition-all">Hủy bỏ</button>
               <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition-all shadow-lg shadow-orange-600/30">Lưu & Xuất bản</button>
            </div>
         </div>
         <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
               <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tổng quan khóa học</h4>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                     <p className="text-sm text-gray-600 leading-relaxed italic">
                        "Chương trình toàn diện này được thiết kế để trang bị cho các nhà lãnh đạo doanh nghiệp tương lai những công cụ và chiến lược cần thiết để thành công trên thị trường toàn cầu..."
                     </p>
                     <ul className="mt-6 space-y-3">
                        {['Lãnh đạo tổ chức chiến lược', 'Hệ thống quản trị tài chính toàn cầu', 'Chiến thuật tiếp thị đa văn hóa'].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                              <CheckCircle2 size={16} className="text-emerald-500" />
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Yêu cầu đầu vào</h4>
                  <div className="bg-blue-50/30 rounded-2xl p-6 border border-blue-100/50">
                     <p className="text-sm text-blue-600 font-medium mb-4">Ứng viên phải đáp ứng các tiêu chí sau để ghi danh:</p>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] font-bold">6.5</div>
                           <span className="text-xs font-bold text-gray-700">IELTS 6.5+ Tổng điểm</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">3.0</div>
                           <span className="text-xs font-bold text-gray-700">GPA Tối thiểu 3.0/4.0</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="space-y-8">
               <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tài liệu đa phương tiện</h4>
                  <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-orange-300 hover:bg-orange-50/20 transition-all">
                     <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 mb-4 group-hover:text-orange-500 transition-colors">
                        <ImageIcon size={24} />
                     </div>
                     <p className="text-xs font-bold text-gray-700">Tải lên ảnh bìa</p>
                     <p className="text-[10px] text-gray-400 mt-1">Kích thước gợi ý: 1280 x 720px</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cài đặt khóa học</h4>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
                     <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Địa điểm học</label>
                        <select className="w-full mt-1 bg-white border border-gray-100 rounded-xl py-2.5 px-4 text-xs font-bold text-gray-700 outline-none focus:ring-2 focus:ring-orange-500/20">
                           <option>Cơ sở TP.HCM - TP.HCM</option>
                        </select>
                     </div>
                     <div>
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Thời gian</label>
                        <input type="text" defaultValue="24 Tháng" className="w-full mt-1 bg-white border border-gray-100 rounded-xl py-2.5 px-4 text-xs font-bold text-gray-700 outline-none focus:ring-2 focus:ring-orange-500/20" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#001529] text-white rounded-full flex items-center justify-center shadow-2xl shadow-slate-900/40 z-20 group"
      >
        <Plus size={24} />
      </motion.button>
    </div>
  );
};

export default CourseManagement;
