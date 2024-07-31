Score Board API

Diagram: https://drive.google.com/file/d/1iljcp_O_COXqES1i_nOYKv0sj-deLWN6/view?usp=sharing

Base link `baselink`

Get Top 10 Users
Description:
    Returns top 10 users with their scores
Apply Auth Middleware
GET "/"
Headers: {
    "Content-Type": "application/json",
    "Authorization" "Bearer {token}"
}

Response: {
    "status": boolean,
    "data": {top 10 users with their scores}
}


Make an action
Description:
    Adds score to user based on action user did
Apply Auth Middleware
POST "/action"
Headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer {token}"
}
Payload: {
    "actionId": {actionId}
}

Response: {
    "status": boolean,
    "data": {new score}
}

For the GET request to /, limit it to 1 request per second per account to avoid overloading the system. You can use ready-made solutions or implement it yourself.

For the POST request to /action, ensure to check the origin of the request. Only allow requests from our site to prevent users from abusing the endpoint.

# Additional comments: 
Since this is just a module of the system, it is implied that authentication and authorization are handled by the authentication middleware
but i still make a diagram with my Auth Middleware that i would implement.

Add the ability to get the user's own rank in the leaderboard like "Top 10 users, Your position: 231".
Implement pagination with a limit of 50 users at a time.
Improve the system to detect if a user is abusing the endpoint.