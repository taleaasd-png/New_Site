import Hero from './components/Hero'
import Staff from './components/Staff'
import GamesAndResults from './components/GamesAndResults'
import PhotoGallery from './components/PhotoGallery'
import Categories from './components/Categories'
import News from './components/News'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Staff />
      <Categories />
      <News />
      <GamesAndResults />
      <PhotoGallery />
      <Footer />
    </main>
  )
}
