import React from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Building2,
  Utensils,
  Library,
  Users,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

const FacilitiesAndVirtualTour = () => {
  const campusHighlights = [
    {
      title: "Lớp học Tương tác",
      tag: "Không gian Học tập",
      desc: "Được trang bị công nghệ giáo dục mới nhất để đảm bảo trải nghiệm học tập nhập vai.",
      image:
        "https://placehold.co/813x288/0f172a/ffffff?text=Lop+hoc+tuong+tac",
      icon: GraduationCap,
      large: true,
    },
    {
      title: "Căng tin Toàn cầu",
      tag: "Sinh hoạt",
      desc: "Các bữa ăn đầy đủ dinh dưỡng và không gian giao lưu cho học viên.",
      image:
        "https://placehold.co/395x288/e2e8f0/0f172a?text=Cang+tin",
      icon: Utensils,
      large: false,
    },
    {
      title: "Đại sảnh Grand Atrium",
      tag: "Sự kiện",
      desc: "Trái tim của campus, nơi tổ chức các sự kiện và hoạt động định hướng.",
      image:
        "https://placehold.co/395x288/cbd5e1/0f172a?text=Dai+sanh",
      icon: Building2,
      large: false,
    },
    {
      title: "Trung tâm Tài nguyên Số",
      tag: "Tài nguyên",
      desc: "Kho tài liệu phong phú về các ngành nghề, kỹ năng và công cụ nghiên cứu kỹ thuật số.",
      image:
        "https://placehold.co/813x288/1e293b/ffffff?text=Trung+tam+tai+nguyen",
      icon: Library,
      large: true,
    },
  ];

  const featureList = [
    "Phòng học hiện đại, hỗ trợ trình chiếu và tương tác",
    "Khu thực hành gắn với kỹ năng nghề thực tế",
    "Không gian tư vấn, định hướng học tập và nghề nghiệp",
  ];

  return (
    <main className="w-full bg-white text-slate-900">
      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-sky-950 lg:min-h-[720px]">
        <img
          src="https://placehold.co/1280x819/0f172a/ffffff?text=Newcitygroup+Suleco+Campus"
          alt="Newcitygroup Suleco Campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-950/65 to-sky-950/10" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20 lg:min-h-[720px]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Cơ sở vật chất & Virtual Tour
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Khám phá trung tâm đào tạo hiện đại
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/90 md:text-lg">
              Không gian học tập, thực hành và tư vấn được thiết kế nhằm hỗ trợ
              học viên tiếp cận môi trường đào tạo nghề chuyên nghiệp, gắn với
              nhu cầu thực tế của doanh nghiệp.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-yellow-950 shadow-lg transition hover:bg-amber-400">
                <CalendarDays className="h-5 w-5" />
                Đặt lịch tham quan
              </button>

              <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition hover:bg-white hover:text-sky-950">
                Xem chương trình đào tạo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-sky-950 md:text-4xl">
              Điểm nhấn của Campus
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              Môi trường học tập được xây dựng để kết hợp giữa lý thuyết, thực
              hành và tư vấn định hướng nghề nghiệp cho học viên.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {campusHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className={`group relative h-72 overflow-hidden rounded-xl bg-white shadow-md ${
                    item.large ? "lg:col-span-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/95 via-sky-950/50 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-yellow-950">
                      <Icon className="h-4 w-4" />
                      {item.tag}
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-base leading-7 text-white/85">
                      {item.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Space */}
      <section className="bg-sky-950 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
              Không gian thực hành
            </p>

            <h2 className="text-3xl font-bold leading-tight text-orange-300 md:text-4xl">
              Không gian đào tạo thực hành thế hệ mới
            </h2>

            <p className="mt-6 text-base leading-8 text-white/90 md:text-lg">
              Cơ sở vật chất được đầu tư nhằm phục vụ quá trình học tập thực tế,
              giúp học viên rèn luyện kỹ năng nghề, làm quen với môi trường làm
              việc chuyên nghiệp và chuẩn bị tốt hơn cho cơ hội việc làm sau đào
              tạo.
            </p>

            <div className="mt-8 space-y-4">
              {featureList.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amber-500" />
                  <p className="text-base leading-7 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://placehold.co/292x192/e2e8f0/0f172a?text=Phong+hoc"
              alt="Phòng học"
              className="h-48 w-full rounded-xl object-cover shadow-2xl"
            />
            <img
              src="https://placehold.co/292x192/cbd5e1/0f172a?text=Xuong+thuc+hanh"
              alt="Xưởng thực hành"
              className="h-48 w-full rounded-xl object-cover shadow-2xl"
            />
            <img
              src="https://placehold.co/292x192/94a3b8/ffffff?text=Tu+van"
              alt="Không gian tư vấn"
              className="h-48 w-full rounded-xl object-cover shadow-2xl"
            />
            <img
              src="https://placehold.co/292x192/64748b/ffffff?text=Campus"
              alt="Campus"
              className="h-48 w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-3xl bg-slate-50 shadow-xl lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">
                Virtual Tour 360
              </p>

              <h2 className="text-3xl font-bold leading-tight text-sky-950 md:text-4xl">
                Trải nghiệm không gian học tập trước khi đến campus
              </h2>

              <p className="mt-5 text-base leading-8 text-zinc-700">
                Virtual Tour giúp học viên và phụ huynh hình dung rõ hơn về hệ
                thống phòng học, khu thực hành, không gian sinh hoạt và khu tư
                vấn tuyển sinh của Newcitygroup - Suleco.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <MapPin className="mb-3 h-7 w-7 text-sky-950" />
                  <h3 className="font-semibold text-sky-950">
                    Tham quan linh hoạt
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Xem nhanh các khu vực chính của campus ngay trên website.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <Users className="mb-3 h-7 w-7 text-sky-950" />
                  <h3 className="font-semibold text-sky-950">
                    Hỗ trợ tư vấn
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Đội ngũ tuyển sinh sẵn sàng giải đáp lộ trình học phù hợp.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[360px] bg-sky-950">
              <img
                src="https://placehold.co/700x520/0f172a/ffffff?text=Virtual+Tour+360"
                alt="Virtual Tour 360"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-sky-950/35" />

              <button className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-amber-500 px-7 py-4 font-semibold text-yellow-950 shadow-xl transition hover:bg-amber-400">
                Bắt đầu tour
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-3xl border border-white/60 bg-white/75 p-8 shadow-xl backdrop-blur-md md:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-sky-950 md:text-4xl">
              Đặt lịch tham quan Campus trực tiếp
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-700">
              Hãy để lại thông tin, đội ngũ tư vấn tuyển sinh sẽ liên hệ để xác
              nhận thời gian tham quan và hỗ trợ bạn tìm hiểu chương trình đào
              tạo phù hợp.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://placehold.co/48x48/f59e0b/ffffff?text=A"
                  alt="Tư vấn viên"
                  className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                />
                <img
                  src="https://placehold.co/48x48/0f172a/ffffff?text=B"
                  alt="Tư vấn viên"
                  className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                />
                <img
                  src="https://placehold.co/48x48/0284c7/ffffff?text=C"
                  alt="Tư vấn viên"
                  className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
                />
              </div>

              <p className="text-base leading-7 text-zinc-700">
                Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn.
              </p>
            </div>
          </div>

          <form className="rounded-2xl bg-white p-8 shadow-md">
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold tracking-wide text-zinc-700">
                  Họ và tên
                </label>
                <div className="relative">
                  <UserRound className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    className="h-12 w-full rounded-lg bg-sky-100 pl-10 pr-3 text-base outline-none transition placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold tracking-wide text-zinc-700">
                  Số điện thoại
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  <input
                    type="tel"
                    placeholder="+84 000 000 000"
                    className="h-12 w-full rounded-lg bg-sky-100 pl-10 pr-3 text-base outline-none transition placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold tracking-wide text-zinc-700">
                  Ngày mong muốn
                </label>
                <input
                  type="date"
                  className="h-12 w-full rounded-lg bg-sky-100 px-3 text-base text-slate-900 outline-none transition focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold tracking-wide text-zinc-700">
                  Đối tượng khách tham quan
                </label>
                <select className="h-12 w-full rounded-lg bg-sky-100 px-3 text-base text-slate-900 outline-none transition focus:ring-2 focus:ring-amber-500">
                  <option>Học sinh tiềm năng</option>
                  <option>Phụ huynh</option>
                  <option>Đối tác doanh nghiệp</option>
                  <option>Khách tham quan khác</option>
                </select>
              </div>

              <button
                type="button"
                className="mt-2 h-14 w-full rounded-lg bg-amber-500 text-base font-semibold text-yellow-950 shadow-md transition hover:bg-amber-400"
              >
                Xác nhận đặt lịch
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default FacilitiesAndVirtualTour;