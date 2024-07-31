Score Board API

Diagram: https://drive.google.com/file/d/1iljcp_O_COXqES1i_nOYKv0sj-deLWN6/view?usp=sharing

Base link `baselink`

<h4>Get Top 10 Users</h4>
<div>
Description:<br/>
<strong>Returns top 10 users with their scores</strong><br/>
Apply Auth Middleware<br/><br/>
GET "/"<br/><br/>
Headers: <br/>
<pre>
{
    "Content-Type": "application/json",
    "Authorization": "Bearer {token}"
}
</pre><br/>

Response: <br/>

<pre>
{
    "status": boolean,
    "data": {
        "top 10 users with their scores"
    }
}
</pre><br/>
</div>

<h4>Make an Action</h4>
<div>
Description:<br/>
<strong>Adds score to user based on action user did</strong><br/>
Apply Auth Middleware<br/><br/>
POST "/action"<br/><br/>
Headers: <br/>
<pre>
{
    "Content-Type": "application/json",
    "Authorization": "Bearer {token}"
}
</pre><br/>

Payload: <br/>

<pre>
{
    "actionId": "{actionId}"
}
</pre><br/>

Response: <br/>

<pre>
{
    "status": boolean,
    "data": {
        "new score"
    }
}
</pre><br/>
</div>

<ul>
<li>For the GET request to /, limit it to 1 request per second per account to avoid overloading the system. You can use ready-made solutions or implement it yourself.</li>

<li>For the POST request to /action, ensure to check the origin of the request. Only allow requests from our site to prevent users from abusing the endpoint.</li>
</ul>

# Additional Comments and Improvements

Since this is just a module of the system, it is implied that authentication and authorization are handled by the authentication middleware, but I will still make a diagram with my Auth Middleware that I would implement.

<ul>
<li>Add the ability to get the user's own rank in the leaderboard like "Top 10 users, Your position: 231".</li>
<li>Implement pagination with a limit of 50 users at a time.</li>
<li>Improve the system to detect if a user is abusing the endpoint.</li>
</ul>