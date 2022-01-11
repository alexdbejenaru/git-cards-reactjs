const UserInfo = ({ data }) => {
    return ( 
        <>
            <h1>{data.name}</h1>
            <div>{data.blog}</div>
        </>
     );
}
 
export default UserInfo;