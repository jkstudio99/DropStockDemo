import { UserRole } from '../../../models/UserRoleModel';

export interface TokenValidationResponse {
  status: string;
  userName: string;
  roles: UserRole[];
}
