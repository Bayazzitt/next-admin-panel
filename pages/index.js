import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (await auth.login(email, password)) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-[#363740]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md"></div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 rounded-lg shadow">
        <form className="space-y-6" onSubmit={handleLogin}>
        <span className="mx-auto h-10 flex items-center justify-center h-8 w-8 rounded-full bg-blue-500">
          <span className="text-white"></span>
        </span>
          <p
            className="mx-auto h-10 w-auto flex items-center justify-center h-8 w-8"
            style={{ color: "#9fa2b4" }}
          >
            <strong>B2Metric</strong>
          </p>
          <h2 className="mt-6 text-center text-3xl font-bold text-black">
            Log In to B2Metric
          </h2>
          <p className="mx-auto mt-2 text-center text-sm text-gray-400">
            Enter your email and password below
          </p>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                placeholder="Email address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
                placeholder="Password"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log In
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account{" "}
          <a href="#" className="font-medium text-blue-500 hover:text-blue-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
