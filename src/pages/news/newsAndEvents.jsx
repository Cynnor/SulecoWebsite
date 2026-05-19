import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock3,
  MapPin,
  Search,
  Newspaper,
} from "lucide-react";
import { getPosts } from "../../services/postService";

/**
 * Component: NewsAndEvents
 * Trang tin tức và các sự kiện nổi bật của Suleco
 */
const NewsAndEvents = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts({ limit: 20 });
        if (res?.data) setNewsList(res.data);
      } catch (e) {
        /* fallback */
      }
    };
    fetchPosts();
  }, []);

  const upcomingEvents = (newsList.length > 0 ? newsList.slice(0, 3) : []).map((p, index) => {
    const d = p.createdAt ? new Date(p.createdAt) : new Date();
    const months = ['THÁNG 1','THÁNG 2','THÁNG 3','THÁNG 4','THÁNG 5','THÁNG 6','THÁNG 7','THÁNG 8','THÁNG 9','THÁNG 10','THÁNG 11','THÁNG 12'];
    return {
      month: months[d.getMonth()],
      day: String(d.getDate()).padStart(2, '0'),
      title: p.title || p.name || 'Bài viết mới',
      info: p.category || p.excerpt?.slice(0, 40) || p.description?.slice(0, 40) || 'Xem chi tiết',
      dark: index % 2 === 0,
    };
  });

  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-6 pt-8 pb-28">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl shadow-2xl">
        <img
          src="https://placehold.co/1232x528"
          alt="News Banner"
          className="h-[528px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-950/40 to-transparent" />

        <div className="absolute left-0 top-0 flex h-full max-w-3xl flex-col justify-center p-12">
          <div className="mb-5 inline-flex w-fit rounded-full bg-amber-500 px-4 py-1">
            <span className="text-sm font-semibold uppercase tracking-wide text-yellow-900">
              Sự kiện nổi bật
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Lễ Ký Kết Hợp Tác Chiến Lược Cung Ứng Nhân Lực Chất Lượng Cao Sang Nhật Bản 2024
          </h1>

          <p className="mt-6 text-base leading-8 text-blue-100">
            Suleco chính thức bắt tay cùng các tập đoàn hàng đầu Nhật Bản mở ra
            hàng ngàn cơ hội việc làm và phát triển sự nghiệp cho thanh niên
            Việt Nam trong năm tới.
          </p>

          <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-medium text-yellow-900 transition hover:bg-amber-400">
            Xem chi tiết
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Filter */}
      <section className="flex flex-col gap-5 pt-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {["Tất cả", "Sự kiện", "Tin nội bộ", "Tin giáo dục"].map(
            (item, index) => (
              <button
                key={index}
                className={`rounded-full px-6 py-2 text-base transition ${
                  index === 0
                    ? "bg-sky-950 text-white"
                    : "bg-blue-100 text-zinc-700 hover:bg-blue-200"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="relative w-full lg:w-80">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <input
            type="text"
            placeholder="Tìm kiếm tin tức..."
            className="h-12 w-full rounded-full border border-neutral-300 bg-white pl-11 pr-4 outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </section>

      {/* Content */}
      <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* News */}
        <div className="grid gap-6 md:grid-cols-2">
          {(newsList.length > 0 ? newsList : []).map((item, index) => {
            const date = item.publishedAt ? new Date(item.publishedAt).toLocaleDateString('vi-VN') : '';
            return (
              <article
                key={item._id || index}
                className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={item.coverImageUrl || 'https://placehold.co/393x221'}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2 text-zinc-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{date}</span>
                  </div>

                  <h3 className="text-lg font-bold leading-7 text-sky-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-zinc-700">
                    {item.excerpt || ''}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-2 font-bold text-yellow-800">
                    Đọc tiếp
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Upcoming */}
          <div className="rounded-xl border border-neutral-300 bg-blue-50 p-5">
            <div className="mb-5 flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-yellow-800" />

              <h2 className="text-lg font-bold text-sky-950">
                Sự kiện sắp tới
              </h2>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-3"
                >
                  <div
                    className={`flex h-16 w-16 flex-col items-center justify-center rounded-sm ${
                      item.dark
                        ? "bg-sky-950 text-white"
                        : "bg-amber-500 text-yellow-900"
                    }`}
                  >
                    <span className="text-xs font-bold uppercase">
                      {item.month}
                    </span>

                    <span className="text-2xl font-bold">{item.day}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-bold leading-5 text-sky-950">
                      {item.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1 text-xs text-zinc-500">
                      {index === 0 ? (
                        <Clock3 className="h-3 w-3" />
                      ) : (
                        <MapPin className="h-3 w-3" />
                      )}

                      <span>{item.info}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe */}
            <div className="mt-6 rounded-lg bg-sky-900 p-5">
              <h3 className="text-lg font-bold text-white">
                Đăng ký nhận tin tức
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                Đừng bỏ lỡ các cơ hội việc làm và sự kiện hấp dẫn nhất.
              </p>

              <div className="mt-5 space-y-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="h-11 w-full rounded-md border-none bg-white px-4 outline-none"
                />

                <button className="h-11 w-full rounded-md bg-amber-500 text-sm font-semibold text-yellow-900 transition hover:bg-amber-400">
                  ĐĂNG KÝ NGAY
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default NewsAndEvents;