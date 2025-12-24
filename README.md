# TODO LIST

## Project overview 

A simple application to help remember day to day tasks built using react and node, integrated a centralized Database for global memory.Built with the help of git for version control and consistent  management of the source code.

### Installation

pull v1.0.0 or v1.0.1 depending on your need

cd backend 

node index.js 

cd ..
 
cd TodoList

npm run dev 
## 📂 Project Structure

```text
todoList/
├── backend/            # Express/Node.js API
│   ├── index.js        # Main server entry point
│   └── package.json    # Backend dependencies
├── TodoList/           # Frontend (React/Vue/etc.)
│   ├── src/
│   └── public/
└── README.md
```
---
### GIT COMMANDS USED

This section documents the version control workflow and the specific hurdles overcome during development.
1. Branching & Feature Isolation

To keep the main branch stable, new features like the backend routes and the database integration were developed on separate branches before being merged.
Bash

### Creating and switching to a new feature branch
git checkout -b backend
![alt text](<Screenshot from 2025-12-22 16-48-30.png>)


### Staging and committing changes
git add .
git commit -m "added routes"

![alt text](<Screenshot from 2025-12-22 16-48-30.png>)

### Merging and Pushing to GitHub

![alt text](<Screenshot from 2025-12-22 17-48-15.png>)


### Git Pull 

used to get our local up to date with the Remote repo 

![alt text](<Screenshot from 2025-12-22 17-56-07.png>)


### Taging  

![alt text](<Screenshot from 2025-12-23 13-59-10.png>) 

### Stashing

![alt text](<Screenshot from 2025-12-23 13-21-26.png>)


2. Resolving the "Rejected Push" (Divergent Histories)

The Issue: When attempting to push to GitHub, the request was rejected because the remote repository had a README.md or other files that didn't exist locally.
Bash

# The Error encountered
error: failed to push some refs to 'github.com/navneet-si/infamousTodoList.git'
hint: Updates were rejected because the remote contains work that you do not have locally.

The Fix: I had to force Git to reconcile two different histories using the --allow-unrelated-histories flag during a pull.
Bash
![alt text](<Screenshot from 2025-12-22 17-57-56.png>)

3. Handling Merge Conflicts

![alt text](<Screenshot from 2025-12-24 13-27-25.png>)

The Issue: While merging the backend branch into main, a conflict occurred in models.js because both branches had different connection strings for MongoDB.
Bash

CONFLICT (add/add): Merge conflict in backend/models.js
Automatic merge failed; fix conflicts and then commit the result.

The Fix:

    Opened the models.js file in VS Code.

    Manually selected "Accept Incoming Change" to use the updated MongoDB URI.

    Staged the resolved file and completed the merge.

Bash

git add backend/models.js
git commit -m "Message"



