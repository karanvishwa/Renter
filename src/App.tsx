import './App.css'
import { LowerBar } from './components/LowerBar'
import { TopBar } from './components/TopBar'
import { useState } from 'react'
import { Earth } from './components/earth/Earth'
import { ContactsModal } from './components/Modal/ContactsModal'

import { VideoModal } from './components/Modal/VideoModal.tsx'
import { FormModal } from './components/Modal/FormModal.tsx'


function App() {

  const [page, setPage] = useState("earth")

  const [modal, setModal] = useState(false)

  const [formModal, setFormModal] = useState(false)

  const [videoModal, setVideoModal] = useState("")

  function renderComponent() {

    switch (page) {
      case "earth":
        return <Earth setFormModal={setFormModal} setVideoModal={setVideoModal} />
      case "pipes":
        return <div></div>
      case "house":
        return <div></div>
    }


  }
  return (
    <>
      <div className='nav-bar'>
        <TopBar setModal={setModal} />
        <LowerBar setPage={setPage} />
      </div>

      {renderComponent()}

      {modal && <ContactsModal setModal={setModal} />}

      {videoModal != "" && <VideoModal videoModal={videoModal} setVideoModal={setVideoModal} />}

      {formModal && <FormModal setFormModal={setFormModal}></FormModal>}

    </>
  )
}

export default App
