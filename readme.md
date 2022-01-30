# use our live api

create a post request to [https://mailsender-api-node.herokuapp.com/api/send](https://mailsender-api-node.herokuapp.com/api/send) with some `application/json` type request body data for example -

```json
{
    "username": "example-from@gmail.com",
    "password": "password",
    "host": "smtp.gmail.com",
    "port": 587,
    "secure": "tls",
    "from": "example-from@gmail.com",
    "name": "mailsender-api",
    "to": "example-to@gmail.com",
    "subject": "just deployed",
    "body": "and literally working..."
}
```
