'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import Link from 'next/link'
import { Button } from './ui/button'

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
  category: Category
  handleOpen: () => void
  close: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  close,
  isOpen,
}: NavItemProps) => {
  return (
    <div className=''>
      <div className=''>
      {category.featured.map((item) => (
        <Link    key={item.name} href={item.href} >
        <Button
        
          className=''
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}>
          {category.label}
          
        </Button>
        </Link> 
         ))}
      </div>

    
    </div>
  )
}

export default NavItem
