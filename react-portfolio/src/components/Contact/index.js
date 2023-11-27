import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Limpia el timeout cuando el componente se desmonta o cuando el efecto se vuelve a ejecutar
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()

    const subject = form.current.subject.value
    const message = form.current.message.value
    const name = form.current.name.value
    const email = form.current.email.value

    try {
      await emailjs.send(
        'service_e79fbhc',
        'template_lv1sq2t',
        {
          subject: subject,
          message: message,
          name: name,
          email: email,
        },
        'aSvlRNENaQpuh-6PU'
      )
      alert('Message successfully sent!')
      window.location.reload(false)
    } catch (error) {
      alert('Failed to send the message, please try again')
      console.error('Error sending the message:', error)
    }
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            if you have any requests or questions, don't hesitate to contact me
            using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Franco Lepratti GIlles,
          <br />
          Uruguay,
          <br />
          Florida 1275 <br />
          Montevideo <br />
          <br />
          <span>francolepratti@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-34.907889, -56.199216]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-34.907889, -56.199216]}>
              <Popup>i live here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
