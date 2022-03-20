<h1 align="center">Express with Mongodb Study</h1>

## ✨ Technologies

This project contain these technologies:
- [NodeJs](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com/)
- [Express](http://expressjs.com/)
- [Nodemon](https://nodemon.io/)

<br>

The purpose of this project it's a study with express and Mongodb

## API
- Group of routines and established standards by a software and using it's functionalities by web applications that do not need to know the implementation details but using it's services
- Web API's or Source Code API's

## Web API
- Applications that somehow make web requests

## Web API Standards
- RPC -> call some function
- SOAP -> It provides a protocol to work with RPC and defines a the default request format using xml where we could use functions, parameters, etc.
- REST -> Use HTTP protocol how it was thought (GET/POST/PUT/DELETE).

## REST
Representational State Transfer
- Resource concept
	- Every API Manage it's resources
    - Every resource has an URI/URL
    - Stateless communication: server doesn't need to know what is the client state.
        - Client: Component that request a service.
        - Server: Component that provides the service.
    - Within this architecture or model client-server it helps on the responsibility division between the user interface and the data storage
    - REST needs a client that makes a request to the sever send/modify data. A request consist in:
        - HTTP methods to manage resources:
          - GET/POsT/PUT/DELETE
        - A header. Within the head you have request information
        - A path or route.
        - A format that represents it's resource (html/xml/json)

## Relational Database x Non Relational Database
- Relational Database
	- Use table
	- Lines and columns
	- PK/FK
	- SqlServer, Mysql, postgresql

<br>

- Non Relational Database
    - There is no need to divide data between tables. 
    - Every data can be storage in the same structure.
    - It has a lot of storage types:
		- Documents.
		- Key-value.
		- Graph.