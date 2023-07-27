import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("typing");

  const { login } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 400 || res.status === 401) {
        setStatus("error");
        // return display.textContent = `${data.message}. ${data.error ? data.error : ''}`
      }
      if (data.user.role === "admin") {
        login({
          id: data.user.id,
          email: data.user.email,
          userName: data.user.fullName,
          authToken: data.token,
        });
        window.location.href = "/";
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div>
      <div className="isolate bg-white h-[100vh]  ">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="flex h-full flex-1 items-center justify-center  ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm shadow-2xl p-5 rounded-2xl duration-300 ease-linear">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Đăng nhập
              </h2>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                  
                  `}
                  />
                </div>
              </div>

              <div key={1}>
                <div className="flex items-center justify-between duration-300 ease-linear">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className={`block w-full rounded-md  py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-titleSMColor placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                        
                        `}
                  />
                </div>
              </div>
              {status === "error" && (
                <span className="text-xs text-red-500 mt-2">
                  Email hoặc password không chính xác. Vui lòng thực hiện lại !
                </span>
              )}
              <div>
                <button
                  type="submit"
                  className="
                  bg-violet-400 duration-200 hover:bg-violet-500
                  flex w-full justify-center rounded-md text-neutral-950   py-2  text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Đăng Nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
