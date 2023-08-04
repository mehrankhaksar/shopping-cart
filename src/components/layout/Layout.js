import React from "react";

import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-gray-50 overflow-hidden">
        <div className="max-w-6xl min-h-[calc(100vh-5rem)] relative mx-auto py-10 px-5">
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
