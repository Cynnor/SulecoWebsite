import React from "react";
import {
  FaSearch,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

/**
 * Component: PartnerNetwork
 * Trang giới thiệu mạng lưới đối tác và doanh nghiệp liên kết
 */
const PartnerNetwork = () => {
  return (
    <div className="bg-slate-50">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <span>Trang chủ</span>
            <span>/</span>
            <span className="text-slate-900 font-medium">
              Mạng lưới đối tác
            </span>
          </div>

          {/* Title */}
          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Mạng lưới đối tác chiến lược
            </h1>

            <p className="text-slate-500 text-lg leading-7">
              Kết nối bền vững giữa nguồn nhân lực Việt Nam và các tổ chức uy
              tín tại Nhật Bản
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button className="h-10 px-4 bg-amber-500 text-white rounded-lg text-sm font-semibold">
              Tất cả
            </button>

            {[
              "Doanh nghiệp Nhật Bản",
              "Trường học",
              "Xưởng thực tập",
            ].map((item) => (
              <button
                key={item}
                className="h-10 px-4 bg-slate-200 rounded-lg text-sm font-medium text-slate-900 flex items-center gap-2"
              >
                {item}
                <FaChevronDown className="text-xs" />
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-2xl">
            <div className="flex items-center bg-slate-200 rounded-lg overflow-hidden">
              <div className="px-4 text-slate-500">
                <FaSearch />
              </div>

              <input
                type="text"
                placeholder="Tìm kiếm đối tác theo tên hoặc ngành nghề..."
                className="w-full bg-slate-200 py-3 px-2 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          {/* LEFT */}
          <div className="xl:col-span-4 space-y-6">
            {/* Region */}
            <div className="bg-white rounded-xl border border-neutral-300 p-6">
              <h3 className="text-sky-950 font-semibold text-xl mb-6">
                Khu vực đối tác
              </h3>

              <div className="space-y-2">
                <div className="bg-blue-100 border-l-4 border-amber-500 rounded-lg p-4 flex justify-between items-center">
                  <span className="font-semibold text-sky-950">
                    Vùng Kanto (Tokyo, Kanagawa...)
                  </span>

                  <span className="text-sm text-sky-950 font-semibold">
                    124 đối tác
                  </span>
                </div>

                {[
                  "Vùng Kansai (Osaka, Kyoto...)",
                  "Vùng Chubu (Nagoya, Aichi...)",
                  "Vùng Kyushu (Fukuoka...)",
                  "Các khu vực khác",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-lg flex justify-between items-center hover:bg-slate-100 transition"
                  >
                    <span className="text-slate-900">{item}</span>
                    <span className="text-sm text-slate-500">
                      89 đối tác
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-sky-900 rounded-xl p-5 text-center">
                <h4 className="text-white text-2xl font-bold">500+</h4>
                <p className="text-white/80 text-xs tracking-wide uppercase mt-1">
                  Đối tác uy tín
                </p>
              </div>

              <div className="bg-amber-500 rounded-xl p-5 text-center">
                <h4 className="text-white text-2xl font-bold">20+</h4>
                <p className="text-white/80 text-xs tracking-wide uppercase mt-1">
                  Năm kinh nghiệm
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl border border-neutral-300 overflow-hidden shadow-lg">
              <div className="relative h-[460px] bg-blue-100">
                <img
                  src="https://placehold.co/819x460"
                  alt=""
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-amber-500 rounded-full shadow-lg" />
                <div className="absolute top-[60%] left-[50%] w-4 h-4 bg-amber-500 rounded-full shadow-lg" />

                <div className="absolute left-6 bottom-6 max-w-xs bg-white/90 backdrop-blur-sm border border-white/50 rounded-xl p-4 shadow-md">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-amber-500 rounded" />
                    <span className="font-bold text-sky-950 text-sm">
                      Thông tin mạng lưới
                    </span>
                  </div>

                  <p className="text-xs text-zinc-700 leading-5">
                    Nhấp vào các điểm trên bản đồ hoặc chọn khu vực ở bên trái
                    để xem danh sách chi tiết các đối tác chiến lược tại khu vực
                    đó.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="xl:col-span-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-sky-950 mb-2">
                  Danh sách đối tác tiêu biểu
                </h2>

                <p className="text-zinc-700">
                  Suleco tự hào đồng hành cùng các tổ chức hàng đầu tại Nhật
                  Bản
                </p>
              </div>

              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center">
                  <FaChevronLeft />
                </button>

                <button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center">
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  type: "DOANH NGHIỆP",
                  name: "Toyota Tsusho Corporation",
                  location: "Nagoya, Nhật Bản",
                  desc: "Hợp tác cung ứng nhân lực chất lượng cao trong ngành công nghiệp ô tô và linh kiện điện tử.",
                  color: "bg-amber-500",
                },
                {
                  type: "TRƯỜNG HỌC",
                  name: "Học viện Ngôn ngữ Tokyo",
                  location: "Tokyo, Nhật Bản",
                  desc: "Đối tác đào tạo ngôn ngữ và văn hóa Nhật Bản cho du học sinh và người lao động.",
                  color: "bg-sky-900",
                },
                {
                  type: "XƯỞNG THỰC TẬP",
                  name: "Kinden Corporation Workshop",
                  location: "Osaka, Nhật Bản",
                  desc: "Hệ thống xưởng thực hành kỹ thuật điện và xây dựng hiện đại cho thực tập sinh.",
                  color: "bg-neutral-700",
                },
                {
                  type: "DOANH NGHIỆP",
                  name: "Tập đoàn Y tế Social Welfare",
                  location: "Chiba, Nhật Bản",
                  desc: "Hợp tác trong lĩnh vực điều dưỡng và chăm sóc sức khỏe người cao tuổi tại Nhật Bản.",
                  color: "bg-amber-500",
                },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-neutral-300 overflow-hidden"
                >
                  <div className="relative h-40 bg-blue-100 flex items-center justify-center p-6">
                    <div
                      className={`${partner.color} absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-sm tracking-wide`}
                    >
                      {partner.type}
                    </div>

                    <div className="w-28 h-28 bg-white rounded-lg" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {partner.name}
                    </h3>

                    <div className="flex items-center gap-2 text-zinc-700 text-sm mb-5">
                      <FaMapMarkerAlt />
                      {partner.location}
                    </div>

                    <p className="text-zinc-700 text-sm leading-6 mb-6">
                      {partner.desc}
                    </p>

                    <button className="w-full py-2 border border-sky-950 rounded-lg text-sky-950 hover:bg-sky-950 hover:text-white transition">
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10">
              <button className="w-10 h-10 rounded-lg bg-sky-100 text-sky-950 font-bold">
                1
              </button>

              {[2, 3].map((item) => (
                <button
                  key={item}
                  className="w-10 h-10 rounded-lg text-slate-900"
                >
                  {item}
                </button>
              ))}

              <span className="px-2 text-slate-500">...</span>

              <button className="w-10 h-10 rounded-lg text-slate-900">
                12
              </button>

              <button className="w-10 h-10 rounded-lg flex items-center justify-center">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 relative overflow-hidden rounded-[32px] bg-sky-950 px-6 lg:px-20 py-20">
          <img
            src="https://placehold.co/1248x437"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Trở thành đối tác chiến lược
              <br />
              của chúng tôi
            </h2>

            <p className="text-blue-100 text-lg leading-8 mb-10">
              Suleco luôn tìm kiếm các đối tác uy tín để cùng xây dựng cầu nối
              nhân lực bền vững, kiến tạo tương lai cho thanh niên Việt Nam.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-amber-500 text-white rounded-xl font-bold hover:opacity-90 transition">
                Đăng ký hợp tác ngay
              </button>

              <button className="px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl text-white font-bold hover:bg-white/20 transition">
                Tải Profile Năng lực
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerNetwork;