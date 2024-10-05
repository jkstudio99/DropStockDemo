export const UserRole = {
    Admin: 'Admin',
    Manager: 'Manager',
    User: 'User'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];