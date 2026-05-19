
import React from 'react';

/**
 * Component: InternationalCareer
 * Trang giới thiệu lộ trình liên kết và tu nghiệp quốc tế
 */



const programs = [
  {
    tag: "HOT",
    title: "Tu nghiệp Nhật Bản",
    desc: "Nâng cao tay nghề và trải nghiệm văn hóa tại xứ sở Hoa Anh Đào.",
    tagColor: "bg-amber-500",
  },
  {
    tag: "MỚI",
    title: "Thực tập sinh Đức",
    desc: "Cơ hội làm việc và định cư tại nền kinh tế số 1 Châu Âu.",
    tagColor: "bg-sky-900",
  },
  {
    tag: "ỔN ĐỊNH",
    title: "Lao động kỹ năng Hàn Quốc",
    desc: "Mức thu nhập hấp dẫn cùng chế độ đãi ngộ hàng đầu khu vực.",
    tagColor: "bg-blue-600",
  },
];

const benefits = [
  {
    title: "Thu nhập cao",
    desc: "Lương cơ bản từ 25 - 45 triệu VNĐ/tháng.",
  },
  {
    title: "Ngoại ngữ",
    desc: "Nâng cao khả năng giao tiếp ngoại ngữ chuẩn bản xứ.",
  },
  {
    title: "Kỹ năng",
    desc: "Tiếp cận công nghệ và quy trình làm việc hiện đại.",
  },
  {
    title: "Cơ hội lớn",
    desc: "Dễ dàng xin việc tại các tập đoàn lớn sau khi về nước.",
  },
];

const steps = [
  {
    number: "01",
    title: "Tư vấn & Sơ tuyển",
    desc: "Đánh giá hồ sơ và định hướng quốc gia phù hợp.",
    active: true,
  },
  {
    number: "02",
    title: "Đào tạo nguồn",
    desc: "Học tiếng và kỹ năng cơ bản trước khi phỏng vấn.",
  },
  {
    number: "03",
    title: "Phỏng vấn",
    desc: "Trực tiếp phỏng vấn với nghiệp đoàn quốc tế.",
  },
  {
    number: "04",
    title: "Học chuyên sâu",
    desc: "Đào tạo nâng cao về tiếng và tay nghề sau khi đỗ.",
  },
  {
    number: "05",
    title: "Hồ sơ & Visa",
    desc: "Hoàn thiện thủ tục pháp lý và xin cấp thị thực.",
  },
  {
    number: "06",
    title: "Xuất cảnh",
    desc: "Bắt đầu hành trình tu nghiệp tại nước bạn.",
    completed: true,
  },
];

const InternationalCareer = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* HERO */}
      <section className="px-4 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-gradient-to-b from-sky-950/70 to-sky-950/90 px-6 py-24 text-center md:px-12">
            <div className="mx-auto max-w-4xl space-y-6">
              <h1 className="font-montserrat text-4xl font-black leading-tight text-white md:text-6xl">
                Tu Nghiệp Quốc Tế - Mở
                <br />
                Ra Tương Lai
              </h1>

              <p className="font-beVietnam text-lg leading-8 text-white/90">
                Chương trình thực tập và tu nghiệp chuyên sâu tại Nhật Bản,
                Đức và Hàn Quốc cùng Newcitygroup Suleco - Cầu nối thành công
                cho thế hệ trẻ Việt Nam.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                  Khám phá ngay
                </button>

                <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                  Tư vấn miễn phí
                </button>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="-mt-10 grid gap-6 px-2 md:grid-cols-3">
            {[
              {
                label: "Học viên đã đi",
                value: "10,000+",
              },
              {
                label: "Đối tác quốc tế",
                value: "500+",
              },
              {
                label: "Năm kinh nghiệm",
                value: "20+",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 h-2 w-20 rounded bg-amber-500"></div>

                <p className="font-beVietnam text-zinc-700">
                  {item.label}
                </p>

                <h3 className="mt-2 text-4xl font-bold text-sky-950">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-montserrat text-4xl font-bold text-sky-950">
                Các chương trình nổi bật
              </h2>

              <p className="mt-3 text-zinc-700">
                Lựa chọn lộ trình phù hợp nhất với năng lực và mục tiêu của bạn.
              </p>
            </div>

            <button className="font-semibold text-amber-500">
              Xem tất cả →
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative h-[420px] overflow-hidden rounded-3xl"
              >
                <img
                  src="https://placehold.co/600x800"
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 to-transparent"></div>

                <div className="absolute bottom-0 left-0 z-10 p-8">
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-bold tracking-wide text-white ${program.tagColor}`}
                  >
                    {program.tag}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold text-white">
                    {program.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/80">
                    {program.desc}
                  </p>

                  <button className="mt-5 font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    Tìm hiểu thêm →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS + BENEFITS */}
      <section className="bg-blue-50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* CONDITIONS */}
            <div>
              <h2 className="font-montserrat text-4xl font-bold text-sky-950">
                Điều kiện tham gia
              </h2>

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Độ tuổi",
                    desc: "Từ 18 đến 35 tuổi (Tùy theo chương trình cụ thể).",
                  },
                  {
                    title: "Học vấn",
                    desc: "Tốt nghiệp THPT trở lên, ưu tiên các bạn có bằng nghề, cao đẳng, đại học.",
                  },
                  {
                    title: "Sức khỏe",
                    desc: "Sức khỏe tốt, không mắc các bệnh truyền nhiễm theo quy định.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-900 text-white">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 leading-7 text-zinc-700">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BENEFITS */}
            <div>
              <h2 className="font-montserrat text-4xl font-bold text-sky-950">
                Lợi ích nhận được
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 h-5 w-5 rounded bg-amber-500"></div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 leading-7 text-zinc-700">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-montserrat text-4xl font-bold text-sky-950">
              Lộ trình 6 bước thành công
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-700">
              Quy trình minh bạch, hỗ trợ tận tâm từ lúc bắt đầu đến khi xuất cảnh.
            </p>
          </div>

          <div className="relative mt-20 grid gap-10 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 text-xl font-bold ${step.active
                    ? "border-sky-900 text-sky-900"
                    : step.completed
                      ? "border-amber-500 bg-amber-500 text-white"
                      : "border-neutral-300 text-zinc-500"
                    }`}
                >
                  {step.completed ? "✓" : step.number}
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-sky-950 px-6 py-16 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2 className="font-montserrat text-4xl font-bold leading-tight text-white">
                Sẵn sàng bắt đầu hành
                <br />
                trình của bạn?
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/80">
                Để lại thông tin, chuyên gia của chúng tôi sẽ gọi lại tư vấn miễn phí
                lộ trình phù hợp nhất cho bạn trong vòng 24h.
              </p>

              <div className="mt-10 space-y-4 text-white">
                <div>📞 Hotline: 090x xxx xxx</div>
                <div>✉️ Email: contact@suleco.vn</div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    Họ và tên
                  </label>

                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-sky-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    Số điện thoại
                  </label>

                  <input
                    type="text"
                    placeholder="09xxxxxxx"
                    className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-sky-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    Chương trình quan tâm
                  </label>

                  <select className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-sky-900">
                    <option>Nhật Bản</option>
                    <option>Đức</option>
                    <option>Hàn Quốc</option>
                  </select>
                </div>

                <button className="w-full rounded-xl bg-amber-500 py-4 text-lg font-bold text-white shadow-lg transition hover:opacity-90">
                  GỬI YÊU CẦU TƯ VẤN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InternationalCareer;