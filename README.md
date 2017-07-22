# identity-graphql-backend
A simple GraphQL api for the identity-frontend app

## prerequisites
- nodejs 6.10.2 or higher

## Getting started
Clone the repository and Install the dependancies
> yarn install or npm install

Start the app
> yarn start or npm start

Linting
> yarn lint or npm lint

#### Accessing api resources
##### Web browser via Graph<em>i</em>QL
Visit port `11040` in your favorite web browser and register as a new api user:

```javascript
mutation{
	register(data: { email: "EMAIL OR PLACEHOLDER", password: "PASS" }){
	  email
	}
}
```

Login to receive an access token:

```javascript
mutation {
	login(data: { email: "EMAIL OR PLACEHOLDER", password: "PASS" })
}
```

Copy your access token and paste it at the end of your request like so:
`localhost:11040/?token=ACCESS_TOKEN`

Hit ENTER and QUERY away!

##### POSTMAN
Visit port `11040` in your favorite web browser and register as a new api user by sending a `POST` request with the `header` set to `application/json` and the `body` as follows:
```javascript
{
	"query": "mutation register($data: ApiUserInput!){register(data: $data }){email}}", // all this should be inline
    "operationName": "register",
    "variables": {
    	"data": {
    		"email": "EMAIL ADDRESS",
        	"password": "PASS"
        }
    }
}
```
Login to receive an access token:<br/>
Change `query` to `"mutation login($data: ApiUserInput!){login(data: $data)}"` and `operationName` to `login`

Copy your access token and paste it at the end of your request like so:
`localhost:11040/?token=ACCESS_TOKEN`<br/>
**OR**<br/>
add an `authorization` header: `authorization` `Bearer ACCESS_TOKEN`
<br/>
Query away!