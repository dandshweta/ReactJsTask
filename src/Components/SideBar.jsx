import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-75 h-screen bg-[#F5F5F5] p-4 border-r">
      <div className="flex items-start mb-2">
  <img src="/images/square.jpg" alt="Foundation Logo" className="w-12 h-12 rounded-lg" />
  <div className="ml-2">
    <span className="text-lg font-semibold">Temelio Foundation</span>
    <p >Foundation</p>
  </div>
  
</div>
  <div className="relative">
    <input 
      type="text" 
      placeholder="Search..." 
      className="w-full p-2 pl-10 border border-gray-300 rounded-lg" 
    />
    <span className="absolute left-3 top-2.5 text-gray-400">
      <i className="fas fa-search"></i> {/* FontAwesome search icon */}
    </span>
  </div>

      <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
  <i className="fa-sharp fa-regular fa-bell"></i>
  <button className="text-left p-2 hover:bg-gray-100 rounded">Notifications</button>
</div>
<div className="flex items-center space-x-2">
<i class="fa-solid fa-house"></i>
        <button className="text-left p-2 hover:bg-gray-100 rounded">Home</button>
        </div>
<div className="flex items-center space-x-2">
  <i className="fa-solid fa-list-check"></i>
    <button className="text-left p-2 hover:bg-gray-100 rounded">Tasks</button>
</div>

<div className="flex items-center space-x-2 bg-[#B9D9EB]">
  <i className="fa-regular fa-file-lines"></i>
  <div className="flex items-center gap-x-12 bg-[#B9D9EB]">
    <button className="text-left p-2 hover:bg-gray-100 rounded bg-[#B9D9EB]">Proposals</button>
    <i className=" text-orange-300 fa-regular fa-star"></i>
  </div>
</div>


        <div className="text-gray-500 mt-4">Workflow</div>
        <div className="flex items-center space-x-2">
        <i class="fa-solid fa-pen"></i>
        <button className="text-left p-2 hover:bg-gray-100 rounded">Form Builder</button>
        </div>
        <div className="flex items-center space-x-2">
        <i class="fa-regular fa-star-half-stroke"></i>
        <button className="text-left p-2 hover:bg-gray-100 rounded">Reviewers</button>
        </div>
        <div className="flex items-center space-x-2">
        <i class="fa-regular fa-money-bill-1"></i>
        <button className="text-left p-2 hover:bg-gray-100 rounded">Payments</button>
        </div>
        <div className="flex items-center space-x-2">
        <i class="fa-solid fa-circle"></i>
        <button className="text-left p-2 hover:bg-gray-100 rounded">Grantee Reports</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
