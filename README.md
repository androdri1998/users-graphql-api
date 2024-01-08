# users-graphql-api

This is a project to practice GraphQl and Node.js

# Libs

- typescript
- @apollo/server
- graphql
- type-graphql

# Setup application

## Install dependencies

Run `$ npm install` to install dependencies

## Start application

Run `$ npm run start` to compile and start application.

# Available Commands

## Start application

Run `$ npm run start` to compile and start application.

## Compile application

Run `$ npm run compile` to compile application.

## Start application in watching mode

Run `$ npm run dev` to start application in watching mode.

# Modules

## Users

```
input AddUserInput {
  age: Int!
  email: String!
  name: String!
}

input SearchUserInput {
  id: ID!
}

enum UserStatus {
  ACTIVE
  BLOCKED
  INACTIVE
}

type User {
  age: Int
  email: String!
  id: ID!
  name: String!
  profile: Profile!
  salary: Float
  status: UserStatus!
  vip: Boolean
}

type Mutation {
  addUser(data: AddUserInput!): User!
}

type Query {
  user(data: SearchUserInput!): User
  users: [User]!
}
```

### Queries available

- user(data: SearchUserInput!): User
- users: [User]!

### Mutations available

- addUser(data: AddUserInput!): User!

## Profiles

```
type Profile {
  id: ID!
  name: String!
}

input SearchProfileInput {
  id: ID!
}

type Query {
  profile(data: SearchProfileInput!): Profile
  profiles: [Profile]!
}
```

### Queries available

- profile(data: SearchProfileInput!): Profile
- profiles: [Profile]!
