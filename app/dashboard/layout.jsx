import React from 'react';

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="pt-20 px-10 md:px-20 lg:px-40 xl:px-60">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
