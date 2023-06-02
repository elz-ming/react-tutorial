function Profile(props) {
    console.log(props);
    return (
        <h1>
            Name : {props.name} {props.lastName}
        </h1>
    );
}

export default Profile;