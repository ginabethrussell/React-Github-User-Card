# React GitHub User Card 
* Site deployed with Netlify
* [https://gbr-github-usercards.netlify.app](https://gbr-github-usercards.netlify.app)

## Lambda School Advanced React Module Project: Component Lifecycle Methods

This project explored and practiced the concepts and techniques of `React Lifecycle Methods` in class components. 

### Project Features

- Fetches data from the GitHub API for an initial seed GitHub user and the user's followers
- Displays the user data on the DOM using UserCard and Follower components
- Uses class components to build and render components which hold state
- Provides an input form inside the Header component to allow a new user to be searched and displayed
- Utilizes `componentDidMount` and `componentDidUpdate` Lifecycle methods to control side effects (API calls to GitHub API)
- Incorporates the `react-github-calendar` npm package to display user's GitHub contributions using the component - `<GithubCalendar user='user' />` 
### Final Project Screenshot
![site screenshot](https://raw.githubusercontent.com/ginabethrussell/React-Github-User-Card/main/public/site.png)

### Initial Project Plan

Initial project design was planned using a Whimsical flowchart to design and model the relationships between components. 

![whimsical image](https://raw.githubusercontent.com/ginabethrussell/React-Github-User-Card/main/public/app_plan.png)

#### Modifications of Initial Plan During Build
- Added 2 additional state variable properties, userData and followers
- Moved form input to the Header instead of as separate Form component
- Moved followers state variable up to App component instead of controlling in lower UserCard component
- Kept Lifecycle methods in top level App component
