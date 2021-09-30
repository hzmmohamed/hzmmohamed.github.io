// Step 1: Import React
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import { aboutLinks, quote } from './about.module.css'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="hzmmohamed - about">
      <div>
        <div
          style={{
            width: '75%',
            display: 'flex',
            margin: 'auto',
            flexDirection: 'column',
          }}
        >
          <StaticImage
            src="../images/portrait.jpg"
            alt="portrait"
            placeholder="blurred"
            // aspectRatio={12 / 4}
            quality="95"
            // style={{}}
            imgStyle={{ borderRadius: '5px', align: 'middle' }}
          ></StaticImage>
          <span
            style={{
              textAlign: 'right',
              fontSize: '12px',
              color: '#333333',
              margin: '0px',
            }}
          >
            Credit:{' '}
            <a href="https://www.instagram.com/ahmeda.hosny/">Ahmed Hosny</a>
          </span>
        </div>
      </div>
      <br />
      <p className={quote}>
        "how rare and beautiful it truly is that we exist" —{' '}
        <a
          className={aboutLinks}
          href="https://www.youtube.com/watch?v=dzNvk80XY9s"
        >
          Sleeping At Last
        </a>
      </p>

      <p>
        Peace :) This is Hazem Fahmi, software engineer and data-driven public
        policy devotee, with an insatiable passion for:
        <ul>
          <li>gardens</li>
          <li>chasing curiosity down rabbitholes</li>
          <li>ambient folk</li>
          <li>
            ranting about how climate change is not a science problem (you
            guessed it, it's economic and political)
          </li>
        </ul>
        I love open source, and, even more now, open data and I hate
        irreproducible science. I believe in thoughtful code, and sharpening
        your tools before working.
        <br />
        <br />
        During my computer engineering degree, I was disillusioned by rampant{' '}
        <a
          className={aboutLinks}
          href="https://www.economicsobservatory.com/are-we-in-the-middle-of-a-tech-bubble"
        >
          tech bubbles
        </a>{' '}
        and the{' '}
        <a
          className={aboutLinks}
          href="https://billmoyers.com/2014/09/03/5-crucial-lessons-for-the-left-from-naomi-kleins-new-book/"
        >
          techno-fix future narrative
        </a>{' '}
        for all pressing global crises, climate change being one of them. My
        vision is to build a career in utilizing my computing skills in solving
        real-world problems in a world without infinite growth.
        <br />
        <br />
        I’ve found the field in which to achieve just that—{' '}
        <i>geospatial data science</i>, with its plethora of applications,
        especially data-driven public policy design.
        <br />
        <br />
        I’m currently (late 2021) collaborating on an{' '}
        <a
          className={aboutLinks}
          href="https://omdena.com/projects/drone-data/"
        >
          Omdena
        </a>{' '}
        project, diagnosing plant health using multi-spectral drone data.
        <br />
        <br />
        When not coding, I'm most likely out in{' '}
        <a className={aboutLinks} href="http://">
          my most beloved garden
        </a>
        ,{' '}
        <a
          className={aboutLinks}
          href="https://www.goodreads.com/user/show/101447334-hazem-fahmi"
        >
          reading
        </a>{' '}
        on post-capitalism economics, building some DIY synth, or losing sleep
        to researching a marginal bug in my home server.
        <br />
        <br />I also sing and write songs. I played with The Bends for two
        years. Now it's just me, for now, in my spare time, making sounds as{' '}
        <a
          className={aboutLinks}
          href="https://soundcloud.com/mylonefriend/tracks"
        >
          Lone Friend
        </a>
        . The Tallest Man On Earth and S. Carey works are my desert island
        music.
        <br />
        <br />
        <span
          style={{
            textDecoration: 'underline',
            textDecorationThickness: '7px',
            textDecorationColor: 'lightblue',
          }}
        >
          You can find my CV{' '}
        </span>
        <a className={aboutLinks} href="hazem-fahmi-cv.pdf">
          here
        </a>
        .
      </p>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage
