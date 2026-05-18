/**
 * Component: ConsultationForm
 * Trang form đăng ký tư vấn và thông tin khóa học cụ thể
 */
import { useState } from 'react';
import { submitContact } from '../../services/contactService';

export default function ConsultationForm() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitContact({ fullName: form.fullName, phone: form.phone, email: form.email || undefined, message: form.message || undefined });
      setSent(true);
      setForm({ fullName: '', phone: '', email: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Gửi yêu cầu thất bại, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-20 pb-24">
        {/* Hero Section */}
        <div className="relative flex h-[500px] w-full flex-col justify-center overflow-hidden rounded-b-3xl">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://placehold.co/1280x500"
            alt="Course Banner"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 to-sky-950/20" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
            <div className="max-w-[672px] rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <h1 className="font-montserrat text-3xl font-bold leading-tight text-white md:text-5xl">
                CHC33021 CERTIFICATE III IN
                <br />
                INDIVIDUAL SUPPORT
              </h1>

              <p className="mt-4 text-lg leading-7 text-white/90">
                Khởi đầu sự nghiệp chuyên nghiệp trong ngành chăm sóc sức khỏe tại Úc với chứng chỉ tiêu chuẩn quốc tế.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-lg bg-amber-500 px-8 py-4 text-base font-medium text-white transition hover:bg-amber-600">
                  APPLY ONLINE
                </button>

                <button className="rounded-lg border border-white bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                  DOWNLOAD BROCHURE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid w-full max-w-[1232px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_380px]">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Course Details */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 font-montserrat text-3xl font-bold text-sky-950">
                Chi Tiết Khóa Học
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {[
                  ["MÃ KHÓA HỌC", "CHC33021"],
                  ["THỜI LƯỢNG", "52 Tuần (Bao gồm kỳ nghỉ)"],
                  ["KỲ NHẬP HỌC", "Tháng 1, 4, 7, 10"],
                  ["CƠ SỞ ĐÀO TẠO", "Suleco City Campus"],
                  ["HÌNH THỨC HỌC", "Trực tiếp (Face-to-face)"],
                  ["THỰC TẬP THỰC TẾ", "120 Giờ bắt buộc"],
                ].map(([title, value], index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-blue-50 p-5"
                  >
<p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                      {title}
                    </p>
                    <p className="mt-2 text-base font-bold text-sky-950">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Overview */}
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-sky-950">
                Tổng Quan Khóa Học
              </h2>

              <div className="mt-5 space-y-5 text-base leading-7 text-zinc-700">
                <p>
                  Chứng chỉ III về Hỗ trợ Cá nhân (CHC33021) phản ánh vai trò của những người làm việc trong môi trường cộng đồng hoặc khu dân cư.
                </p>

                <p>
                  Công việc bao gồm việc sử dụng sự thận trọng và phán đoán liên quan đến hỗ trợ cá nhân cũng như chịu trách nhiệm về các kết quả đầu ra của chính mình.
                </p>

                <div className="space-y-4">
                  {[
                    "Đào tạo kỹ năng chăm sóc sức khỏe và vệ sinh cá nhân chuyên sâu.",
                    "Hỗ trợ người cao tuổi trong sinh hoạt hàng ngày và các hoạt động cộng đồng.",
                    "Phát triển kỹ năng giao tiếp và làm việc trong môi trường đa văn hóa.",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-3 w-3 rounded-full bg-amber-500" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="rounded-2xl border-l-8 border-amber-500 bg-sky-900 p-8 text-white">
              <h2 className="font-montserrat text-3xl font-bold">
                Yêu Cầu Đầu Vào
              </h2>

              <p className="mt-4 text-base leading-7 text-white/90">
                Học sinh phải từ 18 tuổi trở lên tại thời điểm nhập học và hoàn thành lớp 12 hoặc tương đương.
              </p>
            </div>

            {/* English Requirement */}
            <div className="rounded-2xl bg-blue-50 p-8">
              <h2 className="font-montserrat text-3xl font-bold text-sky-950">
                Điều kiện Tiếng Anh
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-700">
                Để tham gia chương trình, sinh viên quốc tế cần đáp ứng một trong các tiêu chuẩn sau:
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  ["IELTS Academic", "5.5", "Không kỹ năng nào dưới 5.0"],
                  ["PTE Academic", "42", "Hoặc bài kiểm tra tương đương"],
].map(([title, score, desc], index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
                  >
                    <p className="text-base font-bold text-yellow-700">
                      {title}
                    </p>

                    <h3 className="mt-2 text-4xl font-bold text-slate-900">
                      {score}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-zinc-500">
                      ({desc})
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {[
                "Cấu Trúc Khóa Học",
                "Các Đơn Vị Học Tập (Course Units)",
                "Lộ Trình Nghề Nghiệp",
                "Phương Pháp Đào Tạo",
                "Câu Hỏi Thường Gặp (FAQs)",
              ].map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white"
                >
                  <button className="flex w-full items-center justify-between p-6 text-left">
                    <span className="font-montserrat text-lg font-semibold text-sky-950">
                      {item}
                    </span>

                    <span className="text-amber-600">+</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div>
            <div className="sticky top-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl">
              <h2 className="font-montserrat text-3xl font-bold text-sky-950">
                Đăng Ký Tư Vấn
              </h2>

              <p className="mt-3 text-base leading-7 text-zinc-700">
                Vui lòng điền thông tin, chúng tôi sẽ liên hệ lại ngay trong 24h.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {sent && (
                  <div className="rounded-xl bg-emerald-50 border border-emerald-300 p-4 text-emerald-700 text-sm font-semibold text-center">
                    Yêu cầu tư vấn đã được gửi thành công! Chúng tôi sẽ liên hệ bạn sớm.
                  </div>
                )}
                {error && (
                  <div className="rounded-xl bg-red-50 border border-red-300 p-4 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {!sent && (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                        Họ và Tên *
                      </label>
                      <input type="text" name="fullName" required value={form.fullName} onChange={handleChange}
                        placeholder="Nhập họ tên của bạn"
                        className="w-full rounded-xl border border-neutral-300 bg-blue-50 px-4 py-4 outline-none transition focus:border-sky-950"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                        Số Điện Thoại *
                      </label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="Ví dụ: 0912 345 678"
                        className="w-full rounded-xl border border-neutral-300 bg-blue-50 px-4 py-4 outline-none transition focus:border-sky-950"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                        Email
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="email@vi-du.com"
                        className="w-full rounded-xl border border-neutral-300 bg-blue-50 px-4 py-4 outline-none transition focus:border-sky-950"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold uppercase tracking-wide text-zinc-500">
                        Lời Nhắn
                      </label>
                      <textarea name="message" rows={5} value={form.message} onChange={handleChange}
                        placeholder="Bạn cần tư vấn thêm điều gì?"
                        className="w-full rounded-xl border border-neutral-300 bg-blue-50 px-4 py-4 outline-none transition focus:border-sky-950"
                      />
                    </div>

                    <button type="submit" disabled={loading}
                      className="w-full rounded-xl bg-amber-500 py-4 text-base font-semibold text-white transition hover:bg-amber-600 disabled:opacity-60"
                    >
                      {loading ? 'ĐANG GỬI...' : 'GỬI YÊU CẦU NGAY'}
                    </button>
                  </>
                )}
              </form>

              <div className="mt-8 border-t border-neutral-200 pt-8 space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    Hotline tư vấn 24/7
                  </p>

                  <p className="mt-1 text-3xl font-bold text-sky-950">
                    1900 63 64 65
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    Email tuyển sinh
                  </p>

                  <p className="mt-1 text-lg font-bold text-sky-950">
                    info@suleco.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative w-full overflow-hidden bg-sky-950 py-24">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-10"
            src="https://placehold.co/1280x397"
            alt="Background"
          />

          <div className="relative z-10 mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center">
            <h2 className="font-montserrat text-4xl font-bold leading-tight text-white md:text-6xl">
              Your Dreams, Your Success!
            </h2>

            <p className="mt-5 max-w-[700px] text-lg leading-8 text-white/90">
Hãy để Suleco đồng hành cùng bạn trên con đường kiến tạo tương lai tại quốc tế. Đăng ký ngay hôm nay để nhận ưu đãi học bổng lên đến 20%.
            </p>

            <button className="mt-10 rounded-full bg-amber-500 px-12 py-5 text-xl font-semibold text-white transition hover:bg-amber-600">
              APPLY ONLINE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}