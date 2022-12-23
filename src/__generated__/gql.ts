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
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query userByGmail($gmail: String!) {\n    userByGmail(gmail: $gmail) {\n      name\n      profileImageUrl\n    }\n  }\n": types.UserByGmailDocument,
    "\n  query Tickets {\n    tickets {\n      completed\n    }\n  }\n": types.TicketsDocument,
    "\n  mutation CreateUserByWallet($address: String!, $chainType: ChainType!) {\n    createUserByWallet(address: $address, chainType: $chainType) {\n      name\n    }\n  }\n": types.CreateUserByWalletDocument,
    "\n  mutation CreateUserByGmail($gmail: String!, $profileImageUrl: String!) {\n    createUserByGmail(gmail: $gmail, profileImageUrl: $profileImageUrl) {\n      name\n    }\n  }\n": types.CreateUserByGmailDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query userByGmail($gmail: String!) {\n    userByGmail(gmail: $gmail) {\n      name\n      profileImageUrl\n    }\n  }\n"): (typeof documents)["\n  query userByGmail($gmail: String!) {\n    userByGmail(gmail: $gmail) {\n      name\n      profileImageUrl\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Tickets {\n    tickets {\n      completed\n    }\n  }\n"): (typeof documents)["\n  query Tickets {\n    tickets {\n      completed\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUserByWallet($address: String!, $chainType: ChainType!) {\n    createUserByWallet(address: $address, chainType: $chainType) {\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserByWallet($address: String!, $chainType: ChainType!) {\n    createUserByWallet(address: $address, chainType: $chainType) {\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateUserByGmail($gmail: String!, $profileImageUrl: String!) {\n    createUserByGmail(gmail: $gmail, profileImageUrl: $profileImageUrl) {\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserByGmail($gmail: String!, $profileImageUrl: String!) {\n    createUserByGmail(gmail: $gmail, profileImageUrl: $profileImageUrl) {\n      name\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;