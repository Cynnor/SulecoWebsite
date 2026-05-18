import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { submitAdmission } from '../../services/admissionService';
import { uploadAdmissionDocument } from '../../services/uploadService';
import { getCourses } from '../../services/courseService';

const PROXY_ORIGIN = 'https://api.newcitygroupsuleco.com.vn';
const toProxyUrl = (url) => url?.startsWith(PROXY_ORIGIN) ? url.slice(PROXY_ORIGIN.length) : url;

const isImage = (url) => /\.(png|jpg|jpeg|gif|webp)(\?|$)/i.test(url);

const UploadPreview = ({ url }) => {
  if (!url) return null;
  if (isImage(url)) {
    return <img src={toProxyUrl(url)} alt="preview" className="w-full h-full object-cover rounded-lg" />;
  }
  return (
    <div className="flex flex-col items-center gap-1">
      <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
      </svg>
      <span className="text-[10px] text-zinc-500 truncate max-w-[100px]">PDF file</span>
    </div>
  );
};

const OnlineApplication = () => {
  const [form, setForm] = useState({
    fullName: '', dateOfBirth: '', phone: '', email: '', address: '', intendedCourse: '', agree: false,
  });
  const [courses, setCourses] = useState([]);
  const [idFrontUrl, setIdFrontUrl] = useState('');
  const [idBackUrl, setIdBackUrl] = useState('');
  const [reportCardUrl, setReportCardUrl] = useState('');
  const [uploading, setUploading] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getCourses({ limit: 100 }).then(setCourses).catch(() => {});
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : name === 'phone' ? value.replace(/\D/g, '') : value }));
  };

  const handleUpload = (key, setter) => async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading((p) => ({ ...p, [key]: true }));
    try {
      const oldUrl = (key === 'reportCard' ? reportCardUrl : key === 'idFront' ? idFrontUrl : idBackUrl) || undefined;
      const res = await uploadAdmissionDocument(file, oldUrl);
      setter(res.data?.url || res.url);
    } catch (err) {
      setError(`Tải file thất bại`);
    } finally {
      setUploading((p) => ({ ...p, [key]: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitAdmission({
        fullName: form.fullName,
        dateOfBirth: form.dateOfBirth ? form.dateOfBirth.split('-').reverse().join('/') : undefined,
        phone: form.phone.replace(/\D/g, ''),
        email: form.email || undefined,
        address: form.address || undefined,
        identityFrontImageUrl: idFrontUrl || undefined,
        identityBackImageUrl: idBackUrl || undefined,
        reportCardUrl: reportCardUrl || undefined,
        intendedCourse: form.intendedCourse || undefined,
      });
      setSubmitted(true);
    } catch (err) {
      const errData = err.response?.data;
      setError(errData?.errors?.join('; ') || errData?.message || 'Gửi hồ sơ thất bại, vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const uploadFields = [
    { key: 'idFront', label: 'CCCD / Hộ chiếu (Mặt trước)', hint: 'JPG, PNG, PDF', url: idFrontUrl, setter: setIdFrontUrl },
    { key: 'idBack', label: 'CCCD / Hộ chiếu (Mặt sau)', hint: 'JPG, PNG, PDF', url: idBackUrl, setter: setIdBackUrl },
    { key: 'reportCard', label: 'Học bạ / Bằng tốt nghiệp', hint: 'JPG, PNG, PDF', url: reportCardUrl, setter: setReportCardUrl },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">

      <section className="relative w-full py-16 bg-sky-950 overflow-hidden flex justify-center items-start">
        <img src="https://placehold.co/1280x259" alt="Banner" className="absolute left-0 top-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 w-full max-w-[1280px] px-6 flex flex-col justify-start items-center gap-3.5">
          <h1 className="text-center text-white text-5xl font-bold font-['Montserrat'] leading-[57.60px]">Nộp hồ sơ</h1>
          <p className="text-center text-blue-100 text-lg font-normal font-['Inter'] leading-7 max-w-[672px]">
            Bắt đầu hành trình chinh phục tri thức và cơ hội nghề nghiệp quốc tế cùng Suleco.
          </p>
        </div>
      </section>

      <div className="w-full max-w-[1280px] mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-1 flex flex-col gap-6 sticky top-6">
            <div className="p-8 bg-blue-50 rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-8">
              <h3 className="self-stretch text-sky-950 text-2xl font-semibold font-['Montserrat'] leading-8">Tiến trình nộp hồ sơ</h3>
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                {[{ n: 1, t: 'Thông tin cá nhân', s: 'Hoàn tất 100%', a: true }, { n: 2, t: 'Hồ sơ đính kèm', s: 'Đang thực hiện...', a: false }].map((step) => (
                  <div key={step.n} className="self-stretch inline-flex justify-start items-start gap-4">
                    <div className={`w-8 h-8 ${step.a ? 'bg-amber-500' : 'bg-sky-900'} rounded-full flex justify-center items-center shrink-0`}>
                      <span className={`${step.a ? 'text-yellow-900' : 'text-indigo-400'} text-base font-bold font-['Inter'] leading-6`}>{step.n}</span>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <p className="text-sky-950 text-base font-normal font-['Inter'] leading-6">{step.t}</p>
                      <p className="text-zinc-700 text-sm font-normal font-['Inter'] leading-5">{step.s}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="self-stretch px-4 pt-6 pb-4 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-amber-500/30 flex flex-col justify-start items-start gap-2">
                <div className="inline-flex justify-start items-center gap-2">
                  <div className="w-5 h-5 bg-yellow-800 rounded-sm" />
                  <span className="text-yellow-800 text-base font-bold font-['Inter'] leading-6">Hướng dẫn</span>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  {['Điền chính xác họ tên theo CCCD.', 'File định dạng PDF, JPG (dưới 5MB).', 'Suleco sẽ liên hệ lại trong 24h.'].map((tip, i) => (
                    <p key={i} className="self-stretch text-zinc-700 text-sm font-normal font-['Inter'] leading-5">• {tip}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 px-12 pt-12 pb-16 bg-white rounded-xl shadow-md outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-12">

            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="border-b-2 border-amber-500 pb-1">
                <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">1. Thông tin cá nhân</h2>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {[
                  { id: 'fullName', label: 'Họ và tên *', type: 'text', placeholder: 'Nguyễn Văn A' },
                  { id: 'dateOfBirth', label: 'Ngày sinh *', type: 'date' },
                  { id: 'phone', label: 'Số điện thoại *', type: 'tel', placeholder: '090 123 4567' },
                  { id: 'email', label: 'Email liên hệ *', type: 'email', placeholder: 'example@email.com' },
                  { id: 'address', label: 'Địa chỉ thường trú *', type: 'text', placeholder: 'Số nhà, tên đường, phường/xã...' },
                ].map((f) => (
                  <div key={f.id} className="self-stretch flex flex-col gap-2">
                    <label htmlFor={f.id} className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder || ''} value={form[f.id]} onChange={handleChange}
                      className="self-stretch px-4 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="border-b-2 border-amber-500 pb-1">
                <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">2. Khóa học quan tâm</h2>
              </div>
              <div className="self-stretch flex flex-col gap-2">
                <label htmlFor="intendedCourse" className="text-zinc-700 text-base font-normal font-['Inter'] leading-6">Chọn khóa học (không bắt buộc)</label>
                <select id="intendedCourse" name="intendedCourse" value={form.intendedCourse} onChange={handleChange}
                  className="self-stretch px-4 py-3 bg-blue-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-300 text-slate-900 text-base font-normal font-['Inter'] focus:outline-sky-950 transition-all cursor-pointer">
                  <option value="">-- Chọn khóa học --</option>
                  {courses.map((c) => <option key={c._id} value={c._id}>{c.title}</option>)}
                </select>
              </div>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="border-b-2 border-amber-500 pb-1">
                <h2 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10">3. Hồ sơ đính kèm</h2>
              </div>
              <div className="self-stretch grid grid-cols-1 sm:grid-cols-3 gap-4">
                {uploadFields.map(({ key, label, hint, url, setter }) => (
                  <label key={key} className={`p-4 rounded-xl outline outline-2 outline-offset-[-2px] ${url ? 'outline-emerald-500 bg-emerald-50' : 'outline-neutral-300 hover:outline-sky-950'} flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-200 min-h-[180px]`}>
                    <input type="file" accept="image/*,application/pdf" className="hidden" onChange={handleUpload(key, setter)} disabled={uploading[key]} />
                    {uploading[key] ? (
                      <div className="animate-spin w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full" />
                    ) : url ? (
                      <div className="w-full h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                        <UploadPreview url={url} />
                      </div>
                    ) : (
                      <svg viewBox="0 0 24 28" fill="none" className="w-6 h-7">
                        <rect x="1" y="1" width="22" height="26" rx="2" stroke="#0c4a6e" strokeWidth="1.5"/>
                        <path d="M6 8h12M6 13h12M6 18h8" stroke="#0c4a6e" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                    <p className="text-center text-sky-950 text-sm font-bold font-['Inter'] leading-5">{label}</p>
                    <p className="text-center text-zinc-500 text-[10px] font-normal font-['Inter']">{url ? 'Đã tải lên' : hint}</p>
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
                {error && <div className="self-stretch p-4 bg-red-50 rounded-xl border border-red-300 text-red-700 text-sm">{error}</div>}
                <div className="self-stretch pt-6 border-t border-neutral-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <label className="flex justify-start items-start gap-3 cursor-pointer max-w-sm">
                    <input id="agree-checkbox" type="checkbox" name="agree" checked={form.agree} onChange={handleChange}
                      className="w-4 h-4 mt-1 accent-sky-950 shrink-0" />
                    <span className="text-zinc-700 text-sm font-normal font-['Inter'] leading-6">
                      Tôi cam đoan những thông tin đã cung cấp là hoàn toàn chính xác và chịu trách nhiệm trước pháp luật.
                    </span>
                  </label>
                  <button type="submit" id="submit-application-btn" disabled={loading || !form.agree}
                    className="px-8 py-4 bg-amber-500 hover:bg-amber-400 rounded-xl text-white text-base font-normal font-['Inter'] leading-6 shadow-lg transition-all duration-200 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? 'Đang gửi...' : 'Nộp hồ sơ ngay'}
                  </button>
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
