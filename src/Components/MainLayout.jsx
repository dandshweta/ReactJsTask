import React from 'react';
import Sidebar from './SideBar';
import ProposalList from './ProposalList';

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <ProposalList />
    </div>
  );
};

export default MainLayout;
