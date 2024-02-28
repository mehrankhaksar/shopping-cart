import React from "react";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col font-Quicksand overflow-y-auto overflow-x-hidden">
      <Header />
      <main className="w-full flex-1 mt-8 pb-8 px-4">
        <div className="max-w-6xl w-full mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
