import { useState } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import Github from '../../public/images/github.svg'
import Linkedin from '../../public/images/linkedin.svg'
import Email from '../../public/images/email.svg'

export default function Nav({resume}) {
    const [hoverItem, setHoverItem] = useState(null)

    const navItems = [
        {title: 'Resume', href: resume?.url || "/resume.pdf"},
        {title: 'Github', href:"https://github.com/suhmantha1", svg: <Github />},
        {title: 'Linkedin', href:"https://www.linkedin.com/in/samantha-combs-87a11855/", svg: <Linkedin />},
        {title: 'Email', href:"mailto:suhmantha1@gmail.com", svg: <Email />}
    ]

    return (
        <nav className={cn(styles.nav, 'container')}>
            {navItems.map((item, index) => {
                const {title, href, svg} = item
                return <a key={`nav-${index}`} href={href} target="_blank" rel="noopener noreferrer" aria-label={title}
                onMouseEnter={() => setHoverItem(index + 1)}
                onMouseLeave={() => setHoverItem(null)}
                className={cn({[styles.inactive]: hoverItem && hoverItem !== index + 1})}>
                    {svg ? (<>{svg}</>) : (<>{title}</>)}
                    </a>
            })}
        </nav>
    )
  }