import { UserRole } from '../../../models/UserRoleModel';

export interface TokenResponse {
    token: string;
    refreshToken: string;
    expiration: string;
    userData: {
      userName: string;
      email: string;
      roles: UserRole[];
    };
};