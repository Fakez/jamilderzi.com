
const Link = ({ text, href }: {text: string, href: string}) => {
    return (
      <a className="block text-base underline font-normal" href={href}>{text}</a>
    )
}
export default Link;