# blog
blog.ipfs-search.com

Created using Jekyll and Minimal Mistakes

## Documentation:
[Jekyll](https://jekyllrb.com/docs/posts/)
[Minmal mistakes](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)

## Creating Posts
To create a post, add a file to the _posts directory with the following format:

    YEAR-MONTH-DAY-title.MARKUP

## Drafts
Drafts for posts can be put in  `/_drafts`

## Author bio
Details about authors can be added to `/_data/authors.yml` and called by adding `author : AUTHOR_NAME` to the Frontmatter of the post.

## Building locally
### Installing dependencies
Requires Ruby and Jekyll installed:
```
$ gem install --user-install bundler jekyll
$ bundle install
```

### Executing local build, with livereload
```bash
$ bundle exec jekyll serve --livereload --incremental
```
