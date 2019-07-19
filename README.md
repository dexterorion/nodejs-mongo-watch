- mkdir mdata-1
- mkdir mdata-2
- mkdir mdata-3
- mongod --port 27017 --dbpath ./mdata-1 --smallfiles --replSet mongo-repl
- mongod --port 27018 --dbpath ./mdata-2 --smallfiles --replSet mongo-repl
- mongod --port 27019 --dbpath ./mdata-3 --smallfiles --replSet mongo-repl
- mongo --port 27017
- rs.initiate({
   "_id" : "mongo-repl",
   "members" : [
    {
     "_id" : 0,
     "host" : "localhost:27017"
    },
    {
     "_id" : 1,
     "host" : "localhost:27018"
    },
    {
     "_id" : 2,
     "host" : "localhost:27019"
    }
   ]
})
- 

- https://medium.com/@thakkaryash94/mongodb-3-6-change-streams-example-with-node-js-2b9a85652c50


