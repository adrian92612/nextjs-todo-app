const inputClass = "border px-2 py-1 text-center rounded-md";

const LoginPage = async () => {
  return (
    <div className="h-full flex justify-center items-center">
      <form action="" className="border-2 p-5 flex flex-col w-[400px]">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="john.doe@example.com"
          className={inputClass}
        />
        <label htmlFor="password" className="mt-2">
          Password
        </label>
        <input type="password" name="password" id="password" className={inputClass} />
        <button type="submit" className={`${inputClass} mt-4 bg-slate-300`}>
          Log In
        </button>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <button
          className={`${inputClass} bg-slate-300`}
          onClick={async () => {
            "use server";
            console.log("Sign in using google");
          }}
        >
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
