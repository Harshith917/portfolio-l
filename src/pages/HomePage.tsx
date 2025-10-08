import { ProjectList } from "../components/Project/ProjectList"
import { SkillList } from "../components/Skill/SkillList"
import { Intro } from "../components/intro/Intro"
import { Summary } from "../components/intro/Summary"
import { Navbar } from "../components/navigation/Navbar"
import { Socials } from "../components/social/Socials"
import { SKILLS } from "../constants/skills"

export const HomePage = () => {
  return (
    <div className="w-full h-full flex gap-10 max-lg:gap-28 justify-center pt-24 max-2xl:px-20 max-lg:flex-col max-lg:justify-normal max-lg:px-14 max-md:px-4 max-sm:px-4 max-md:pt-12">

      {/* intro and social */}
      <div className="text-white w-[30rem] h-screen relative">

        <div className="fixed max-lg:static gap-y-8 flex flex-col">
          <Intro
            name="Harshith Basa"
            profile="Full Stack Developer"
            shortDesc="Focused on making solutions simple, useful, and inclusive."
          />

          <div className="hidden max-lg:block">
            <Socials />
          </div>

          <div className="mt-16 max-lg:mt-5">
            <Navbar />
          </div>
        </div>


        <div className="absolute bottom-60 max-lg:hidden">
          <div className="fixed max-lg:relative">
            <Socials />
          </div>
        </div>
      </div>

      {/* sections */}
      <div className="w-[40rem] max-xl:w-fit text-white flex flex-col gap-y-20">

        {/* about section */}
        <section id="about" className="gap-y-6 flex flex-col scroll-m-24 max-lg:scroll-m-12">
          <h2 className="text-white font-bold uppercase tracking-wide border-b-2 border-text-primary w-fit pb-1">
            About
          </h2>

          <div className="gap-y-6 flex text-white flex-col pl-6 max-sm:pl-0">
            <Summary summary={<p>I’m curious about how things work, which drew me to coding.
              I enjoy creating apps and websites that are simple and easy to use.
              I focus on making them secure, reliable, and useful for people.
              Turning ideas into practical solutions is what drives me.</p>} />
            <SkillList skills={SKILLS} />
          </div>
        </section>


        {/* education section */}
        <section id="education" className="gap-y-6 flex flex-col scroll-m-12">
          <h2 className="text-white font-bold uppercase tracking-wide border-b-2 border-text-primary w-fit pb-1">
            Education
          </h2>

          <div className="gap-y-4 flex flex-col pl-6 max-sm:pl-0">

            {/* Example 1 */}
            <div className="flex flex-col">
              <h5 className="font-semibold text-white">Bachelor of Technology in Computer Science<span className="ml-5">2021 - 2025</span></h5>
              <p className="text-gray-400 text-sm">Sreyas Institute of Engineering and Technology</p>
              <p className="text-gray-300 text-sm">Focused on software development and web technologies.</p>
            </div>

            {/* Example 2 */}
            <div className="flex flex-col">
              <h5 className="font-semibold text-white">Intermediate (Class 12) <span className="ml-5">2019 - 2021</span></h5>
              <p className="text-gray-400 text-sm">Narayana Junior College </p>

            </div>

            {/* Example 3 (optional training or certifications) */}
            <div className="flex flex-col">
              <h5 className="font-semibold text-white">School<span className="ml-5">2018-19</span></h5>
              <p className="text-gray-400 text-sm">Wisdom Spaes School </p>
            </div>

          </div>
        </section>



        {/* project section */}
        <section id="projects" className="gap-y-6 flex flex-col scroll-m-12">
          <h2 className="text-white font-bold uppercase tracking-wide border-b-2 border-text-primary w-fit pb-1">
            Projects
          </h2>
          <ProjectList />
        </section>



      </div>

    </div>
  )
}
