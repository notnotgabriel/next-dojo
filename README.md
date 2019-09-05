# next-dojo

next.js + redux + redux-saga + react-testing-library + cypress

## Step by step guide

Run the commands
`npm init -y`
`npm install --save react react-dom next`
`mkdir pages`

add to package.json

```json
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

### Pages and Components

- [ ] Create a page at pages folder
- [ ] Add a new page and links using `import Link from 'next/link';`

- [ ] Create a shared component. It can be Header.js and Layout.js

- [ ] Import your shared components into pages.

### Dynamic pages

- [ ] Create a PostLink component receiving data via query strings like:

```js
<Link href={`/post?title=${props.title}`}>
  <a>{props.title}</a>
</Link>
```

- [ ] Create a post page and get the title from query strings.
- [ ] Create `pages/p/[id].js` file
- [ ] Change PostLink component

```js
const PostLink = props => (
  <li>
    <Link href='/p/[id]' as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
```

### Fetching data

Install `npm install --save isomorphic-unfetch`
Using `getInitialProps` fetching data from https://api.tvmaze.com/search/shows?q=batman
and return a object with the shows list

Now fetch data from a show in the `[id].js` page https://api.tvmaze.com/shows/${id}
