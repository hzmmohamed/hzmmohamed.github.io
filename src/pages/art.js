// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { aboutLinks } from './about.module.css'
// Step 2: Define your component
const ArtPage = () => {
  return (
    <Layout pageTitle="hzmmohamed - about">
      <div margin>
        So one day back in 2015, I thought to try to learn guitar, and it
        adorned my days. A year later, I decided to explore my singing voice,
        and life was never the same again.
        <br />
        <h3>The Bends</h3>I performed live with{' '}
        <a className={aboutLinks} href="https://www.facebook.com/TheBendsEgy">
          The Bends
        </a>
        , a Radiohead tribute band, for two years. This is an early performance
        from those days.
        <br />
        <br />
        <iframe
          style={{ width: '560px', margin: 'auto', display: 'block' }}
          height="315"
          src="https://www.youtube.com/embed/jw5nzvry34A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <br />
        <h3>Lone Friend</h3>
        Lone Friend is my current project.
        <iframe
          style={{ display: 'block', width: '80%', margin: '10px auto' }}
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344186365&color=%23b68c71&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily:
              'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
            fontWeight: '100',
          }}
        >
          <a
            href="https://soundcloud.com/mylonefriend"
            title="Lone Friend"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Lone Friend
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/mylonefriend/gently"
            title="Gently"
            target="_blank"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Gently
          </a>
        </div>
      </div>
    </Layout>
  )
}
// Step 3: Export your component
export default ArtPage
