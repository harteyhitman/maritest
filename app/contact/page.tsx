import Footer from '../components/footer'
import Navbar from '../components/navbar'
import contact from './contact.module.css'


const Contacts = () => {
  return (
    <div className={contact['contacts']}>

         <Navbar />
         <Footer className={contact["contact-main"]} contactFooter={contact["contact-footer"]} supportParners={['partners']} joinSupport={['support ']} contactUs={['contact-us']}
         />
      
     
    </div>
  )
}

export default Contacts