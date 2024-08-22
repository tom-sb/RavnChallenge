/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateTask($input: CreateTaskInput!) {\n  createTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}": types.CreateTaskDocument,
    "mutation DeleteTask($input: DeleteTaskInput!) {\n  deleteTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}": types.DeleteTaskDocument,
    "mutation UpdateTask($input: UpdateTaskInput!) {\n  updateTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}": types.UpdateTaskDocument,
    "query GetProfile {\n  profile {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n}": types.GetProfileDocument,
    "query GetTasks($input: FilterTaskInput!) {\n  tasks(input: $input) {\n    assignee {\n      avatar\n      createdAt\n      email\n      fullName\n      id\n      type\n      updatedAt\n    }\n    createdAt\n    creator {\n      avatar\n      createdAt\n      email\n      fullName\n      id\n      type\n      updatedAt\n    }\n    dueDate\n    id\n    name\n    pointEstimate\n    position\n    status\n    tags\n  }\n}": types.GetTasksDocument,
    "query GetUsers {\n  users {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n}": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateTask($input: CreateTaskInput!) {\n  createTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}"): (typeof documents)["mutation CreateTask($input: CreateTaskInput!) {\n  createTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation DeleteTask($input: DeleteTaskInput!) {\n  deleteTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}"): (typeof documents)["mutation DeleteTask($input: DeleteTaskInput!) {\n  deleteTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateTask($input: UpdateTaskInput!) {\n  updateTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}"): (typeof documents)["mutation UpdateTask($input: UpdateTaskInput!) {\n  updateTask(input: $input) {\n    ...ITask\n  }\n}\n\nfragment ITask on Task {\n  assignee {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  createdAt\n  creator {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n  dueDate\n  id\n  name\n  pointEstimate\n  position\n  status\n  tags\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProfile {\n  profile {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n}"): (typeof documents)["query GetProfile {\n  profile {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTasks($input: FilterTaskInput!) {\n  tasks(input: $input) {\n    assignee {\n      avatar\n      createdAt\n      email\n      fullName\n      id\n      type\n      updatedAt\n    }\n    createdAt\n    creator {\n      avatar\n      createdAt\n      email\n      fullName\n      id\n      type\n      updatedAt\n    }\n    dueDate\n    id\n    name\n    pointEstimate\n    position\n    status\n    tags\n  }\n}"): (typeof documents)["query GetTasks($input: FilterTaskInput!) {\n  tasks(input: $input) {\n    assignee {\n      avatar\n      createdAt\n      email\n      fullName\n      id\n      type\n      updatedAt\n    }\n    createdAt\n    creator {\n      avatar\n      createdAt\n      email\n      fullName\n      id\n      type\n      updatedAt\n    }\n    dueDate\n    id\n    name\n    pointEstimate\n    position\n    status\n    tags\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUsers {\n  users {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n}"): (typeof documents)["query GetUsers {\n  users {\n    avatar\n    createdAt\n    email\n    fullName\n    id\n    type\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;