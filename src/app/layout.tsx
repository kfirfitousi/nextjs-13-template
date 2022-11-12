import "./globals.css";
import { headers } from "next/headers";
import { getSession } from "~/lib/session";

import AuthContext from "./AuthContext";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html className="bg-gray-800">
      <head />
      <body>
        <AuthContext session={session}>
          <div className="flex flex-col h-screen w-screen">
            <div>{/* Header */}</div>

            <div className="flex-grow">{children}</div>

            <div>{/* Footer */}</div>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
