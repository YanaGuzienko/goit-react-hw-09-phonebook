const getToken = (state) => state.auth.isAuthenticated;

const getName = (state) => state.auth.user.name;

// eslint-disable-next-line import/no-anonymous-default-export
export default { getToken, getName };
