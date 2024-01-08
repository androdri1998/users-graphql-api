import { randomUUID } from "node:crypto";

export const users = {
  1: {
    id: randomUUID(),
    name: "teste",
    email: "some email",
    profile_id: 1,
    status: "BLOCKED",
  },
  2: {
    id: randomUUID(),
    name: "teste 2",
    email: "some email 2",
    salary_real: 1002,
    profile_id: 1,
    status: "INACTIVE",
  },
  3: {
    id: randomUUID(),
    name: "teste 3",
    email: "some email 3",
    profile_id: 2,
    status: "ACTIVE",
  },
  4: {
    id: randomUUID(),
    name: "teste 4",
    email: "some email 4",
    profile_id: 2,
    status: "ACTIVE",
  },
};
