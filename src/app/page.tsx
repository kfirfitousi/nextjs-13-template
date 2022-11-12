import AuthForm from "~/components/AuthForm";

export default function Home() {
  return (
    <main className="h-full grid grid-cols-2 grid-rows-[maxContent] place-items-center">
      <div className="col-span-full flex flex-col gap-2 text-xl text-gray-200">
        <h1 className="col-span-full py-16 text-7xl text-center text-gray-200">
          Welcome!
        </h1>

        <p>
          This project is a template for Next.js 13 with TypeScript, Prisma,
          NextAuth.js and Tailwind CSS.
        </p>
      </div>

      <div className="col-span-full">
        <AuthForm />
      </div>
    </main>
  );
}
