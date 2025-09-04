// UserTable.jsx
import "./UserTable.css";

/* Action buttons (Sửa / Xóa) */
type ActionButtonsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <div className="d-flex gap-2 justify-content-end">
      <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onEdit}>
        Sửa
      </button>
      <button type="button" className="btn btn-danger btn-sm" onClick={onDelete}>
        Xóa
      </button>
    </div>
  );
}

/* Một dòng trong bảng */
type User = {
  id: number;
  name: string;
  birthDate: string;
  gender: string;
  address: string;
};

type TableRowProps = {
  idx: number;
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

function TableRow({ idx, user, onEdit, onDelete }: TableRowProps) {
  return (
    <tr>
      <td style={{ width: 80 }}>{idx}</td>
      <td>{user.name}</td>
      <td style={{ width: 140 }}>{user.birthDate}</td>
      <td style={{ width: 100 }}>{user.gender}</td>
      <td style={{ width: 140 }}>{user.address}</td>
      <td style={{ width: 170 }}>
        <ActionButtons onEdit={() => onEdit(user)} onDelete={() => onDelete(user)} />
      </td>
    </tr>
  );
}

/* Phần header của bảng */
function TableHeader() {
  return (
    <thead className="table-light">
      <tr>
        <th scope="col">STT</th>
        <th scope="col">Họ và tên</th>
        <th scope="col">Ngày sinh</th>
        <th scope="col">Giới tính</th>
        <th scope="col">Địa chỉ</th>
        <th scope="col" className="text-end">Hành động</th>
      </tr>
    </thead>
  );
}

/* Phần body (vẽ nhiều TableRow) */
type TableBodyProps = {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
};

function TableBody({ users, onEdit, onDelete }: TableBodyProps) {
  return (
    <tbody>
      {users.map((u, i) => (
        <TableRow key={u.id} idx={i + 1} user={u} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </tbody>
  );
}

/* Component chính (container) */
export default function UserTable() {
  // dữ liệu mẫu — sau này bạn có thể fetch từ API
  const users = [
    { id: 1, name: "Malcolm Lockyer", birthDate: "21/03/1961", gender: "Nam", address: "New york" },
    { id: 2, name: "Maria", birthDate: "11/02/1990", gender: "Nữ", address: "London" },
  ];

  // handler mẫu (chỉ console.log để demo)
  const handleEdit = (user: { name: string; }) => {
    console.log("Edit", user);
    alert("Sửa: " + user.name);
  };

  const handleDelete = (user: { name: string; }) => {
    console.log("Delete", user);
    alert("Xóa: " + user.name);
  };

  return (
    <div className="container my-4">
      {/* Card / container giống giao diện: bo góc, nền nhẹ */}
      <div className="card table-card shadow-sm">
        <div className="card-body p-0">
          <div className="p-4 border-bottom">
            <h5 className="mb-0">Danh sách người dùng</h5>
          </div>

          <div className="table-responsive p-3">
            <table className="table align-middle mb-0">
              <TableHeader />
              <TableBody users={users} onEdit={handleEdit} onDelete={handleDelete} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
