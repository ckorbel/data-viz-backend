const Query = {
  async teams(parent, args, { prisma }, info) {
    const opArgs = {
      orderBy: args.orderBy,
    };
    if (args.query) {
      opArgs.where = {
        OR: [
          {
            name_contains: args.query,
          },
          {
            location_contains: args.query,
          },
          {
            division_contains: args.query,
          },
        ],
      };
    }
    return prisma.query.teams(opArgs, info);
  },

  async team(parent, args, { prisma }, info) {
    try {
      const teams = await prisma.query.teams(
        {
          where: {
            id: args.id,
          },
        },
        info
      );

      if (teams.length === 0) {
        throw new Error("Team not found");
      }

      return teams[0];
    } catch (err) {
      throw new Error("Team not found");
    }
  },

  async yearlyPositionalSpendings(parent, args, { prisma }, info) {
    const opArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy,
    };

    if (args.year) {
      opArgs.where = {
        year_in: args.year,
      };
    }

    return prisma.query.yearlyPositionalSpendings(opArgs, info);
  },
};

export { Query as default };
