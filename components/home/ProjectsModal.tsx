const ProjectsModal = ({ imgPath, modalIsOpen, setModalIsOpen }:
    {
      imgPath: string,
      modalIsOpen: boolean,
      setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
   return (
     <div className={modalIsOpen ? 'visible' : 'hidden'}>
       <div onClick={()=> setModalIsOpen(false)} className='fixed top-0 bottom-0 left-0 bg-black min-h-full min-w-full opacity-70 cursor-pointer'></div>
       <div className='centered-modal fixed w-11/12 h-fit top-1/2 left-1/2 xl:w-9/12'>
           <img className='w-full h-full skeleton' src={imgPath}></img>
       </div>
     </div>
   )
}

export default ProjectsModal;