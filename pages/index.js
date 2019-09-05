import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';

import Layout from './components/Layout';

const Index = ({ shows, showsStore }) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link href='/p/[id]' as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`, data);

  return {
    shows: data.map(entry => entry.show)
  };
};

const mapStateToProps = state => {
  const { shows } = state;
  return { showsStore: shows.list };
};

export default connect(mapStateToProps)(Index);
