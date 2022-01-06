
const ProjectLink = ({ text, description, imgPath, setModalIsOpen, setCurrentImgPath }:
   {
      text: string,
      description: string,
      imgPath: string,
      setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
      setCurrentImgPath: React.Dispatch<React.SetStateAction<string>>
   }) => {

    const handleProjectLinkClick = () => {
      setCurrentImgPath(imgPath);
      setModalIsOpen(true);
    }

    return (
      <div className="my-5">
        <span 
          className="text-base font-normal underline cursor-pointer"
          onClick={() => handleProjectLinkClick()}
        >
          {text}
        </span>
        <span>: </span>
        <span className="text-sm"
        dangerouslySetInnerHTML={{__html: description}}
        ></span>
      </div>
    )
}

export default ProjectLink;