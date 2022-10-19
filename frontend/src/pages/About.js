import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <p>លីវនីនិងផានី ជាអ្នកលក់ផលិតផលជាច្រើនមុខដូចជា៖ ម៉ាស៊ីនកាត់ (ឈើ, ស្មៅ, ថ្ម, ដែក, អំពូល, ខ្សែអគ្គិសនី, កាវ, បំពង់ទឹក...)។</p><br />
        <p>អ្នកអាចទាក់ទងមកយើងខ្ញុំតាមប្រព័ន្ធផ្សព្វផ្សាយសង្គមទាំងនេះ៖</p>
        <ul className="social-medias">
          <li>
            <i className="fa-brands fa-facebook"></i>{' '}
            <Link to={'/'} target={'_blank'}>Facebook</Link>
          </li>
          <li>
            <i className="fa-brands fa-telegram"></i>{' '}
            <Link to={'/'} target={'_blank'}>Telegram</Link>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp"></i>{' '}
            <Link to={'/'} target={'_blank'}>Whatsapp</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
