class User{
    firstName : string;
    lastName : string;
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const formatName = (user : User) : string=>{
    return `${user.firstName} ${user.lastName}`
}


const FormatName = () => {
    const userA = new User("Minh", "Nguyen");
    
  return (
    <>
    <h3>Ho va ten : {formatName(userA)}</h3>
    </>
  )
}

export default FormatName