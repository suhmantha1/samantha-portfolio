import cn from 'classnames'
import Image from 'next/image'
import { MotionAnimate } from 'react-motion-animate'
import styles from './index.module.scss'
import Arrow from '../../public/images/arrow.svg'

function ProjectInner({title, image, in_progress}) {
    return <>
        <div className={styles.image} aria-hidden="true">
            {image?.url && 
                <Image src={image.url}alt={image.alt || title} layout='fill' objectFit="cover" />
            }
            {in_progress && <div className={styles.progressOverlay}><span>Coming Soon</span></div>}
        </div>
        <div className={styles.titleWrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.arrow}>
                <Arrow />
            </div>
        </div>
    </>
}

export default function Project({project, inactive, onProjectHover}) {
    const {title, image, url, in_progress} = project || {}
    
    return (
        <MotionAnimate>
            {in_progress ? (
                <div className={cn(styles.wrapper, styles.progress)}>
                    <ProjectInner title={title} image={image} in_progress={true} />
                </div>
            ) : ( 
                <a href={url} target="_blank" rel="noopener noreferrer" className={cn(styles.wrapper, {[styles.progress]: in_progress, [styles.inactive]: inactive})}
                onMouseEnter={() => onProjectHover(!in_progress ? true : false)}
                onMouseLeave={() => onProjectHover(false)}>
                    <ProjectInner title={title} image={image} />
                </a>
            )}

        </MotionAnimate>
    )
  }