export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4 z-10">
        <h1 className="text-5xl md:text-6xl font-semibold">iPhone 15 Pro</h1>
        <h2 className="text-xl md:text-2xl">钛金属。超强。超Pro。</h2>
        <div className="space-x-6 mt-4">
          <a href="#" className="text-blue-500 hover:underline text-xl">
            了解更多 &gt;
          </a>
          <a href="#" className="text-blue-500 hover:underline text-xl">
            购买 &gt;
          </a>
        </div>
      </div>
      {/* 背景图片 */}
      <div 
        className="absolute inset-0 bg-[url('/hero-iphone.jpg')] bg-cover bg-center"
        style={{ opacity: 0.8 }}
      />
    </section>
  )
} 