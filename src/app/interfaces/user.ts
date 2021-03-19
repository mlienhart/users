export interface User {
    id?: number | null;
    historicalIds?: string | null;
    name?: string | null;
    birthday?: string | null;
    sex?: string | null;
    risk?: number | null;
    card?: number | null;
    registered?: boolean | null;
    points?: any;
    references?: number | null;
    failedLoginAttempts?: number | null;
    successfulLoginAttempts?: number | null;
}