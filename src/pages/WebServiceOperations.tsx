import { Link } from "@tanstack/react-router";
import RecordsTable from "../components/RecordsTable";
import { Plus } from "lucide-react";
import { Record } from "../types";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import axios from "axios";


const WebServiceOperations = () => {
  const [searchTerm, setSearchTerm] = useState('');
    const columnHelper = createColumnHelper<Record>();
  const sampleRecords: Record[] = [
    {
      id: "1",
      name: "John",
      surname: "Doe",
      age: 30,
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: "2",
      name: "Jane",
      surname: "Smith",
      age: 25,
      email: "jane@example.com",
      phone: "098-765-4321",
    },
  ];

   const handleDelete = () => {

   }
    const columns = useMemo(
      () => [
        columnHelper.accessor("name", {
          header: () => "Name",
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("surname", {
          header: () => "Surname",
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("age", {
          header: () => "Age",
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("email", {
          header: () => "Email",
          cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("phone", {
          header: () => "Phone",
          cell: (info) => info.getValue(),
        }),
        columnHelper.display({
          id: 'actions',
          header: () => 'Actions',
          cell: (info) => (
            <button
              onClick={() => handleDelete()}
              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          ),
        }),
      ],
      []
    );
    const filteredRecords = sampleRecords.filter(
      (record) =>
        record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        record.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="w-full min-h-screen m bg-gray-100 overflow-hidden">
      <div className="flex flex-col w-full  px-4 sm:px-6 pt-6 xs:pt-20">
        <div className="mb-6 flex justify-between items-center">
          <Link
            to="/add-webservices"
            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 shadow-sm"
          >
            <Plus className="mr-2" size={18} />
            <span className="text-sm font-medium">Add Webservices</span>
          </Link>
          <div className="w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Name or Mobile Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>
        <RecordsTable records={filteredRecords} columns={columns} />
      </div>
    </div>
  );
};

export default WebServiceOperations;
