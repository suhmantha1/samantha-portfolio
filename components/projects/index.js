import { useState } from 'react'
import { MotionAnimate } from 'react-motion-animate'
import styles from './index.module.scss'
import Project from '../project'

export default function Projects({projects}) {
    const [hoverItem, setHoverItem] = useState(null)

    return (
        <section className={styles.container}>
            <MotionAnimate>
                <h2 className={styles.headline}>Projects I've Worked On</h2>
            </MotionAnimate>

            {projects?.length > 0 && (<ul className={styles.list}>
                {projects.map((project, index) => {
                    return <li key={`project-${index}`} className={styles.project}>
                        <Project project={project} inactive={hoverItem && hoverItem !== index + 1} onProjectHover={(isActive) => {setHoverItem(isActive ? index + 1 : null)}}/>
                    </li>
                })}
            </ul>)}
        </section>
    )
  }