const AdminIndex = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{ minHeight: "100vh", backgroundColor: "#f3f5f7" }}
    >
      <Header />

      <div className="d-flex flex-grow-1" style={{ padding: 20 }}>
        <Sidebar />

        <main className="flex-grow-1 d-flex">
          {/* The white card area */}
          <div
            className="flex-grow-1 mx-3 p-4"
            style={{
              background: "#ffffff",
              border: "1px solid #eee",
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              // make the card take the available height so footer sits at bottom
              minHeight: "calc(100vh - 70px - 40px)", // header height (70) + outer padding (approx 40)
            }}
          >
            {/* Main content area (centered) */}
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4 style={{ color: "#222" }}>Main</h4>
            </div>

            {/* Footer inside the white card */}
            <div
              style={{
                height: 64,
                background: "#d8e0ea",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              <strong style={{ color: "#222" }}>Footer</strong>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header
      className="d-flex justify-content-center align-items-center"
      style={{
        height: 70,
        backgroundColor: "#d5dbe3",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <strong>Header</strong>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside
      style={{
        width: 220,
        backgroundColor: "#1f3b82", // deep blue
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 8px",
      }}
    >
      <div style={{ transform: "translateY(-8px)" }}>
        <div style={{ writingMode: "horizontal-tb", textAlign: "center" }}>
          <span>Menu</span>
        </div>
      </div>
    </aside>
  );
};

export default AdminIndex;
