import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Image as ImageIcon, 
  MapPin, 
  Link2, 
  Phone, 
  Mail, 
  Save, 
  X, 
  ShieldCheck, 
  ChevronRight, 
  Navigation 
} from 'lucide-react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const SettingsPage = () => {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Cài đặt hệ thống</h2>
          <p className="text-gray-500 mt-1">Quản lý cấu hình toàn cầu, thương hiệu và các kênh liên hệ của tổ chức.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
            Hủy bỏ
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-orange-600 text-white rounded-xl text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
            <Save size={18} />
            <span>Lưu thay đổi</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Visual Identity Section */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <ImageIcon size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Nhận diện hình ảnh</h3>
            </div>

            <div className="space-y-4">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Ảnh bìa chính</label>
              <div className="relative aspect-[1920/600] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 group cursor-pointer">
                 <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                  alt="Cover" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Thay đổi ảnh bìa</div>
              </div>
              <p className="text-[10px] text-gray-400 italic">Kích thước khuyến nghị: 1920x800px. Hỗ trợ JPG, PNG.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Slogan chính</label>
                <input 
                  type="text" 
                  defaultValue="Empowering Careers, Bridging Borders" 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-orange-500/20 outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Văn bản phụ</label>
                <input 
                  type="text" 
                  defaultValue="Vietnam's leading education & overseas manpower center." 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-orange-500/20 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Contact & Location Section */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Liên hệ & Vị trí</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Hotline hỗ trợ</label>
                <div className="relative">
                   <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input 
                    type="text" 
                    defaultValue="+84 28 3844 1328" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-orange-500/20"
                   />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Địa chỉ Email</label>
                <div className="relative">
                   <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                   <input 
                    type="email" 
                    defaultValue="info@suleco.vn" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-orange-500/20"
                   />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase ml-1">Địa chỉ văn phòng</label>
              <textarea 
                defaultValue="165 Truong Chinh Street, Ward 12, Tan Binh District, Ho Chi Minh City, Vietnam" 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:ring-2 focus:ring-orange-500/20 min-h-[100px] resize-none"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Settings Area */}
        <div className="space-y-6">
          {/* Social Integration */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <Link2 size={20} />
              </div>
              <h3 className="font-bold text-gray-900">Tích hợp mạng xã hội</h3>
            </div>
            
            <div className="space-y-4">
               {[
                 { label: 'Zalo OA', value: 'zalo.me/sulecovietnam', icon: <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold text-white">Z</div> },
                 { label: 'Trang Facebook', value: 'facebook.com/suleco', icon: <FaFacebook size={18} className="text-blue-600" /> },
                 { label: 'LinkedIn', value: 'linkedin.com/company/suleco', icon: <FaLinkedin size={18} className="text-blue-700" /> },
               ].map((item, i) => (
                 <div key={i} className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">{item.label}</label>
                    <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-3">
                       {item.icon}
                       <input type="text" defaultValue={item.value} className="bg-transparent border-none outline-none text-xs font-medium text-gray-600 flex-1" />
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Map Preview Widget */}
          <div className="bg-[#001529] rounded-3xl overflow-hidden shadow-xl shadow-slate-900/20">
             <div className="p-6">
                <h4 className="text-white font-bold text-sm mb-4">Xem trước vị trí văn phòng</h4>
             </div>
             <div className="h-48 relative group">
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/pin-s-l+f97316(106.6436,10.7981)/106.6436,10.7981,14/600x400?access_token=pk.eyJ1IjoicGxhY2Vob2xkZXIiLCJhIjoiY2p4eHh4eHh4eHh4eHh4eHh4eHh4eHh4In0" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  alt="Map"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-8 h-8 bg-orange-500 rounded-full animate-ping opacity-20"></div>
                   <MapPin className="text-orange-500 relative z-10" size={32} />
                </div>
             </div>
             <div className="p-4">
                <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                   <Navigation size={14} />
                   <span>Chỉnh sửa tọa độ</span>
                </button>
             </div>
          </div>

          {/* System Health Widget */}
          <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 space-y-4">
             <div className="flex items-center gap-3 text-orange-900">
                <ShieldCheck size={24} />
                <span className="font-bold">Tính toàn vẹn hệ thống</span>
             </div>
             <p className="text-xs text-orange-700 leading-relaxed">
                Lần kiểm tra cấu hình cuối cùng được thực hiện cách đây 2 giờ bởi <span className="font-bold">admin_system</span>.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
