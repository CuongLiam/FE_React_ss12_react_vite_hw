// UserLayout.jsx
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

/*
  Đây là "một file chứa nhiều component" (Header, Navbar, Menu, Main, Cart, Article).
  Mỗi component là 1 function trả về JSX (giống HTML nhưng viết trong JS).
*/

function Header() {
  return (
    <header className="bg-light border-bottom d-flex align-items-center justify-content-center" style={{ height: 70 }}>
      <h5 className="mb-0">Header</h5>
    </header>
  );
}

function Navbar() {
  return (
    <div className="w-100 d-flex align-items-center justify-content-center" style={{ height: 48, background: "rgba(99,105,112,0.85)" }}>
      <span className="text-white">Navigation</span>
    </div>
  );
}

function Menu() {
  return (
    <aside className="d-none d-md-flex align-items-center justify-content-center h-100" style={{ background: "#109943", color: "#fff" }}>
      Menu
    </aside>
  );
}

function Article() {
  return (
    <aside className="d-none d-md-flex align-items-center justify-content-center h-100" style={{ background: "#9fc7ff", color: "#07203a" }}>
      Article
    </aside>
  );
}

function Cart({ title } : { title: string }) {
  return (
    <div className="card border-0 shadow-sm h-100">
      <div className="card-body d-flex align-items-center justify-content-center" style={{ height: 110 }}>
        {title}
      </div>
    </div>
  );
}

function Main() {
  const items = Array.from({ length: 12 }, (_, i) => ({ id: i + 1, title: "Cart" }));
  return (
    <section className="flex-fill" style={{ background: "#fdecec", padding: "2rem" }}>
      <div className="container-fluid">
        <div className="row gx-4 gy-4">
          {items.map((it) => (
            <div key={it.id} className="col-6 col-md-3">
              <Cart title={it.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Component chính - giống file bạn gửi: UserLayout */
export default function UserLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />

      <div className="container-fluid p-0" style={{ minHeight: "calc(100vh - 118px)" }}>
        <div className="row g-0" style={{ minHeight: "calc(100vh - 118px)" }}>
          <div className="col-12 col-md-2"><Menu /></div>
          <div className="col-12 col-md-8"><Main /></div>
          <div className="col-12 col-md-2"><Article /></div>
        </div>
      </div>
    </div>
  );
}
