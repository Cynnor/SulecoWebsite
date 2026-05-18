import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Plus, 
  Download, 
  Search, 
  Filter, 
  Building2, 
  GraduationCap, 
  Wrench, 
  Activity,
  MoreVertical,
  Edit2,
  Trash2,
  CheckCircle2,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Globe
} from 'lucide-react';

const PartnerManagement = () => {
  const stats = [
    { label: 'Doanh nghiệp', value: '42', icon: <Building2 className="text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'Trường học', value: '156', icon: <GraduationCap className="text-orange-500" />, bg: 'bg-orange-50' },
    { label: 'Gara/Xưởng', value: '89', icon: <Wrench className="text-emerald-500" />, bg: 'bg-emerald-50' },
    { label: 'Yêu cầu đang hoạt động', value: '12', icon: <Activity className="text-purple-500" />, bg: 'bg-purple-50' },
  ];

  const partners = [
    {
      name: 'Global Tech Solutions',
      file: 'contract_v4.pdf',
      category: 'Doanh nghiệp',
      location: 'Singapore, CBD',
      status: 'Đã xác minh',
      statusColor: 'text-emerald-600',
      dotColor: 'bg-emerald-500',
      date: '12 Th10, 2023',
      icon: <Building2 className="text-white" />,
      iconBg: 'bg-slate-800'
    },
    {
      name: 'St. Lawrence Academy',
      file: 'mou_signed_24.pdf',
      category: 'Trường học',
      location: 'Melbourne, AU',
      status: 'Đã xác minh',
      statusColor: 'text-emerald-600',
      dotColor: 'bg-emerald-500',
      date: '05 Th1, 2024',
      icon: <GraduationCap className="text-white" />,
      iconBg: 'bg-orange-500'
    },
    {
      name: 'Euro-Auto Specialists',
      file: 'workshop_cert_B.png',
      category: 'Gara',
      location: 'Berlin, DE',
      status: 'Chờ xem xét',
      statusColor: 'text-gray-500',
      dotColor: 'bg-gray-300',
      date: '22 Th3, 2024',
      icon: <Wrench className="text-white" />,
      iconBg: 'bg-slate-400'
    },
    {
      name: 'Community Outreach NGO',
      file: 'non_profit_reg.pdf',
      category: 'Khác',
      location: 'Nairobi, KE',
      status: 'Đã xác minh',
      statusColor: 'text-emerald-600',
      dotColor: 'bg-emerald-500',
      date: '30 Th12, 2023',
      icon: <Globe className="text-white" />,
      iconBg: 'bg-blue-500'
    }
  ];

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Quản lý đối tác</h2>
          <p className="text-gray-500 mt-1">Cấu hình và giám sát các quan hệ đối tác tổ chức toàn cầu.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#001529] text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
            <Plus size={18} />
            <span>Thêm đối tác</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all shadow-sm">
            <Download size={18} className="text-gray-400" />
            <span>Xuất dữ liệu</span>
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
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 group hover:shadow-md transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              {React.cloneElement(stat.icon, { size: 28 })}
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex bg-gray-50 p-1 rounded-xl">
            <button className="px-4 py-2 bg-white text-[#001529] rounded-lg text-xs font-bold shadow-sm">Tất cả đối tác</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 rounded-lg text-xs font-bold transition-all">Doanh nghiệp</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 rounded-lg text-xs font-bold transition-all">Trường học</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 rounded-lg text-xs font-bold transition-all">Gara</button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 rounded-lg text-xs font-bold transition-all">Khác</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
            <Filter size={16} />
            <span>Bộ lọc</span>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-gray-400 bg-gray-50/30 border-b border-gray-50">
                <th className="px-8 py-5 font-bold">Tên đối tác</th>
                <th className="px-6 py-5 font-bold">Danh mục</th>
                <th className="px-6 py-5 font-bold">Vị trí</th>
                <th className="px-6 py-5 font-bold">Trạng thái</th>
                <th className="px-6 py-5 font-bold">Ngày tham gia</th>
                <th className="px-8 py-5 font-bold text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {partners.map((partner, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${partner.iconBg} flex items-center justify-center shadow-sm`}>
                        {partner.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{partner.name}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{partner.file}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-2.5 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 rounded uppercase">
                      {partner.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 text-sm text-gray-600">
                      <MapPin size={14} className="text-gray-400" />
                      {partner.location}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${partner.dotColor}`}></div>
                      <span className={`text-xs font-bold ${partner.statusColor}`}>{partner.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-gray-500">{partner.date}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex justify-center gap-3">
                      <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-[#001529] transition-all">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">Đang hiển thị 1 đến 4 trên tổng số 302 đối tác</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-400 hover:bg-gray-50 transition-all">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#001529] text-white text-xs font-bold shadow-lg shadow-slate-900/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 text-gray-400 hover:bg-gray-50 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerManagement;
