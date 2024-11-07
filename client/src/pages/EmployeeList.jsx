import { useState } from "react";
import ReactPaginate from "react-paginate";

// Sample employee data
const employeeData = [
  {
    id: 1,
    name: "Hukum",
    email: "hcgupta@cstech.in",
    mobile: "954010044",
    designation: "HR",
    gender: "Male",
    course: "MCA",
    date: "13-Feb-21",
  },
  {
    id: 2,
    name: "Manish",
    email: "manish@cstech.in",
    mobile: "954010033",
    designation: "Sales",
    gender: "Male",
    course: "BCA",
    date: "12-Feb-21",
  },
  {
    id: 3,
    name: "Yash",
    email: "yash@cstech.in",
    mobile: "954010022",
    designation: "Manager",
    gender: "Male",
    course: "BSC",
    date: "11-Feb-21",
  },
  {
    id: 4,
    name: "Abhishek",
    email: "abhishek@cstech.in",
    mobile: "954010033",
    designation: "HR",
    gender: "Male",
    course: "MCA",
    date: "13-Feb-21",
  },
  {
    id: 5,
    name: "Ravi",
    email: "ravi@cstech.in",
    mobile: "954010055",
    designation: "Developer",
    gender: "Male",
    course: "BCA",
    date: "10-Feb-21",
  },
  {
    id: 6,
    name: "Priya",
    email: "priya@cstech.in",
    mobile: "954010066",
    designation: "Designer",
    gender: "Female",
    course: "MCA",
    date: "09-Feb-21",
  },
];

const EmployeeList = () => {
  const itemsPerPage = 4;
  const [currentItems, setCurrentItems] = useState(
    employeeData.slice(0, itemsPerPage)
  );
  const [pageCount, setPageCount] = useState(
    Math.ceil(employeeData.length / itemsPerPage)
  );
  const [itemOffset, setItemOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % employeeData.length;
    setItemOffset(newOffset);
    const filteredData = filterData(employeeData, searchTerm);
    setCurrentItems(filteredData.slice(newOffset, newOffset + itemsPerPage));
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredData = filterData(employeeData, term);
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
    setCurrentItems(filteredData.slice(0, itemsPerPage));
    setItemOffset(0);
  };

  const filterData = (data, term) => {
    return data.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term.toLowerCase()) ||
        employee.email.toLowerCase().includes(term.toLowerCase()) ||
        employee.designation.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header with search bar, total count, and create button */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Employee List</h1>
        <span className="text-gray-600">
          Total Count: {filterData(employeeData, searchTerm).length}
        </span>
        <button className="btn btn-primary">Create Employee</button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter search keyword..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="input input-bordered w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="p-2 border border-gray-300">ID</th>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Email</th>
              <th className="p-2 border border-gray-300">Mobile No</th>
              <th className="p-2 border border-gray-300">Designation</th>
              <th className="p-2 border border-gray-300">Gender</th>
              <th className="p-2 border border-gray-300">Course</th>
              <th className="p-2 border border-gray-300">Date</th>
              <th className="p-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((employee) => (
              <tr
                key={employee.id}
                className="text-center border border-gray-300">
                <td className="p-2">{employee.id}</td>
                <td className="p-2">{employee.name}</td>
                <td className="p-2 text-blue-600">
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </td>
                <td className="p-2">{employee.mobile}</td>
                <td className="p-2">{employee.designation}</td>
                <td className="p-2">{employee.gender}</td>
                <td className="p-2">{employee.course}</td>
                <td className="p-2">{employee.date}</td>
                <td className="p-2 space-x-2">
                  <button className="btn btn-xs btn-outline btn-info">
                    Edit
                  </button>
                  <button className="btn btn-xs btn-outline btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex justify-center mt-4 space-x-2"
        pageLinkClassName="btn btn-sm"
        previousLinkClassName="btn btn-sm"
        nextLinkClassName="btn btn-sm"
        activeLinkClassName="btn-active"
      />
    </div>
  );
};

export default EmployeeList;
