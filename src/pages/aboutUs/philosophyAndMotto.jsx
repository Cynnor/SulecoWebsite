import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  BriefcaseBusiness,
  Handshake,
  TrendingUp,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowRight,
  Quote,
} from "lucide-react";

const PhilosophyAndMotto = () => {
  const foundationCards = [
    {
      title: "Phát triển năng lực",
      icon: GraduationCap,
      color: "border-amber-500 text-yellow-800 bg-amber-50",
    },
    {
      title: "Gắn kết doanh nghiệp",
      icon: Building2,
      color: "border-sky-950 text-sky-950 bg-sky-50",
    },
  ];

  const corePrinciples = [
    {
      title: "Chính trực lên đầu",
      desc: "Cam kết tư vấn minh bạch, cung cấp thông tin rõ ràng về chương trình học, học phí và lộ trình đào tạo.",
      icon: ShieldCheck,
    },
    {
      title: "Tận tâm",
      desc: "Luôn đồng hành cùng học viên từ giai đoạn tìm hiểu, đăng ký cho đến quá trình học tập và định hướng nghề nghiệp.",
      icon: HeartHandshake,
    },
    {
      title: "Thực tiễn",
      desc: "Chương trình đào tạo chú trọng kỹ năng nghề, tình huống thực tế và yêu cầu từ môi trường làm việc.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Gắn kết",
      desc: "Xây dựng cầu nối giữa học viên, nhà trường và mạng lưới doanh nghiệp, gara, đơn vị liên kết.",
      icon: Handshake,
    },
    {
      title: "Phát triển",
      desc: "Không ngừng cải tiến nội dung đào tạo, phương pháp giảng dạy và trải nghiệm học viên.",
      icon: TrendingUp,
    },
  ];

  const commitments = [
    "Hợp tác đào tạo gắn với nhu cầu thực tế",
    "Kết nối học viên với môi trường thực hành và nghề nghiệp",
    "Minh bạch, đồng hành và phát triển lâu dài",
  ];

  const stats = [
    {
      number: "40+",
      label: "Năm kinh nghiệm trong ngành",
    },
    {
      number: "500+",
      label: "Đối tác doanh nghiệp toàn cầu",
    },
    {
      number: "10k+",
      label: "Học viên đã xuất cảnh thành công",
    },
    {
      number: "100%",
      label: "Cam kết bảo vệ quyền lợi lao động",
    },
  ];

  return (
    <main className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative min-h-[520px] overflow-hidden bg-sky-950">
        <img
          src="https://placehold.co/1280x614/0f172a/ffffff?text=Philosophy+and+Motto"
          alt="Triết lý và nguyên tắc cốt lõi"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-950/55" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Newcitygroup - Suleco
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Triết lý & Nguyên tắc cốt lõi
            </h1>

            <p className="mt-6 text-base leading-8 text-white/90 md:text-lg">
              Kiến tạo môi trường đào tạo nghề thực tiễn, lấy học viên làm
              trung tâm và gắn kết chặt chẽ với nhu cầu nhân lực của doanh
              nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-yellow-800">
              Nền tảng của chúng tôi
            </p>

            <h2 className="text-3xl font-bold leading-tight text-sky-950 md:text-4xl">
              Triết lý Giáo dục lấy Con người làm Trung tâm
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-zinc-700">
              <p>
                Tại Newcitygroup - Suleco, chúng tôi tin rằng đào tạo nghề không
                chỉ dừng lại ở việc truyền đạt kiến thức, mà còn là quá trình
                đồng hành cùng học viên trong việc hình thành kỹ năng, thái độ
                làm việc và định hướng nghề nghiệp.
              </p>

              <p>
                Mỗi chương trình đào tạo được xây dựng theo hướng thực tiễn,
                giúp học viên hiểu nghề, rèn nghề và sẵn sàng thích nghi với
                môi trường làm việc sau khi hoàn thành khóa học.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {foundationCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className={`rounded-r-xl border-l-4 bg-white p-5 shadow-sm ${item.color}`}
                  >
                    <Icon className="mb-3 h-7 w-7" />
                    <h3 className="text-lg font-semibold text-sky-950">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <img
                src="https://placehold.co/600x600/e2e8f0/0f172a?text=Suleco+Education"
                alt="Triết lý giáo dục Suleco"
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
            </div>

            <div className="absolute -bottom-6 left-4 max-w-sm rounded-xl bg-amber-500 px-8 py-6 shadow-lg md:-left-4">
              <Quote className="mb-3 h-6 w-6 text-white" />
              <p className="text-base font-medium leading-7 text-white">
                “Chất lượng lao động bắt đầu từ sự tôn trọng cá nhân.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-sky-950 md:text-4xl">
              Nguyên tắc Cốt lõi
            </h2>

            <p className="mt-3 text-base leading-7 text-zinc-700">
              5 trụ cột định hình phong cách làm việc và cam kết của chúng tôi
              đối với xã hội.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {corePrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="rounded-xl border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sky-900">
                    <Icon className="h-6 w-6 text-indigo-300" />
                  </div>

                  <h3 className="text-lg font-semibold leading-7 text-sky-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Commitment */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-sky-950 p-8 md:p-14 lg:p-20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Cam kết với Đối tác
              </h2>

              <p className="mt-6 text-base leading-8 text-white/80 md:text-lg">
                Suleco hướng đến xây dựng mối quan hệ hợp tác bền vững với doanh
                nghiệp, gara và các đơn vị giáo dục liên kết, cùng phát triển
                nguồn nhân lực có kỹ năng, thái độ và tác phong phù hợp với nhu
                cầu thực tế.
              </p>

              <div className="mt-8 space-y-4">
                {commitments.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <p className="text-base leading-7 text-white">{item}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-amber-400">
                Liên hệ Hợp tác
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/10 p-7 backdrop-blur-md"
                >
                  <p className="text-4xl font-bold text-amber-500">
                    {item.number}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/75">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhilosophyAndMotto;