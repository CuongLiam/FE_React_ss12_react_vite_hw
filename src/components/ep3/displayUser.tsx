import userA from "./UserInfo";

const DisplayUser = () => {
  return (
    <div>
      <b>Thông tin cá nhân</b>
      <ul>
        <li>Ho ten: {userA.username}</li>
        <li>Gioi tinh: {userA.sex}</li>
        <li>Ngay sinh: {userA.dob}</li>
        <li>Email: {userA.email}</li>
        <li>Dia chi: {userA.address}</li>
      </ul>
    </div>
  );
};

export default DisplayUser;
