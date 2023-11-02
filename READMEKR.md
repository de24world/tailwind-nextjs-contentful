## Todo List

- Pagination
- 메타데이터

## 빠른 시작 가이드

1. 해당 레지포토리를 복제(clone)해주세요

```bash
npx degit 'timlrx/tailwind-nextjs-starter-blog'
```

2. `siteMetadata.js`(사이트 관련 정보) 개인화해주세요
3. 사용하려면 `next.config.js`에서 콘텐츠 보안 정책을 수정하세요.
   다른 분석 제공업체 또는 Giscus 이외의 댓글 솔루션.
4. Personalize `authors/default.md` (main author)
5. Modify `projectsData.js`
6. Modify `headerNavLinks.js` to customize navigation links
7. Add blog posts
8. Deploy on Vercel

## 설치

```bash
yarn
```

## 개발

먼저 개발 서버를 실행합니다.

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`app`에서 레이아웃을 수정하거나 `data`에서 콘텐츠를 수정하세요. 실시간 새로고침을 사용하면 페이지를 편집할 때 페이지가 자동으로 업데이트됩니다.

## 확장 / 사용자 정의

`data/siteMetadata.js` - 사용자의 필요에 따라 수정되어야 하는 대부분의 사이트 관련 정보가 포함되어 있습니다.

`data/authors/default.md` - 기본 작성자 정보(필수) 파일입니다. 추가 작성자는 `data/authors`에 파일로 추가할 수 있습니다.

`data/projectsData.js` - 프로젝트(/projects) 페이지에서 스타일 카드를 생성하는 데 사용되는 데이터입니다.

`data/headerNavLinks.js` - 네비게이션 링크들입니다.

`data/logo.svg` - 당신만의 로고로 교체하세요.

`data/blog` - 자신의 블로그 게시물로 교체하세요.

`public/static` - 이미지와 파비콘 같은 파일이 저장된 곳입니다.

`tailwind.config.js` 및 `css/tailwind.css` - 사이트의 전체적인 모양과 느낌을 변경하기 위해 수정할 수 있는 tailwind 구성 및 스타일시트입니다.

`css/prism.css` - 코드 블록과 관련된 스타일을 제어합니다. 자유롭게 사용자 정의하고 선호하는 prismjs 테마를 사용하세요. [prism 테마](https://github.com/PrismJS/prism-themes).

`contentlayer.config.ts` - 사용된 콘텐츠 소스 및 MDX 플러그인 정의를 포함한 Contentlayer 구성. 자세한 내용은 [Contentlayer 문서](https://www.contentlayer.dev/docs/getting-started)를 참조하세요.

`components/MDXComponents.js` - 여기에 지정하여 고유한 JSX 코드 또는 React 구성 요소를 전달하세요. 그런 다음 `.mdx` 또는 `.md` 파일에서 직접 사용할 수 있습니다. 기본적으로 사용자 정의 링크, `next/image` 구성 요소, 목차 구성 요소 및 뉴스레터 양식이 전달됩니다. [Next.js의 기존 문제](https://github.com/vercel/next.js/issues/51593)를 방지하려면 구성 요소를 기본으로 내보내야 합니다.

`layouts` - 페이지에 사용되는 기본 템플릿:

- 현재 `PostLayout`, `PostSimple`, `PostBanner`의 3가지 게시물 레이아웃을 사용할 수 있습니다. `PostLayout`은 메타 및 작성자 정보가 포함된 기본 2열 레이아웃입니다. `PostSimple`은 `PostLayout`의 단순화된 버전인 반면, `PostBanner`는 배너 이미지를 제공합니다.

- 블로그 목록 레이아웃에는 2가지가 있습니다. `ListLayout`은 검색 표시줄이 있는 템플릿 버전 1에서 사용되는 레이아웃이고, 현재 버전 2에서 사용되는 `ListLayoutWithTags`는 검색 표시줄을 생략하지만 태그에 대한 정보가 포함된 사이드바를 포함합니다.

`app` - 라우팅할 페이지입니다. 자세한 내용은 [Next.js 문서](https://nextjs.org/docs/app)를 읽어보세요.

`next.config.js` - Next.js와 관련된 구성입니다. 다른 도메인에서 스크립트, 이미지 등을 로드하려면 콘텐츠 보안 정책을 적용해야 합니다.

## 포스트

콘텐츠는 [Contentlayer](https://www.contentlayer.dev/)를 사용하여 모델링됩니다. 이를 통해 자체 콘텐츠 스키마를 정의하고 이를 사용하여 형식화된 콘텐츠 객체를 생성할 수 있습니다. 자세한 내용은 [Contentlayer 문서](https://www.contentlayer.dev/docs/getting-started)를 참조하세요.

### 머리말, 전문(Frontmatter)

머리말은 [Hugo의 기준](https://gohugo.io/content-management/front-matter/)을 따릅니다.

지원되는 필드의 최신 목록은 `contentlayer.config.ts`를 참조하세요. 다음 필드가 지원됩니다.

```
title (필수)
date (필수)
tags (옵션)
lastmod (옵션)
draft (옵션)
summary (옵션)
images (옵션)
authors (`data/authors`의 파일 이름과 일치해야 하는 옵션입니다. 아무것도 지정되지 않은 경우 `default`를 사용합니다.)
layout (`data/layouts`의 파일 이름과 일치해야 하는 옵션입니다)
canonicalUrl (SEO용 게시물에 대한 옵션인 표준 URL입니다.)
```

다음은 게시물 머리말의 예입니다:

```
---
title: 'Introducing Tailwind Nexjs Starter Blog'
date: '2021-01-12'
lastmod: '2021-01-18'
tags: ['next-js', 'tailwind', 'guide']
draft: false
summary: 'Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default', 'sparrowhawk']
layout: PostLayout
canonicalUrl: https://tailwind-nextjs-starter-blog.vercel.app/blog/introducing-tailwind-nextjs-starter-blog
---
```

## Deploy

**Vercel**  
The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Netlify**
[Netlify](https://www.netlify.com/)’s Next.js runtime configures enables key Next.js functionality on your website without the need for additional configurations. Netlify generates serverless functions that will handle Next.js functionalities such as server-side rendered (SSR) pages, incremental static regeneration (ISR), `next/images`, etc.

See [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/#next-js-runtime) for suggested configuration values and more details.

**Static hosting services / GitHub Pages / S3 / Firebase etc.**

1. Add `output: 'export'` in `next.config.js`. See [static exports documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#configuration) for more information.
2. Comment out `headers()` from `next.config.js`.
3. Change `components/Image.tsx` to use a standard `<img>` tag instead of `next/image`:

   ```ts
   /* eslint-disable jsx-a11y/alt-text */
   /* eslint-disable @next/next/no-img-element */
   import NextImage, { ImageProps } from 'next/image'

   // @ts-ignore
   const Image = ({ ...rest }: ImageProps) => <img {...rest} />

   export default Image
   ```

   Alternatively, to continue using `next/image`, you can use an alternative image optimization provider such as Imgix, Cloudinary or Akamai. See [image optimization documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization) for more details.

4. Remove `api` folder and components which call the server-side function such as the Newsletter component. Not technically required and the site will build successfully, but the APIs cannot be used as they are server-side functions.
5. Run `yarn build`. The generated static content is in the `out` folder.
6. Deploy the `out` folder to your hosting service of choice or run `npx serve out` to view the website locally.

## Frequently Asked Questions

### How can I add a custom MDX component?

Here's an example on how to create a donut chart from Chart.js (assuming you already have the dependencies installed) and use it in MDX posts. First, create a new `DonutChart.tsx` component in `components`:

```tsx
'use client'

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const DonutChart = ({ data }) => {
  return <Doughnut data={data} />
}

export default Doughnut
```

Since the underlying `Doughnut` component uses React hooks, we add the `'use client'` directive to specify that it is a client side component. Also, there is an existing issue which prevents named components from being used, so we need to export the component as the default export.

Next, add the component to `MDXComponents.tsx`:

```diff
...
+ import DonutChart from './DonutChart'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
+  DonutChart,
  BlogNewsletterForm,
}
```

You can now use the component in `.mdx` files:

```mdx
## Example Donut Chart

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    },
  ],
}

<DonutChart data={data} />
```

### How can I customize the `kbar` search?

Add a `SearchProvider` component such as the one shown below and use it in place of the default `SearchProvider` component in `app/layout.tsx`.

`defaultActions` are the initial list of actions.

`onSearchDocumentsLoad` is a callback function that is called when the documents specified by `searchDocumentsPath` are loaded. Set `searchDocumentsPath` to `false` to disable the dynamically loaded search feature.

```tsx
'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Homepage',
            keywords: '',
            shortcut: ['h', 'h'],
            section: 'Home',
            perform: () => router.push('/'),
          },
          {
            id: 'projects',
            name: 'Projects',
            keywords: '',
            shortcut: ['p'],
            section: 'Home',
            perform: () => router.push('/projects'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || '',
            section: 'Blog',
            subtitle: post.tags.join(', '),
            perform: () => router.push(post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
```

![tailwind-nextjs-banner](/public/static/images/twitter-card.png)

# Tailwind Nextjs Starter Blog

[![GitHub Repo stars](https://img.shields.io/github/stars/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/timlrx/tailwind-nextjs-starter-blog?style=social)](https://GitHub.com/timlrx/tailwind-nextjs-starter-blog/network/)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Ftimlrxx)](https://twitter.com/timlrxx)
[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/timlrx)](https://github.com/sponsors/timlrx)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/timlrx/tailwind-nextjs-starter-blog)

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) blogging starter template. Version 2 is based on Next App directory with [React Server Component](https://nextjs.org/docs/getting-started/react-essentials#server-components) and uses [Contentlayer](https://www.contentlayer.dev/) to manage markdown content.

Probably the most feature-rich Next.js markdown blogging template out there. Easily configurable and customizable. Perfect as a replacement to existing Jekyll and Hugo individual blogs.

Check out the documentation below to get started.

Facing issues? Check the [FAQ page](https://github.com/timlrx/tailwind-nextjs-starter-blog/wiki) and do a search on past issues. Feel free to open a new issue if none has been posted previously.

Feature request? Check the past discussions to see if it has been brought up previously. Otherwise, feel free to start a new discussion thread. All ideas are welcomed!

Looking for an Astro alternative? Check out the unofficial [Tailwind Astro Template](https://github.com/wanoo21/tailwind-astro-starting-blog).

Looking for a Remix-run alternative? Check out the unofficial [Tailwind Remix-run Starter Blog Template](https://github.com/SangeetAgarwal/tailwind-remix-run-mdxjs-typescript-starter-blog).

## Examples V2

- [Demo Blog](https://tailwind-nextjs-starter-blog.vercel.app/) - this repo
- [My personal blog](https://www.timlrx.com) - modified to auto-generate blog posts with dates
- [ben.codes blog](https://ben.codes) - Benoit's personal blog about software development ([source code](https://github.com/bendotcodes/bendotcodes))
- [tsix blog](https://tsix.top) - A front-end engineer is used to record some knowledge points in work and study _中文_
- [SOTO's Blog](https://www.atksoto.com/) - A more personalized personal website upgraded from V1 ([source code](https://github.com/acsoto/soto-blog-nextjs))
- [Prabhu's Blog](https://prabhukirankonda.vercel.app) - Prabhu's Personal website with blog ([source code](https://github.com/prabhukiran8790/prabhukirankonda))
- [Rabby Hasan's Blog](https://blog.rabbyhasan.com.bd/) - Rabby Hasan's personal blog about full stack development with cloud ([source code](https://github.com/rabbyalone/myblog))
- [enscribe.dev](https://enscribe.dev) - enscribe's personal blog; cybersecurity shenanigans, frontend webdev, etc. ([source code](https://github.com/jktrn/enscribe.dev))
- [dalelarroder.com](https://dalelarroder.com) - Dale Larroder's personal website upgraded from V1 ([source code](https://github.com/dlarroder/dalelarroder))

Using the template? Feel free to create a PR and add your blog to this list.

## Examples V1

[v1-blogs-showcase.webm](https://github.com/timlrx/tailwind-nextjs-starter-blog/assets/28362229/2124c81f-b99d-4431-839c-347e01a2616c)

Thanks to the community of users and contributors to the template! We are no longer accepting new blog listings over here. If you have updated from version 1 to version 2, feel free to remove your blog from this list and add it to the one above.

- [Aloisdg's cookbook](https://tambouille.vercel.app/) - with pictures and recipes!
- [GautierArcin's demo with next translate](https://tailwind-nextjs-starter-blog-seven.vercel.app/) - includes translation of mdx posts, [source code](https://github.com/GautierArcin/tailwind-nextjs-starter-blog/tree/demo/next-translate)
- [David Levai's digital garden](https://davidlevai.com/) - customized design and added email subscriptions
- [Leo's Blog](https://leohuynh.dev) - Tuan Anh Huynh's personal site. Add Snippets Page, Author Profile Card, Image Lightbox, ...
- [thvu.dev](https://thvu.dev) - Added `mdx-embed`, view count, reading minutes and more.
- [irvin.dev](https://www.irvin.dev/) - Irvin Lin's personal site. Added YouTube embedding.
- [KirillSo.com](https://www.kirillso.com/) - Personal blog & website.
- [slightlysharpe.com](https://slightlysharpe.com) - [Tincre's](https://tincre.com) main company blog
- [blog.b00st.com](https://blog.b00st.com) - [b00st.com's](https://b00st.com) main music promotion blog
- [astrosaurus.me](https://astrosaurus.me/) - Ephraim Atta-Duncan's Personal Blog
- [dhanrajsp.me](https://dhanrajsp.me/) - Dhanraj's personal site and blog.
- [blog.r00ks.io](https://blog.r00ks.io/) - Austin Rooks's personal blog ([source code](https://github.com/Austionian/blog.r00ks)).
- [honghong.me](https://honghong.me) - Tszhong's personal website ([source code](https://github.com/tszhong0411/home))
- [marceloformentao.dev](https://marceloformentao.dev) - Marcelo Formentão personal website ([source code](https://github.com/marceloavf/marceloformentao.dev)).
- [abiraja.com](https://www.abiraja.com/) - with a [runnable JS code snippet component!](https://www.abiraja.com/blog/querying-solana-blockchain)
- [bpiggin.com](https://www.bpiggin.com) - Ben Piggin's personal blog
- [maqib.cn](https://maqib.cn) - A blog of Chinese front-end developers 狂奔小马的博客 ([源码](https://github.com/maqi1520/nextjs-tailwind-blog))
- [ambilena.com](https://ambilena.com/) - Electronic Music Blog & imprint for upcoming musicians.
- [0xchai.io](https://0xchai.io) - Chai's personal blog
- [techipedia](https://techipedia.vercel.app) - Simple blogging progressive web app with custom installation button and top progress bar
- [reubence.com](https://reubence.com) - Reuben Rapose's Digital Garden
- [axolo.co/blog](https://axolo.co/blog) - Engineering management news & axolo.co updates (with image preview for article in the home page)
- [musing.vercel.app](https://musing.vercel.app/) - Parth Desai's personal blog ([source code](https://github.com/pycoder2000/blog))
- [onyourmental.com](https://www.onyourmental.com/) - [Curtis Warcup's](https://github.com/Cwarcup) website for the On Your Mental Podcast ([source code](https://github.com/Cwarcup/on-your-mental))
- [cwarcup.com](https://www.cwarcup.com/) - Curtis Warcup's personal website and blog ([source code](https://github.com/Cwarcup/personal-blog)).
- [ondiek-elijah.me](https://www.ondiek-elijah.me/) - Ondiek Elijah's website and blog ([source code](https://github.com/Dev-Elie/ondiek-elijah)).
- [jmalvarez.dev](https://www.jmalvarez.dev/) - José Miguel Álvarez's personal blog ([source code](https://github.com/josemiguel-alvarez/nextjs-blog))
- [justingosses.com](https://justingosses.com/) - Justin Gosses's personal website and blog ([source code](https://github.com/JustinGOSSES/justingosses-website))
- [https://bitoflearning-9a57.fly.dev/](https://bitoflearning-9a57.fly.dev/) - Sangeet Agarwal's personal blog, replatformed to [remix](https://remix.run/remix) using the [indie stack](https://github.com/remix-run/indie-stack) ([source code](https://github.com/SangeetAgarwal/bitoflearning))
- [raphaelchelly.com](https://www.raphaelchelly.com/) - Raphaël Chelly's personal website and blog ([source code](https://github.com/raphaelchelly/raph_www))
- [kaveh.page](https://kaveh.page) - Kaveh Tehrani's personal blog. Added tags directory, profile card, time-to-read on posts directory, etc.

## Motivation

I wanted to port my existing blog to Nextjs and Tailwind CSS but there was no easy out of the box template to use so I decided to create one. Design is adapted from [Tailwindlabs blog](https://github.com/tailwindlabs/blog.tailwindcss.com).

I wanted it to be nearly as feature-rich as popular blogging templates like [beautiful-jekyll](https://github.com/daattali/beautiful-jekyll) and [Hugo Academic](https://github.com/wowchemy/wowchemy-hugo-modules) but with the best of React's ecosystem and current web development's best practices.

## Features

- Next.js with Typescript
- [Contentlayer](https://www.contentlayer.dev/) to manage content logic
- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/230805_BiDcBQ_4H7)
- Lightweight, 85kB first load JS
- Mobile-friendly view
- Light and dark theme
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- Integration with [pliny](https://github.com/timlrx/pliny) that provides:
  - Multiple analytics options including [Umami](https://umami.is/), [Plausible](https://plausible.io/), [Simple Analytics](https://simpleanalytics.com/), Posthog and Google Analytics
  - Comments via [Giscus](https://github.com/laymonage/giscus), [Utterances](https://github.com/utterance/utterances) or Disqus
  - Newsletter API and component with support for Mailchimp, Buttondown, Convertkit, Klaviyo, Revue, and Emailoctopus
  - Command palette search with [Kbar](https://github.com/timc1/kbar) or Algolia
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Math display supported via [KaTeX](https://katex.org/)
- Citation and bibliography support via [rehype-citation](https://github.com/timlrx/rehype-citation)
- Automatic image optimization via [next/image](https://nextjs.org/docs/basic-features/image-optimization)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- 3 different blog layouts
- 2 different blog listing layouts
- Support for nested routing of blog posts
- Projects page
- Preconfigured security headers
- SEO friendly with RSS feed, sitemaps and more!

## Sample posts

- [A markdown guide](https://tailwind-nextjs-starter-blog.vercel.app/blog/github-markdown-guide)
- [Learn more about images in Next.js](https://tailwind-nextjs-starter-blog.vercel.app/blog/guide-to-using-images-in-nextjs)
- [A tour of math typesetting](https://tailwind-nextjs-starter-blog.vercel.app/blog/deriving-ols-estimator)
- [Simple MDX image grid](https://tailwind-nextjs-starter-blog.vercel.app/blog/pictures-of-canada)
- [Example of long prose](https://tailwind-nextjs-starter-blog.vercel.app/blog/the-time-machine)
- [Example of Nested Route Post](https://tailwind-nextjs-starter-blog.vercel.app/blog/nested-route/introducing-multi-part-posts-with-nested-routing)

## Support

Using the template? Support this effort by giving a star on GitHub, sharing your own blog and giving a shoutout on Twitter or becoming a project [sponsor](https://github.com/sponsors/timlrx).

## Licence

[MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/main/LICENSE) © [Timothy Lin](https://www.timlrx.com)
