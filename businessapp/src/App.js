import styles from "./style";
import { Billing, Testimonials, Stats, NavBar, Hero, Business, Footer, CardDeal, ClickToAction, Clients } from './components/index'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />

      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Business />
        <CardDeal />
        <Clients />
        <ClickToAction />
        <Footer />
        <Stats />
        <Testimonials />
      </div>
    </div>
  </div>
);

export default App;
