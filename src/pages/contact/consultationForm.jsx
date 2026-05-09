import React, { useState } from 'react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Yêu cầu của bạn đã được gửi đi! Ban tư vấn sẽ liên hệ lại trong vòng 24 giờ làm việc.");
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 pb-24">
      {/* Banner */}
      <section className="relative overflow-hidden bg-slate-900 py-20 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-700/10 skew-x-12 translate-x-10"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <div className="inline-block border-b-2 border-blue-500 pb-2 mb-6">
             <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">Consultation Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
            Đăng ký tư vấn chuyên sâu
          </h1>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-2xl mx-auto uppercase tracking-[0.2em] leading-relaxed">
            Để lại thông tin để nhận lộ trình đào tạo và định hướng nghề nghiệp miễn phí.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div>
             <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-8 border-l-4 border-blue-700 pl-6">Chúng tôi lắng nghe ước mơ của bạn</h2>
             <p className="text-slate-500 text-lg leading-relaxed mb-12 text-justify">
                Đội ngũ tư vấn tại Suleco City không chỉ cung cấp thông tin khóa học, chúng tôi giúp bạn khám phá thế mạnh bản thân và lựa chọn con đường sự nghiệp phù hợp nhất với xu thế thị trường toàn cầu.
             </p>
             
             <div className="space-y-8 mb-12">
                {[
                  { title: "Tư vấn 1:1 chuyên sâu", desc: "Trực tiếp cùng chuyên gia định hướng nghề nghiệp." },
                  { title: "Tham quan cơ sở vật chất", desc: "Trải nghiệm thực tế xưởng thực hành và môi trường học tập." },
                  { title: "Thiết kế lộ trình học phí", desc: "Hỗ trợ các giải pháp tài chính linh hoạt cho gia đình." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                     <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md shrink-0 text-blue-700 font-black">0{i+1}</div>
                     <div>
                        <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="p-8 bg-blue-700 rounded-3xl text-white shadow-xl shadow-blue-900/20">
                <p className="text-xs font-black uppercase tracking-widest mb-2 opacity-70">Hotline Tư vấn 24/7</p>
                <p className="text-3xl font-black">1900 1234</p>
             </div>
          </div>

          {/* Form Column */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-12 md:p-16 rounded-[3rem] border border-slate-200 shadow-2xl space-y-10">
               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Họ và tên của bạn *</label>
                  <input 
                    type="text" name="name" required 
                    placeholder="VD: Nguyễn Văn A"
                    className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                    onChange={handleChange}
                  />
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Số điện thoại *</label>
                     <input 
                        type="tel" name="phone" required 
                        placeholder="09xx xxx xxx"
                        className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                        onChange={handleChange}
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email liên hệ</label>
                     <input 
                        type="email" name="email"
                        placeholder="example@gmail.com"
                        className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800"
                        onChange={handleChange}
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Bạn quan tâm đến chương trình nào? *</label>
                  <select 
                    name="interest" required
                    className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800 appearance-none"
                    onChange={handleChange}
                  >
                    <option value="">Chọn chương trình</option>
                    <option value="chinh-quy">Hệ chính quy (Công nghệ ô tô, Cơ khí...)</option>
                    <option value="ngan-han">Hệ ngắn hạn (Hàn, CNC...)</option>
                    <option value="ngoai-ngu">Ngoại ngữ (Nhật, Anh, Trung)</option>
                    <option value="tuyen-sinh">Thông tin tuyển sinh 2024</option>
                  </select>
               </div>

               <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Lời nhắn / Câu hỏi của bạn</label>
                  <textarea 
                    name="message" rows="4"
                    placeholder="Hãy cho chúng tôi biết nguyện vọng của bạn..."
                    className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl focus:border-blue-700 outline-none transition-all font-bold text-slate-800 resize-none"
                    onChange={handleChange}
                  ></textarea>
               </div>

               <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/10"
               >
                  Gửi yêu cầu tư vấn
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
