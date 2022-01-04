
const Link = ({ text, href }: {text: string, href: string}) => {
    return (
      <a className="block my-5 text-base underline font-normal" href={href}>{text}</a>
    )
}
export default Link;