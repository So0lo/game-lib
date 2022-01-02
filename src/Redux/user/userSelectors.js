export const getUser = ({user}) => user;
export const getUserName = ({user}) => user.user?.displayName;
export const getUserId = ({user}) => user?.user?.uid; 