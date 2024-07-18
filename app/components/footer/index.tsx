'use client'
import footer from './footer.module.css'
import Button from '../button/index'
import Image from 'next/image'
import FooterLogo from '../../../public/assets/Frame.png'
import Linkedin from '../../../public/assets/linkedin.png'
import Mailing from '../../../public/assets/mailing.png'
import Twitter from '../../../public/assets/twitter.png'
import Instagram from '../../../public/assets/instagram.png'

const Footer = ({ className, contactFooter, supportParners, joinSupport }: any) => {

    const contactClick = () => {
        console.log('first')
    }

    return (
        <div className={`${footer['footer-main']} ${className}`}>
            <div className={footer['footer-cont']}>
                <div className={`${footer["contact-footer"]} ${contactFooter}`}>
                    <div className={`${footer["support-partners"]} ${supportParners}`}>
                        <h3 className={`${footer['join-support']} ${joinSupport}`}>Support <br />Partner <br />Join</h3>
                        <h3 className={footer['contact-us']}>Contact Us</h3>
                    </div>
                    <form className={footer["form"]}>
                        <div className="info">
                            <input type="text" placeholder='Name' className={footer['Name']} />
                            <input type="email" placeholder='Email' className={footer['Email']} />
                        </div>
                        <input name="message" id="message" placeholder='Leave a message...' className={footer['text-area']}></input>
                        <Button label='Send message' onClick={contactClick} className=' bg-white text-[#000] text-[16px] font-bold hover:bg-[#FFCDA8] rounded-[50px]' />
                    </form>
                </div>
            </div>
            <div className={footer["footer-logo"]}>
                <Image src={FooterLogo} width={154} height={21} alt='logo' />
                <div className={footer["social-media"]}>
                    <Image src={Linkedin} width={20} height={20} alt='media' />
                    <Image src={Instagram} width={20} height={20} alt='media' />
                    <Image src={Mailing} width={20} height={20} alt='media' />
                    <Image src={Twitter} width={20} height={20} alt='media' />
                </div>

                <div className={footer["line"]}></div>
            </div>
            <div className={footer["copyright"]}>
                <p>© 2024 MariTest Africa. All rights reserved.</p>
                <p>Privacy Policy <span>Terms & Conditions</span></p>
            </div>
        </div>
    )
}

export default Footer
