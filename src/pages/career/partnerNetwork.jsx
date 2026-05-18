import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";
import { getPartners } from "../../services/partnerService";

const PartnerNetwork = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getPartners({ limit: 100 });
        const list = res?.data?.partners || res?.partners || [];
        setPartners(list);
      } catch (e) {
        console.error('PartnerNetwork fetch error:', e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const regionCounts = {};
  partners.forEach((p) => {
    const loc = p.location || p.address || '';
    if (loc.includes('Tokyo') || loc.includes('Kanagawa')) regionCounts['Vùng Kanto (Tokyo, Kanagawa...)'] = (regionCounts['Vùng Kanto (Tokyo, Kanagawa...)'] || 0) + 1;
    else if (loc.includes('Osaka') || loc.includes('Kyoto')) regionCounts['Vùng Kansai (Osaka, Kyoto...)'] = (regionCounts['Vùng Kansai (Osaka, Kyoto...)'] || 0) + 1;
    else if (loc.includes('Nagoya') || loc.includes('Aichi')) regionCounts['Vùng Chubu (Nagoya, Aichi...)'] = (regionCounts['Vùng Chubu (Nagoya, Aichi...)'] || 0) + 1;
    else if (loc.includes('Fukuoka')) regionCounts['Vùng Kyushu (Fukuoka...)'] = (regionCounts['Vùng Kyushu (Fukuoka...)'] || 0) + 1;
    else regionCounts['Các khu vực khác'] = (regionCounts['Các khu vực khác'] || 0) + 1;
  });

  const regionPriority = ['Vùng Kanto (Tokyo, Kanagawa...)', 'Vùng Kansai (Osaka, Kyoto...)', 'Vùng Chubu (Nagoya, Aichi...)', 'Vùng Kyushu (Fukuoka...)', 'Các khu vực khác'];

  const categoryBadge = (cat) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('doanh nghiệp') || c.includes('enterprise')) return { label: 'DOANH NGHIỆP', color: 'bg-amber-500' };
    if (c.includes('trường') || c.includes('school')) return { label: 'TRƯỜNG HỌC', color: 'bg-sky-900' };
    if (c.includes('gara') || c.includes('workshop')) return { label: 'XƯỞNG THỰC TẬP', color: 'bg-neutral-700' };
    return { label: (cat || 'ĐỐI TÁC').toUpperCase(), color: 'bg-slate-600' };
  };

  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <span>Trang chủ</span><span>/</span><span className="text-slate-900 font-medium">Mạng lưới đối tác</span>
          </div>
          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Mạng lưới đối tác chiến lược</h1>
            <p className="text-slate-500 text-lg leading-7">Kết nối bền vững giữa nguồn nhân lực Việt Nam và các tổ chức uy tín quốc tế</p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="h-10 px-4 bg-amber-500 text-white rounded-lg text-sm font-semibold">Tất cả</button>
            {['Doanh nghiệp', 'Trường học', 'Xưởng thực tập'].map((item) => (
              <button key={item} className="h-10 px-4 bg-slate-200 rounded-lg text-sm font-medium text-slate-900 flex items-center gap-2">
                {item}<FaChevronDown className="text-xs" />
              </button>
            ))}
          </div>
          <div className="max-w-2xl">
            <div className="flex items-center bg-slate-200 rounded-lg overflow-hidden">
              <div className="px-4 text-slate-500"><FaSearch /></div>
              <input type="text" placeholder="Tìm kiếm đối tác theo tên hoặc ngành nghề..." className="w-full bg-slate-200 py-3 px-2 outline-none text-sm" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          <div className="xl:col-span-4 space-y-6">
            <div className="bg-white rounded-xl border border-neutral-300 p-6">
              <h3 className="text-sky-950 font-semibold text-xl mb-6">Khu vực đối tác</h3>
              <div className="space-y-2">
                {regionPriority.map((region, i) => (
                  <div key={region} className={`${i === 0 ? 'bg-blue-100 border-l-4 border-amber-500' : ''} rounded-lg p-4 flex justify-between items-center`}>
                    <span className={`${i === 0 ? 'font-semibold text-sky-950' : 'text-slate-900'}`}>{region}</span>
                    <span className={`text-sm ${i === 0 ? 'text-sky-950 font-semibold' : 'text-slate-500'}`}>
                      {regionCounts[region] || 0} đối tác
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-900 rounded-xl p-5 text-center">
                <h4 className="text-white text-2xl font-bold">{partners.length}+</h4>
                <p className="text-white/80 text-xs tracking-wide uppercase mt-1">Đối tác uy tín</p>
              </div>
              <div className="bg-amber-500 rounded-xl p-5 text-center">
                <h4 className="text-white text-2xl font-bold">20+</h4>
                <p className="text-white/80 text-xs tracking-wide uppercase mt-1">Năm kinh nghiệm</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-300 overflow-hidden shadow-lg">
              <div className="relative h-[460px] bg-blue-100">
                <img src="https://placehold.co/819x460" alt="" className="w-full h-full object-cover opacity-80" />
                <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-amber-500 rounded-full shadow-lg" />
                <div className="absolute top-[60%] left-[50%] w-4 h-4 bg-amber-500 rounded-full shadow-lg" />
                <div className="absolute left-6 bottom-6 max-w-xs bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-amber-500 rounded" />
                    <span className="font-bold text-sky-950 text-sm">Thông tin mạng lưới</span>
                  </div>
                  <p className="text-xs text-zinc-700 leading-5">Nhấp vào các điểm trên bản đồ hoặc chọn khu vực ở bên trái để xem danh sách chi tiết.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-sky-950 mb-2">Danh sách đối tác tiêu biểu</h2>
                <p className="text-zinc-700">Suleco tự hào đồng hành cùng các tổ chức hàng đầu</p>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  {partners.slice(0, 8).map((partner) => {
                    const badge = categoryBadge(partner.category || partner.categoryId?.name);
                    return (
                      <div key={partner._id} className="bg-white rounded-2xl border border-neutral-300 overflow-hidden">
                        <div className="relative h-40 bg-blue-100 flex items-center justify-center p-6">
                          <div className={`${badge.color} absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-sm tracking-wide`}>
                            {badge.label}
                          </div>
                          <div className="w-28 h-28 bg-white rounded-lg" />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-slate-900 mb-3">{partner.name}</h3>
                          <div className="flex items-center gap-2 text-zinc-700 text-sm mb-5">
                            <FaMapMarkerAlt />{partner.location || partner.address || 'Đang cập nhật'}
                          </div>
                          <p className="text-zinc-700 text-sm leading-6 mb-6">{partner.description || 'Đối tác chiến lược của Suleco.'}</p>
                          <button className="w-full py-2 border border-sky-950 rounded-lg text-sky-950 hover:bg-sky-950 hover:text-white transition">Xem chi tiết</button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {partners.length === 0 && (
                  <div className="text-center py-20 text-zinc-500">Chưa có dữ liệu đối tác.</div>
                )}

                {partners.length > 8 && (
                  <div className="flex justify-center items-center gap-2 mt-10">
                    <button className="w-10 h-10 rounded-lg bg-sky-100 text-sky-950 font-bold">1</button>
                    <button className="w-10 h-10 rounded-lg hover:bg-sky-50 text-slate-500 font-bold">2</button>
                    <span className="text-slate-400">...</span>
                    <button className="w-10 h-10 rounded-lg hover:bg-sky-50 text-slate-500 font-bold">{Math.ceil(partners.length / 8)}</button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-sky-950 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Trở thành đối tác chiến lược</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">Suleco luôn tìm kiếm các đối tác uy tín để cùng xây dựng cầu nối nhân lực Việt Nam ra thế giới.</p>
          <button className="h-12 px-8 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-400 transition">Liên hệ hợp tác</button>
        </div>
      </section>
    </div>
  );
};

export default PartnerNetwork;
