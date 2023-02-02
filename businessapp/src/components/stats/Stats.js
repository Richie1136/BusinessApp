import { stats } from "../../constants"
import styles from "../../style"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map(({ title, value, id }) => (
      <div key={id} className="">
        <h4>{value}</h4>
        <p>{title}</p>
      </div>
    ))}
  </section>
)

export default Stats