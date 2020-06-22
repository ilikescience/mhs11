const express = require('express')
const bodyParser = require('body-parser')
const expressGraphQL = require('express-graphql')
const serverless = require('serverless-http')
const theo = require('theo')
const tokens = require('../dist/tokens/tokens.json')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} = require('graphql')

const transformToken = (token, transformType = 'web') => {
    return theo
        .convert({
            transform: {
                type: transformType,
                file: './tokens/dummy.json',
                data: `{props: [${JSON.stringify(token)}]}`,
            },
            format: { type: 'raw.json' },
        })
        .then((result) => {
            const resultObj = JSON.parse(result)
            return resultObj.props[Object.keys(resultObj.props)[0]]
        })
}

const TokenType = new GraphQLObjectType({
    name: 'Token',
    description: 'Describes a design token',
    fields: () => ({
        name: { type: GraphQLNonNull(GraphQLString) },
        value: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
        category: { type: GraphQLNonNull(GraphQLString) },
        originalValue: { type: GraphQLString },
    }),
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        tokens: {
            type: new GraphQLList(TokenType),
            description: 'A list of all tokens',
            args: {
                category: { type: GraphQLString },
            },
            resolve: (parent, args) => {
                const tokensToTransform = args.category
                    ? tokens.props.filter(
                          (token) => token.category === args.category
                      )
                    : tokens.props
                const response = tokensToTransform.map((original) => {
                    return transformToken(original)
                })
                return response
            },
        },
        token: {
            type: TokenType,
            description: 'A single token',
            args: {
                name: { type: GraphQLString },
                transform: { type: GraphQLString }
            },
            resolve: (parent, args) =>
                transformToken(
                    tokens.props.find((token) => token.name === args.name),
                    args.transform
                ),
        },
    }),
})

const schema = new GraphQLSchema({
    query: RootQueryType,
})

const app = express()

app.use(bodyParser.json())
app.use(
    '/',
    expressGraphQL({
        graphiql: true,
        schema: schema,
    })
)

module.exports.handler = serverless(app)
