import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitAdmission } from '../../services/admissionService';

/* ─── COMPONENT ─────────────────────────────────────── */
const OnlineApplication = () => {
  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    program: 'Thực tập sinh Nhật Bản',
    language: '',
    note: '',
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agree) return;
    setLoading(true);
    setError('');
    try {
      await submitAdmission({
        fullName: form.fullName,
        dateOfBirth: form.dob ? form.dob.split('-').reverse().join('/') : undefined,
        phone: form.phone,
        email: form.email || undefined,
        address: form.address || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Gửi hồ sơ thất bại, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">

      {/* ══════════════════════════════════════════════
          HERO — bg-sky-950, py-16, centered
      ══════════════════════════════════════════════ */}
      <section className="relative w-full py-16 bg-sky-950 overflow-hidden flex justify-center items-start">
        <img
          src="https://placehold.co/1280x259"
          alt="Banner"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 w-full max-w-[1280px] px-6 flex flex-col justify-start items-center gap-3.5">
          <h1 className="text-center text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">
            Đăng ký xét tuyển trực tuyến
          </h1>
          <p className="text-center text-blue-100 text-lg font-normal font-['Inter'] leading-7 max-w-[672px]">
            Bắt đầu hành trình chinh phục tri thức và cơ hội nghề nghiệp quốc tế cùng Suleco. Quy trình nhanh chóng, minh bạch và chuyên nghiệp.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MAIN — sidebar (col-1) + form (col-2)
      ══════════════════════════════════════════════ */}
      <div className="w-full max-w-[1280px] mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          {/* ── LEFT SIDEBAR ── */}
          <div className="lg:col-span-1 flex flex-col gap-6 sticky top-6">

            {/* Progress tracker card */}
            <div className="p-8 bg-blue-50 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-8">
              <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">
                Tiến trình đăng ký
              </h3>

              {/* Steps */}
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                {/* Step 1 — done */}
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex justify-center items-center shrink-0">
                    <span className="text-yellow-900 text-base font-bold font-['Inter'] leading-6">1</span>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-sky-950 text-base font-normal font-['Inter'] leading-6">Thông tin cá nhân</p>
                    <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-5">Hoàn tất 100%</p>
                  </div>
                </div>

                {/* Step 2 — current */}
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="w-8 h-8 bg-sky-900 rounded-full flex justify-center items-center shrink-0">
                    <span className="text-indigo-400 text-base font-bold font-['Inter'] leading-6">2</span>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-sky-950 text-base font-normal font-['Inter'] leading-6">Nguyện vọng đào tạo</p>
                    <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-5">Đang thực hiện...</p>
                  </div>
                </div>

                {/* Step 3 — pending */}
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="w-8 h-8 rounded-full outline outline-2 outline-offset-[-2px] outline-zinc-500 flex justify-center items-center shrink-0">
                    <span className="text-zinc-500 text-base font-bold font-['Inter'] leading-6">3</span>
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-zinc-500 text-base font-normal font-['Inter'] leading-6">Hồ sơ đính kèm</p>
                    <p className="text-zinc-500 text-sm font-normal font-['Inter'] leading-5">Chưa bắt đầu</p>
                  </div>
                </div>
              </div>

              {/* Guidance box */}
              <div className="self-stretch px-4 pt-6 pb-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500/30 flex flex-col justify-start items-start gap-2">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="w-5 h-5 bg-yellow-800 rounded-sm" />
                  <span className="text-yellow-800 text-base font-bold font-['Inter'] leading-6">Hướng dẫn chi tiết</span>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  {[
                    'Điền chính xác họ tên theo CCCD.',
                    'Ảnh hồ sơ nên chụp trên nền trắng.',
                    'Các file đính kèm định dạng PDF, JPG (Dưới 5MB).',
                    'Suleco sẽ liên hệ lại trong vòng 24h.',
                  ].map((tip, i) => (
                    <p key={i} className="self-stretch text-zinc-700 text-sm font-normal font-['Inter'] leading-5">• {tip}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT FORM ── */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 px-12 pt-12 pb-16 bg-white rounded-xl shadow-md outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-12"
          >

            {/* ── SECTION 1: THÔNG TIN CÁ NHÂN ── */}
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="border-b-2 border-amber-500 pb-1">
                <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">1. Thông tin cá nhân</h2>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {/* Họ và tên */}
                <div className="self-stretch flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Họ và tên *</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={form.fullName}
                    onChange={handleChange}
                    className="self-stretch px-4 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all"
                  />
                </div>

                {/* Ngày sinh */}
                <div className="self-stretch flex flex-col gap-2">
                  <label htmlFor="dob" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Ngày sinh *</label>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    value={form.dob}
                    onChange={handleChange}
                    className="self-stretch px-4 py-3 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all"
                  />
                </div>

                {/* Số điện thoại */}
                <div className="self-stretch flex flex-col gap-2">
                  <label htmlFor="phone" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Số điện thoại *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="090 123 4567"
                    value={form.phone}
                    onChange={handleChange}
                    className="self-stretch px-4 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="self-stretch flex flex-col gap-2">
                  <label htmlFor="email" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Email liên hệ *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="self-stretch px-4 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all"
                  />
                </div>

                {/* Địa chỉ */}
                <div className="self-stretch flex flex-col gap-2">
                  <label htmlFor="address" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Địa chỉ thường trú *</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện..."
                    value={form.address}
                    onChange={handleChange}
                    className="self-stretch px-4 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* ── SECTION 2: NGUYỆN VỌNG ĐÀO TẠO ── */}
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="border-b-2 border-amber-500 pb-1">
                <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">2. Nguyện vọng đào tạo</h2>
              </div>

              <div className="self-stretch flex flex-col justify-start items-start gap-6">
                {/* Chọn chương trình */}
                <div className="self-stretch flex flex-col gap-2">
                  <label htmlFor="program" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Chọn chương trình học *</label>
                  <select
                    id="program"
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    className="self-stretch px-4 py-3 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all cursor-pointer"
                  >
                    <option>Thực tập sinh Nhật Bản</option>
                    <option>Du học nghề Hàn Quốc</option>
                    <option>Điều dưỡng CHLB Đức</option>
                    <option>Lao động kỳ nghỉ Úc</option>
                  </select>
                </div>

                {/* Ngoại ngữ mong muốn (radio) */}
                <div className="flex flex-col gap-2">
                  <p className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Ngoại ngữ mong muốn</p>
                  <div className="inline-flex justify-start items-center gap-6 flex-wrap">
                    {['Tiếng Nhật', 'Tiếng Đức', 'Khác'].map((lang) => (
                      <label key={lang} className="flex justify-start items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="language"
                          value={lang}
                          checked={form.language === lang}
                          onChange={handleChange}
                          className="w-4 h-4 accent-sky-950"
                        />
                        <span className="text-slate-900 text-base font-normal font-['Inter'] leading-6">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Ghi chú thêm */}
                <div className="self-stretch flex flex-col gap-2">
                  <label htmlFor="note" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Ghi chú thêm về nguyện vọng</label>
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    placeholder="Chia sẻ thêm về mong muốn phát triển nghề nghiệp của bạn..."
                    value={form.note}
                    onChange={handleChange}
                    className="self-stretch px-4 py-3 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] leading-6 resize-none focus:outline-sky-950 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* ── SECTION 3: HỒ SƠ ĐÍNH KÈM ── */}
            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="border-b-2 border-amber-500 pb-1">
                <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">3. Hồ sơ đính kèm</h2>
              </div>

              {/* Upload grid 2×2 */}
              <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'CCCD / Hộ chiếu (Mặt trước)', hint: 'Hỗ trợ JPG, PNG, PDF' },
                  { label: 'CCCD / Hộ chiếu (Mặt sau)',   hint: 'Hỗ trợ JPG, PNG, PDF' },
                  { label: 'Bằng tốt nghiệp gần nhất',    hint: 'Chứng chỉ hoặc bằng cấp cao nhất' },
                  { label: 'Ảnh thẻ (4x6)',                hint: 'Nền trắng, nhìn thẳng' },
                ].map((upload, i) => (
                  <label
                    key={i}
                    className="p-8 rounded-xl outline outline-2 outline-offset-[-2px] outline-neutral-300 hover:outline-sky-950 flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-200"
                  >
                    <input type="file" className="hidden" />
                    <div className="pb-2">
                      <svg viewBox="0 0 24 28" fill="none" className="w-6 h-7">
                        <rect x="1" y="1" width="22" height="26" rx="2" stroke="#0c4a6e" strokeWidth="1.5"/>
                        <path d="M6 8h12M6 13h12M6 18h8" stroke="#0c4a6e" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <p className="text-center text-sky-950 text-base font-bold font-['Inter'] leading-6">{upload.label}</p>
                    <p className="text-center text-zinc-500 text-xs font-normal font-['Inter'] leading-4">{upload.hint}</p>
                  </label>
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="self-stretch p-8 bg-emerald-50 rounded-xl border border-emerald-300 text-center">
                <span className="text-4xl block mb-4">✅</span>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Hồ sơ đã được nộp thành công!</h3>
                <p className="text-emerald-600">Suleco sẽ liên hệ lại trong vòng 24h để xác nhận.</p>
              </div>
            ) : (
              <>
                {error && (
                  <div className="self-stretch p-4 bg-red-50 rounded-xl border border-red-300 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {/* ── FOOTER: checkbox + buttons ── */}
                <div className="self-stretch pt-6 border-t border-neutral-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  {/* Checkbox */}
                  <label className="flex justify-start items-start gap-3 cursor-pointer max-w-sm">
                    <input
                      id="agree-checkbox"
                      type="checkbox"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      className="w-4 h-4 mt-1 accent-sky-950 shrink-0"
                    />
                    <span className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                      Tôi cam đoan những thông tin đã cung cấp là hoàn toàn chính xác và chịu trách nhiệm trước pháp luật.
                    </span>
                  </label>

                  {/* Action buttons */}
                  <div className="inline-flex justify-start items-start gap-4 shrink-0">
                    <button
                      type="submit"
                      id="submit-application-btn"
                      disabled={loading || !form.agree}
                      className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-xl text-white text-base font-normal font-['Inter'] leading-6 shadow-lg transition-all duration-200 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Đang gửi...' : 'Nộp hồ sơ ngay'}
                    </button>
                  </div>
                </div>
              </>
            )}

          </form>
        </div>
      </div>

    </div>
  );
};

export default OnlineApplication;
