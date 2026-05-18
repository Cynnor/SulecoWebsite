import React from "react";
import {
  Search,
  ArrowRight,
  Download,
  Play,
  FileText,
  BookOpen,
  Video,
  FolderOpen,
} from "lucide-react";

/**
 * Component: ResourceLibrary
 * Trang thư viện tài liệu, video và quy trình hồ sơ
 */
const ResourceLibrary = () => {
  const resources = [
    {
      type: "PDF",
      title: "Sổ tay Thực tập sinh Nhật Bản 2024",
      desc: "Kiến thức nền tảng và quy tắc ứng xử khi làm việc tại các nghiệp đoàn Nhật Bản.",
      info: "Dung lượng: 4.2 MB",
      action: "Tải về",
      tagColor: "bg-amber-500 text-yellow-900",
    },
    {
      type: "VIDEO",
      title: "Video Hướng dẫn Phỏng vấn Đơn tuyển",
      desc: "Bí quyết tự tin và cách trả lời các câu hỏi thường gặp từ nhà tuyển dụng Nhật Bản.",
      info: "Thời lượng: 12:45",
      action: "Xem ngay",
      tagColor: "bg-sky-950 text-white",
    },
    {
      type: "DOCS",
      title: "Mẫu Hồ sơ Đăng ký Tham gia",
      desc: "Trọn bộ các mẫu đơn, sơ yếu lý lịch và hướng dẫn điền thông tin chính xác.",
      info: "Dung lượng: 1.5 MB",
      action: "Tải về",
      tagColor: "bg-amber-500 text-yellow-900",
    },
  ];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1280px] flex-col gap-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-sky-900 py-20">
        <img
          src="https://placehold.co/1280x364"
          alt="Library"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />

        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-4 px-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Thư viện Tư liệu & Học tập
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Truy cập kho tài liệu số, brochure giới thiệu, quy trình hồ sơ và
            video hướng dẫn chuyên nghiệp từ Newcitygroup Suleco.
          </p>

          {/* Search */}
          <div className="mt-6 flex w-full max-w-2xl items-center rounded-full bg-slate-50 p-2 shadow-xl">
            <div className="px-4 text-zinc-500">
              <Search className="h-5 w-5" />
            </div>

            <input
              type="text"
              placeholder="Tìm kiếm tài liệu, video, quy trình..."
              className="flex-1 bg-transparent px-2 py-3 outline-none"
            />

            <button className="rounded-full bg-amber-500 px-8 py-3 font-medium text-yellow-900 transition hover:bg-amber-400">
              Tìm kiếm
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Main Card */}
        <div className="rounded-xl border border-neutral-300 bg-sky-100 p-8 shadow-sm lg:col-span-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-900">
            <BookOpen className="h-6 w-6 text-white" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold text-sky-950">
            Tài liệu Học tập
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-700">
            Giáo trình tiếng Nhật, kỹ năng làm việc và văn hóa công sở dành cho
            thực tập sinh.
          </p>

          <div className="mt-10 flex items-center justify-between">
            <span className="text-sm font-semibold tracking-wide text-sky-950">
              124 Tài liệu
            </span>

            <ArrowRight className="h-5 w-5 text-amber-500" />
          </div>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-neutral-300 bg-white p-8 shadow-sm">
          <Video className="h-7 w-7 text-amber-500" />

          <h3 className="mt-5 text-2xl font-medium text-sky-950">
            Video Giới thiệu
          </h3>

          <p className="mt-3 text-base leading-7 text-zinc-700">
            Phim tư liệu và hướng dẫn quy trình XKLĐ.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 font-bold text-sky-950">
            Xem ngay
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-neutral-300 bg-white p-8 shadow-sm">
          <FileText className="h-7 w-7 text-amber-500" />

          <h3 className="mt-5 text-2xl font-medium text-sky-950">
            Brochures
          </h3>

          <p className="mt-3 text-base leading-7 text-zinc-700">
            Cẩm nang chương trình và thông tin đơn tuyển.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 font-bold text-sky-950">
            Tải xuống
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Full Width */}
        <div className="relative overflow-hidden rounded-xl bg-sky-950 p-8 lg:col-span-4">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-950 to-sky-900 opacity-70" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Quy trình Hồ sơ
              </h2>

              <p className="mt-3 text-base leading-7 text-white/80">
                Hướng dẫn chi tiết từng bước từ đăng ký đến xuất cảnh.
              </p>
            </div>

            <FolderOpen className="h-14 w-14 text-white/40" />
          </div>
        </div>
      </section>

      {/* Latest Documents */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-6">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-4xl font-bold text-sky-950">
                Tài liệu Mới nhất
              </h2>

              <p className="mt-3 text-base text-zinc-700">
                Cập nhật định kỳ các quy định và giáo trình mới.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Tất cả", "PDF", "Video"].map((item, index) => (
                <button
                  key={index}
                  className="rounded-lg border border-neutral-300 bg-slate-50 px-5 py-2 text-sky-950 transition hover:bg-slate-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Resource Cards */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {resources.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src="https://placehold.co/393x221"
                    alt="Resource"
                    className="h-56 w-full object-cover"
                  />

                  <div
                    className={`absolute right-3 top-3 rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide ${item.tagColor}`}
                  >
                    {item.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl leading-8 text-sky-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    {item.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-neutral-300 p-5">
                  <span className="text-xs text-zinc-500">{item.info}</span>

                  <button className="inline-flex items-center gap-2 font-bold text-sky-950">
                    {item.type === "VIDEO" ? (
                      <Play className="h-4 w-4" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}

                    {item.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center pt-10">
            <button className="rounded-full border-2 border-sky-950 px-8 py-3 text-base font-bold text-sky-950 transition hover:bg-sky-950 hover:text-white">
              Xem thêm tài liệu
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourceLibrary;