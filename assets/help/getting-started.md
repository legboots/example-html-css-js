# Getting Started

## Fork the Repo
### About
Forking a [repository](./glossary.md#repository--repo) gives you a full copy of the codebase, including all history. When you have your own [fork](./glossary.md#fork) of an existing project, you are able to contribute to it without impacting the original project. In your unoffical version, you are the owner!

The intent behind forking is to make your changes and eventually [merge](./glossary.md#merge) them back into the original project via a [pull request](./glossary.md#pull-request), becoming a contributor.

Alternatively [Some forks become more popular than the original project!](https://en.wikipedia.org/wiki/List_of_software_forks)

### How To
 - Go the main page of this Repo and click 'Fork'
   ![Screencap of Fork button on GitHub](/assets/img/github/fork.png)
 - You will now have a copy of the Repo under your own GitHub account 🎉

---
## Setting Up GitHub Pages
### About
You now have your code stored in [Git](./glossary.md#git), on [GitHub](./glossary.md#github), great! But you will still need somewhere to deploy the result of your code. For simple static websites, [GitHub](./glossary.md#github) offers free hosting with [GitHub Pages](./glossary.md#github-pages)

You can even fully automate the deployment process using [GitHub Actions](./glossary.md#github-actions), which are preconfigured in this project, but need to be enabled manually on [GitHub](./glossary.md#github)

Since your [repo](./glossary.md#repository--repo) is forked, [GitHub Actions](./glossary.md#github-actions) are automatically disabled for security reasons. Let's fix that.

### How to
 - Go to your GitHub profile and find your newly forked project
 - Click on your project, then select 'Actions' from the toolbar
   ![Screencap of Fork button on GitHub](/assets/img/github/actions.png)
 - TODO screencap: Accept the security warning and enable Actions
 - TODO settings >actions>general>workflow permissions> allow read/write
 - TODO can you manually run the action at this point to create gh-pages?
 - TODO screencap: Now select 'Settings' from the toolbar
 - TODO screencap: Look in the sidebar for 'Pages'
 - TODO screencap: Ensure the 'Source' dropdown is set to 'Deploy from a branch'
 - TODO screencap: Ensure the 'Branch' dropdown is set to 'gh-pages'
 - Click Save

---
## Publishing changes (Deploying)
 - Go to your Repo, click the Actions Tab
 - look for 'pages build and deployment'
 - once this is done, your Repo will be deployed at https://YOURUSERNAME.github.io/example-html-css-js/