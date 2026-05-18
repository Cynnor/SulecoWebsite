import React from "react";
import {
  ChevronRight,
  Download,
  ArrowRight,
  Search,
  Calendar,
  Clock3,
} from "lucide-react";

/**
 * Component: TrainingNotifications
 * Trang thông báo từ Phòng Đào tạo (lịch học, lịch thi, kết quả...)
 */
const TrainingNotifications = () => {
  const timelineData = [
    {
      type: "THÔNG BÁO KHẨN",
      color: "bg-amber-500 text-yellow-900",
      dot: "bg-amber-500",
      title:
        "Điều chỉnh lịch thi kết thúc học phần Kỳ I - Khóa 2024",
      desc:
        "Do trùng với lịch hội thảo quốc tế, Phòng Đào tạo xin thông báo thay đổi thời gian thi các môn chuyên ngành Nhật Bản Học...",
      date: "24 Tháng 05, 2024",
      file: "Lich_thi_dieu_chinh.pdf",
    },
    {
      type: "KẾT QUẢ",
      color: "bg-blue-100 text-sky-950",
      dot: "bg-sky-900",
      title:
        "Công bố kết quả phỏng vấn Đơn hàng Kỹ sư Xây dựng - Osaka",
      desc:
        "Danh sách học viên trúng tuyển chính thức và dự bị cho đơn hàng Xây dựng tại khu vực Osaka, Nhật Bản đợt phỏng vấn tháng 05...",
      date: "20 Tháng 05, 2024",
      file: "1,240 lượt xem",
    },
    {
      type: "QUY ĐỊNH",
      color: "bg-blue-100 text-sky-950",
      dot: "bg-sky-900",
      title:
        "Cập nhật nội quy đồng phục và tác phong tại trung tâm đào tạo",
      desc:
        "Nhằm nâng cao tính chuyên nghiệp, Suleco ban hành hướng dẫn mới về việc sử dụng đồng phục và giờ giấc sinh hoạt tại ký túc xá...",
      date: "15 Tháng 05, 2024",
      file: "Noi_quy_moi_2024.pdf",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-20 px-6 py-8">
      {/* Header */}
      <section className="space-y-8">
        <div className="space-y-6">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
            <span className="text-zinc-500">Trang chủ</span>
            <ChevronRight className="h-4 w-4 text-zinc-500" />

            <span className="text-sky-950">Đào tạo</span>
            <ChevronRight className="h-4 w-4 text-zinc-500" />

            <span className="font-bold text-sky-950">
              Thông báo Phòng Đào tạo
            </span>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold text-sky-900 md:text-5xl">
              Thông báo Phòng Đào tạo
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
              Cập nhật những thông tin mới nhất về lịch học, quy định đào tạo
              và kết quả học tập dành cho học viên tại Suleco.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Lịch học & Thi",
            "Quy định",
            "Kết quả học tập",
            "Thông báo chung",
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 rounded-xl border border-neutral-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-8 w-8 rounded bg-amber-500" />

              <h3 className="text-center text-xl font-semibold text-sky-950">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Timeline */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-5 w-5 rounded bg-amber-500" />

            <h2 className="text-3xl font-bold text-sky-950">
              Timeline Thông báo
            </h2>
          </div>

          <div className="relative ml-3 border-l-2 border-sky-100 pl-10">
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[49px] top-1 h-5 w-5 rounded-full border-4 border-white ${item.dot}`}
                  />

                  {/* Card */}
                  <div className="rounded-xl border border-neutral-300 bg-white p-5 shadow-sm">
                    <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
                      <div className="space-y-3">
                        <div
                          className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold tracking-wide ${item.color}`}
                        >
                          {item.type}
                        </div>

                        <h3 className="text-2xl font-semibold leading-9 text-sky-950">
                          {item.title}
                        </h3>

                        <p className="text-base leading-7 text-zinc-700">
                          {item.desc}
                        </p>
                      </div>

                      <span className="text-sm font-semibold text-zinc-500">
                        {item.date}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-col gap-4 border-t border-sky-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2 text-sm font-semibold text-zinc-500">
                        <Download className="h-4 w-4" />
                        {item.file}
                      </div>

                      <button className="inline-flex items-center gap-2 font-semibold text-sky-950">
                        Chi tiết
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <div className="mt-10 flex justify-center">
            <button className="rounded-full border-2 border-sky-950 px-8 py-3 font-semibold text-sky-950 transition hover:bg-sky-950 hover:text-white">
              Xem thêm thông báo
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Search */}
          <div className="rounded-xl bg-sky-900 p-5">
            <h3 className="text-2xl font-semibold text-white">
              Tìm kiếm thông báo
            </h3>

            <div className="relative mt-5">
              <Search className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" />

              <input
                type="text"
                placeholder="Nhập từ khóa..."
                className="h-14 w-full rounded-lg border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/60 outline-none"
              />
            </div>
          </div>

          {/* Course Card */}
          <div className="overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm">
            <img
              src="https://placehold.co/393x192"
              alt="Course"
              className="h-52 w-full object-cover"
            />

            <div className="space-y-4 p-5">
              <h3 className="text-2xl font-semibold leading-9 text-sky-950">
                Chương trình Tiếng Nhật Giao tiếp
              </h3>

              <p className="text-base leading-7 text-zinc-700">
                Đăng ký ngay khóa học cấp tốc dành cho học viên chuẩn bị xuất
                cảnh tháng 10/2024.
              </p>

              <button className="flex h-12 w-full items-center justify-center rounded-lg bg-amber-500 text-base font-semibold text-white transition hover:bg-amber-400">
                Tìm hiểu ngay
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-xl border border-neutral-300 bg-white p-5 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-5 w-5 rounded bg-amber-500" />

              <h3 className="text-2xl font-semibold text-sky-950">
                Sự kiện sắp tới
              </h3>
            </div>

            <div className="space-y-5">
              {[
                {
                  day: "30",
                  month: "TH5",
                  title: "Lễ Bế giảng K23",
                  info: "08:00 - Hội trường A",
                },
                {
                  day: "02",
                  month: "TH6",
                  title: "Thi thử JLPT N4",
                  info: "Toàn bộ trung tâm",
                },
              ].map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blue-50">
                    <span className="text-sm font-bold text-sky-950">
                      {event.day}
                    </span>

                    <span className="text-[10px] uppercase text-sky-950">
                      {event.month}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-sky-950">
                      {event.title}
                    </h4>

                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-zinc-500">
                      <Clock3 className="h-4 w-4" />
                      {event.info}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default TrainingNotifications;