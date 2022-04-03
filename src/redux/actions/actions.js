export const DEVELOPERS_LIST = "DEVELOPERS_LIST";

export const developersListAC = () => {
  return {
    type: DEVELOPERS_LIST,
  };
};

export const CURRENT_DEVELOPER = "CURRENT_DEVELOPER";

export const currentDeveloperAC = (developer) => {
  return {
    type: CURRENT_DEVELOPER,
    developer
  };
};
