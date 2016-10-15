Reminder: Rules of the game. Please read thoroughly before you begin

Remember to commit when you start the project, and BEFORE and AFTER EVERY major code change.
Repos with unsatisfactory commit histories that do not document workflow start to finish may be rejected.
Repos clearly missing basic requirements (gulpfile, package.json, readme, etc.) may be rejected.
Use clear, unique, self-explanatory variable and method names.
Include accurate setup instructions in your readme.
Work must be clearly identifiable as your own, outside of the provided starter code. Do not reference current or former student or staff work.
You are required to be working from Epicodus 8am to 1pm. You must sign in by 8:15 am to be considered on time.
Project submissions must be complete and represent roughly 8 hours of work when submitted, even if they are not yet passing. If work is incomplete, or it is obvious from your commit history you did not work for ~8 hours, attendance will not be adjusted if you leave before 5pm. You will be marked as left early.
Github User Lookup
Create a website where users may enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories.

Use the GitHub API to retrieve this information. This API allows 5,000 requests per hour with an API key, but only 60 requests per hour without one. Everyone is therefore required to use their own unique key. GitHub refers to these keys as "Personal Access Tokens".

Creating Personal Access Tokens

Visit the Settings area of your GitHub account, select Personal Access Tokens from the sidebar, and hit Generate New Token.
GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select Generate Token.
Setup Instructions

Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env)
Include .env in .gitignore.
Use at least two JavaScript files: One to receive form input, another to make an API request and display results.
Since we must use access tokens to bypass the rate limit, starter code is provided. Below is a function to make an authenticated API call:
exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
This example assumes your API Key is stored in an apiKey variable, as described in the "Security" section at the bottom of this lesson.
It uses the URL 'https://api.github.com/users/daneden' , requesting details about the user "daneden". Try other usernames and check out the response in the console.
Notice the ?access_token= used with the API key after the username. You must include your personal access token with your request.
Consult the GitHub API Documentation for further information.

Further Exploration
If you have completed all objectives with time to spare, consider adding additional features, such as:

Display the date each repository was created and use Moment.js (installed via Bower) to format it.
Update the UI if a user can't be found.
Display profile information for the searched user, too. This could be their full name, photo, email address, follower count, etc. Experiment with what additional information you can request from the API.
Add styling with SASS. Use a Gulp task to compile it.
If someone wants to try your project but doesn't have an API key, you can add functionality to allow a limited amount of API calls (60 per hour instead of 5,000). Add logic to make an un -authenticated request if the .env file with the API key does not exist.
Objectives
Your code will be reviewed for the following objectives:

Does the website work as expected?
Did you follow all setup instructions, including storing your API key in the variable exports.apiKey?
Does the app include at least 2 JavaScript files?
Is exports used successfully in at least one JavaScript file?
Are dependencies managed with npm and Bower?
Does the app include a gulp-based asset pipeline with a development server? Does the asset pipeline include all tasks from the homework this week? (See below)
Are previous standards met?
Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?
Is the app in a presentable, portfolio-quality state?
Gulp Tasks Reference
For reference, the following Gulp tasks were used this week:

Concatenation, minification, and running the browserify package on your JavaScript.
Building and cleaning.
Running the development server with live reloading.
Running JSHint.
Automatically including Bower dependencies as vendor.min.js and vendor.css.
