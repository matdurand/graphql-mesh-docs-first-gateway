// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace PublishersServiceTypes {
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
   * >**Base URL**: `http://localhost:3003/`
   * >**Path**: `/publishers`
   *
   *
   */
  publishers?: Maybe<Array<Maybe<Publisher>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3003/`
   * >**Path**: `/publishers/{args.id}`
   *
   *
   */
  publisher?: Maybe<Publisher>;
};


export type QuerypublisherArgs = {
  id: Scalars['String'];
};

export type Publisher = {
  id: Scalars['String'];
  name: Scalars['String'];
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
>**Base URL**: `http://localhost:3003/`
>**Path**: `/publishers`

 **/
  publishers: InContextSdkMethod<Query['publishers'], {}, MeshContext>,
  /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3003/`
>**Path**: `/publishers/{args.id}`

 **/
  publisher: InContextSdkMethod<Query['publisher'], QuerypublisherArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["PublishersService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
