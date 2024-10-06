
import React, { useState } from 'react';

const ProposalList = () => {
  const [selectedStage, setSelectedStage] = useState('Ready For Next Stage'); // Default selected stage

  const proposals = [
    { title: 'Trees of the Future - 2023', stage: 'Submitted', entity: 'Trees of the Future', funding: '$5000', tags: ['Climate', 'Climate Justice'] },
    { title: 'Art For All - 2024', stage: 'Submitted', entity: 'Art For All', funding: '$0', tags: ['Climate', 'Arts', 'Scholarship'] },
    { title: 'Save the Children - 2024', stage: 'Submitted', entity: 'Save the Children', funding: '$400,000', tags: ['Education'] },
    { title: 'Art For All - 2024', stage: 'Draft', entity: 'Art For All', funding: '$30,000', tags: ['Climate', 'Arts', 'Scholarship'] },
    { title: 'Climate Words - 2024', stage: 'Draft', entity: 'Climate Words', funding: '$10,000', tags: ['Arts'] },
    { title: 'Trees of the Future - 2023', stage: 'Draft', entity: 'Trees of the Future', funding: '$5000', tags: ['Climate', 'Climate Justice'] },
    { title: 'Art For All - 2024', stage: 'Draft', entity: 'Art For All', funding: '$0', tags: ['Climate', 'Arts', 'Scholarship'] },
    { title: 'Save the Children - 2024', stage: 'Draft', entity: 'Save the Children', funding: '$400,000', tags: ['Education'] },
    { title: 'Save the Children - 2023', stage: 'In Review', entity: 'Save the Children', funding: '$100,000', tags: ['Education'] },
    // Add more proposals as needed
  ];

  // Filter proposals based on the selected stage
  const filteredProposals = proposals.filter(proposal => proposal.stage === selectedStage);

  return (
    <div className="flex bg-[#F5F5F5]">
      {/* Main Content */}
      <div className="w-full p-6">
        {/* Header */}
        <div className="flex flex-col items-start justify-between mb-4 space-y-4">
          <h2 className="text-2xl font-semibold">Proposals</h2>
          <div className="flex space-x-4">
            <button className="bg-[#2774AE] text-white px-4 py-2 rounded-lg">
              + New Proposals
            </button>
            <select className="bg-[#ffffff]p-2 rounded-lg">
              <option>Default Pipeline</option>
              {/* Other options */}
            </select>
            <button className="bg-[#ffffff] p-2 rounded-lg">Assigned to Me</button>
          </div>
        </div>
<div className="flex">
  <div className="w-1/4 bg-[#ffffff] p-4 space-y-4" style={{ minHeight: 'calc(100vh - 2rem)', minWidth: 'calc(45vh - 2rem)' }}>
    {['Draft', 'Submitted', 'In Review', 'Pending', 'Approved', 'Rejected', 'Agreement', 'Payment', 'Reporting', 'Awarded'].map((stage) => (
      <div
        key={stage}
        onClick={() => setSelectedStage(stage)}
        className={`flex justify-between items-center p-3 border-b border-black cursor-pointer w-full ${selectedStage === stage ? 'bg-[#B9D9EB] text-white' : 'bg-[#ffffff]'}`}
      >
        <div className="flex items-center">
          {/* Conditionally render the appropriate icon and set its color */}
          {stage === 'Draft' && <i className="fa-solid fa-pen text-blue-500 mr-2"></i>}
          {stage === 'Submitted' && <i className="fa-solid fa-paper-plane text-green-500 mr-2"></i>}
          {stage === 'In Review' && <i className="fa-solid fa-eye text-yellow-500 mr-2"></i>}
          {stage === 'Pending' && <i className="fa-solid fa-clock text-orange-500 mr-2"></i>}
          {stage === 'Approved' && <i className="fa-solid fa-check-circle text-green-600 mr-2"></i>}
          {stage === 'Rejected' && <i className="fa-solid fa-times-circle text-red-600 mr-2"></i>}
          {stage === 'Agreement' && <i className="fa-solid fa-file-contract text-purple-500 mr-2"></i>}
          {stage === 'Payment' && <i className="fa-solid fa-credit-card text-indigo-500 mr-2"></i>}
          {stage === 'Reporting' && <i className="fa-solid fa-file-alt text-blue-500 mr-2"></i>}
          {stage === 'Awarded' && <i className="fa-solid fa-trophy text-gold-500 mr-2"></i>}
          <span>{stage}</span>
        </div>
        <span>{proposals.filter(p => p.stage === stage).length}</span>
      </div>
    ))}
  </div>
{/* </div> */}





          {/* Content Sections */}
          <div className="w-3/4 p-6">
            {filteredProposals.length > 0 ? (
              <table className="min-w-full bg-white shadow-md rounded-lg">
                <thead>
                <h3 className="text-xl font-semibold p-3 mb-2 text-center whitespace-nowrap">
  {selectedStage} Proposals ({filteredProposals.length})
</h3>
                  <tr className="border-b  border-t bg-[#F8F8F8]">
                    <th className="p-2 text-left">Proposal Title</th>
                    <th className="p-2 text-left">Stage</th>
                    <th className="p-2 text-left">Entity</th>
                    <th className="p-2 text-left">Funding Requested</th>
                    <th className="p-2 text-left">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProposals.map((proposal, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2 "style={{ color: '#2774AE' }}>{proposal.title}</td>
                      <td className="p-2">{proposal.stage}</td>
                      <td className="p-2">{proposal.entity}</td>
                      <td className="p-2">{proposal.funding}</td>
                      <td className="p-2">
                        {proposal.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 text-blue-700 p-1 rounded-lg mr-2 text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">No {selectedStage} content available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalList;
