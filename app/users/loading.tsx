import ClientLoader from "@/components/ClientLoader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClientLoader />
    </div>
  );
}
