// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace UsersServiceTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjMap: any;
};

export type Query = {
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3004/`
   * >**Path**: `/users`
   *
   *
   */
  users?: Maybe<Array<Maybe<User>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3004/`
   * >**Path**: `/users/{args.id}`
   *
   *
   */
  user?: Maybe<User>;
};


export type QueryuserArgs = {
  id: Scalars['String'];
};

export type User = {
  id: Scalars['String'];
  name: Scalars['String'];
  entitlementsIds: Array<Maybe<Scalars['String']>>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3004/`
>**Path**: `/users`

 **/
  users: InContextSdkMethod<Query['users'], {}, MeshContext>,
  /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3004/`
>**Path**: `/users/{args.id}`

 **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["UsersService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
