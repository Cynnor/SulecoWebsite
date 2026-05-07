const highlights = [
  {
    title: "Giáo dục - Tuyển sinh Trung cấp",
    desc: "Cung cấp thông tin tuyển sinh, ngành học, lộ trình đào tạo và hỗ trợ học viên nhanh chóng.",
  },
  {
    title: "Xuất khẩu lao động Nhật Bản",
    desc: "Tối ưu trải nghiệm tìm hiểu đơn hàng, điều kiện tham gia, chi phí và quy trình xuất cảnh.",
  },
  {
    title: "Cổng thông tin 2 trong 1",
    desc: "Kết hợp truyền thông, tư vấn và chuyển đổi khách hàng trên cùng một nền tảng hiện đại.",
  },
];

const stats = [
  { value: "20+", label: "Năm kinh nghiệm" },
  { value: "1.000+", label: "Học viên & lao động hỗ trợ" },
  { value: "100+", label: "Đơn hàng / chương trình" },
  { value: "2", label: "Mảng dịch vụ trọng tâm" },
];

const programs = [
  {
    title: "Tuyển sinh hệ Trung cấp",
    items: [
      "Thông tin ngành học rõ ràng",
      "Lộ trình đào tạo thực tế",
      "Tư vấn hồ sơ và nhập học",
    ],
  },
  {
    title: "XKLĐ Nhật Bản",
    items: [
      "Đơn hàng đa dạng, cập nhật liên tục",
      "Hướng dẫn thủ tục và phỏng vấn",
      "Hỗ trợ trước - trong - sau xuất cảnh",
    ],
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Suleco City Portal
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Nền tảng tích hợp <span className="text-blue-700">Giáo dục</span>{" "}
              và <span className="text-blue-700">XKLĐ Nhật Bản</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Hỗ trợ học viên, phụ huynh và người lao động tiếp cận thông tin
              tuyển sinh Trung cấp, đơn hàng Nhật Bản, hồ sơ, quy trình và tư
              vấn một cách nhanh chóng, rõ ràng và chuyên nghiệp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#chuong-trinh"
                className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
              >
                Khám phá chương trình
              </a>
              <a
                href="#lien-he"
                className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-center font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Nhận tư vấn ngay
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold text-blue-700">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-blue-100 bg-white p-4 shadow-xl shadow-blue-100">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-8 text-white">
                <div className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  Trung tâm thông tin
                </div>
                <h3 className="text-2xl font-bold leading-snug sm:text-3xl">
                  Kết nối học tập - nghề nghiệp - hội nhập quốc tế
                </h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-blue-50">
                  Một nền tảng đồng bộ giúp nâng cao chất lượng tư vấn, tối ưu
                  chuyển đổi và tăng trải nghiệm người dùng.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Tuyển sinh nhanh",
                    "Đơn hàng Nhật Bản",
                    "Hỗ trợ hồ sơ",
                    "Tư vấn chuyên sâu",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white/15 px-4 py-3 text-sm font-medium text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-lg shadow-slate-200/50 lg:block">
              <p className="text-sm font-semibold text-slate-900">
                Hỗ trợ nhanh
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Tư vấn - hồ sơ - định hướng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        id="gioi-thieu"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            Vì sao chọn Suleco?
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Tập trung vào trải nghiệm người dùng, minh bạch thông tin và định
            hướng phát triển bền vững cho cả giáo dục lẫn tuyển dụng quốc tế.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-700">
                ✓
              </div>
              <h4 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h4>
              <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="chuong-trinh" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {program.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                      <p className="text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#lien-he"
                  className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="quy-trinh"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              Quy trình tư vấn rõ ràng, dễ theo dõi
            </h3>
            <p className="mt-4 text-slate-600">
              Mọi thông tin được trình bày theo từng bước để người dùng dễ dàng
              tiếp cận, đăng ký và theo dõi trạng thái.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "1. Tiếp nhận nhu cầu và định hướng",
                "2. Tư vấn ngành học / đơn hàng phù hợp",
                "3. Hoàn thiện hồ sơ và thủ tục",
                "4. Đồng hành trong suốt quá trình",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <p className="font-medium text-slate-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h4 className="text-2xl font-bold">Cam kết của Suleco</h4>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Thông tin minh bạch",
                "Tư vấn đúng nhu cầu",
                "Hỗ trợ tận tâm",
                "Giao diện hiện đại",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4">
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="lien-he" className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                  Sẵn sàng kết nối với Suleco?
                </h3>
                <p className="mt-4 text-slate-600">
                  Đăng ký tư vấn để nhận thông tin chi tiết về tuyển sinh Trung
                  cấp và các cơ hội XKLĐ Nhật Bản phù hợp.
                </p>
              </div>

              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 focus:border-blue-500"
                />
                <select className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500">
                  <option>Chọn nhu cầu tư vấn</option>
                  <option>Tuyển sinh Trung cấp</option>
                  <option>XKLĐ Nhật Bản</option>
                  <option>Cả hai</option>
                </select>
                <button
                  type="button"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
