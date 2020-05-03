import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function stripTrailingSlash(path: string): string {
  return path.replace(/[/]*$/, "");
}

export const ScrollToTopOnForwardNavigation: React.FC = () => {
  const {
    action,
    location: { pathname }
  } = useHistory();
  const [curPathname, setCurPathname] = useState(pathname);

  useEffect(() => {
    // don't scroll to the top when navigating around history
    const prevPathname = curPathname;
    if (pathname !== curPathname) {
      setCurPathname(pathname);
    }

    if (
      action !== "POP" &&
      // don't scroll to top if path name didnt change
      stripTrailingSlash(prevPathname) !== stripTrailingSlash(pathname)
    ) {
      window.scrollTo({
        left: 0,
        top: 0
      });
    }
  }, [pathname, action, curPathname]);

  return null;
};
