import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainUserLayout from "./layouts/MainUserLayout";
import { HomeScreen, SettingsScreen } from "./views";
import { ErrorPage } from "./error-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainUserLayout,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          Component: HomeScreen,
        },
        {
          path: "settings",
          Component: SettingsScreen,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     {ROUTES.map((route, idx) => (
    //       <Route
    //         key={idx}
    //         path={route.path}
    //         element={<MainUserLayout>{route.component}</MainUserLayout>}
    //       />
    //     ))}
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
