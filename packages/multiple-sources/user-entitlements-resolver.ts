import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  User: {
    entitlements: {
      selectionSet: /* GraphQL */`
      {
        entitlementsIds
      }
      `,
      resolve: async (root, _args, context, info) => {
        const ids = (root as any).entitlementsIds;
        console.log(root.name,ids)
        return Promise.all(ids.map((id:string) => context.AssetsService.Query.asset({
          root,
          args: {
            id
          },
          context,
          info
        })))
      }
    }
  }
}

export default resolvers
