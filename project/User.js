const User = ({user}) => {
    return ( <><div className="user">
    <p>firstName:{user.firstName}</p>
    <p>lastName:{user.lastName}</p> 
    <p>age: {user.age}</p>
    <p>gender: {user.gender}</p>
    <p>birthDate: {user.birthDate}</p>
    <p>password: {user.password}</p>
    <p>phone: {user.phone}</p></div>
    </> );
}
 
export default User;