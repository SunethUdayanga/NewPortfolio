import { Frontend_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillData from '../sub/SkillData'

export default function Skills() {
  return (
    <div>
        <section id='skills' className='flex flex-col bg-gray-900 items-center justify-center gap-3 h-full relative overflow-hidden py-20' style={{transform:'scale(0.9)'}}>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
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
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
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
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
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
        </section>
    </div>
  )
}
