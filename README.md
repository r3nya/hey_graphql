# GraphQL demo

### Start project

```
npm install
npm start
```

### Try it

_For getting data:_

```
curl -X POST -H 'Content-Type:application/graphql'  -d 'query RootQueryType { count }' localhost:3000/graphql
```
```
curl -X POST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description} }}}' localhost:3000/graphql
```

_For setting data:_

```
curl -X POST -H 'Content-Type:application/graphql' -d 'mutation RootMutationType { updateCount }' localhost:3000/graphql
```
