import styles from "../../style"
import Button from "../button/Button"

const ClickToAction = () => (
  <section>
    <div>
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={styles.paragraph}>Everything you need to accept card payments <br className="sm:block hidden" /> and grow your business anywhere on the planet.</p>
    </div>
    <div>
      <Button />
    </div>
  </section>
)

export default ClickToAction