"use client";

import React from "react";
import Card from "./components/Card";
import { useGetUsersQuery } from "@/redux/services/userApi";
import Loading from "./loading";

export default function Userslistdisplay() {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error.toString()}</p>;
  const users = data?.users;
  return (
    <div className="grid grid-cols-[max-content] gap-2 justify-center">
      {users?.map((user) => (
        <Card user={user} key={user.id} />
      ))}
    </div>
  );
}
