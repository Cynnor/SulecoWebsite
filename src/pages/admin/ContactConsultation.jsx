import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  UserCheck, 
  Filter, 
  Search, 
  Plus, 
  MoreVertical, 
  Clock, 
  Calendar,
  ChevronRight,
  TrendingUp,
  FileText,
  Mail,
  Phone
} from 'lucide-react';

const ContactConsultation = () => {
  const stats = [
    { label: 'Yêu cầu mới', value: '24', icon: <MessageSquare className="text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'Đã chuyển đổi', value: '156', icon: <UserCheck className="text-emerald-500" />, bg: 'bg-emerald-50' },
  ];

  const requests = [
    {
      name: 'Marcus Thorne',
      email: 'marcus.t@email.com',
      status: 'YÊU CẦU MỚI',
      statusBg: 'bg-orange-100 text-orange-700',
      service: 'Du học (Đức)',
      content: 'Tôi đang muốn nộp hồ sơ thạc sỹ ngành Kỹ thuật Cơ khí...',
      time: '2 giờ trước',
      type: 'consultation'
    },
    {
      name: 'Sarah Jenkins',
      phone: '+44 789 012 345',
      status: 'ĐÃ LIÊN HỆ',
      statusBg: 'bg-blue-100 text-blue-700',
      service: 'Hỗ trợ Visa làm việc',
      assigned: 'Elena Rodriguez',
      time: 'Hôm qua, 4:30 CH',
      type: 'contact'
    },
    {
      name: 'Kenji Takahashi',
      email: 'k.taka@tokyo.net',
      status: 'ĐANG XỬ LÝ',
      statusBg: 'bg-purple-100 text-purple-700',
      service: 'Visa làm Điều dưỡng',
      progress: 65,
      time: '12 Th10, 2023',
      type: 'processing'
    },
    {
      name: 'Amara Okafor',
      email: 'a.okafor@connect.ng',
      status: 'YÊU CẦU MỚI',
      statusBg: 'bg-orange-100 text-orange-700',
      service: 'MBA tại Canada',
      content: 'Tôi có 5 năm kinh nghiệm trong lĩnh vực tài chính và...',
      time: '5 giờ trước',
      type: 'consultation'
    }
  ];

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Liên hệ & Tư vấn</h2>
          <p className="text-gray-500 mt-1">Quản lý các yêu cầu di động toàn cầu và tư vấn sinh viên.</p>
        </div>
        <div className="flex gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                {React.cloneElement(stat.icon, { size: 20 })}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-2 border-r border-gray-100 mr-2">
          <Filter size={18} className="text-gray-400" />
          <span className="text-sm font-bold text-gray-600">Bộ lọc</span>
        </div>
        
        <select className="bg-gray-50 border-none rounded-xl py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-orange-500/20 outline-none">
          <option>Tất cả trạng thái</option>
        </select>

        <div className="relative">
          <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            defaultValue="Khoảng thời gian: Tuần này" 
            className="bg-gray-50 border-none rounded-xl py-2 pl-10 pr-4 text-sm font-medium focus:ring-2 focus:ring-orange-500/20 outline-none w-56"
          />
        </div>

        <select className="bg-gray-50 border-none rounded-xl py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-orange-500/20 outline-none">
          <option>Dịch vụ: Tất cả</option>
        </select>

        <div className="flex-1"></div>

        <button className="bg-[#001529] text-white py-2 px-6 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
          Áp dụng
        </button>
        <button className="text-gray-400 text-sm font-bold hover:text-gray-600 px-2">
          Xóa
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {requests.map((req, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-bold px-2 py-1 rounded ${req.statusBg}`}>
                  {req.status}
                </span>
                <button className="text-gray-300 hover:text-gray-500">
                  <MoreVertical size={18} />
                </button>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{req.name}</h3>
              <div className="flex items-center gap-2 text-gray-400 text-xs mb-6">
                {req.email ? <Mail size={14} /> : <Phone size={14} />}
                <span>{req.email || req.phone}</span>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400 font-medium">Dịch vụ mong muốn:</span>
                  <span className="text-gray-900 font-bold">{req.service}</span>
                </div>

                {req.content && (
                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100/50">
                    <p className="text-[10px] font-bold text-blue-400 uppercase mb-2">Nội dung tóm tắt:</p>
                    <p className="text-sm text-gray-600 leading-relaxed italic">"{req.content}"</p>
                  </div>
                )}

                {req.assigned && (
                  <div className="flex items-center gap-2 py-2">
                    <div className="w-5 h-5 rounded-full bg-amber-100"></div>
                    <span className="text-xs text-gray-500 font-medium">Phụ trách: <span className="text-gray-700 font-bold">{req.assigned}</span></span>
                  </div>
                )}

                {req.progress && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold text-gray-400">
                      <span>HOÀN THIỆN HỒ SƠ: {req.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${req.progress}%` }}
                        className="h-full bg-orange-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold">
                  <Clock size={12} />
                  {req.time}
                </div>
                <button className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                  req.type === 'consultation' ? 'bg-[#001529] text-white hover:bg-slate-800' : 
                  req.type === 'processing' ? 'bg-orange-500 text-white hover:bg-orange-600' :
                  'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}>
                  {req.type === 'consultation' ? 'Phản hồi' : req.type === 'processing' ? 'Cập nhật' : 'Xem lịch trình'}
                </button>
              </div>
            </motion.div>
          ))}

          {/* Add New Card */}
          <button className="bg-white rounded-2xl border-2 border-dashed border-gray-100 p-8 flex flex-col items-center justify-center text-center hover:border-orange-200 hover:bg-orange-50/20 transition-all group">
            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-all">
              <Plus size={32} />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Thêm yêu cầu mới</h4>
            <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">Ghi nhận thủ công các cuộc tư vấn qua điện thoại hoặc khách trực tiếp.</p>
          </button>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Source Distribution Chart */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp size={20} className="text-orange-500" />
              <h4 className="font-bold text-gray-900 uppercase text-xs tracking-wider">Phân bổ nguồn đơn</h4>
            </div>
            
            <div className="space-y-6">
              {[
                { label: 'Đại học', value: 45, color: 'bg-[#001529]' },
                { label: 'Việc làm', value: 35, color: 'bg-orange-500' },
                { label: 'Thị thực (Visa)', value: 20, color: 'bg-gray-400' },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="text-gray-900">{item.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.value}%` }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-10 py-3 text-sm font-bold text-gray-500 border-t border-gray-50 hover:text-orange-600 transition-colors">
              Tải báo cáo hàng tuần
            </button>
          </div>

          {/* Help Widget */}
          <div className="bg-[#001529] rounded-2xl p-8 text-white relative overflow-hidden group">
             <div className="relative z-10">
                <FileText size={40} className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Tài liệu hướng dẫn</h4>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Quy trình xử lý yêu cầu và các bước tư vấn chuẩn cho nhân viên mới.</p>
                <button className="flex items-center gap-2 text-sm font-bold text-orange-500 group-hover:gap-3 transition-all">
                  Xem ngay <ChevronRight size={18} />
                </button>
             </div>
             <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactConsultation;
