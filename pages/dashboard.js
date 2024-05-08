import { useEffect } from "react";
import Layout from "../components/Layout";
import TrendsChart from "../components/TrendsChart";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/"); 
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <p>Loading...</p>; 
  }

  return (
    <Layout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="group bg-white rounded-lg shadow p-4 border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center justify-center text-center">
            <div>
              <p className="text-sm text-gray-600 group-hover:text-blue-500">
                Active Users
              </p>
              <p className="text-3xl font-semibold group-hover:text-blue-500">
                14.592
              </p>
            </div>
          </div>
          <div className="group bg-white rounded-lg shadow p-4 border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center justify-center text-center">
            <div>
              <p className="text-sm text-gray-600 group-hover:text-blue-500">
                Sessions
              </p>
              <p className="text-3xl font-semibold group-hover:text-blue-500">
                16.921
              </p>
            </div>
          </div>
          <div className="group bg-white rounded-lg shadow p-4 border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center justify-center text-center">
            <div>
              <p className="text-sm text-gray-600 group-hover:text-blue-500">
                Returned Users
              </p>
              <p className="text-3xl font-semibold group-hover:text-blue-500">
                4.562
              </p>
            </div>
          </div>
          <div className="group bg-white rounded-lg shadow p-4 border-2 border-transparent hover:border-blue-500 transition duration-300 ease-in-out flex items-center justify-center text-center">
            <div>
              <p className="text-sm text-gray-600 group-hover:text-blue-500">
                Registered Users
              </p>
              <p className="text-3xl font-semibold group-hover:text-blue-500">
                649
              </p>
            </div>
          </div>
        </div>
        <TrendsChart />
      </div>
    </Layout>
  );
}
