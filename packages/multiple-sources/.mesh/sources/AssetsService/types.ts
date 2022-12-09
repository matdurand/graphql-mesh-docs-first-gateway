// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace AssetsServiceTypes {
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
   * >**Base URL**: `http://localhost:3002/`
   * >**Path**: `/assets`
   *
   *
   */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3002/`
   * >**Path**: `/categories`
   *
   *
   */
  categories?: Maybe<Array<Maybe<Category>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3002/`
   * >**Path**: `/assets/{args.id}`
   *
   *
   */
  asset?: Maybe<Asset>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `http://localhost:3002/`
   * >**Path**: `/categories/{args.id}`
   *
   *
   */
  category?: Maybe<Category>;
};


export type QueryassetArgs = {
  id: Scalars['String'];
};


export type QuerycategoryArgs = {
  id: Scalars['String'];
};

export type Asset = {
  id: Scalars['String'];
  publisherId: Scalars['String'];
  categoryId: Scalars['String'];
  title: Scalars['String'];
};

export type Category = {
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
>**Base URL**: `http://localhost:3002/`
>**Path**: `/assets`

 **/
  assets: InContextSdkMethod<Query['assets'], {}, MeshContext>,
  /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3002/`
>**Path**: `/categories`

 **/
  categories: InContextSdkMethod<Query['categories'], {}, MeshContext>,
  /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3002/`
>**Path**: `/assets/{args.id}`

 **/
  asset: InContextSdkMethod<Query['asset'], QueryassetArgs, MeshContext>,
  /** 
>**Method**: `GET`
>**Base URL**: `http://localhost:3002/`
>**Path**: `/categories/{args.id}`

 **/
  category: InContextSdkMethod<Query['category'], QuerycategoryArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["AssetsService"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
