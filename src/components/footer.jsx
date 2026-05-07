export default function Footer() {
  return (
    <footer id="lien-he" className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-white">Suleco</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            Cổng thông tin giáo dục, tuyển sinh trung cấp và xuất khẩu lao động Nhật Bản.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Liên kết nhanh
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><a href="#gioi-thieu" className="transition hover:text-white">Giới thiệu</a></li>
            <li><a href="#chuong-trinh" className="transition hover:text-white">Chương trình</a></li>
            <li><a href="#quy-trinh" className="transition hover:text-white">Quy trình</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Liên hệ
          </h3>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>Email: contact@suleco.vn</p>
            <p>Hotline: 0xxx xxx xxx</p>
            <p>Địa chỉ: TP. Hồ Chí Minh</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Suleco. All rights reserved.
      </div>
    </footer>
  );
}