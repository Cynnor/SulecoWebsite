import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component: ScrollToTop
 * Tự động cuộn lên đầu trang khi thay đổi route
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
