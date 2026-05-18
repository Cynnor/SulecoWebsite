import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCourses } from '../../services/courseService';

const CourseDetail = () => {
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course');
  const [courseDetail, setCourseDetail] = useState(null);

  useEffect(() => {
    if (courseParam) {
      getCourses({ limit: 100 }).then((courses) => {
        const found = courses.find((c) => c._id === courseParam);
        if (found) setCourseDetail(found);
      }).catch(() => {});
    }
  }, [courseParam]);

  return (
    <div className="w-full min-h-screen bg-slate-50 font-sans">
      <section className="relative w-full py-16 bg-sky-950 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-white text-5xl font-bold font-['Montserrat']">Khóa học</h1>
          <p className="text-blue-100 text-lg mt-3">Danh sách khóa học tại Newcitygroup Suleco</p>
        </div>
      </section>

      <div className="max-w-[800px] mx-auto px-6 py-10">
        {courseDetail ? (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            {courseDetail.imageUrl && (
              <img src={courseDetail.imageUrl} alt={courseDetail.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            )}
            <h2 className="text-2xl font-bold font-['Montserrat'] text-sky-950 mb-3">{courseDetail.title}</h2>
            {courseDetail.description && <p className="text-slate-600 leading-relaxed mb-4">{courseDetail.description}</p>}
            {courseDetail.categoryId?.name && (
              <span className="inline-block px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full">{courseDetail.categoryId.name}</span>
            )}
            {courseDetail.duration && <p className="text-sm text-slate-500 mt-3">Thời lượng: {courseDetail.duration}</p>}
            {courseDetail.tuitionFee && <p className="text-sm text-slate-500">Học phí: {courseDetail.tuitionFee}</p>}
            {(courseDetail.courseDuration || courseDetail.intake || courseDetail.campus) && (
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {courseDetail.courseDuration && <div><span className="font-semibold text-slate-700">Thời gian:</span> <span className="text-slate-500">{courseDetail.courseDuration}</span></div>}
                {courseDetail.intake && <div><span className="font-semibold text-slate-700">Khai giảng:</span> <span className="text-slate-500">{courseDetail.intake}</span></div>}
                {courseDetail.campus && <div><span className="font-semibold text-slate-700">Địa điểm:</span> <span className="text-slate-500">{courseDetail.campus}</span></div>}
              </div>
            )}
            {courseDetail.courseOverview && <div className="mt-4"><h3 className="font-bold text-sky-950 mb-2">Tổng quan</h3><p className="text-slate-600 text-sm leading-relaxed">{courseDetail.courseOverview}</p></div>}
            {courseDetail.entryRequirements && <div className="mt-4"><h3 className="font-bold text-sky-950 mb-2">Yêu cầu đầu vào</h3><p className="text-slate-600 text-sm leading-relaxed">{courseDetail.entryRequirements}</p></div>}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">Vui lòng chọn một khóa học từ menu Đào tạo trên thanh header.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
