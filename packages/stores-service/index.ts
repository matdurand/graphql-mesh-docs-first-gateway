import { createServer } from "@graphql-yoga/node";
import { readFileSync } from "node:fs";
import { Resolvers, Store, Sells } from "./resolvers-types";

const schema = readFileSync("schema.graphql", "utf-8");

const stores: Store[] = [
  {
    id: "1",
    name: "America",
    __typename: "Store",
  },
  {
    id: "2",
    name: "Europe",
    __typename: "Store",
  },
];

const assetSells: Sells[] = [
  {
    assetId: "1",
    sellsCount: 1932,
    monthYear: "03/22",
    __typename: "Sells",
    storeId: "1",
  },
  {
    assetId: "1",
    sellsCount: 192,
    monthYear: "03/22",
    __typename: "Sells",
    storeId: "2",
  },
  {
    assetId: "2",
    sellsCount: 2387,
    monthYear: "03/22",
    __typename: "Sells",
    storeId: "2",
  },
  {
    assetId: "3",
    sellsCount: 283,
    monthYear: "03/22",
    __typename: "Sells",
    storeId: "2",
  },
];

const resolvers: Resolvers = {
  Query: {
    assetSells: (_p, args) =>
      assetSells.filter((bs) => bs.storeId === args.storeId),
    stores: () => stores,
  },
};

// Create your server
const server = createServer({
  port: 3005,
  schema: {
    typeDefs: schema,
    resolvers,
  },
});

server.start();
