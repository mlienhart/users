import { User } from "./interfaces/user";

export const USERS: User[] = [
    { id: 1, historicalIds: "1, 2", name: 'James', birthday: '1945-11-28T09:36:25Z', sex: 'male', risk: 10.1234543569, card: 0, registered: true, points: [1, 2, 3], references: 2, failedLoginAttempts: 2, successfulLoginAttempts: 40 },
    { id: 2, historicalIds: "3, 4, 5, 6", name: 'Sophia', birthday: '1922-05-25T17:30:10Z', sex: 'female', risk: 30.0245998422, card: 1, registered: false, points: [3, 4, 5], references: 8, failedLoginAttempts: 25, successfulLoginAttempts: 12 },
    { id: 3, historicalIds: "7, 8, 9", name: 'David', birthday: '1958-11-12T22:52:49Z', sex: 'male', risk: 15.9899097679, card: 2, registered: false, points: [2, [3, [4]]], references: 4, failedLoginAttempts: 5, successfulLoginAttempts: 13 },
    { id: 4, historicalIds: "10, 11", name: 'Charlie', birthday: '1970-07-01T18:33:23Z', sex: 'male', risk: 12.7546333334, card: 4, registered: false, points: [2, [3, [4], [5]]], references: 11, failedLoginAttempts: 3, successfulLoginAttempts: 16 },
    { id: 5, historicalIds: "12, 13", name: 'Megan', birthday: '1946-02-03T08:37:41Z', sex: 'female', risk: 20, card: 11, registered: true, points: [2, [3, [4], [5, [[6]]]]], references: 0, failedLoginAttempts: 8, successfulLoginAttempts: 17 },
    { id: 6, historicalIds: "14", name: 'Jennifer', birthday: '1969-07-07T06:31:20Z', sex: 'female', risk: 80.98789, card: 5, registered: true, points: [2, [3, [4], [5, [[6, [[8]]]]]]], references: 3, failedLoginAttempts: 25, successfulLoginAttempts: 8 },
    { id: 7, historicalIds: "12, 17, 18", name: 'Michael', birthday: '1944-11-28T09:36:25Z', sex: 'male', risk: 11, card: 2, registered: true, points: [20], references: 5, failedLoginAttempts: 3, successfulLoginAttempts: 35 },
    { id: 8, historicalIds: "3, 1", name: 'Charlotte', birthday: '1999-05-25T17:30:10Z', sex: 'female', risk: 23.0009, card: 7, registered: false, points: [3, 4, 5, 6, 7, 8, 9, 9, 9, 9], references: 2, failedLoginAttempts: 13, successfulLoginAttempts: 9 },
    { id: 9, historicalIds: "21, 10", name: 'Jacob', birthday: '2001-11-12T22:52:49Z', sex: 'male', risk: 32, card: 2, registered: false, points: [1, 2, 12, [3, [4]]], references: 1, failedLoginAttempts: 1, successfulLoginAttempts: 21 },
    { id: 10, historicalIds: "3, 4", name: 'Thomas', birthday: '1966-07-01T18:33:23Z', sex: 'male', risk: 50.2323, card: 2, registered: false, points: [2, [3, [40], [5]]], references: 4, failedLoginAttempts: 0, successfulLoginAttempts: 22 },
    { id: 11, historicalIds: "10, 1", name: 'Joe', birthday: '1950-02-03T08:37:41Z', sex: 'male', risk: 24.1, card: 1, registered: true, points: [2, [32, [4], [5, [[6]]]]], references: 10, failedLoginAttempts: 6, successfulLoginAttempts: 17 },
    { id: 12, historicalIds: "5, 1", name: 'Mia', birthday: '2000-07-07T06:31:20Z', sex: 'female', risk: 2.99, card: 5, registered: true, points: [22], references: 14, failedLoginAttempts: 3, successfulLoginAttempts: 43 },
];