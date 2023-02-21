// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { AssetsServiceTypes } from './sources/AssetsService/types';
import type { PublishersServiceTypes } from './sources/PublishersService/types';
import type { UsersServiceTypes } from './sources/UsersService/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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


export type QueryassetArgs = {
  id: Scalars['String'];
};


export type QuerycategoryArgs = {
  id: Scalars['String'];
};


export type QuerypublisherArgs = {
  id: Scalars['String'];
};


export type QueryuserArgs = {
  id: Scalars['String'];
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
  Category: ResolverTypeWrapper<Category>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']>;
  HTTPMethod: HTTPMethod;
  Publisher: ResolverTypeWrapper<Publisher>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Asset: Asset;
  String: Scalars['String'];
  Category: Category;
  Boolean: Scalars['Boolean'];
  ObjMap: Scalars['ObjMap'];
  Publisher: Publisher;
  User: User;
}>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  operationHeaders?: Maybe<Scalars['ObjMap']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']>;
  queryParams?: Maybe<Scalars['ObjMap']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  assets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  asset?: Resolver<Maybe<ResolversTypes['Asset']>, ParentType, ContextType, RequireFields<QueryassetArgs, 'id'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QuerycategoryArgs, 'id'>>;
  publishers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Publisher']>>>, ParentType, ContextType>;
  publisher?: Resolver<Maybe<ResolversTypes['Publisher']>, ParentType, ContextType, RequireFields<QuerypublisherArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
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

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

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
  ObjMap?: GraphQLScalarType;
  Publisher?: PublisherResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = AssetsServiceTypes.Context & PublishersServiceTypes.Context & UsersServiceTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));