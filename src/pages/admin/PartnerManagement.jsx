import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Plus, Download, Search, Filter, Building2, GraduationCap, Wrench, Activity, MoreVertical, Edit2, Trash2, CheckCircle2, Clock, MapPin, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { getPartners, deletePartner } from '../../services/partnerService';

const PartnerManagement = () => {
  const [partners, setPartners] = useState([]);
  const [stats, setStats] = useState({ enterprises: 0, schools: 0, garages: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPartners({ limit: 100 });
        const list = res?.data?.partners || res?.partners || [];
        setPartners(list);
        const counts = { enterprises: 0, schools: 0, garages: 0, total: list.length };
        list.forEach((p) => {
          const cat = (p.category || p.categoryId?.name || '').toLowerCase();
          if (cat.includes('doanh nghiệp') || cat.includes('enterprise')) counts.enterprises++;
          else if (cat.includes('trường') || cat.includes('school')) counts.schools++;
          else if (cat.includes('gara') || cat.includes('garage')) counts.garages++;
        });
        setStats(counts);
      } catch (err) {
        console.error('PartnerManagement fetch error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Xóa đối tác này?')) return;
    try { await deletePartner(id); setPartners((p) => p.filter((x) => x._id !== id)); } catch (e) { alert('Xóa thất bại'); }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-96"><div className="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full"></div></div>;
  }

  const statCards = [
    { label: 'Doanh nghiệp', value: stats.enterprises, icon: <Building2 className="text-blue-500" />, bg: 'bg-blue-50' },
    { label: 'Trường học', value: stats.schools, icon: <GraduationCap className="text-orange-500" />, bg: 'bg-orange-50' },
    { label: 'Gara/Xưởng', value: stats.garages, icon: <Wrench className="text-emerald-500" />, bg: 'bg-emerald-50' },
    { label: 'Tổng số', value: stats.total, icon: <Activity className="text-purple-500" />, bg: 'bg-purple-50' },
  ];

  const categoryIcon = (cat) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('trường') || c.includes('school')) return <GraduationCap className="text-white" />;
    if (c.includes('gara') || c.includes('garage')) return <Wrench className="text-white" />;
    return <Building2 className="text-white" />;
  };

  const categoryIconBg = (cat) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('trường') || c.includes('school')) return 'bg-orange-500';
    if (c.includes('gara') || c.includes('garage')) return 'bg-slate-400';
    return 'bg-slate-800';
  };

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Quản lý đối tác</h2>
          <p className="text-gray-500 mt-1">Cấu hình và giám sát các quan hệ đối tác tổ chức toàn cầu.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-[#001529] text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
            <Plus size={18} /><span>Thêm đối tác</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all shadow-sm">
            <Download size={18} className="text-gray-400" /><span>Xuất dữ liệu</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={index}
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

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex bg-gray-50 p-1 rounded-xl">
            <button className="px-4 py-2 bg-white text-[#001529] rounded-lg text-xs font-bold shadow-sm">Tất cả đối tác</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
            <Filter size={16} /><span>Bộ lọc</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-gray-400 bg-gray-50/30 border-b border-gray-50">
                <th className="px-8 py-5 font-bold">Tên đối tác</th>
                <th className="px-6 py-5 font-bold">Danh mục</th>
                <th className="px-6 py-5 font-bold">Vị trí</th>
                <th className="px-6 py-5 font-bold">Trạng thái</th>
                <th className="px-6 py-5 font-bold">Ngày tạo</th>
                <th className="px-8 py-5 font-bold text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {partners.map((partner) => {
                const catName = partner.category || partner.categoryId?.name || 'Khác';
                return (
                  <tr key={partner._id} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl ${categoryIconBg(catName)} flex items-center justify-center shadow-sm`}>
                          {categoryIcon(catName)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{partner.name}</p>
                          {partner.website && <p className="text-[10px] text-gray-400 font-medium">{partner.website}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-2.5 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 rounded uppercase">{catName}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <MapPin size={14} className="text-gray-400" />
                        {partner.location || partner.address || 'Chưa cập nhật'}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${partner.isActive ? 'bg-emerald-500' : 'bg-gray-300'}`}></div>
                        <span className={`text-xs font-bold ${partner.isActive ? 'text-emerald-600' : 'text-gray-500'}`}>
                          {partner.isActive ? 'Đã xác minh' : 'Không hoạt động'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-sm text-gray-500">{partner.createdAt ? new Date(partner.createdAt).toLocaleDateString('vi-VN') : '-'}</span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex justify-center gap-3">
                        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-[#001529] transition-all"><Edit2 size={16} /></button>
                        <button onClick={() => handleDelete(partner._id)} className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-600 transition-all"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {partners.length === 0 && (
          <div className="p-12 text-center text-gray-400 text-sm">Chưa có đối tác nào.</div>
        )}

        <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex items-center justify-between">
          <p className="text-sm text-gray-500 font-medium">Đang hiển thị {partners.length} đối tác</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerManagement;
