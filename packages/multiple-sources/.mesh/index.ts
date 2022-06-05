// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode } from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /assets/{id}
   */
  asset?: Maybe<Asset>;
  /**
   *
   *
   * Equivalent to GET /assets
   */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /**
   *
   *
   * Equivalent to GET /categories
   */
  categories?: Maybe<Array<Maybe<Category>>>;
  /**
   *
   *
   * Equivalent to GET /categories/{id}
   */
  category?: Maybe<Category>;
  /**
   *
   *
   * Equivalent to GET /publishers/{id}
   */
  publisher?: Maybe<Publisher>;
  /**
   *
   *
   * Equivalent to GET /publishers
   */
  publishers?: Maybe<Array<Maybe<Publisher>>>;
  /**
   *
   *
   * Equivalent to GET /users/{id}
   */
  user?: Maybe<User>;
  /**
   *
   *
   * Equivalent to GET /users
   */
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryassetArgs = {
  id: Scalars['String'];
};


export type QueryassetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycategoryArgs = {
  id: Scalars['String'];
};


export type QuerypublisherArgs = {
  id: Scalars['String'];
};


export type QuerypublishersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryuserArgs = {
  id: Scalars['String'];
};


export type QueryusersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Asset = {
  id: Scalars['String'];
  title: Scalars['String'];
  publisher?: Maybe<Publisher>;
  category?: Maybe<Category>;
};

export type Category = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Publisher = {
  id: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  id: Scalars['String'];
  name: Scalars['String'];
  entitlements?: Maybe<Array<Maybe<Asset>>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Asset: ResolverTypeWrapper<Asset>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Category: ResolverTypeWrapper<Category>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Publisher: ResolverTypeWrapper<Publisher>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Asset: Asset;
  String: Scalars['String'];
  Int: Scalars['Int'];
  Category: Category;
  Boolean: Scalars['Boolean'];
  Publisher: Publisher;
  User: User;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryassetArgs, 'id'>>;
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType, Partial<QueryassetsArgs>>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType, Partial<QuerycategoriesArgs>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QuerycategoryArgs, 'id'>>;
  publisher?: Resolver<Maybe<ResolversTypes['Publisher']>, ParentType, ContextType, RequireFields<QuerypublisherArgs, 'id'>>;
  publishers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Publisher']>>>, ParentType, ContextType, Partial<QuerypublishersArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, Partial<QueryusersArgs>>;
}>;

export type AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['Publisher']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublisherResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Publisher'] = ResolversParentTypes['Publisher']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Asset?: AssetResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Publisher?: PublisherResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace AssetsServiceTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /assets/{id}
   */
  asset?: Maybe<Asset>;
  /**
   *
   *
   * Equivalent to GET /assets
   */
  assets?: Maybe<Array<Maybe<Asset>>>;
  /**
   *
   *
   * Equivalent to GET /categories
   */
  categories?: Maybe<Array<Maybe<Category>>>;
  /**
   *
   *
   * Equivalent to GET /categories/{id}
   */
  category?: Maybe<Category>;
};


export type QueryassetArgs = {
  id: Scalars['String'];
};


export type QueryassetsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerycategoryArgs = {
  id: Scalars['String'];
};

export type Asset = {
  categoryId: Scalars['String'];
  id: Scalars['String'];
  publisherId: Scalars['String'];
  title: Scalars['String'];
};

export type Category = {
  id: Scalars['String'];
  name: Scalars['String'];
};

    }
    export type QueryAssetsServiceSdk = {
  /** 

Equivalent to GET /assets/{id} **/
  asset: InContextSdkMethod<AssetsServiceTypes.Query['asset'], AssetsServiceTypes.QueryassetArgs, MeshContext>,
  /** 

Equivalent to GET /assets **/
  assets: InContextSdkMethod<AssetsServiceTypes.Query['assets'], AssetsServiceTypes.QueryassetsArgs, MeshContext>,
  /** 

Equivalent to GET /categories **/
  categories: InContextSdkMethod<AssetsServiceTypes.Query['categories'], AssetsServiceTypes.QuerycategoriesArgs, MeshContext>,
  /** 

Equivalent to GET /categories/{id} **/
  category: InContextSdkMethod<AssetsServiceTypes.Query['category'], AssetsServiceTypes.QuerycategoryArgs, MeshContext>
};

