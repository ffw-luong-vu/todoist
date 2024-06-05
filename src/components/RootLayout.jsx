import { Outlet } from "react-router-dom";

import Header from "./Header";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="max-w-md mx-auto p-6">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
