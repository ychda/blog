# 写作

`$ hexo new 'Blog Title''`

# 发布

[https://ychda.github.io/](https://ychda.github.io/)


deploy.sh

```bash
#!/usr/bin/env sh
set -e


# 不保留 git 提交历史
rm -rf .git

git init
git add -A
git commit -m 'deploy'

git remote add origin git@github.com:ychda/ychda.github.io.git

# git push -f git@github.com:ychda/ychda.github.io.git master:gh-pages
git push -f git@github.com:ychda/ychda.github.io.git master:main
cd -

```
