import React from "react";
import {
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  UsersRound,
  UserRoundCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const ExpertAdvisors = () => {
  const leaders = [
    {
      position: "CHỦ TỊCH",
      name: "TS. Nguyễn Văn A",
      desc: "Giám sát tầm nhìn dài hạn và các mối quan hệ đối tác chiến lược của tập đoàn trên khắp Đông Nam Á và Nhật Bản.",
      image: "https://placehold.co/520x360/0f172a/ffffff?text=Chairman",
    },
    {
      position: "GIÁM ĐỐC ĐIỀU HÀNH",
      name: "Bà Lê Thị B",
      desc: "Chuyên gia về luật lao động quốc tế và tuân thủ, đảm bảo các tiêu chuẩn cao nhất cho tất cả các chương trình hải ngoại.",
      image: "https://placehold.co/520x360/1e293b/ffffff?text=CEO",
    },
    {
      position: "GIÁM ĐỐC QUẢN TRỊ",
      name: "Ông Phạm Văn C",
      desc: "Dẫn dắt các hoạt động cho các trung tâm đào tạo của Suleco và các kênh tuyển dụng nội địa.",
      image: "https://placehold.co/520x360/334155/ffffff?text=Director",
    },
  ];

  const teachers = [
    {
      name: "Sensei Tanaka Yuki",
      role: "TRƯỞNG KHOA TIẾNG NHẬT",
      quote:
        "Kết nối tài năng Việt Nam với văn hóa làm việc Nhật Bản thông qua sự ưu tú về ngôn ngữ.",
      desc: "15 năm kinh nghiệm dạy các trình độ JLPT N1 - N3 với sự tập trung chuyên sâu vào quy tắc ứng xử tại nơi làm việc.",
      image: "https://placehold.co/192x192/e2e8f0/0f172a?text=Teacher",
      icon: Languages,
    },
    {
      name: "Ông Trần Minh D",
      role: "CHUYÊN GIA KỸ NĂNG MỀM",
      quote: "Xây dựng nền tảng chuyên nghiệp cho sự nghiệp bền vững tại nước ngoài.",
      desc: "Chuyên gia về thích nghi đa văn hóa, giải quyết xung đột và xây dựng đội nhóm hiệu suất cao.",
      image: "https://placehold.co/192x192/cbd5e1/0f172a?text=Coach",
      icon: GraduationCap,
    },
  ];

  const recruiters = [
    {
      name: "Hoàng N",
      field: "LĨNH VỰC IT & CÔNG NGHỆ",
      image: "https://placehold.co/282x282/0f172a/ffffff?text=IT",
    },
    {
      name: "Nguyễn T",
      field: "KỸ THUẬT",
      image: "https://placehold.co/282x282/1e293b/ffffff?text=Tech",
    },
    {
      name: "Bùi V",
      field: "SẢN XUẤT",
      image: "https://placehold.co/282x282/334155/ffffff?text=Factory",
    },
    {
      name: "Lê H",
      field: "Y TẾ & CHĂM SÓC",
      image: "https://placehold.co/282x282/475569/ffffff?text=Care",
    },
  ];

  return (
    <main className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-sky-900 px-6 py-20">
        <img
          src="https://placehold.co/1280x291/0f172a/ffffff?text=Expert+Advisors"
          alt="Đội ngũ chuyên gia và cố vấn"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
            Newcitygroup - Suleco
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Đội ngũ Chuyên gia & Cố vấn
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
            Đội ngũ lãnh đạo và giảng viên của chúng tôi đại diện cho hàng thập
            kỷ kinh nghiệm trong lĩnh vực di cư lao động quốc tế, đào tạo nghề
            và giáo dục tiếng Nhật.
          </p>
        </div>
      </section>

      {/* Strategic Leaders */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 border-l-4 border-amber-500 pl-5">
            <h2 className="text-3xl font-bold uppercase text-sky-950 md:text-4xl">
              Lãnh đạo chiến lược
            </h2>
            <p className="mt-2 text-base leading-7 text-zinc-700">
              Những bộ óc tầm nhìn đang dẫn dắt sứ mệnh dịch chuyển toàn cầu
              của chúng tôi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {leaders.map((item, index) => (
              <article
                key={index}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-72 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-yellow-800">
                    {item.position}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-sky-950">
                    {item.name}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-zinc-700">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Teachers */}
      <section className="bg-sky-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-sky-950 md:text-4xl">
              Giảng viên Chuyên gia
            </h2>

            <p className="mt-3 text-base leading-7 text-zinc-700">
              Thành thạo tiếng Nhật, kỹ năng mềm và kinh nghiệm thực tế để giúp
              học viên tự tin bước vào môi trường làm việc quốc tế.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {teachers.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="flex flex-col gap-5 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:flex-row"
                >
                  <div className="h-48 w-full flex-shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:w-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-900/10">
                      <Icon className="h-7 w-7 text-sky-950" />
                    </div>

                    <h3 className="text-2xl font-semibold text-sky-950">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-amber-500">
                      {item.role}
                    </p>

                    <p className="mt-3 text-base italic leading-7 text-zinc-700">
                      “{item.quote}”
                    </p>

                    <p className="mt-3 text-base leading-7 text-zinc-700">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recruitment Experts */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-sky-950 md:text-4xl">
              Chuyên gia Tuyển dụng
            </h2>

            <p className="mt-2 text-base leading-7 text-zinc-700">
              Cầu nối giữa các ứng viên và nhà tuyển dụng tương lai của họ.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {recruiters.map((item, index) => (
              <article key={index} className="text-center">
                <div className="mx-auto h-72 w-72 max-w-full overflow-hidden rounded-full border-4 border-sky-100 bg-slate-100 shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-sky-950">
                  {item.name}
                </h3>

                <p className="mt-1 text-base uppercase leading-7 text-zinc-700">
                  {item.field}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-amber-500 px-8 py-14 shadow-xl md:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-900/5" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-yellow-900/5" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-900/10">
              <UsersRound className="h-9 w-9 text-yellow-900" />
            </div>

            <h2 className="text-4xl font-bold leading-tight text-yellow-900 md:text-5xl">
              Sẵn sàng để tiến bước tiếp theo?
            </h2>

            <p className="mt-5 text-base leading-7 text-yellow-900/90">
              Đội ngũ chuyên gia của chúng tôi sẵn sàng đồng hành cùng bạn trên
              con đường sự nghiệp. Hãy đặt lịch tư vấn để tìm chương trình phù
              hợp nhất cho bạn.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-xl bg-sky-950 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-sky-900">
                <MessageCircle className="h-5 w-5" />
                Tư vấn với Chuyên gia
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border-2 border-yellow-900 bg-white/20 px-8 py-4 text-base font-semibold text-yellow-900 backdrop-blur-sm transition hover:bg-white/40">
                Xem các Chương trình Tuyển sinh
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExpertAdvisors;