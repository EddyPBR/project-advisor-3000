export const isAuthenticated = () => {
  return sessionStorage.getItem('token') && sessionStorage.getItem('userName')? true : false;
};
