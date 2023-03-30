# YourSpace
MySpace Clone

https://github.com/Palealmond/YourSpace-Backend/settings/branches


## APP DESCRIPTION:


## API:


## API SNIPPET:



``` json 
[
  
]
```

## API CODE: 

``` js

}

// E.g.


```

## DATA MODEL:




## COMPONENT TREE:




## ROUTING TABLE:

| Route                | HTTP Method | DB Action | Description             |
| -----------          | ----------- | --------- | ----------------------- |
| /api/                | GET         | INDEX     | Indexes all reviews     |
| /api/profile         | GET         | INDEX     | Indexes your reviews    |
| /api/                | POST        | CREATE    | Create a review         |
| /api/:anime          | GET         | SHOW      | Shows the anime reviews |
| /api/profile/:anime  | PUT         | UPDATE    | Update a review         |
| /api/delete          | DELETE      | DELETE    | Delete a review         |


## WIREFRAMES: 




## MVP:
### Planning <!-- omit in toc -->

- Have a thoroughly documented `Team Expectations` Google document / markdown file.
- Have a **thoroughly** developed, **beautiful** `README.md` file.
- Take time for each team member to discuss where they feel strongest and weakest, in terms of coding ability.
- Create a Whimsical document to convey the data flow with component hierarchy included.

### Collaboration <!-- omit in toc -->

- Contribute equally.
- Have a solid understanding of the _entire_ project. (Even the features implemented by other team members.)
- Take time to pair program with teammates to reinforce learning.
- Be prepared to explain sections of code that were written by teammates.

### Client (Front End) <!-- omit in toc -->

- Have a working, interactive **React** app, built using `npx create-react-app client`
  - Have at least 6 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Authentication!

### Server (Back End) <!-- omit in toc -->

- Have working generic controller actions for CRUD using Python, Postgres, Django
- Authentication!

### Styling <!-- omit in toc -->

- Be styled with CSS.
- Use flexbox (`display: flex`) or CSS Grid.
- Implement responsive design on 2 screen sizes (including desktop) using a media query (mobile).

### Linting <!-- omit in toc -->

- Indent properly.
- Utilize high-quality, semantic variable names and follow naming conventions.
- Remove unnecessary boilerplate React files and code.
- Remove all `console.log()`s and commented out code (functional notes/comments are okay).

### Deployment <!-- omit in toc -->

- Deploy the fully functional front-end via Vercel.
- Deploy the back end via Heroku.
- Deploy the SQL database on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Procedural <!-- omit in toc -->

- Have _frequent_ commits from _every_ team member dating back to the _very beginning_ of the project. These commits should total to or exceed _50_.
- Use _effective_ and _safe_ branching and merging processes.

### MVP Components

- [] Navigation bar which has a homepage, profile page, and search bar (search bar interface).
- [] Component that displays username, anime title, and rating. Below the image, comment, and other users' comments are rendered. 
- [] On the profile page, the component displayes the review.
- [] Routes/links to the aforementioned components.

### POST MVP: 
- [] Search bar functionality is fleshed out.
- [] User comments on other users' reviews are implemented.

### GOALS:

- [] Day 1: Get the project off the ground: proposal, notion, repo, etc.
- [] Day 2: Authentication/flesh out backend.
- [] Day 3: Developing components (NavBar & Post).
- [] Day 4: Developing components (New Post & Edit/Delete).
- [] Day 5: Formatting CSS.
- [] Day 6: Formatting CSS (Cont.) & Post-MVP.
- [] Day 7: Finalizing details (Git, Github, Vercel).

### TEAM COLLABORATION DETAILS:

* Notion Board: 
* Team Expectations:
* Team Theme Song: https://open.spotify.com/track/78ZzF9pK3foniEnK64XzX5?si=Fxwua-gqRIu6rm63z03KNw
