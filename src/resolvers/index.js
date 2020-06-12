import { extractFragmentReplacements } from "prisma-binding";
import Query from "./Query";
import Mutation from "./Mutation";
import YearlyPositionalSpending from "./YearlyPositionalSpending";
import Team from "./Team";

const resolvers = {
  Query,
  Mutation,
  YearlyPositionalSpending,
  Team,
};

export { resolvers };
