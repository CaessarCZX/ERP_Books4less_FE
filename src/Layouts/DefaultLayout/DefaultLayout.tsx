import { FC } from "react";
import { Outlet, OutletProps } from "react-router-dom";

const DefaultLayout: FC<OutletProps> = () => {
  return <div>{<Outlet />}</div>;
};

export default DefaultLayout;
