import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";
function Breadcrumbs() {
  const { cocktail, loading, getCocktail, useId, useName } = useGlobalContext();

  const location = useLocation();

  return (
    <nav className='breadcrumb'>
      <Link
        to='/'
        className={
          location.pathname === "/"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Cocktail list
      </Link>
      <span className='breadcrumb-arrow'>&gt;</span>
      {useId && (
        <>
          <Link
            to={`/cocktail/${useId}`}
            className={
              location.pathname === `/cocktail/${useId}`
                ? "breadcrumb-active"
                : "breadcrumb-not-active"
            }
          >
            {useName}
          </Link>
          <span className='breadcrumb-arrow'>&gt;</span>
          <Link
            to={`/cocktail/${useId}/instructions`}
            className={
              location.pathname === `/cocktail/${useId}/instructions`
                ? "breadcrumb-active"
                : "breadcrumb-not-active"
            }
          >
            {`make your ${useName}`}
          </Link>
          <span className='breadcrumb-arrow'>&gt;</span>
        </>
      )}

      <Link
        to={`/cocktail/contact`}
        className={
          location.pathname === `/cocktail/contact`
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        contact page
      </Link>
    </nav>
  );
}

export default Breadcrumbs;
