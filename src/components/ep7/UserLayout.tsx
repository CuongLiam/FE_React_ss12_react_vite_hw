// UserLayout.tsx
import React from "react";

interface CartProps {
  title: string;
}

const Header: React.FC = () => {
  return (
    <header
      className="bg-light border-bottom d-flex align-items-center justify-content-center"
      style={{ height: 70 }}
    >
      <h5 className="mb-0">Header</h5>
    </header>
  );
};

const Navbar: React.FC = () => {
  return (
    <div
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: 48, backgroundColor: "rgba(99,105,112,0.85)" }}
    >
      <span className="text-white">Navigation</span>
    </div>
  );
};

const Menu: React.FC = () => {
  return (
    <aside
      className="d-none d-md-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#109943", color: "white", minHeight: "100%" }}
    >
      <div>Menu</div>
    </aside>
  );
};

const Article: React.FC = () => {
  return (
    <aside
      className="d-none d-md-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#9fc7ff", color: "#0b2a48", minHeight: "100%" }}
    >
      <div>Article</div>
    </aside>
  );
};

const Cart: React.FC<CartProps> = ({ title }) => {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body d-flex align-items-center justify-content-center">
        <span>{title}</span>
      </div>
    </div>
  );
};

const Main: React.FC = () => {
  const items = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, title: "Cart" }));

  return (
    <section className="flex-fill" style={{ backgroundColor: "#fff5f6", padding: "2rem" }}>
      <div className="container-fluid">
        <div className="row gx-4 gy-4">
          {items.map((it) => (
            <div key={it.id} className="col-6 col-md-3">
              <div style={{ height: 110 }}>
                <Cart title={it.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UserLayout: React.FC = () => {
  // heights: header (70) + navbar (48) = 118
  const mainMinHeight = "calc(100vh - 118px)";

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />

      <div className="container-fluid p-0" style={{ minHeight: mainMinHeight }}>
        <div className="row g-0" style={{ minHeight: mainMinHeight }}>
          {/* left menu - visible on md+ */}
          <div className="col-12 col-md-2">
            <div style={{ height: "100%" }}>
              <Menu />
            </div>
          </div>

          {/* center main area */}
          <div className="col-12 col-md-8">
            <div style={{ height: "100%", overflowY: "auto" }}>
              <Main />
            </div>
          </div>

          {/* right article - visible on md+ */}
          <div className="col-12 col-md-2">
            <div style={{ height: "100%" }}>
              <Article />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
