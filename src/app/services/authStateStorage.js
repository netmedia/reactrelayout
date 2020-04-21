import appconfig from "../appconfig";

export const getAuthStateFromStorage = () => {
  try {
    const stringifiedState = localStorage.getItem("@" + appconfig.uniqueName + ":authData");
    if (stringifiedState === null) {
      return undefined;
    }
    return JSON.parse(stringifiedState);
  } catch (error) {
    return undefined;
  }
};

export const setAuthStateToStorage = authData => {
  try {
    localStorage.setItem("@" + appconfig.uniqueName + ":authData", JSON.stringify(authData));
  } catch (error) {}
};

export const removeAuthStateFromStorage = () => {
  return localStorage.removeItem("@" + appconfig.uniqueName + ":authData");
};
