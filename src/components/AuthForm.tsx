"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthForm: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <button
        className="rounded-md border text-gray-100 border-gray-100 bg-transparent px-4 py-2 text-xl shadow-lg hover:bg-gray-100 hover:text-gray-800"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>

      {sessionData && (
        <p className="text-xl text-gray-100">
          Logged in as {sessionData?.user?.name}
        </p>
      )}
    </div>
  );
};

export default AuthForm;
