import cn from 'classnames'
import { MotionAnimate } from 'react-motion-animate'
import { RichText } from 'prismic-reactjs';
import styles from './index.module.scss'

export default function About({description, tech}) {
    return (
        <>
            <MotionAnimate animation="scrollFadeOut" scrollPositions={[0.8, 1.2]}>
                <h1 className={cn('hide')}>Samantha Combs | Front End Developer</h1>
                {description && (
                    <section className={styles.about}>
                        <RichText render={description} />
                    </section>
                )}
            </MotionAnimate>
            
            <MotionAnimate>
            {tech && (<section className={styles.tech}>
                <h2>Tech Stack</h2>
                <RichText render={tech} />
            </section>)}
            </MotionAnimate>
        </>
    )
  }