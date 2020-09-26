const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const GraphQlDate = new GraphQLScalarType({
  name: 'GraphQlDate',
  description: 'A Date() type in GraphQl as scalar',
  serialize(value) {
    return value.toISOString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value);
      return isNaN(date) ? undefined : date;
    }
  },
  parseValue(value) {
    const date = new Date(value);
    return isNaN(date) ? undefined : date;
  },
});

module.exports = GraphQlDate;
