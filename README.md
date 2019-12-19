=============== Git Flow ================

1. Clone the project.

2. Create/checkout to a branch with your name: git checkout -b [your name goes here]

3. Once you have completed a task you were working on, make sure to: * git add . * git commit -m "here goes the message" * git push origin [your personal branch name here]

4. Checkout back to master branch

5. Run bash command: git fetch

6. Pull from master: git pull origin master

7. Check if there are any merge conflicts, and fix them if there are any.

8. While remaining in the master branch, pull the code from your personal branch that you previously pushed: git pull origin [your personal branch name]

9. Check for conflicts again, and make sure the localhost website is running without any errors.

10. If everything is good, push to master: git push origin master

11. In the terminal, checkout to your personal branch again: git checkout [your personal branch name]

12. Update your personal branch with the master: git pull origin master

13. Continue coding!
