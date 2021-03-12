import { User } from "./interfaces/user";

export const USERS: User[] = [
    { id: 1, name: 'a', birthday: '1945-11-28T09:36:25Z', sex: 'male', risk: 10.1234543569, card: 0, registered: true, points: [1, 2, 3] },
    { id: 2, name: 'b', birthday: '1922-05-25T17:30:10Z', sex: 'female', risk: 30.0245998422, card: 1, registered: false, points: [3, 4, 5] },
    { id: 3, name: 'c', birthday: '1958-11-12T22:52:49Z', sex: 'male', risk: 15.9899097679, card: 2, registered: false, points: [2, [3, [4]]] },
    { id: 4, name: 'd', birthday: '1970-07-01T18:33:23Z', sex: 'male', risk: 12.7546333334, card: 13, registered: false, points: [2, [3, [4], [5]]] },
    { id: 5, name: 'e', birthday: '1946-02-03T08:37:41Z', sex: 'female', risk: 20, card: 20, registered: true, points: [2, [3, [4], [5, [[6]]]]] },
    { id: 6, name: 'f', birthday: '1969-07-07T06:31:20Z', sex: 'female', risk: 80.98789, card: 5, registered: true, points: [2, [3, [4], [5, [[6, [[8]]]]]]] },
    { id: 7, name: 'g', birthday: '1944-11-28T09:36:25Z', sex: 'male', risk: 11, card: 2, registered: true, points: [20] },
    { id: 8, name: 'h', birthday: '1999-05-25T17:30:10Z', sex: 'female', risk: 23.0009, card: 7, registered: false, points: [3, 4, 5, 6, 7, 8, 9, 9, 9, 9] },
    { id: 9, name: 'i', birthday: '2001-11-12T22:52:49Z', sex: 'male', risk: 32, card: 2, registered: false, points: [1, 2, 12, [3, [4]]] },
    { id: 10, name: 'j', birthday: '1966-07-01T18:33:23Z', sex: 'male', risk: 50.2323, card: 2, registered: false, points: [2, [3, [40], [5]]] },
    { id: 11, name: 'k', birthday: '1950-02-03T08:37:41Z', sex: 'female', risk: 24.1, card: 1, registered: true, points: [2, [32, [4], [5, [[6]]]]] },
    { id: 12, name: 'l', birthday: '2000-07-07T06:31:20Z', sex: 'female', risk: 2.99, card: 5, registered: true, points: [22] }
];