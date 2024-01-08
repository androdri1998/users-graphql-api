import { randomUUID } from "node:crypto";

export const users = [
  {
    id: randomUUID(),
    name: "teste",
    email: "some email",
    profile_id: 1,
    status: "BLOCKED",
  },
  {
    id: randomUUID(),
    name: "teste 2",
    email: "some email 2",
    salary_real: 1002,
    profile_id: 1,
    status: "INACTIVE",
  },
  {
    id: randomUUID(),
    name: "teste 3",
    email: "some email 3",
    profile_id: 2,
    status: "ACTIVE",
  },
  {
    id: randomUUID(),
    name: "teste 4",
    email: "some email 4",
    profile_id: 2,
    status: "ACTIVE",
  },
];
