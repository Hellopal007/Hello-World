# Hello-World
A Major League Hackers challenge to put on Devpost.com

Making Hello, World!

I made a new repo on GitHub by clicking on the + icon at the top right corner of my GitHub account
and selected New Repository. I filled in the repository name, description, chose public visibility,
included a README.md and an MIT license. Once I did that, I went to the code dropdown and copied 
the url.

I opened Git Bash and navigated to the location where I wanted my local repo to be. Then I cloned
the repo using >git clone https://github.com/QuackersNCheese/Hello-World . Then I created my basic
project, using VS Code, by creating index.html, style.css, and script.js. I also made a .gitignore 
file and put .vscode/ in it in order to prevent it from being updated on GitHub.

Next, I put my code back up on GitHub.
On Git Bash, I changed into the Hello-World folder, and added my files to my local repo with
>git add .  to stage my changes followed by 
>git commit -m "initial commit creating basic files"  to commit my changes in the local repo.
I use >git status  here and there to see what is happening.

Once my local repo is up to date, I push the changes back up to the remote repo on GitHub with
>git push origin main 
From here, I start using the GitHub extension in VS Code to commit and push further changes to 
GitHub.

I saw an example of how to implement dark mode on a website called Hackly.com and made it work
for my site. It uses a JavaScript function that is triggered by pushing a button (in HTML). The
function makes a reference to the body of the DOM and then grabs a list of all of the classes
used in the body. It then toggles the dark-mode class, meaning it adds it if it is missing and 
removes it if it is there. Dark-mode is thereby added or removed through the use of CSS
variables.  

(I used W3schools.com to find ways to spruce it up)
Added shadows
Styled the button
Changed button text with each press, through JavaScript and innerHTML 
Put it online as a website with GitHub Pages
Made it responsive to screen size using @media in CSS
