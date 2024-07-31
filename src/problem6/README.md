Score Board API

Diagram: https://drive.google.com/file/d/1iljcp_O_COXqES1i_nOYKv0sj-deLWN6/view?usp=sharing

Base link `baselink`

<h4>Get Top 10 Users</h4>
<div>
Description:<br/>
    <strong>Returns top 10 users with their scores</strong><br/>
Apply Auth Middleware<br/>
GET "/"<br/>
Headers: {<br/>
    "Content-Type": "application/json",<br/>
    "Authorization" "Bearer {token}"<br/>
}<br/>

Response: {<br/>
"status": boolean,<br/>
"data": {top 10 users with their scores}<br/>
}<br/>

</div>
<div>
<h4>Make an action</h4>
Description:<br/>
   </strong> Adds score to user based on action user did</strong><br/>
Apply Auth Middleware<br/>
POST "/action"<br/>
Headers: {<br/>
    "Content-Type": "application/json",<br/>
    "Authorization": "Bearer {token}"<br/>
}<br/>
Payload: {<br/>
    "actionId": {actionId}<br/>
}<br/>

Response: {<br/>
"status": boolean,<br/>
"data": {new score}<br/>
}<br/>

</div>

<ul>
<li>For the GET request to /, limit it to 1 request per second per account to avoid overloading the system. You can use ready-made solutions or implement it yourself.</li>

<li>For the POST request to /action, ensure to check the origin of the request. Only allow requests from our site to prevent users from abusing the endpoint.</li>
</ul>
# Additional comments and improvements: <br/>
Since this is just a module of the system, it is implied that authentication and authorization are handled by the authentication middleware<br/>
but i still make a diagram with my Auth Middleware that i would implement.<br/>

<ul>
<li>Add the ability to get the user's own rank in the leaderboard like "Top 10 users, Your position: 231".</li><br/>
<li>Implement pagination with a limit of 50 users at a time.</li><br/>
<li>Improve the system to detect if a user is abusing the endpoint.</li><br/>
</ul>
