Score Board API

Diagram: https://drive.google.com/file/d/1iljcp_O_COXqES1i_nOYKv0sj-deLWN6/view?usp=sharing

Base link `baselink`

<h4>Get Top 10 Users</h4><br/>
<div>
Description:
    <strong>Returns top 10 users with their scores</strong>
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

</div>
<div>
<h4>Make an action</h4>
Description:
   </strong> Adds score to user based on action user did</strong>
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

</div>

<ul>
<li>For the GET request to /, limit it to 1 request per second per account to avoid overloading the system. You can use ready-made solutions or implement it yourself.</li>

<li>For the POST request to /action, ensure to check the origin of the request. Only allow requests from our site to prevent users from abusing the endpoint.</li>
</ul>
# Additional comments: 
Since this is just a module of the system, it is implied that authentication and authorization are handled by the authentication middleware
but i still make a diagram with my Auth Middleware that i would implement.

Add the ability to get the user's own rank in the leaderboard like "Top 10 users, Your position: 231".
Implement pagination with a limit of 50 users at a time.
Improve the system to detect if a user is abusing the endpoint.
