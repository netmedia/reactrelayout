import appconfig from "../appconfig";
import urlJoin from 'proper-url-join';

export const getLoginUrl = () => {
    return urlJoin(appconfig.defaultUrl, appconfig.publicPagesPrefix, appconfig.loginUrl);
};
export const getHomeUrl = () => {
    return urlJoin(appconfig.defaultUrl, appconfig.authorizedPagesPrefix, appconfig.homeUrl);
};
export const getAuthorizedPageUrl = relativeUrl => {
    return urlJoin(appconfig.defaultUrl, appconfig.authorizedPagesPrefix, relativeUrl);
};
export const getPublicPagePrefixUrl = () => {
    return urlJoin(appconfig.defaultUrl, appconfig.publicPagesPrefix);
};
export const getAuthorizedPagePrefixUrl = () => {
    return urlJoin(appconfig.defaultUrl, appconfig.authorizedPagesPrefix);
};
