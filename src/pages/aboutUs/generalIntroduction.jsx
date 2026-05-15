import React from "react";
import {
  HeartHandshake,
  Wrench,
  Network,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const GeneralIntroduction = () => {
  const coreValues = [
    {
      title: "Tận Tâm",
      subtitle: "Dedication",
      icon: HeartHandshake,
      desc: "Luôn đặt lợi ích và tương lai của học viên, người lao động lên hàng đầu. Chúng tôi đồng hành sát sao từ khâu đào tạo đến khi học viên ổn định với công việc mới.",
    },
    {
      title: "Thực tiễn",
      subtitle: "Practice",
      icon: Wrench,
      desc: "Chương trình đào tạo chú trọng kỹ năng nghề, môi trường thực hành và nhu cầu thực tế của doanh nghiệp.",
    },
    {
      title: "Kết nối",
      subtitle: "Connection",
      icon: Network,
      desc: "Xây dựng mạng lưới đối tác doanh nghiệp, gara và đơn vị giáo dục để mở rộng cơ hội nghề nghiệp cho học viên.",
    },
  ];

  const milestones = [
    {
      year: "1981",
      title: "Thành lập Suleco",
      desc: "Tiền thân là Trung tâm Xuất khẩu Lao động TP.HCM, đặt nền móng cho ngành phái cử lao động.",
      color: "border-sky-950",
    },
    {
      year: "1990s",
      title: "Mở rộng thị trường Nhật Bản",
      desc: "Trở thành đơn vị tiên phong đưa thực tập sinh Việt Nam sang làm việc tại các nghiệp đoàn lớn ở Nhật Bản.",
      color: "border-amber-500",
    },
    {
      year: "2010",
      title: "Gia nhập Newcity Group",
      desc: "Tái cấu trúc mạnh mẽ, kết hợp sức mạnh tài chính của tập đoàn với kinh nghiệm chuyên môn của Suleco.",
      color: "border-sky-950",
    },
    {
      year: "Hiện tại",
      title: "Dẫn đầu thị trường",
      desc: "Phát triển hệ sinh thái giáo dục - đào tạo - phái cử toàn diện, cung ứng hàng chục nghìn lao động chất lượng cao.",
      color: "border-amber-500",
    },
  ];

  const stats = [
    {
      number: "40+",
      label: "Năm Kinh Nghiệm",
    },
    {
      number: "50k+",
      label: "Lao Động Phái Cử",
    },
    {
      number: "200+",
      label: "Đối Tác Quốc Tế",
    },
    {
      number: "98%",
      label: "Hài Lòng Từ Đối Tác",
    },
  ];

  return (
    <main className="w-full bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[520px] overflow-hidden bg-sky-950">
        <img
          src="https://placehold.co/1280x600/0f172a/ffffff?text=Newcitygroup+Suleco"
          alt="Newcitygroup Suleco"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-950/75 to-sky-950/35" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-20">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Vươn tầm quốc tế
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Hơn 40 năm đồng hành cùng đào tạo nghề Việt
            </h1>

            <p className="max-w-xl text-base leading-8 text-blue-100 md:text-lg">
              Newcitygroup - Suleco định hướng xây dựng môi trường đào tạo nghề
              gắn liền với thực tiễn doanh nghiệp. Chúng tôi giúp học viên phát
              triển kỹ năng chuyên môn, lựa chọn lộ trình học phù hợp và mở
              rộng tối đa cơ hội nghề nghiệp trong và ngoài nước.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-amber-500 px-8 py-4 text-base font-medium text-white shadow-lg transition hover:bg-amber-600">
                Tìm hiểu thêm
              </button>

              <button className="rounded-xl border-2 border-white px-8 py-4 text-base font-medium text-white transition hover:bg-white hover:text-sky-950">
                Xem hành trình
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <img
              src="https://placehold.co/600x520/e2e8f0/0f172a?text=Suleco"
              alt="Đại diện Newcitygroup Suleco"
              className="h-[420px] w-full object-cover md:h-[500px]"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-sky-950/85 p-5 backdrop-blur-md">
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                Đại diện Newcitygroup - Suleco
              </h3>
              <p className="mt-1 text-base text-orange-300">
                Ban điều hành hệ thống đào tạo
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 h-2 w-10 rounded-full bg-amber-500" />

            <h2 className="mb-6 text-3xl font-bold leading-tight text-sky-950 md:text-4xl">
              Thông điệp từ Suleco
            </h2>

            <div className="space-y-5 text-base leading-8 text-zinc-700 md:text-lg">
              <p>
                Tại Newcitygroup - Suleco, chúng tôi tin rằng đào tạo nghề không
                chỉ là truyền đạt kiến thức, mà còn là quá trình đồng hành cùng
                học viên trong việc xây dựng kỹ năng, thái độ làm việc và định
                hướng tương lai.
              </p>

              <p>
                Với hệ thống chương trình đào tạo gắn kết cùng doanh nghiệp,
                Suleco hướng đến việc tạo ra môi trường học tập thực tiễn, giúp
                học viên dễ dàng tiếp cận cơ hội thực tập, việc làm và phát
                triển nghề nghiệp sau khi hoàn thành khóa học.
              </p>
            </div>

            <div className="mt-8 border-l-4 border-amber-500 pl-5">
              <p className="text-lg font-semibold text-sky-950">
                Học nghề vững vàng – Khởi nghiệp thành công.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-sky-950 md:text-4xl">
              Giá Trị Cốt Lõi
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              Những giá trị định hướng hoạt động đào tạo, tuyển sinh và kết nối
              doanh nghiệp của Suleco.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {coreValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-sky-900/10">
                    <Icon className="h-8 w-8 text-sky-950" />
                  </div>

                  <h3 className="text-2xl font-semibold text-sky-950">
                    {item.title}
                    {item.subtitle && (
                      <span className="ml-2 text-base font-medium text-zinc-500">
                        ({item.subtitle})
                      </span>
                    )}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-zinc-700">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-sky-950 md:text-4xl">
                Hành Trình Lịch Sử
              </h2>
              <p className="mt-3 text-base text-zinc-700">
                Từ những bước đi đầu tiên đến vị thế tập đoàn đa ngành dẫn đầu.
              </p>
            </div>

            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-400 bg-white text-slate-900">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-950 bg-sky-950 text-white">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 bg-neutral-300 lg:block" />

            <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl border-t-4 ${item.color} bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                    index % 2 === 1 ? "lg:mt-16" : ""
                  }`}
                >
                  <h3 className="text-3xl font-bold text-sky-900">
                    {item.year}
                  </h3>

                  <h4 className="mt-3 text-base font-bold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm font-medium leading-6 text-zinc-700">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-sky-950 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index}>
              <p className="text-5xl font-bold text-orange-300">
                {item.number}
              </p>
              <p className="mt-2 text-base text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GeneralIntroduction;