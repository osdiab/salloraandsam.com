import * as React from "react";
import { Link, useLocation } from "react-router-dom";

export const NotFound: React.FC = () => {
  const location = useLocation();
  const [shouldRefresh, setShouldRefresh] = React.useState<boolean>();

  React.useEffect(() => {
    let subscribed = true;
    if (shouldRefresh !== undefined) {
      return;
    }
    if (!location.pathname.endsWith(".pdf")) {
      setShouldRefresh(true);
      return;
    }
    fetch(location.pathname).then(res => {
      if (!subscribed) {
        return;
      }
      if (res.status < 400) {
        window.location.reload();
      }
      setShouldRefresh(true);
    });
    return () => {
      subscribed = false;
    };
  }, [shouldRefresh, location]);

  if (shouldRefresh === undefined || shouldRefresh) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>Not Found</h1>
      <Link to="/">Back</Link>
    </main>
  );
};
