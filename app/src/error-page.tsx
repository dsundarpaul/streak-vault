import { Link, useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h1>Sorry, Page not found! 😢</h1>
      <Link to={"/"}>Home</Link>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
    </div>
  );
};
