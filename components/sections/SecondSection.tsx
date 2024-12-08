'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function SecondSection() {
  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* 背景图片 */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.5,
          ease: 'easeOut',
        }}
      >
        <div 
          className="absolute inset-0 bg-[url('/iphone-15-hero.jpg')] bg-cover bg-center"
          style={{ 
            backgroundPosition: '50% 50%',
          }}
        />
      </motion.div>

      {/* 内容 */}
      <div className="relative z-10 flex flex-col items-center min-h-screen text-center">
        <motion.div
          className="mt-20 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* 标题 */}
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            iPhone 15
          </h2>
          
          {/* 副标题 */}
          <h3 className="text-2xl md:text-3xl font-medium">
            非同凡响
          </h3>

          {/* 价格信息 */}
          <p className="text-xl">
            ¥5999 起
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
              className="text-blue-600 hover:underline text-lg flex items-center group"
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

        {/* 产品特性列表 */}
        <motion.div 
          className="absolute bottom-20 w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "6.1″ 或 6.7″", desc: "超视网膜 XDR 显示屏" },
              { title: "48MP", desc: "主摄像头" },
              { title: "USB-C", desc: "高速数据传输" },
              { title: "全天候", desc: "电池续航" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h4 className="text-2xl md:text-3xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 