# Genius Space Fullstack Developer course

Repository for coding lessons and homework's from 'Genius Space'

## Projects

### Shop Bakery

Single page Web application.

![Shop Bakery Screenshot](https://i.ibb.co/fvKWFwg/modern-backery.png)

### Todo List

React Application

![Todo List Screenshot](https://i.ibb.co/tQPPwzc/todo.png)

### Tic Tac Toe

React Application

![Tic Tac Toe Screenshot](https://i.ibb.co/9gzqjhB/tic-tac-toe.png)

### React Native Application

![React Native Application Screenshot 1](https://i.ibb.co/KmcT99G/react-native-1.png) ![React Native Application Screenshot 1](https://i.ibb.co/vwY6pPq/react-native-2.png)

### Nodejs API

| Method |    Path    |                                               Request JSON                                               | Response JSON                                                                                                       |
| :----: | :--------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------ |
|  Get   |   /tasks   |                                                   none                                                   | "\_id": String<br>"text": String<br>"isCompleted": Boolean<br>"\_\_v": Number                                       |
|  Get   | /tasks/:id |                                          ":id": String<br>none                                           | "\_id": String<br>"text": String<br>"isCompleted": Boolean<br>"\_\_v": Number                                       |
|  Post  |   /tasks   |                                              "text": String                                              | "\_id": String<br>"text": String<br>"isCompleted": Boolean<br>"\_\_v": Number                                       |
|  Put   | /tasks/:id |                                          ":id": String<br>none                                           | "\_id": String<br>"text": String<br>"isCompleted": Boolean<br>"\_\_v": Number                                       |
| Delete | /tasks/:id |                                          ":id": String<br>none                                           | none                                                                                                                |
|  Post  | /register  | "firstName": String<br>"lastName": String<br>"email": String<br>"password": String<br>"role": String<br> | "firstName": String<br>"lastName": String<br>"email": String                                                        |
|  Post  |   /login   |                                  "email": String<br>"password": String                                   | "\_id": String<br>"firstName": String<br>"lastName": String<br>"email": String<br>"role": String<br>"\_\_v": Number |
