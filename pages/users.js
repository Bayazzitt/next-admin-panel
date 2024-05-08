import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Users() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  const users = [
    { id: 1, name: "Tom Cruise", registerDate: "May 26, 2019", segment: "NEW" },
    { id: 2, name: "Matt Damon", registerDate: "May 26, 2019", segment: "NEW" },
    {
      id: 3,
      name: "Robert Downey",
      registerDate: "May 26, 2019",
      segment: "NEW",
    },
    {
      id: 4,
      name: "Christian Bale",
      registerDate: "May 25, 2019",
      segment: "NEW",
    },
    {
      id: 5,
      name: "Henry Cavill",
      registerDate: "May 25, 2019",
      segment: "NEW",
    },
    {
      id: 6,
      name: "Chris Hemsworth",
      registerDate: "May 25, 2019",
      segment: "NEW",
    },
    {
      id: 7,
      name: "Chris Evans",
      registerDate: "May 24, 2019",
      segment: "NEW",
    },
    {
      id: 8,
      name: "Chris Pratt",
      registerDate: "May 24, 2019",
      segment: "NEW",
    },
    { id: 9, name: "Chris Pine", registerDate: "May 24, 2019", segment: "NEW" },
    { id: 10, name: "Tom Hanks", registerDate: "May 23, 2019", segment: "NEW" },
    { id: 11, name: "Brad Pitt", registerDate: "May 23, 2019", segment: "NEW" },
    {
      id: 12,
      name: "Leonardo DiCaprio",
      registerDate: "May 23, 2019",
      segment: "NEW",
    },
    {
      id: 13,
      name: "Johnny Depp",
      registerDate: "May 22, 2019",
      segment: "NEW",
    },
    {
      id: 14,
      name: "Will Smith",
      registerDate: "May 22, 2019",
      segment: "NEW",
    },
    {
      id: 15,
      name: "Denzel Washington",
      registerDate: "May 22, 2019",
      segment: "NEW",
    },
    { id: 16, name: "Tom Hardy", registerDate: "May 21, 2019", segment: "NEW" },
  ];

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4">
          <h1 className="text-xl font-semibold leading-tight text-gray-800">
            All Users
          </h1>
          <div className="mt-4">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User Details
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Customer Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Register Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Segment
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://avatars.dicebear.com/api/initials/${user.name}.svg`}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.registerDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.segment}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-2">
              {Array.from(
                { length: Math.ceil(users.length / usersPerPage) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className="mx-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
