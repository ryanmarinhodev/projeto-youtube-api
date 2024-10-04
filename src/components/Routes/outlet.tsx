import { Outlet } from "react-router-dom";

function SimpleLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default SimpleLayout;
