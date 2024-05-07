import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import "../../styles/error.scss";

export default function Error404() {
  const error = useRouteError();
  console.log(error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="errorpage">
        <img src="/warning.gif" alt="Warning icon" />
        <p>{error.data}</p>
        <p>
          Go back to home: <Link to="/">Home</Link>
        </p>
      </div>
    );
  }

  return <div className="errorpage">Something went wrong</div>;
}
