import {getTranslations, setRequestLocale} from 'next-intl/server';

import LanguageSwitcher from '@/components/LanguageSwitcher';

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations('Navigation');
  const tHero = await getTranslations('Hero');
  const tServices = await getTranslations('Services');
  const tAbout = await getTranslations('About');
  const tContact = await getTranslations('Contact');

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-6 lg:px-12 border-b border-brand-green/20">
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-3 transition-transform hover:scale-105 group">
            <span className="font-pixel text-brand-green text-3xl md:text-4xl mt-1 group-hover:animate-pulse">+</span>
            <h1 className="font-pixel text-xl md:text-2xl tracking-widest leading-none mt-2 text-brand-light">SOMA<br/>CODE</h1>
          </a>
        </div>
        <nav className="hidden md:flex gap-6 font-semibold">
          <a href="#home" className="hover:text-brand-green transition-colors">{tNav('home')}</a>
          <a href="#services" className="hover:text-brand-green transition-colors">{tNav('services')}</a>
          <a href="#about" className="hover:text-brand-green transition-colors">{tNav('about')}</a>
          <a href="#contact" className="hover:text-brand-green transition-colors">{tNav('contact')}</a>
        </nav>
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </header>
      
      <main className="flex-grow flex flex-col">
        <section id="home" className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-brand-dark to-black py-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 mt-4 leading-tight">
            {tHero('title')} <br className="hidden md:block" />
            <span className="font-pixel text-brand-green tracking-wide text-4xl md:text-5xl mt-4 inline-block">SOMA CODE</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed">
            {tHero('subtitle')}
          </p>
          <a href="#services" className="inline-block bg-brand-green text-black font-bold py-4 px-10 rounded-full hover:shadow-[0_0_20px_rgba(51,255,85,0.6)] transition-all hover:scale-105 text-lg">
            {tHero('cta')}
          </a>
        </section>

        <section id="services" className="py-32 px-6 lg:px-12 border-t border-brand-green/20 bg-black/40">
          <h3 className="font-pixel text-3xl md:text-4xl text-center mb-24 text-brand-green tracking-widest">{tServices('title')}</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-brand-green/50 transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">{tServices('web')}</h4>
              <p className="text-sm text-gray-400 leading-relaxed text-left">High-performance React and Next.js applications tailored to your business needs.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-brand-green/50 transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">{tServices('mobile')}</h4>
              <p className="text-sm text-gray-400 leading-relaxed text-left">Cross-platform mobile experiences that engage users on iOS and Android.</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-brand-green/50 transition-colors group cursor-pointer">
              <div className="w-14 h-14 bg-brand-green/10 text-brand-green flex items-center justify-center rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">{tServices('design')}</h4>
              <p className="text-sm text-gray-400 leading-relaxed text-left">User-centric design systems that look beautiful and convert effectively.</p>
            </div>
          </div>
        </section>

        <section id="about" className="py-32 px-6 lg:px-12 bg-brand-dark border-t border-brand-green/20">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h3 className="font-pixel text-3xl md:text-4xl mb-8 text-brand-green tracking-widest">{tAbout('title')}</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {tAbout('description')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <div className="bg-black/40 p-8 rounded-2xl border border-gray-800">
                <h4 className="text-2xl font-bold mb-6 text-brand-light flex items-center gap-3">
                  <span className="text-brand-green font-pixel text-xl">{'>'}</span> {tAbout('tech')}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Supabase'].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm font-semibold">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-black/40 p-8 rounded-2xl border border-gray-800 hover:border-brand-green/50 transition-colors">
                <h4 className="text-2xl font-bold mb-6 text-brand-light flex items-center gap-3">
                   <span className="text-brand-green font-pixel text-xl">{'>'}</span> {tAbout('project')}
                </h4>
                <a href="https://shukkin.vercel.app/" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold group-hover:text-brand-green transition-colors">Shukkin</span>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{tAbout('shukkinDesc')}</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 lg:px-12 bg-black border-t border-brand-green/20 text-center">
          <h3 className="font-pixel text-3xl md:text-4xl mb-12 text-brand-green tracking-widest">{tContact('title')}</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
            <a href="https://github.com/Soma-Code-Dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-brand-green/50 py-4 px-8 rounded-full transition-all w-full md:w-auto justify-center group">
              <svg className="w-6 h-6 text-brand-light group-hover:text-brand-green transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span className="font-semibold text-brand-light group-hover:text-brand-green transition-colors">{tContact('github')}</span>
            </a>
            <a href="https://www.linkedin.com/company/soma-code" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 hover:border-[#0A66C2] py-4 px-8 rounded-full transition-all w-full md:w-auto justify-center group">
              <svg className="w-6 h-6 text-[#0A66C2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className="font-semibold text-brand-light group-hover:text-[#0A66C2] transition-colors">{tContact('linkedin')}</span>
            </a>
          </div>
        </section>
      </main>
      
      <footer className="bg-black py-10 text-center text-sm text-gray-500 border-t border-gray-800 flex flex-col items-center justify-center">
         <div className="flex items-center gap-2 mb-6 opacity-50">
           <span className="font-pixel text-brand-green text-xl mt-1">+</span>
           <span className="font-pixel text-base tracking-widest text-brand-light">SOMA CODE</span>
         </div>
         <p className="mb-2">&copy; {new Date().getFullYear()} SOMA CODE. All rights reserved.</p>
         <p className="text-gray-600 font-medium">
           {tContact('developedBy')} <a href="https://yujiseto.github.io/" target="_blank" rel="noopener noreferrer" className="text-brand-green/70 hover:text-brand-green transition-colors">YujiSeto</a>
         </p>
      </footer>
    </div>
  );
}
