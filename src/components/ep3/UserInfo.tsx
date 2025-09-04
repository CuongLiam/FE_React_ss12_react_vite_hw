class UserInfo{
    username : string;
    sex : string;
    dob : string;
    email : string;
    address : string;

    constructor(username : string, sex : string, dob : string, email : string, address : string){
        this.username = username;
        this.sex = sex;
        this.dob = dob;
        this.email = email;
        this.address = address;
    }
}

const userA = new UserInfo('John Doe', 'Male', '1990-01-01', 'L2PjF@example.com', '123 Main St, Anytown, USA');

export default userA