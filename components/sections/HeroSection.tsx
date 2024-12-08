'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-[44px] bg-black text-white overflow-hidden">
      {/* 背景图片 - 添加缩放效果 */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.5,
          ease: 'easeOut',
          scale: {
            duration: 2,
            ease: 'easeOut'
          }
        }}
      >
        <div 
          className="absolute inset-0 bg-[url('/iphone-15-pro-hero.jpg')] bg-cover bg-center"
          style={{ 
            backgroundPosition: '50% 50%',
          }}
        />
        {/* 静态渐变遮罩 */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"
        />
      </motion.div>

      {/* 内容 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-44px)] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          {/* 标题 */}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
            iPhone 15 Pro
          </h1>
          
          {/* 副标题 */}
          <h2 className="text-2xl md:text-3xl font-medium text-gray-100 drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
            钛金属。超强。超 Pro。
          </h2>

          {/* 价格信息 */}
          <p className="text-xl text-gray-100 drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
            ¥7999 起
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 pt-4">
            <Link 
              href="#"
              className="text-white bg-blue-600/90 backdrop-blur-sm rounded-full px-8 py-3 text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              立即购买
            </Link>
            <Link 
              href="#"
              className="text-blue-400 hover:text-blue-300 hover:underline text-lg flex items-center group drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]"
            >
              了解更多
              <svg 
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 向下滚动指示器 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <svg 
          className="w-6 h-6 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  )
} 