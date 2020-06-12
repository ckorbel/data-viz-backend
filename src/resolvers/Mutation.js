const Mutation = {
  async createTeam(parent, args, { prisma }, info) {
    return prisma.mutation.createTeam({
      data: {
        ...args.data,
      },
    });
  },

  async updateTeam(parent, args, { prisma }, info) {
    const teamExists = await prisma.exists.Team({
      id: args.id,
    });

    if (!teamExists) {
      throw new Error("Unable to find Team");
    }

    return prisma.mutation.updateTeam(
      {
        where: {
          id: args.id,
        },
        data: args.data,
      },
      info
    );
  },
};

export { Mutation as default };
