import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['r', 'a', 'n', 'c', 'o']
  const jobArray = [
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    'i',
    'n',
    'g',
    ' ',
    's',
    't',
    'u',
    'd',
    'e',
    'n',
    't',
    '.',
  ]

  //da error88

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup function
    return () => clearTimeout(timerId)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>`m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <h2>Frontend/Backend/FullStack</h2>
        <Link to="/contact" className="flat-buttom">
          CONTACT ME{' '}
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
