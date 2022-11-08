const PermisssionGate = ({ children, permissions, user }) => {
    const userPermissions = user.permissions.map(role => role.name)
    // console.log(userPermissions)
    if (
        permissions
            .some(permission => {
                return userPermissions.includes(permission)
            })
    ) {
        return children
    }

    return null
}

export default PermisssionGate