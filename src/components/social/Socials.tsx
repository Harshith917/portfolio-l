import { Github } from "../ui/icons/Github"
import { Linkedin } from "../ui/icons/Linkedin"
import { Twitter } from "../ui/icons/Twitter"
import { VercelIcon } from "../ui/icons/VercelIcon"

export const Socials = () => {
  return (
    <div className="flex gap-x-4 items-center">

        <a target="_blank" href="https://github.com/Harshith917">
          <Github size={30}/>
        </a>
        <a target="_blank" href="www.linkedin.com/in/harshithbasa/">
          <Linkedin size={30}/>
        </a>
        <a target="_blank" href="">
          <Twitter size={25}/>
        </a>
        <a target="_blank" href="https://vercel.com/harshith917s-projects">
          <VercelIcon size={25}/>
        </a>
    </div>
  )
}
