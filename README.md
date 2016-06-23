# GraphQL demo

### Start project

```
npm install
npm start
```

### Try it

```
curl -X POST -H 'Content-Type:application/graphql'  -d 'query RootQueryType { count }' localhost:3000/graphql
```
```
curl -X POST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description} }}}' localhost:3000/graphql
```
