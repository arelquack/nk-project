// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import supabase from "@/utils/supabaseClient";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     const { error } = await supabase.auth.signInWithPassword({ email, password });

//     if (error) {
//       setError("Invalid login credentials");
//     } else {
//       router.push("/admin");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-md shadow-md w-full max-w-sm"
//       >
//         <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-2 border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full p-2 border rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded-md"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/utils/supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid login credentials");
    } else {
      router.push("/admin"); // Redirect ke dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

// Supaya halaman login ini tidak pake layout bawaan
export const dynamic = "force-static";
