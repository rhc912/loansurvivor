// Loan Survivor™ – React + Tailwind App Enhanced with Design Boost

import React, { useState } from 'react';

const App = () => {
  const [borrowerData, setBorrowerData] = useState({
    loanType: 'Conventional',
    occupancy: 'Primary Residence',
    propertyType: '2-Unit',
    downPayment: '5%',
    creditScore: 743
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBorrowerData(prev => ({ ...prev, [name]: value }));
  };

  const checklist = [
    '✅ W-2s + 30-day paystubs',
    '✅ 401k statement or VOD for reserves',
    '✅ 2-month bank statements with LOE for any large deposits',
    '✅ DU findings confirming 5% down approval on 2-unit property',
    '✅ Mortgage statement for existing FHA duplex',
    '✅ Lease agreement or tax returns to support $1,000 rental income',
    '✅ Homeowner’s insurance + tax info on current property'
  ];

  const redFlags = [
    '⚠️ Must confirm DU accepts 5% down on 2-unit primary – manual UW not allowed',
    '⚠️ Assets are tight – confirm estimated closing costs + required reserves',
    '⚠️ Confirm occupancy and intent, plus how PITIA of old home affects DTI',
    '⚠️ Request supporting doc (401k/VOD) for retirement asset reserves'
  ];

  const reminders = [
    '🔔 Ask borrower for 2-month bank statements and verify any non-payroll deposits',
    '🔔 Get current mortgage statement and lease (if any) on existing property',
    '🔔 Flag for Rob if DU doesn’t run clean – 2-unit primary at 5% is not manually underwritable'
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-white min-h-screen font-sans">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black text-green-700 tracking-tight leading-tight uppercase drop-shadow-md">Loan Survivor™</h1>
        <p className="text-lg text-gray-600 italic mt-2">Built to outlast denials and dominate approvals.</p>
      </div>

      <section className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 mb-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">📋 Input Borrower Data</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {['loanType', 'occupancy', 'propertyType', 'downPayment', 'creditScore'].map((field, index) => (
            <div key={index}>
              <label className="block mb-1 font-medium capitalize text-gray-700">
                {field.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                name={field}
                value={borrowerData[field]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))}
        </form>
      </section>

      <section className="bg-green-50 p-6 rounded-2xl shadow mb-8 border-l-4 border-green-400">
        <h2 className="text-xl font-semibold text-green-800 mb-2">✅ Checklist for Karen</h2>
        <ul className="list-disc pl-6 space-y-2 text-green-900">
          {checklist.map((item, index) => (
            <li key={index} className="bg-white p-2 rounded-md shadow-sm">{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-red-50 p-6 rounded-2xl shadow mb-8 border-l-4 border-red-400">
        <h2 className="text-xl font-semibold text-red-800 mb-2">⚠️ Red Flags</h2>
        <ul className="list-disc pl-6 space-y-2 text-red-900">
          {redFlags.map((flag, index) => (
            <li key={index} className="bg-white p-2 rounded-md shadow-sm">{flag}</li>
          ))}
        </ul>
      </section>

      <section className="bg-yellow-50 p-6 rounded-2xl shadow border-l-4 border-yellow-400">
        <h2 className="text-xl font-semibold text-yellow-800 mb-2">🔔 Reminders to Karen</h2>
        <ul className="list-disc pl-6 space-y-2 text-yellow-900">
          {reminders.map((note, index) => (
            <li key={index} className="bg-white p-2 rounded-md shadow-sm">{note}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
