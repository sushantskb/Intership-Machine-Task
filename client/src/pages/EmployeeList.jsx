import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useDeleteEmployeeMutation,
  useGetAllEmployeesQuery,
} from "../redux/api/employeeApi";
import { formatDate } from "../../utils/dateFormater"; // My custom date formatter
import toast from "react-hot-toast";
import Header2 from "../components/common/Header2";

const EmployeeList = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.userReducer);
  const [page, setPage] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");

  // Fetch all employees data with the token
  const { data: apiData, refetch } = useGetAllEmployeesQuery({ token, page });
  

  const [deleteEmployee] = useDeleteEmployeeMutation();

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredEmployees = apiData?.responseData?.employees?.filter(
    (employee) => {
      return (
        employee.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        employee._id.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }
  );

  const handleDelete = async (empId) => {
    try {
      const { data, error } = await deleteEmployee({ token, empId });
      if (error) {
        toast.error(error.data.message);
      }
      if (data) {
        toast.success(data.message);
        refetch();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <Header2 title={"Employees List"} />
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">
            Total Count: {apiData?.responseData?.employees.length}
          </span>
          <button
            onClick={() => navigate("/create-employee")}
            className="btn btn-primary">
            Create Employee
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter search keyword..."
            value={searchKeyword}
            onChange={handleSearchChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100 text-gray-700">
                <th className="p-3 text-left border border-gray-300">ID</th>
                <th className="p-3 text-left border border-gray-300">Name</th>
                <th className="p-3 text-left border border-gray-300">Email</th>
                <th className="p-3 text-left border border-gray-300">Mobile No</th>
                <th className="p-3 text-left border border-gray-300">Designation</th>
                <th className="p-3 text-left border border-gray-300">Gender</th>
                <th className="p-3 text-left border border-gray-300">Course</th>
                <th className="p-3 text-left border border-gray-300">Date</th>
                <th className="p-3 text-center border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees?.map((employee) => (
                <tr
                  key={employee.id}
                  className="text-center border border-gray-300">
                  <td className="p-3 text-left">{employee.id}</td>
                  <td className="p-3 text-left">{employee.name}</td>
                  <td className="p-3 text-left text-blue-600">
                    <a href={`mailto:${employee.email}`}>{employee.email}</a>
                  </td>
                  <td className="p-3 text-left">{employee.phone}</td>
                  <td className="p-3 text-left">{employee.designation}</td>
                  <td className="p-3 text-left">{employee.gender}</td>
                  <td className="p-3 text-left">
                    {employee?.course?.join(", ")}
                  </td>
                  <td className="p-3 text-left">
                    {formatDate(employee.createdAt?.split("T")[0])}
                  </td>
                  <td className="p-3 text-center space-x-2">
                    <button
                      className="btn btn-xs btn-outline btn-info"
                      onClick={() =>
                        navigate("/create-employee", {
                          state: { empId: employee._id },
                        })
                      }>
                      Edit
                    </button>
                    <button
                      className="btn btn-xs btn-outline btn-error"
                      onClick={() => handleDelete(employee._id)}>
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
          pageCount={apiData?.responseData?.pageCount || 0}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination flex justify-center mt-4 space-x-2"
          pageLinkClassName="btn btn-sm"
          previousLinkClassName="btn btn-sm"
          nextLinkClassName="btn btn-sm"
          activeLinkClassName="btn-active"
        />
      </div>
    </div>
  );
};

export default EmployeeList;
