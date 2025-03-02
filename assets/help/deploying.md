# Updating Your Website (Deploying)

**Warning:**
A brief warning that there are many ways to do this, and I'm not by any stretch saying this is the best one.

Across all ends of software development there is more opinions than there are anything else. If it's something that can be changed later, it's important to remember the goal you are trying to achieve now rather than get bogged down in the details.

## Setting Up GitHub Pages
### About
You now have your code stored in [Git](./glossary.md#git), on [GitHub](./glossary.md#github), great! But you will still need somewhere to deploy the result of your code. For simple static websites, [GitHub](./glossary.md#github) offers free hosting with [GitHub Pages](./glossary.md#github-pages)

You can even fully automate the deployment process using [GitHub Actions](./glossary.md#github-actions). These actions are described in [workflows](./glossary.md#workflows) and stored in the projects repository under [`.github/workflows`](https://github.com/andrewiankidd/example-html-css-js/tree/feature/flutter-stuff/.github/workflows).

Ours is pretty simple, it just waits for any changes to the 'main' branch of the repository and copies the `src` folder to the GitHub Pages webserver.

Since your [repo](./glossary.md#repository--repo) is forked, [GitHub Actions](./glossary.md#github-actions) are automatically disabled for security reasons. Let's fix that.

**⚠️WARNING**
GitHub does this for a reason.
Actions can access your private information and even impersonate you. It's recommended you always read over the workflows to ensure they are safe before continuing.

### How to enable workflows in forked repos
 - Go to your GitHub profile and find your newly forked project
 - Click on your project, then select 'Actions' from the toolbar
   ![Screencap of Fork button on GitHub](/assets/img/github/actions.png)
 - Click 'I understand my workflows, go ahead and enable them'
  ![Screencap of Fork enable workflows button on GitHub](/assets/img/github/enable-forked-actions.png)
 - You should then be dropped into the Actions overview, with our 'Build and Deploy' workflow available in the sidebar
  ![Screencap of Fork options on GitHub](/assets/img/github/actions-no-runs.png)
 - TODO can you manually run the action at this point to create gh-pages?
 - TODO screencap: Now select 'Settings' from the toolbar
 - TODO screencap: Look in the sidebar for 'Pages'
 - TODO screencap: Ensure the 'Source' dropdown is set to 'Deploy from a branch'
 - TODO screencap: Ensure the 'Branch' dropdown is set to 'gh-pages'
 ![Screencap of Fork options on GitHub](/assets/img/github/settings-pages.png)
 - Click Save

---
## Publishing changes (Deploying)
 - Go to your Repo, click the Actions Tab
 - look for 'pages build and deployment'
 - once this is done, your Repo will be deployed at https://YOURUSERNAME.github.io/example-html-css-js/