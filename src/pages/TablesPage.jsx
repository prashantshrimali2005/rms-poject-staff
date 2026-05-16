function TablesPage() {
  const tables = [
    { number: 1, status: "Available" },
    { number: 2, status: "Available" },
    { number: 3, status: "Occupied" },
    { number: 4, status: "Occupied" },
    { number: 5, status: "Available" },
    { number: 6, status: "Available" },
    { number: 7, status: "Occupied" },
    { number: 8, status: "Reserved" },
    { number: 9, status: "Available" },
    { number: 10, status: "Available" },
    { number: 11, status: "Available" },
    { number: 12, status: "Reserved" },
  ];

  return (
    <main className="ml-20 p-4 w-280 bg-[#fffdf9]">

      {/* Heading */}
      <div className="flex justify-between items-center mb-12">

        {/* Center Heading */}
        <div className="flex-1 text-center">

          <p className="text-[#c3871c] font-bold text-2xl mb-3 tracking-wide">
            TABLE MANAGEMENT
          </p>

          <h1 className="text-5xl font-semibold text-[#3b1d0f]">
            Tables
          </h1>

        </div>

        {/* Button */}
        <button className="bg-[#d89216] hover:bg-[#c98510] text-white px-7 py-4 rounded-2xl text-lg font-semibold transition">
          + Add Table
        </button>

      </div>

      {/* Cards */}
      <section className="grid grid-cols-4 gap-5">

        {tables.map((table) => (
          <div
            key={table.number}
            className="bg-white border border-[#eadfce] rounded-3xl p-6 h-52 flex flex-col justify-between shadow-sm hover:shadow-md transition"
          >

            <div>
              <h2 className="text-3xl font-bold text-[#3b1d0f] mb-3">
                Table {table.number}
              </h2>

              <p className="text-gray-500 text-lg">
                4 Seats
              </p>
            </div>

            <button
              className={`
                px-5 py-3 rounded-2xl text-base font-semibold w-fit
                ${table.status === "Available" ? "bg-[#d9f2d9] text-green-700" : ""}
                ${table.status === "Occupied" ? "bg-[#ffd9d9] text-red-700" : ""}
                ${table.status === "Reserved" ? "bg-[#ffe7b8] text-yellow-700" : ""}
              `}
            >
              {table.status}
            </button>

          </div>
        ))}

      </section>

    </main>
  );
}

export default TablesPage;