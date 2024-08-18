import React, { useState } from "react";
import Button from "./Button";

const ModalBox = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    date: "",
    week: "",
    pic: "",
    opportunity: "",
    type: "",
    account: "",
    activity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Add Worklog</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Week</label>
            <input
              type="number"
              name="week"
              value={formData.week}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">PIC</label>
            <input
              type="text"
              name="pic"
              value={formData.pic}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Opportunity</label>
            <input
              type="text"
              name="opportunity"
              value={formData.opportunity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Account</label>
            <input
              type="text"
              name="account"
              value={formData.account}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Activity</label>
            <textarea
              name="activity"
              value={formData.activity}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <Button className="bg-red-500 hover:bg-red-600" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Yes</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalBox;
