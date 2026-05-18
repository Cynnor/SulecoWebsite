import React, { useState } from 'react';

/**
 * Component: ContactInfo
 * Trang cung cấp thông tin liên hệ và các văn phòng của Suleco
 */
const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const offices = [
    {
      title: "Trụ sở chính",
      description: "Trung tâm hành chính và tiếp nhận hồ sơ tại TP. Hồ Chí Minh.",
      address: "165 Trương Vĩnh Ký, P. Tân Thành, Q. Tân Phú, TP. HCM",
      phone: "(028) 3810 1999",
      email: "info@suleco.vn",
      hours: "Thứ 2 - Thứ 6: 08:00 - 17:00",
      iconBg: "bg-sky-900"
    },
    {
      title: "Chi nhánh Hà Nội",
      description: "Văn phòng đại diện và hỗ trợ đào tạo khu vực phía Bắc.",
      address: "Số 10, Ngõ 1, Đường Trần Thái Tông, Q. Cầu Giấy, Hà Nội",
      phone: "(024) 3795 0099",
      email: "hanoi@suleco.vn",
      hours: "Thứ 2 - Thứ 6: 08:30 - 17:30",
      iconBg: "bg-amber-500/10"
    },
    {
      title: "Trung tâm Đào tạo",
      description: "Cơ sở đào tạo ngôn ngữ và kỹ năng nghề nghiệp chuyên sâu.",
      address: "Đường số 4, CVPM Quang Trung, Q. 12, TP. HCM",
      phone: "(028) 3715 5000",
      email: "training@suleco.vn",
      hours: "Thứ 2 - Thứ 7: 07:30 - 17:00",
      iconBg: "bg-sky-900"
    }
  ];

  const socialLinks = [
    { name: "Facebook" },
    { name: "Instagram" },
    { name: "YouTube" },
    { name: "Zalo OA" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-sky-950/90 to-sky-950/70 py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-white/5 -skew-y-3"></div>
        <div className="relative z-10 max-w-[1280px] mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Thông tin liên hệ</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn trên con đường phát triển sự nghiệp toàn cầu.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="relative max-w-[1232px] mx-auto px-6 md:px-12 -mt-32 mb-24 z-20">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-neutral-300/30 hover:shadow-lg transition-shadow">
              <div className={`${office.iconBg} w-12 h-12 rounded-lg inline-flex justify-center items-center mb-6`}>
                <div className="w-5 h-4 bg-indigo-400"></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-sky-950 mb-2">{office.title}</h3>
              <p className="text-zinc-700 text-base mb-6 leading-relaxed">{office.description}</p>
              
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-4 h-5 bg-amber-500 flex-shrink-0 mt-1"></div>
                  <p className="text-slate-900 text-base leading-relaxed">{office.address}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-amber-500 flex-shrink-0"></div>
                  <p className="text-slate-900 text-base font-semibold">{office.phone}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-4 bg-amber-500 flex-shrink-0"></div>
                  <p className="text-slate-900 text-base">{office.email}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 bg-amber-500 flex-shrink-0"></div>
                  <p className="text-slate-900 text-base">{office.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Section */}
      <section className="bg-blue-50 py-20 px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl font-bold text-sky-950 mb-3">Kết nối với chúng tôi</h2>
          <p className="text-zinc-700 text-lg mb-8 max-w-2xl leading-relaxed">
            Theo dõi SULECO trên các nền tảng mạng xã hội để cập nhật nhanh nhất các thông tin tuyển sinh, đơn hàng XKLĐ và các hoạt động cộng đồng.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {socialLinks.map((social, idx) => (
              <button key={idx} className="px-6 py-3 bg-white rounded-xl border border-neutral-300 text-sky-950 font-normal hover:bg-blue-50 transition-colors flex items-center gap-3">
                <img src="https://placehold.co/24x24" alt={social.name} className="w-6 h-6" />
                {social.name}
              </button>
            ))}
          </div>

          {/* Consultation Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-neutral-300/50 shadow-md">
            <h3 className="text-2xl font-semibold text-sky-950 mb-8">Gửi yêu cầu tư vấn</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-700 text-base font-normal mb-2">Họ và tên</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nhập họ tên..."
                    className="w-full px-3 py-3.5 bg-slate-50 rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="block text-zinc-700 text-base font-normal mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại..."
                    className="w-full px-3 py-3.5 bg-slate-50 rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-700 text-base font-normal mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Địa chỉ email..."
                  className="w-full px-3 py-3.5 bg-slate-50 rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-zinc-700 text-base font-normal mb-2">Nội dung cần hỗ trợ</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Bạn quan tâm đến chương trình nào?"
                  rows="5"
                  className="w-full px-3 py-3 bg-slate-50 rounded-lg border border-neutral-300 text-gray-500 placeholder-gray-500 focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-500 rounded-xl text-yellow-900 text-base font-normal hover:bg-amber-600 transition-colors shadow-md"
              >
                Gửi thông tin ngay
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 bg-gray-200 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4605261129677!2d106.6293413!3d10.8138896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529330d71f661%3A0x6ce4e5b23bd38c98!2s165%20Tru%C6%A1ng%20V%C4%A9nh%20K%C3%BD%2C%20Qu%E1%BA%ADn%20T%C3%A2n%20Ph%C3%BA%2C%20TP.%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SULECO Office Map"
        ></iframe>
        <div className="absolute top-8 right-8 bg-white p-4 rounded-xl border border-neutral-300 shadow-md z-20">
          <p className="text-sky-950 text-base font-normal mb-2">Chỉ đường</p>
          <div className="flex gap-2">
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=165+Trương+Vĩnh+Ký+Quận+Tân+Phú+TP+Hồ+Chí+Minh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sky-950 rounded-lg hover:bg-sky-900 transition-colors"
            >
              <div className="w-4 h-4 bg-white"></div>
            </a>
            <a 
              href="https://maps.apple.com/?address=165+Trương+Vĩnh+Ký+Quận+Tân+Phú+TP+Hồ+Chí+Minh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sky-950 rounded-lg hover:bg-sky-900 transition-colors"
            >
              <div className="w-4 h-5 bg-white"></div>
            </a>
            <a 
              href="https://www.google.com/maps/place/165+Trương+Vĩnh+Ký+Quận+Tân+Phú+TP+Hồ+Chí+Minh/@10.8138896,106.6293413,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sky-950 rounded-lg hover:bg-sky-900 transition-colors"
            >
              <div className="w-3 h-5 bg-white"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;
