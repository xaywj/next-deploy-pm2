"use client";

export default function Login() {
  return (
    <>
      <div className="containermx-auto h-[100vh] p-5 flex flex-col justify-center">
        <div className="card bg-red-400 w-[400px] mx-auto p-5 text-white rounded shadow-lg">
          <div className="card-body">
            <h5 className="card-title text-center font-semibold text-xl">Login</h5>

            <div className="group-form my-3">
              <label htmlFor="username">Username</label> <br />
              <input type="text" placeholder="Enter Username" id="username" className="rounded w-full" /> 
            </div>
            
            <div className="group-form my-3">
              <label htmlFor="password">Password</label> <br />
              <input type="text" placeholder="Enter Password" id="password" className="rounded w-full" /> 
            </div>

            <button className="mt-4 btn btn-md bg-blue-700 p-2 rounded shadow-sm hover:bg-slate-500">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}
