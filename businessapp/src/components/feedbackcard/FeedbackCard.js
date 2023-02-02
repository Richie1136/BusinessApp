import { quotes } from "../../assets"

const FeedbackCard = ({ name, title, image, content }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img className="w-[42px] h-[27px] object-contain" src={quotes} alt='quotes' />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
  </div>
)

export default FeedbackCard