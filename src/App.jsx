import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/homePage";
import GeneralIntroduction from "./pages/aboutUs/generalIntroduction";
import PhilosophyAndMotto from "./pages/aboutUs/philosophyAndMotto";
import ExpertAdvisors from "./pages/aboutUs/expertAdvisors";
import FacilitiesAndVirtualTour from "./pages/aboutUs/facilitiesAndVirtualTour";
import FormalEducation from "./pages/training/formalEducation";
import ShortTermCourses from "./pages/training/shortTermCourses";
import LanguageTraining from "./pages/training/languageTraining";
import TrainingPartnerships from "./pages/training/trainingPartnerships";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "training",
          children: [
            { index: true, element: <TrainingCatalog /> },
            { path: "formal-education", element: <FormalEducation /> },
            { path: "short-term", element: <ShortTermCourses /> },
            { path: "languages", element: <LanguageTraining /> },
            { path: "partnerships", element: <TrainingPartnerships /> },
          ],
        },
      ],
    },
    {
      path: "/about-us",
      element: <Layout />,
      children: [
        {path: "introduction", element: <GeneralIntroduction />},
        {path: "philosophy", element: <PhilosophyAndMotto />},
        {path: "experts", element: <ExpertAdvisors />},
        {path: "facilities", element: <FacilitiesAndVirtualTour />},
        {index: true,element: <Navigate to="/about-us/introduction" replace />},
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
