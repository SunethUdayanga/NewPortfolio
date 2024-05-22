import { Backend_skill, Frontend_skill, Full_stack, Skill_data } from '@/constants'
import React from 'react'
import SkillData from '../sub/SkillData'
import SkillText from '../sub/SkillText'

export default function Skills() {
  return (
    <div>

      <section id='skills' className='flex flex-col bg-gray-900 rounded-3xl items-center justify-center gap-5 h-full relative overflow-hidden py-20 px-4' style={{ transform: 'scale(0.9)' }}>
        <div>
          <SkillText />
        </div>

        <div className="flex flex-row flex-wrap justify-center mx-auto gap-5 mt-2 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillData
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))},
        </div>
        <div className="flex flex-row flex-wrap justify-center mx-auto gap-5 mt-2 items-center">
          {Backend_skill.map((image, index) => (
            <SkillData
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))},
        </div>
        <div className="flex flex-row flex-wrap justify-center mx-auto gap-5 mt-2 items-center">
          {Skill_data.map((image, index) => (
            <SkillData
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-center mx-auto gap-5 mt-2 items-center">
          {Full_stack.map((image, index) => (
            <SkillData
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
