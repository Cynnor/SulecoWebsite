import React, { useState } from 'react';

const OnlineApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    address: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký! Ban tuyển sinh sẽ liên hệ với bạn trong thời gian sớm nhất.");
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 pb-24">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <div className="inline-block border-b-2 border-blue-500 pb-2 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">E-Admission Portal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Đăng ký xét tuyển trực tiếp
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto uppercase tracking-[0.2em] leading-relaxed">
            Nhanh chóng - Tiện lợi - Chính xác. Bước đầu tiên để gia nhập Suleco City.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-16">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Instructions Column */}
          <div className="lg:col-span-1 space-y-10">
             <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-8 border-l-4 border-blue-700 pl-4">Lưu ý khi đăng ký</h3>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <span className="w-8 h-8 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center font-bold shrink-0">1</span>
                      <p className="text-slate-500 text-sm leading-relaxed">Điền đầy đủ và chính xác thông tin cá nhân theo CCCD.</p>
                   </div>
                   <div className="flex gap-4">
                      <span className="w-8 h-8 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center font-bold shrink-0">2</span>
                      <p className="text-slate-500 text-sm leading-relaxed">Chuẩn bị ảnh chụp hoặc bản scan học bạ/bằng tốt nghiệp (PDF/JPG/PNG).</p>
                   </div>
                   <div className="flex gap-4">
                      <span className="w-8 h-8 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center font-bold shrink-0">3</span>
                      <p className="text-slate-500 text-sm leading-relaxed">Dung lượng file tải lên không quá 10MB.</p>
                   </div>
                </div>
             </div>

             <div className="bg-slate-900 p-10 rounded-3xl text-white shadow-xl">
                <h3 className="text-xl font-black uppercase tracking-widest mb-6">Hỗ trợ kỹ thuật</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">Nếu bạn gặp khó khăn trong quá trình tải hồ sơ, vui lòng liên hệ:</p>
                <div className="space-y-4">
                   <p className="flex items-center gap-3 text-sm font-bold"><span className="text-blue-500">📞</span> 028 xxx xxxx</p>
                   <p className="flex items-center gap-3 text-sm font-bold"><span className="text-blue-500">📧</span> tech.support@suleco.edu.vn</p>
                </div>
             </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-12 md:p-16 rounded-[3rem] border border-slate-200 shadow-2xl space-y-12">
               
               <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Họ và tên học viên *</label>
                     <input 
                        type="text" name="fullName" required 
                        placeholder="NGUYỄN VĂN A"
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                        onChange={handleChange}
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Số điện thoại *</label>
                     <input 
                        type="tel" name="phone" required 
                        placeholder="09xx xxx xxx"
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                        onChange={handleChange}
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email liên hệ *</label>
                     <input 
                        type="email" name="email" required 
                        placeholder="example@gmail.com"
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                        onChange={handleChange}
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nguyện vọng đào tạo *</label>
                     <select 
                        name="program" required
                        className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                        onChange={handleChange}
                     >
                        <option value="">Chọn chương trình</option>
                        <option value="chinh-quy">Hệ chính quy</option>
                        <option value="ngan-han">Hệ ngắn hạn</option>
                        <option value="ngoai-ngu">Đào tạo ngoại ngữ</option>
                        <option value="lien-ket">Liên kết đào tạo</option>
                     </select>
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Địa chỉ thường trú *</label>
                  <textarea 
                     name="address" rows="3" required
                     placeholder="Số nhà, đường, phường/xã, quận/huyện..."
                     className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                     onChange={handleChange}
                  ></textarea>
               </div>

               <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Đính kèm hồ sơ (Học bạ/Bằng tốt nghiệp) *</label>
                  <div className="relative group">
                     <input 
                        type="file" required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                        onChange={handleFileChange}
                     />
                     <div className="border-2 border-dashed border-slate-200 p-12 rounded-3xl text-center group-hover:border-blue-700 group-hover:bg-blue-50 transition-all">
                        <span className="text-4xl mb-4 block">📁</span>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                           {formData.file ? formData.file.name : "Kéo thả file hoặc click để tải lên"}
                        </p>
                        <p className="text-xs text-slate-400 mt-2">Định dạng hỗ trợ: PDF, JPG, PNG (Max 10MB)</p>
                     </div>
                  </div>
               </div>

               <div className="flex items-center gap-3">
                  <input type="checkbox" required className="w-5 h-5 rounded accent-blue-700" />
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Tôi cam đoan những thông tin trên là chính xác và hoàn toàn chịu trách nhiệm.</label>
               </div>

               <button 
                  type="submit"
                  className="w-full bg-blue-700 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm hover:bg-slate-900 transition-all shadow-xl shadow-blue-900/20"
               >
                  Gửi hồ sơ xét tuyển
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineApplication;
