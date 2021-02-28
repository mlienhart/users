import { User } from "./User";

export const USERS: User[] = [
    { id: 1, name: 'a', sex: 'male', risk: 10, card: 0, registered: true, points: [1, 2, 3] },
    { id: 2, name: 'b', sex: 'female', risk: 30, card: 1, registered: false, points: [3, 4, 5] },
    { id: 3, name: 'c', sex: 'male', risk: 90, card: 2, registered: false, points: [2, [3, [4]]] },
    { id: 4, name: 'd', sex: 'male', risk: 50, card: 3, registered: false, points: [2, [3, [4], [5]]] },
    { id: 5, name: 'e', sex: 'female', risk: 20, card: 4, registered: true, points: [2, [3, [4], [5, [[6]]]]] },
    { id: 6, name: 'f', sex: 'female', risk: 80, card: 5, registered: true, points: [2, [3, [4], [5, [[6, [[8]]]]]]] },
];