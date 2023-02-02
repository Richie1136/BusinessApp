import { apple, bill, google } from "../../assets"
import styles, { layout } from "../../style"

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt='bill ' />
    </div>
  </section>
)

export default Billing