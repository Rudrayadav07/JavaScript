# Steps to Push This Project to GitHub

These are the steps used to push this project to
[Rudrayadav07/JavaScript](https://github.com/Rudrayadav07/JavaScript).

1. **Check the local repository.** Confirm the current branch, working-tree
   changes, and latest commit:

   ```powershell
   git status --short --branch
   git log -1 --oneline
   ```

2. **Check the GitHub repository.** Verify the repository is reachable and
   inspect its existing `main` branch before pushing:

   ```powershell
   git ls-remote --heads https://github.com/Rudrayadav07/JavaScript.git
   git fetch https://github.com/Rudrayadav07/JavaScript.git main
   ```

3. **Ignore installed dependencies.** Add `node_modules/` to the root
   `.gitignore` so the installed dependency files are not added to Git. Keep
   `package.json` and `package-lock.json`, which describe the dependencies and
   allow them to be installed on another machine.

4. **Add the GitHub repository as `origin` and fetch its branch:**

   ```powershell
   git remote add origin https://github.com/Rudrayadav07/JavaScript.git
   git fetch origin main
   ```

   If `origin` is already configured, update its URL instead:

   ```powershell
   git remote set-url origin https://github.com/Rudrayadav07/JavaScript.git
   ```

5. **Bring the existing GitHub history into the local branch.** The local and
   GitHub repositories started with separate histories, so merge them rather
   than overwriting the remote branch:

   ```powershell
   git merge --allow-unrelated-histories --no-edit origin/main
   ```

   If Git reports conflicts, resolve them, stage the resolved files with
   `git add`, and complete the merge with `git commit`.

6. **Stage and commit the project files.** Stage only the intended files;
   `.gitignore` prevents `node_modules/` from being included:

   ```powershell
   git add -- .gitignore package.json package-lock.json
   git commit -m "Add Node.js project dependencies"
   ```

   The existing `day1/index.js` and files already present on GitHub were kept
   in the repository history.

7. **Push `main` and set its upstream tracking branch:**

   ```powershell
   git push -u origin main
   ```

8. **Verify the push and working tree:**

   ```powershell
   git status --short --branch
   git rev-parse HEAD
   git ls-remote origin refs/heads/main
   ```

   The local `HEAD` and the GitHub `main` commit should match, and the status
   should show `main` tracking `origin/main` without uncommitted changes.

The push completed successfully with commit
`43fcfbd2ef194072d192fe656f44ebf1db90c4de`.
