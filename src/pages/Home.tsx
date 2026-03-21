import Hero from '../components/Hero';
import NewsFeed from '../components/NewsFeed';
import FeaturedAthletes from '../components/FeaturedAthletes';
import Program from '../components/Program';
import Pipeline from '../components/Pipeline';
import Coach from '../components/Coach';
import ApplyCTA from '../components/ApplyCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <NewsFeed />
      <FeaturedAthletes />
      <Program />
      <Pipeline />
      <Coach />
      <ApplyCTA />
    </main>
  );
}
