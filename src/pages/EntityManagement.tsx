import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import RecordsTable from "../components/RecordsTable";
import { Record } from "../types/index";
import { createColumnHelper } from "@tanstack/react-table";

const API_BASE_URL = "http://localhost:5043/api/entity";

const EntityManagement = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const columnHelper = createColumnHelper<Record>();

  useEffect(() => {
    fetchRecords();
  }, []);

  // Fetch records from API
  const fetchRecords = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API_BASE_URL}/list`);
      setRecords(response.data);
    } catch (err) {
      console.error("Error fetching records:", err);
      setError("Failed to fetch records.");
    } finally {
      setLoading(false);
    }
  };

  // Delete by name or mobileNumber
  const handleDelete = async (name: string, mobileNumber: string) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/delete`, {
        params: { name, mobileNumber }, 
      });
      setRecords((prevRecords) =>
        prevRecords.filter(
          (record) => record.name !== name && record.phoneNumber !== mobileNumber
        )
      );
    } catch (err) {
      console.error("Error deleting record:", err);
      setError("Failed to delete record.");
    }
  };

  // Search filter
  const filteredRecords = records.filter(
    (record) =>
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
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
    columnHelper.accessor("phoneNumber", { 
      header: () => "Phone",
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => "Actions",
      cell: (info) => (
        <button
          onClick={() =>
            handleDelete(info.row.original.name, info.row.original.phoneNumber)
          }
          className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      ),
    }),
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex flex-col w-full px-4 sm:px-6 pt-6 xs:pt-20">
        <div className="mb-6 flex justify-between items-center">
          <Link
            to="/add"
            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 shadow-sm"
          >
            <Plus className="mr-2" size={18} />
            <span className="text-sm font-medium">Add Entity</span>
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

        {error && <div className="text-red-500">{error}</div>}

        {loading ? (
          <div>Loading...</div>
        ) : filteredRecords.length > 0 ? (
          <RecordsTable records={filteredRecords} columns={columns} />
        ) : (
          <div className="text-center text-gray-500 mt-4">No records available.</div>  
        )}
      </div>
    </div>
  );
};

export default EntityManagement;

