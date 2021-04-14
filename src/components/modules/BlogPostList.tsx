import Grid from '@material-ui/core/Grid'
import type { ReactElement } from 'react'
import BlogPostListItem from 'components/modules/BlogPostListItem'
import type { BlogPost } from 'types/blogPost'

type BlogPostListProps = {
  blogPostEntries: BlogPost[]
}

export default function BlogPostList({
  blogPostEntries,
}: BlogPostListProps): ReactElement {
  return (
    <Grid container spacing={4}>
      {blogPostEntries.map((blogPostEntry) => (
        <BlogPostListItem
          key={blogPostEntry.uid}
          blogPostEntry={blogPostEntry}
        />
      ))}
    </Grid>
  )
}
