import { ReactNode } from "react"
import { ArrowUpRight } from "../ui/icons/ArrowUpRight"
import { Github } from "../ui/icons/Github"
import { TechStackList } from "../TechStack/TechStackList"

type PropTypes = {
    
    title:string,
    desc:ReactNode,
    githubLink:string,
    liveLink:string,
    techStack:Array<string>
}

export const ProjectCard = ({desc,title,githubLink,liveLink,techStack}:PropTypes) => {
  return (
    <div className="max-md:flex-col flex gap-6 px-6 max-sm:px-0 py-3 rounded-md max-sm:hover:bg-inherit border border-gray-300 hover:border-blue-500 hover:shadow-lg p-4 duration-300 hover:cursor-pointer transition-all">

        <div className="flex flex-col gap-y-3">

            <div className="flex items-center gap-x-4">
                <h3 className="text-text-primary font-semibold text-lg">{title}</h3>
                <div className="flex items-center gap-x-3">
                  <a target="_blank" href={githubLink}><Github size={30}/></a>
                  <a target="_blank" href={liveLink}><ArrowUpRight size={25}/></a>
                </div>
            </div>

            <p>{desc}</p>

          <TechStackList techStack={techStack}/>
        </div>

    </div>
  )
}
