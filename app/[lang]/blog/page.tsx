import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/[lang]/seo'
import { Locale } from '@/i18n.config'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage({ params }: { params: { lang: Locale } }) {
  const filterLangPosts = allCoreContent(sortPosts(allBlogs)).filter((val) =>
    val.lang.includes(params.lang)
  )

  const pageNumber = 1
  const initialDisplayPosts = filterLangPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(filterLangPosts.length / POSTS_PER_PAGE),
  }

  return (
    <>
      <ListLayout
        posts={filterLangPosts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
