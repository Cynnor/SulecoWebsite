export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md shadow-blue-200">
            S
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-blue-700">
              Suleco
            </h1>
            <p className="text-xs text-slate-500">
              Cổng thông tin giáo dục & XKLĐ Nhật Bản
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#gioi-thieu" className="hover:text-blue-700">
            Giới thiệu
          </a>
          <a href="#chuong-trinh" className="hover:text-blue-700">
            Chương trình
          </a>
          <a href="#quy-trinh" className="hover:text-blue-700">
            Quy trình
          </a>
          <a href="#lien-he" className="hover:text-blue-700">
            Liên hệ
          </a>
        </nav>

        <a
          href="#lien-he"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          Đăng ký tư vấn
        </a>
      </div>
    </header>
  );
}
