import Header2 from "../components/common/Header2";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <Header2 title={"Dashboard"} />

      {/* Main Content */}
      <main className="flex items-center justify-center h-[80vh]">
        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome Admin Panel
        </h2>
      </main>
    </div>
  );
};

export default HomePage;
