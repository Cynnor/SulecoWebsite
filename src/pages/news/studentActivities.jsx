/**
 * Component: StudentActivities
 * Trang góc Nhật Bản, văn hóa và đời sống thực tập sinh
 */
export default function StudentActivities() {
  return (
    <section className="w-full bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <img
          src="https://placehold.co/1280x614"
          alt="Student Activities"
          className="h-[614px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-950/60 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-2xl space-y-5">
              <div className="inline-flex rounded-full bg-amber-500 px-4 py-1">
                <span className="text-sm font-semibold tracking-wide text-white">
                  BẢN TIN VĂN HÓA
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Góc Nhật Bản: Kết Nối Ước
                <br />
                Mơ & Văn Hóa
              </h1>

              <p className="text-lg leading-7 text-white/90">
                Khám phá hành trình sống, làm việc và những nét đẹp tinh túy
                của xứ sở mặt trời mọc cùng cộng đồng SULECO.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED STORIES */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-sky-950">
              Câu Chuyện Nổi Bật
            </h2>

            <p className="mt-2 text-zinc-700">
              Cập nhật những xu hướng và kinh nghiệm mới nhất
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300">
              ←
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-950 text-white">
              →
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* BIG CARD */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://placehold.co/604x600"
              alt=""
              className="h-[600px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <span className="text-sm font-semibold uppercase tracking-wide text-red-200">
                KINH NGHIỆM LÀM VIỆC
              </span>

              <h3 className="mt-3 text-3xl font-semibold leading-snug text-white">
                Văn hóa Omotenashi trong môi trường
                <br />
                công sở Nhật Bản
              </h3>
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://placehold.co/604x288"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-sm font-semibold uppercase tracking-wide text-red-200">
                  ĐỜI SỐNG
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Top 10 món ăn đường phố phải thử tại Osaka
                </h3>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://placehold.co/290x288"
                  alt=""
                  className="h-72 w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-sm font-semibold uppercase tracking-wide text-red-200">
                    HỌC TẬP
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    Bí quyết đạt JLPT N2 trong 1 năm
                  </h3>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://placehold.co/290x288"
                  alt=""
                  className="h-72 w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/90 to-transparent" />

                <div className="absolute bottom-0 left-0 p-5">
                  <span className="text-sm font-semibold uppercase tracking-wide text-red-200">
                    DU LỊCH
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-white">
                    Hướng dẫn đi tàu Shinkansen
                    <br />
                    cho người mới
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="relative overflow-hidden bg-sky-950 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Tham gia cộng đồng SULECO
            </h2>

            <p className="mt-4 text-lg leading-7 text-white/80">
              Nhận thông tin mới nhất về việc làm, học bổng và các sự kiện văn
              hóa Nhật Bản trực tiếp qua email của bạn.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Địa chỉ email của bạn"
                className="flex-1 rounded-lg bg-white px-4 py-4 outline-none"
              />

              <button className="rounded-lg bg-amber-500 px-8 py-4 font-medium text-white transition hover:opacity-90">
                Đăng Ký Ngay
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/70 p-6 text-center backdrop-blur-md">
              <div className="text-3xl font-bold text-sky-950">50,000+</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-zinc-700">
                Thành viên
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 p-6 text-center backdrop-blur-md">
              <div className="text-3xl font-bold text-sky-950">1,200+</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-zinc-700">
                Bài viết
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 p-6 text-center backdrop-blur-md">
              <div className="text-3xl font-bold text-sky-950">100+</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-zinc-700">
                Sự kiện hàng năm
              </div>
            </div>

            <div className="rounded-2xl bg-white/70 p-6 text-center backdrop-blur-md">
              <div className="text-3xl font-bold text-sky-950">85%</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-zinc-700">
                Tỷ lệ đỗ JLPT
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE ARTICLES */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-sky-950">
            Khám Phá Thêm
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src="https://placehold.co/393x192"
                alt=""
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded bg-red-200 px-2 py-1 text-xs text-yellow-800">
                    DU LỊCH
                  </span>

                  <span className="text-xs text-zinc-500">
                    15/10/2023
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-8 text-sky-950">
                  Mùa lá đỏ Momiji: Những địa điểm ngắm cảnh đẹp nhất Kyoto
                </h3>

                <p className="mt-4 text-base leading-6 text-zinc-700">
                  Khám phá vẻ đẹp cổ kính của cố đô Kyoto dưới sắc đỏ rực rỡ
                  của mùa thu...
                </p>

                <button className="mt-5 flex items-center gap-2 font-medium text-yellow-800">
                  Đọc tiếp →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button className="rounded-lg border-2 border-sky-950 px-8 py-4 font-medium text-sky-950 transition hover:bg-sky-950 hover:text-white">
            Xem Tất Cả Bài Viết
          </button>
        </div>
      </div>
    </section>
  );
}