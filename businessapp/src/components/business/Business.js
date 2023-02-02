import { features } from "../../constants"
import styles, { layout } from "../../style"
import Button from '../button/Button'

const FeatureCard = ({ icon, title, content, id }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${id !== features.length - 1 ? 'mb-6' : 0} feature-card`}>
    <div>
      <img src={icon} alt='icons' className="w-[50%] h-[50%] object-contain" />
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.</p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map(({ id, icon, title, content }) => (
          <FeatureCard key={id} icon={icon} title={title} content={content} />
        ))}
      </div>
    </section>
  )
}

export default Business