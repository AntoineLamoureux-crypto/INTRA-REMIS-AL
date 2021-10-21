const UserModal = ({ user }) => {
    return (

    <>
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.guessUserNumber}
            </td>
            <td>
                {user.randomNumber}
            </td>
        </tr>
    </>

    );
};

export default UserModal;