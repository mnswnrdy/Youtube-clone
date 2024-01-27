export const setCurrentUser = (data) => {
  console.log("current user action");
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};
