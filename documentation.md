# npm uninstall husky && git config --unset core.hooksPath
# git commit -m "yolo!" --no-verify

## https://github.com/typicode/husky/tree/main/docs

## pre-commit
- This hook is invoked by git-commit[1], and can be bypassed with the --no-verify option. It takes no parameters, and is invoked before obtaining the proposed commit log message and making a commit. Exiting with a non-zero status from this script causes the git commit command to abort before creating a commit.

- The default pre-commit hook, when enabled, catches introduction of lines with trailing whitespaces and aborts the commit when such a line is found.

All the git commit hooks are invoked with the environment variable GIT_EDITOR=: if the command will not bring up an editor to modify the commit message.

The default pre-commit hook, when enabled—​and with the hooks.allownonascii config option unset or set to false—​prevents the use of non-ASCII filenames.


### passport-local

- https://github.com/jaredhanson/passport-local/ 
- Passport strategy for authenticating with a username and password.

- This module lets you authenticate using a username and password in your Node.js applications. By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.