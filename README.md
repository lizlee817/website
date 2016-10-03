# Triton-Tech
A static website for CDM's Robotics Team.

# How To Edit (assumes you've been invited to the 'Triton-Tech' Github organization)
1. Go to the main page of this repository (this project, 'Triton-Tech'/'Triton-Tech')

2. Fork this repository (top-right) to your Github account

3. On your fork of this repo, go to the green 'Clone or Download' button and copy the link

4. Go to Terminal in Mac or Command Prompt in Windows and change to your desired directory / folder
  1. A directory is a folder, like 'Documents' or 'Summer Pics 2008'
  2. For help, look up 'ls' and 'cd' commands
  3. Your current directory is to the left of your type cursor in the command line

5. Type in your command line 'git clone [what you copied in step 3]', this will copy that repository to the folder you selected in step 4

6. Make desired changes to HTML/CSS/JS files

7. Move forward one directory, to the folder created when you copied the repository (if you haven't closed the command line, just type 'cd [name of repository]')

8. Type 'git commit -am "[message about what you changed]"

9. Type 'git push origin master'

10. Type 'git remote -v', you should see 'origin' and 'upstream'
  1. This shows the names and urls of the online repositories your folder is linked to

11. Type "git remote add heroku 'https://git.heroku.com/serene-refuge-70621.git'"
  1. This adds a remote repository called 'heroku'
  2. Heroku.com is the platform that hosts the Triton Tech webpage

12. Type 'git push heroku master', then submit your information for your Heroku account
  1. This pushes the changes to the Github repository connected to the website, and consequently changes the website
  
13. Go to www.tritontech6072.com to see your changes!
