import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  Eye, 
  Send, 
  Settings, 
  Tag, 
  ChevronRight,
  Bold,
  Italic,
  List,
  Quote,
  Type,
  Link2,
  MoreVertical,
  X,
  Clock,
  Save
} from 'lucide-react';

const PostEditor = () => {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-gray-400">
             <span>Bảng điều khiển</span>
             <ChevronRight size={12} />
             <span className="text-orange-600 font-bold underline underline-offset-4">Trình soạn thảo</span>
             <ChevronRight size={12} />
             <span>Thư viện</span>
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="flex items-center gap-2 text-xs text-gray-500 italic">
            <Save size={14} />
            <span>Lưu lần cuối hôm nay lúc 11:42 AM</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
            <Eye size={18} className="text-gray-400" />
            <span>Xem trước</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-orange-600 text-white rounded-xl text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">
            <Send size={18} />
            <span>Xuất bản thay đổi</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Editor Area */}
        <div className="lg:col-span-3 space-y-6">
           <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 min-h-[800px] relative">
              {/* Title Input */}
              <textarea 
                placeholder="Nhập tiêu đề bài viết..."
                className="w-full text-5xl font-black text-gray-900 border-none outline-none resize-none placeholder:text-gray-200 leading-tight mb-4"
                rows={2}
                defaultValue="Cơ hội toàn cầu: Kỹ sư Nhật Bản 2024"
              />
              
              {/* Slug Input */}
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl w-fit mb-10 border border-gray-100">
                 <Link2 size={14} className="text-gray-400" />
                 <span className="text-xs font-bold text-gray-400">Slug:</span>
                 <span className="text-xs font-bold text-blue-600">engineering-careers-japan-2024</span>
                 <Edit3 size={12} className="text-gray-400 cursor-pointer hover:text-orange-500 ml-2" />
              </div>

              {/* Content Area */}
              <div className="prose prose-orange max-w-none space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cảnh quan công nghiệp của Nhật Bản đang trải qua một sự chuyển đổi to lớn. Đối với các kỹ sư quốc tế, đây là cầu nối độc đáo giữa sự xuất sắc truyền thống và các công nghệ tự động hóa tiên tiến.
                </p>

                <div className="relative rounded-2xl overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Japan Industry" 
                    className="w-full h-[400px] object-cover"
                   />
                   <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="bg-white p-3 rounded-full text-gray-900 shadow-xl"><ImageIcon size={24} /></button>
                   </div>
                   <p className="text-center text-xs text-gray-400 mt-4 italic">Thêm chú thích ảnh tại đây...</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-8 py-4 my-8">
                   <p className="text-2xl font-bold text-gray-900 leading-relaxed">
                      "Nhu cầu về kỹ sư song ngữ tại Nhật Bản đang ở mức cao kỷ lục, tạo ra một 'kỷ nguyên vàng' cho nhân tài nước ngoài."
                   </p>
                   <p className="text-sm text-gray-400 mt-4">— Kenji Sato, Giám đốc tuyển dụng</p>
                </div>

                <div className="space-y-4 pt-4">
                   <h3 className="text-xl font-bold text-gray-900">Yêu cầu chính:</h3>
                   <ul className="space-y-4 list-none pl-0">
                      {[
                        'Trình độ tiếng Nhật JLPT N2',
                        'Tối thiểu 3 năm kinh nghiệm trong lĩnh vực Robot hoặc hệ thống nhúng',
                        'Sẵn sàng chuyển đến khu vực Tokyo mở rộng'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-600">
                           <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                           <span>{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              </div>

              {/* Sticky Toolbar */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-2xl rounded-2xl p-2 flex items-center gap-1">
                 <button className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-orange-50 text-gray-400 hover:text-orange-600 transition-all group">
                    <Type size={20} />
                    <span className="text-[10px] font-bold mt-1 uppercase">Tiêu đề</span>
                 </button>
                 <button className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-orange-50 text-orange-600 transition-all shadow-sm">
                    <FileText size={20} />
                    <span className="text-[10px] font-bold mt-1 uppercase">Văn bản</span>
                 </button>
                 <button className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-orange-50 text-gray-400 hover:text-orange-600 transition-all">
                    <ImageIcon size={20} />
                    <span className="text-[10px] font-bold mt-1 uppercase">Hình ảnh</span>
                 </button>
                 <button className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-orange-50 text-gray-400 hover:text-orange-600 transition-all">
                    <List size={20} />
                    <span className="text-[10px] font-bold mt-1 uppercase">Danh sách</span>
                 </button>
                 <button className="flex flex-col items-center justify-center w-16 h-16 rounded-xl hover:bg-orange-50 text-gray-400 hover:text-orange-600 transition-all">
                    <Quote size={20} />
                    <span className="text-[10px] font-bold mt-1 uppercase">Trích dẫn</span>
                 </button>
              </div>
           </div>
        </div>

        {/* Sidebar Settings Area */}
        <div className="space-y-6">
           {/* General Settings */}
           <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                 <Settings size={18} className="text-gray-400" />
                 <h4 className="font-bold text-gray-900">Cài đặt bài viết</h4>
              </div>
              
              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Danh mục chính</label>
                 <select className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-orange-500/20">
                    <option>Sự nghiệp kỹ sư</option>
                    <option>Tin tức du học</option>
                    <option>Cẩm nang cuộc sống</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Trạng thái xuất bản</label>
                 <div className="flex items-center justify-between p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                       <span className="text-xs font-bold text-blue-900">Bản nháp</span>
                    </div>
                    <MoreVertical size={14} className="text-gray-400" />
                 </div>
              </div>

              <div className="flex items-center justify-between p-1">
                 <div className="flex items-center gap-2 text-gray-600">
                    <Eye size={16} />
                    <span className="text-xs font-bold">Hiển thị công khai</span>
                 </div>
                 <div className="w-10 h-5 bg-orange-500 rounded-full relative p-1 cursor-pointer">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                 </div>
              </div>
           </div>

           {/* Cover Image */}
           <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                 <ImageIcon size={18} className="text-gray-400" />
                 <h4 className="font-bold text-gray-900">Ảnh bìa</h4>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-50 border-2 border-dashed border-gray-100 group cursor-pointer hover:border-orange-200 transition-all">
                 <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">Thay đổi ảnh</div>
              </div>
              <p className="text-[10px] text-gray-400 text-center">Kích thước đề xuất: 1200 x 630px</p>
           </div>

           {/* SEO & Tags */}
           <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                 <Tag size={18} className="text-gray-400" />
                 <h4 className="font-bold text-gray-900">SEO & Thẻ</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                 {['Nhật Bản', 'Kỹ thuật', 'Cuộc sống nước ngoài'].map((tag, i) => (
                    <span key={i} className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-gray-600 border border-gray-100 group">
                       {tag}
                       <X size={12} className="text-gray-300 hover:text-red-500 cursor-pointer" />
                    </span>
                 ))}
              </div>
              <div className="pt-2">
                 <input 
                  type="text" 
                  placeholder="Thêm thẻ..." 
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-2.5 px-4 text-xs font-medium outline-none focus:ring-2 focus:ring-orange-500/20"
                 />
              </div>
           </div>
        </div>
      </div>

      {/* Help Widget */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-orange-600/40 z-20 group"
      >
        <div className="w-6 h-6 flex items-center justify-center text-xl font-bold italic">?</div>
      </motion.button>
    </div>
  );
};

// Internal Edit3 icon as it's not imported but used in slug section
const Edit3 = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

export default PostEditor;
