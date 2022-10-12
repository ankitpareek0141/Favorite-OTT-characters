## Getting started
Register yourself in the [Hacktoberfest](https://hacktoberfest.com/) 2022 

## How to contribute

This project follows the [contrib.rocks](https://contrib.rocks/) specification. Contributions of any kind are welcome!

### 1. Submit an issue

- Create a [new issue](https://github.com/ankitpareek0141/Favorite-OTT-characters/issues/new/choose).
- Comment on the issue (if you'd like to be assigned to it) - that way [our team can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).

### 2. Fork the repository (repo)

- If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo).

### 3. Set up your local environment (optional)

If you're ready to contribute and create your PR, it will help to set up a local environment so you can see your changes.

1. [Set up your development environment](https://www.gatsbyjs.com/docs/tutorial/part-zero/)

2. Clone your fork

If this is your first time forking our repo, this is all you need to do for this step:

```sh
$ git clone git@github.com:[your_github_handle]/Favorite-OTT-characters.git && cd Favorite-OTT-characters
```

If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```sh
$ git remote add upstream https://github.com/ankitpareek0141/Favorite-OTT-characters.git
```

To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```sh
$ git checkout main
$ git fetch upstream
$ git merge upstream/main
```

### 4. Make awesome changes!

1. Create new branch for your changes

```sh
$ git checkout -b new_branch_name
```

2. Start developing! append new character details in `js/characters.js` file.
```
{
    "image": "your_image_url",
    "title": "your_image_title",
    "description": "your_image_description"
}
``` 

3. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)).

```sh
$ git commit -m "brief description of changes [Fixes #1234]"
```

4. Push to your GitHub account

```sh
$ git push
```

### 5. Submit your PR

- After your changes are committed to your GitHub fork, submit a pull request (PR) to the `dev` branch of the `ankitpareek0141/Favorite-OTT-characters` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`

### 6. Wait for review

- The website team reviews every PR
- Acceptable PRs will be approved & merged into the `main` branch

### 7. Optional
- Give __Star__ to this repository if you had learn something!
