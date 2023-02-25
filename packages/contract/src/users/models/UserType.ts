export const USER_TYPES = ['admin', 'customer'] as const;
export type UserType = typeof USER_TYPES[number];