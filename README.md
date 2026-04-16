# Git Commands Learning Journey

Welcome! This repository is a hands-on learning project where I'm implementing and understanding core Git commands step by step.

## 📚 Commands Implemented

### 1. **git init**
Initializes a new Git repository in the current directory. This creates a `.git` folder that stores all version control information.

```bash
git init
```

### 2. **git status**
Displays the current state of the working directory and staging area. Shows which files are modified, staged, or untracked.

```bash
git status
```

### 3. **git add**
Stages files for the next commit. Moves changes from the working directory to the staging area.

```bash
git add <file>          # Stage specific file
git add .               # Stage all changes
```

### 4. **git commit**
Records staged changes to the repository with a descriptive message. Creates a snapshot of your project at that point in time.

```bash
git commit -m "Your commit message"
```

### 5. **git log**
Shows the commit history including authors, dates, and commit messages. Displays all commits in reverse chronological order.

```bash
git log                 # View full log
git log --oneline       # View condensed log
```

### 6. **git switch**
Switches between branches. A newer, more intuitive alternative to `git checkout` for branch navigation.

```bash
git switch <branch-name>              # Switch to existing branch
git switch -c <new-branch-name>       # Create and switch to new branch
```

### 7. **git branch**
Manages branches in your repository - listing, creating, deleting, and renaming branches.

```bash
git branch                            # List all branches
git branch <branch-name>              # Create new branch
git branch -d <branch-name>           # Delete branch
git branch -m <old-name> <new-name>   # Rename branch
```

### 8. **git merge**
Combines changes from one branch into another. Integrates the commit history of different branches.

```bash
git merge <branch-name>               # Merge specified branch into current branch
```

### 9. **git reset --hard**
Resets the working directory and staging area to a previous commit. Discards all changes since that commit.

```bash
git reset --hard <commit-hash>        # Reset to specific commit
git reset --hard HEAD~1               # Reset to previous commit (discard last commit)
```

⚠️ **Warning**: This command permanently discards changes. Use with caution!

### 10. **git revert**
Creates a new commit that undoes changes from a specified commit, while preserving history.

```bash
git revert <commit-hash>              # Undo changes from specific commit
```

✅ **Advantage**: Unlike `reset`, this preserves the commit history and is safer for shared branches.

### 11. **git stash**
Temporarily saves uncommitted changes without committing them. Useful for switching branches without losing work.

```bash
git stash                             # Stash current changes
git stash list                        # View all stashes
git stash pop                         # Apply and remove the latest stash
git stash apply                       # Apply stash without removing it
```

### 12. **git restore**
Restores files in the working directory to a previous state. Can discard changes or unstage files.

```bash
git restore <file>                    # Discard changes in working directory
git restore --staged <file>           # Unstage file
```

### 13. **git alias**
Creates custom shortcuts for Git commands. Simplifies frequently used commands.

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

View aliases in `~/.gitconfig` file.

---

## 🎯 Project Structure

This repository contains practice files for each major concept:

- **app.js** - Main application file
- **ui.js** - User interface logic
- **ex_1_reset_hero.js** - Git reset demonstration
- **ex_2_restore_stimulation.js** - Git restore practice
- **ex_3_Stash_stimulation.js** - Git stash demonstration
- **ex_4_alias_stimulation.txt** - Git alias examples

---

## 💡 Key Takeaways

| Command | Purpose | Preserves History |
|---------|---------|------------------|
| `reset --hard` | Undo commits and changes | ❌ No |
| `revert` | Undo commits safely | ✅ Yes |
| `restore` | Discard file changes | ❌ No |
| `stash` | Temporarily save changes | ✅ Yes |

---

## 🚀 Getting Started

```bash
# Clone or navigate to the repository
cd Todo-simulation-github

# Check the current status
git status

# View commit history
git log --oneline

# Create and switch to a new branch
git switch -c feature/my-feature

# Make changes and commit
git add .
git commit -m "Add new feature"
```

---

## 📖 Learning Resources

As you work through these commands, remember:
- Always check `git status` before committing
- Use `git log` to understand your project history
- Practice `git stash` before switching branches with uncommitted changes
- Use `git revert` for shared branches instead of `reset --hard`

Happy learning! 🎓