export type MutationAssetsServiceSdk = {

};

export type SubscriptionAssetsServiceSdk = {

};


    export namespace PublishersServiceTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /publishers/{id}
   */
  publisher?: Maybe<Publisher>;
  /**
   *
   *
   * Equivalent to GET /publishers
   */
  publishers?: Maybe<Array<Maybe<Publisher>>>;
};


export type QuerypublisherArgs = {
  id: Scalars['String'];
};


export type QuerypublishersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type Publisher = {
  id: Scalars['String'];
  name: Scalars['String'];
};

    }
    export type QueryPublishersServiceSdk = {
  /** 

Equivalent to GET /publishers/{id} **/
  publisher: InContextSdkMethod<PublishersServiceTypes.Query['publisher'], PublishersServiceTypes.QuerypublisherArgs, MeshContext>,
  /** 

Equivalent to GET /publishers **/
  publishers: InContextSdkMethod<PublishersServiceTypes.Query['publishers'], PublishersServiceTypes.QuerypublishersArgs, MeshContext>
};

export type MutationPublishersServiceSdk = {

};

export type SubscriptionPublishersServiceSdk = {

};


    export namespace UsersServiceTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  /**
   *
   *
   * Equivalent to GET /users/{id}
   */
  user?: Maybe<User>;
  /**
   *
   *
   * Equivalent to GET /users
   */
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryuserArgs = {
  id: Scalars['String'];
};


export type QueryusersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
};

export type User = {
  entitlementsIds: Array<Maybe<Scalars['String']>>;
  id: Scalars['String'];
  name: Scalars['String'];
};

    }
    export type QueryUsersServiceSdk = {
  /** 

Equivalent to GET /users/{id} **/
  user: InContextSdkMethod<UsersServiceTypes.Query['user'], UsersServiceTypes.QueryuserArgs, MeshContext>,
  /** 

Equivalent to GET /users **/
  users: InContextSdkMethod<UsersServiceTypes.Query['users'], UsersServiceTypes.QueryusersArgs, MeshContext>
};

export type MutationUsersServiceSdk = {

};

export type SubscriptionUsersServiceSdk = {

};

export type AssetsServiceContext = {
      ["AssetsService"]: { Query: QueryAssetsServiceSdk, Mutation: MutationAssetsServiceSdk, Subscription: SubscriptionAssetsServiceSdk },
    };

export type PublishersServiceContext = {
      ["PublishersService"]: { Query: QueryPublishersServiceSdk, Mutation: MutationPublishersServiceSdk, Subscription: SubscriptionPublishersServiceSdk },
    };

export type UsersServiceContext = {
      ["UsersService"]: { Query: QueryUsersServiceSdk, Mutation: MutationUsersServiceSdk, Subscription: SubscriptionUsersServiceSdk },
    };

export type MeshContext = AssetsServiceContext & PublishersServiceContext & UsersServiceContext & BaseMeshContext;


import { getMesh } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { fileURLToPath } from '@graphql-mesh/utils';

const importedModules: Record<string, any> = {

};

const baseDir = pathModule.join(__dirname, '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`);
  }
  return Promise.resolve(importedModules[relativeModuleId]);
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: 'ts',
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                  });
                }
              

export const documentsInSDL = /*#__PURE__*/ [];

export async function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions();
  return getMesh<MeshContext>(meshConfig);
}

export async function getMeshSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const { sdkRequesterFactory } = await getBuiltMesh();
  return getSdk<TOperationContext>(sdkRequesterFactory(globalContext));
}

export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;