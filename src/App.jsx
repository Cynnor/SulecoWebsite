import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/homePage";

// About Us Pages
import GeneralIntroduction from "./pages/aboutUs/generalIntroduction";
import PhilosophyAndMotto from "./pages/aboutUs/philosophyAndMotto";
import ExpertAdvisors from "./pages/aboutUs/expertAdvisors";
import FacilitiesAndVirtualTour from "./pages/aboutUs/facilitiesAndVirtualTour";

// Training Pages
import LanguagesConnection from "./pages/training/languagesConnection";

// Admission Pages
import AdmissionGuide from "./pages/admission/admissionGuide";
import ScholarshipsAndTuition from "./pages/admission/scholarshipsAndTuition";
import OnlineApplication from "./pages/admission/onlineApplication";

// Career Pages
import PartnerNetwork from "./pages/career/partnerNetwork";
import DomesticOpportunities from "./pages/career/domesticOpportunities";
import InternationalCareer from "./pages/career/internationalCareer";
import InternshipDiary from "./pages/career/internshipDiary";

// News Pages
import NewsAndEvents from "./pages/news/newsAndEvents";
import StudentActivities from "./pages/news/studentActivities";
import TrainingNotifications from "./pages/news/trainingNotifications";
import ResourceLibrary from "./pages/news/resourceLibrary";

// Contact Pages
import ContactInfo from "./pages/contact/contactInfo";
import ConsultationForm from "./pages/contact/consultationForm";

// Admin Pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdmissionManagement from "./pages/admin/AdmissionManagement";
import ContactConsultation from "./pages/admin/ContactConsultation";
import CourseManagement from "./pages/admin/CourseManagement";
import PartnerManagement from "./pages/admin/PartnerManagement";
import PostEditor from "./pages/admin/PostEditor";
import SettingsPage from "./pages/admin/SettingsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { index: true, element: <AdminDashboard /> },
        { path: "admission", element: <AdmissionManagement /> },
        { path: "courses", element: <CourseManagement /> },
        { path: "partners", element: <PartnerManagement /> },
        { path: "posts", element: <PostEditor /> },
        { path: "users", element: <ContactConsultation /> },
        { path: "settings", element: <SettingsPage /> },
      ]
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "training",
          children: [
            { path: "languages-connection", element: <LanguagesConnection /> },
          ],
        },
        {
          path: "admission",
          children: [
            { path: "guide", element: <AdmissionGuide /> },
            { path: "scholarships", element: <ScholarshipsAndTuition /> },
            { path: "apply", element: <OnlineApplication /> },
          ],
        },
        {
          path: "career",
          children: [
            { path: "partners", element: <PartnerNetwork /> },
            { path: "domestic", element: <DomesticOpportunities /> },
            { path: "international", element: <InternationalCareer /> },
            { path: "diary", element: <InternshipDiary /> },
          ],
        },
        {
          path: "news",
          children: [
            { path: "events", element: <NewsAndEvents /> },
            { path: "student-activities", element: <StudentActivities /> },
            { path: "notifications", element: <TrainingNotifications /> },
            { path: "library", element: <ResourceLibrary /> },
          ],
        },
        {
          path: "contact",
          children: [
            { path: "info", element: <ContactInfo /> },
            { path: "consultation", element: <ConsultationForm /> },
          ],
        },
        {
          path: "about-us",
          children: [
            { path: "introduction", element: <GeneralIntroduction /> },
            { path: "philosophy", element: <PhilosophyAndMotto /> },
            { path: "experts", element: <ExpertAdvisors /> },
            { path: "facilities", element: <FacilitiesAndVirtualTour /> },
            { index: true, element: <Navigate to="/about-us/introduction" replace /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
