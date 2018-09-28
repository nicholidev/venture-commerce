import { GetNetworkStatus, GetUiState, GetUserStatus } from 'shared/generated-types';

import { getDefaultLanguage } from '../../common/utilities/get-default-language';

export const clientDefaults = {
    networkStatus: {
        inFlightRequests: 0,
        __typename: 'NetworkStatus',
    } as GetNetworkStatus.NetworkStatus,
    userStatus: {
        username: '',
        isLoggedIn: false,
        loginTime: '',
        __typename: 'UserStatus',
    } as GetUserStatus.UserStatus,
    uiState: {
        language: getDefaultLanguage(),
        __typename: 'UiState',
    } as GetUiState.UiState,
};
