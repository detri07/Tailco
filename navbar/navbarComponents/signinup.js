export default function SignInUp() {
  return (
    <>
      <div className="hidden lg:block font-[Poppins]">
        <div className="flex space-x-4">
          <button className="px-4 p-2 rounded-lg ring-1 ring-[#FED85C]">
            Sign in
          </button>
          <button className="bg-[#FED85C] text-white px-4 py-2 rounded-lg font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
