import { Metadata } from "next";
import Userslistdisplay from "./userlistdisplay";
import ReduxProvider from "@/redux/storeProvider";
import { Suspense } from "react";
import Loading from "./loading";

// export const revalidate = 10; // Revalider toutes les 60 secondes
export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};

// async function UserDiplay({ promise }: { promise: Promise<User[]> }) {
//   const users = await promise;
//   console.log("user display function called");
//   return users.map((user) => <Card user={user} key={user.id} />);
// }

// export const dynamic = "auto";
export default async function UsersPage() {
  // const usersData: Promise<User[]> = getAllUsers({ users: "users" });
  // const users = await usersData;

  console.log("hello from users page");

  const content = (
    <section className="justify-center">
      <h2>USER LIST</h2>
      {/* <Link href="/">Back to home</Link> */}

      <div className="grid grid-cols-[max-content] gap-2 justify-center">
        <Suspense fallback={<Loading />}>
          <ReduxProvider>
            <Userslistdisplay />
          </ReduxProvider>
        </Suspense>
        {/* <UserDiplay promise={usersData} /> */}

        {/* </Suspense> */}
      </div>
      {/* <Userslistdisplay users={usersData} /> */}
      {/* <Userslistdisplay users={users} /> */}

      {/* {Date.now()} */}
    </section>
  );

  return content;
}
