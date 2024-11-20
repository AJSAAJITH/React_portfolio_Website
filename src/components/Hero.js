import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineWhatsApp } from "react-icons/ai";

export default function Hero() {

    const config = {
        subtitle: 'Im a Full-stack developer And Designer',
        social:{
            github:"https://github.com/AJSAAJITH/AJA-SAAJITH",
            linkedin:"www.linkedin.com/in/a-j-a-saajith",
            facebook:"https://www.facebook.com/A.J.A.Saajith?mibextid=ZbWKwL",
            whatsapp:"https://api.whatsapp.com/send/?phone=%2B94757425593&text&type=phone_number&app_absent=0"
        }
    }

    return (
        <section className='flex flex-col justify-center px-5 py-32 md:flex-row bg-primary'>

            <div className='flex flex-col md:w-1/2'>
                <h1 className='text-4xl text-white md:text-6xl font-hero-font'>Hi,<br /> Im <span className='text-black'>A J A</span> SAAJITH
                    <p className='text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10'>
                    <a target='_blank' href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                    <a target='_blank' href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                    <a target='_blank' href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                    <a target='_blank' href={config.social.whatsapp} className='hover:text-white'><AiOutlineWhatsApp size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} />


        </section>
    );
}