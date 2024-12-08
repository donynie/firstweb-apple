'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type NavItem = {
  label: string;
  href: string;
  subItems?: {
    title?: string;
    columns: {
      title?: string;
      items: { label: string; href: string; }[];
    }[];
  };
}

const navItems: NavItem[] = [
  { 
    label: '商店', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '选购',
          items: [
            { label: '选购新品', href: '#' },
            { label: 'Mac', href: '#' },
            { label: 'iPad', href: '#' },
            { label: 'iPhone', href: '#' },
            { label: 'Apple Watch', href: '#' },
            { label: 'Apple Vision Pro', href: '#' },
            { label: '配件', href: '#' },
          ]
        },
        {
          title: '快速链接',
          items: [
            { label: '查找零售店', href: '#' },
            { label: '订单状态', href: '#' },
            { label: '分期付款', href: '#' },
          ]
        },
        {
          title: '专属商店',
          items: [
            { label: '教育商店', href: '#' },
            { label: '商务商店', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: 'Mac', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索 Mac',
          items: [
            { label: '探索所有 Mac', href: '#' },
            { label: 'MacBook Air', href: '#' },
            { label: 'MacBook Pro', href: '#' },
            { label: 'iMac', href: '#' },
            { label: 'Mac mini', href: '#' },
            { label: 'Mac Studio', href: '#' },
            { label: 'Mac Pro', href: '#' },
          ]
        },
        {
          title: '选购 Mac',
          items: [
            { label: '选购 Mac', href: '#' },
            { label: 'Mac 配件', href: '#' },
            { label: 'Apple Trade In 换购计划', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: 'iPad', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索 iPad',
          items: [
            { label: '探索所有 iPad', href: '#' },
            { label: 'iPad Pro', href: '#' },
            { label: 'iPad Air', href: '#' },
            { label: 'iPad', href: '#' },
            { label: 'iPad mini', href: '#' },
          ]
        },
        {
          title: '选��� iPad',
          items: [
            { label: '选购 iPad', href: '#' },
            { label: 'iPad 配件', href: '#' },
            { label: 'Apple Trade In 换购计划', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: 'iPhone', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索 iPhone',
          items: [
            { label: '探索所有 iPhone', href: '#' },
            { label: 'iPhone 15 Pro', href: '#' },
            { label: 'iPhone 15', href: '#' },
            { label: 'iPhone 14', href: '#' },
            { label: 'iPhone 13', href: '#' },
            { label: 'iPhone SE', href: '#' },
          ]
        },
        {
          title: '选购 iPhone',
          items: [
            { label: '选购 iPhone', href: '#' },
            { label: 'iPhone 配件', href: '#' },
            { label: 'Apple Trade In 换购计划', href: '#' },
            { label: 'iPhone 支付方式', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: 'Watch', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索 Watch',
          items: [
            { label: '探索所有 Apple Watch', href: '#' },
            { label: 'Apple Watch Series 9', href: '#' },
            { label: 'Apple Watch Ultra 2', href: '#' },
            { label: 'Apple Watch SE', href: '#' },
          ]
        },
        {
          title: '选购 Watch',
          items: [
            { label: '选购 Apple Watch', href: '#' },
            { label: 'Apple Watch 表带', href: '#' },
            { label: 'Apple Watch 配件', href: '#' },
            { label: 'Apple Trade In 换购计划', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: 'Vision', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索 Vision',
          items: [
            { label: '探索 Apple Vision Pro', href: '#' },
            { label: 'Vision Pro 概览', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: 'AirPods', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索 AirPods',
          items: [
            { label: '探索所有 AirPods', href: '#' },
            { label: 'AirPods Pro 第二代', href: '#' },
            { label: 'AirPods 第三代', href: '#' },
            { label: 'AirPods 第二代', href: '#' },
            { label: 'AirPods Max', href: '#' },
          ]
        },
        {
          title: '购买',
          items: [
            { label: '选购 AirPods', href: '#' },
            { label: 'AirPods 配件', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: '家居', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索家居',
          items: [
            { label: '探索智能家居', href: '#' },
            { label: 'HomePod', href: '#' },
            { label: 'Apple TV 4K', href: '#' },
          ]
        },
        {
          title: '选购',
          items: [
            { label: '选购 HomePod', href: '#' },
            { label: '选购 Apple TV 4K', href: '#' },
            { label: '智能家居配件', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: '娱乐', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '探索娱乐',
          items: [
            { label: 'Apple One', href: '#' },
            { label: 'Apple TV+', href: '#' },
            { label: 'Apple Music', href: '#' },
            { label: 'Apple Arcade', href: '#' },
            { label: 'Apple Podcasts', href: '#' },
            { label: 'Apple Books', href: '#' },
            { label: 'App Store', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: '配件', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '选购配件',
          items: [
            { label: '所有配件', href: '#' },
            { label: 'Mac 配件', href: '#' },
            { label: 'iPad 配件', href: '#' },
            { label: 'iPhone 配件', href: '#' },
            { label: 'Apple Watch 表带', href: '#' },
            { label: 'AirPods 配件', href: '#' },
          ]
        }
      ]
    }
  },
  { 
    label: '技术支持', 
    href: '#',
    subItems: {
      columns: [
        {
          title: '获取支持',
          items: [
            { label: 'iPhone', href: '#' },
            { label: 'Mac', href: '#' },
            { label: 'iPad', href: '#' },
            { label: 'Watch', href: '#' },
            { label: 'AirPods', href: '#' },
            { label: '音乐', href: '#' },
          ]
        },
        {
          title: '服务专区',
          items: [
            { label: 'AppleCare+', href: '#' },
            { label: 'Apple ID 与密码', href: '#' },
            { label: '账单与订阅', href: '#' },
            { label: '查找', href: '#' },
          ]
        }
      ]
    }
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div 
        onMouseLeave={() => setActiveMenu(null)}
        className="relative"
      >
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/95'
        }`}>
          <div className="max-w-[1024px] mx-auto px-4">
            <div className="flex items-center justify-between h-12 md:h-11">
              {/* Logo */}
              <Link href="/" className="text-white hover:opacity-80">
                <svg height="44" viewBox="0 0 14 44" width="14" className="h-11 w-4">
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" fill="#fff"/>
                </svg>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveMenu(item.label)}
                  >
                    <Link 
                      href={item.href}
                      className="text-sm text-white hover:opacity-80 py-2"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Search and Cart Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-white hover:opacity-80">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <button className="text-white hover:opacity-80">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Full-width Dropdown Menu with Animation */}
          <AnimatePresence>
            {activeMenu && navItems.find(item => item.label === activeMenu)?.subItems && (
              <>
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute left-0 w-full bg-black/95 backdrop-blur-md overflow-hidden"
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
                    className="max-w-[1024px] mx-auto px-4 py-8"
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {navItems.find(item => item.label === activeMenu)?.subItems?.columns.map((column, idx) => (
                        <div key={idx} className="space-y-4">
                          {column.title && (
                            <h3 className="text-white text-sm font-medium">
                              {column.title}
                            </h3>
                          )}
                          <div className="space-y-2">
                            {column.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                className="block text-white/80 hover:text-white text-sm"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Animated Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  style={{ top: '44px' }}
                />
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  )
} 