import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/admin');
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const data = await login(form.email, form.password);
      localStorage.setItem('token', data.data?.token || data.token);
      navigate('/admin');
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.error || 'Đăng nhập thất bại.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[1280px] min-h-[700px] bg-white rounded-xl shadow-md flex overflow-hidden">

        <div className="w-1/2 relative bg-sky-900 overflow-hidden flex flex-col justify-end">
          <img className="absolute left-0 top-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://placehold.co/640x828" />
          <div className="relative z-10 p-12 bg-gradient-to-r from-sky-950/90 to-sky-950/0 flex flex-col justify-end items-start gap-8">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-white text-3xl font-bold font-['Montserrat'] leading-10">Sứ mệnh chắp cánh ước mơ<br/>toàn cầu</h2>
              <p className="text-indigo-400 text-lg font-['Inter'] leading-7 max-w-sm">
                Chào mừng bạn quay trở lại. Hãy cùng<br/>Newcitygroup Suleco kiến tạo tương lai sự nghiệp<br/>của bạn tại các thị trường lao động hàng đầu thế giới.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex justify-center items-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-6">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span className="text-white text-sm font-semibold font-['Inter'] leading-4 tracking-wide">Đơn vị tư vấn và đào tạo uy tín hàng đầu</span>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center px-20 py-12">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-sky-950 rounded-lg flex justify-center items-center">
                <svg viewBox="0 0 28 24" fill="none" className="w-7 h-6">
                  <path d="M14 2L2 7v10l12 5 12-5V7L14 2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sky-950 text-2xl font-bold font-['Montserrat'] leading-8">Newcitygroup <span className="text-amber-500">Suleco</span></span>
            </div>
            <h1 className="text-sky-950 text-3xl font-bold font-['Montserrat'] leading-10 mb-2">Đăng nhập</h1>
            <p className="text-zinc-700 text-base font-['Inter'] leading-6">Vui lòng nhập thông tin của bạn để tiếp tục.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-slate-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">Email hoặc Số điện thoại</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 text-zinc-500">
                    <path d="M2 4h12v8H2V4zm0 0l6 4 6-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  placeholder="example@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-neutral-300 text-slate-900 text-base font-['Inter'] focus:outline-sky-950 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-slate-900 text-sm font-semibold font-['Inter'] leading-4 tracking-wide">Mật khẩu</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <svg viewBox="0 0 16 20" fill="none" className="w-4 h-5 text-zinc-500">
                    <rect x="2" y="8" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 8V5a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3.5 bg-blue-50 rounded-lg outline outline-1 outline-neutral-300 text-slate-900 text-base font-['Inter'] focus:outline-sky-950 transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2">
                  {showPassword ? (
                    <svg viewBox="0 0 20 14" fill="none" className="w-5 h-3.5 text-zinc-500">
                      <path d="M1 7s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 2l16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 20 14" fill="none" className="w-5 h-3.5 text-zinc-500">
                      <path d="M1 7s3-5 9-5 9 5 9 5-3 5-9 5-9-5-9-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} className="w-5 h-5 rounded-sm border border-neutral-300 bg-blue-50 accent-sky-950" />
                <span className="text-zinc-700 text-base font-['Inter'] leading-6">Ghi nhớ đăng nhập</span>
              </label>
              <span className="text-yellow-800 text-sm font-semibold font-['Inter'] leading-4 tracking-wide cursor-pointer hover:text-yellow-600 transition-colors">Quên mật khẩu?</span>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-300 rounded-lg text-red-700 text-sm font-['Inter']">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-md text-white text-base font-semibold font-['Inter'] uppercase leading-4 tracking-wide transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;