import useInitialized from "../../hooks/useInitialized";

const Layout = ({ classes, children }) => {
  const initClass = useInitialized();

  return (
    <div
      className={`${initClass} ${
        classes ? classes : ""
      } row-start-2 col-start-2 col-end-13 overflow-y-auto px-[15px]`}
    >
      {children}
    </div>
  );
};

export default Layout;
