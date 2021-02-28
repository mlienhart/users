import { User } from "./interfaces/user";

export const USERS: User[] = [
    { id: 1, name: 'a', birthday: '1945-11-28T09:36:25Z', sex: 'male', risk: 10, card: 0, registered: true, points: [1, 2, 3] },
    { id: 2, name: 'b', birthday: '1922-05-25T17:30:10Z', sex: 'female', risk: 30, card: 1, registered: false, points: [3, 4, 5] },
    { id: 3, name: 'c', birthday: '1958-11-12T22:52:49Z', sex: 'male', risk: 90, card: 2, registered: false, points: [2, [3, [4]]] },
    { id: 4, name: 'd', birthday: '1970-07-01T18:33:23Z', sex: 'male', risk: 50, card: 3, registered: false, points: [2, [3, [4], [5]]] },
    { id: 5, name: 'e', birthday: '1946-02-03T08:37:41Z', sex: 'female', risk: 20, card: 4, registered: true, points: [2, [3, [4], [5, [[6]]]]] },
    { id: 6, name: 'f', birthday: '1969-07-07T06:31:20Z', sex: 'female', risk: 80, card: 5, registered: true, points: [2, [3, [4], [5, [[6, [[8]]]]]]] },
];