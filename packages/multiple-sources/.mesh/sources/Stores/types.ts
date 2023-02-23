// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace StoresTypes {
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
};

export type Store = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Sells = {
  assetId: Scalars['ID'];
  sellsCount: Scalars['Int'];
  monthYear?: Maybe<Scalars['String']>;
  storeId: Scalars['ID'];
};

export type Query = {
  stores: Array<Store>;
  assetSells: Array<Sells>;
};


export type QueryassetSellsArgs = {
  storeId: Scalars['ID'];
};

  export type QuerySdk = {
      /** null **/
  stores: InContextSdkMethod<Query['stores'], {}, MeshContext>,
  /** null **/
  assetSells: InContextSdkMethod<Query['assetSells'], QueryassetSellsArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Stores"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
