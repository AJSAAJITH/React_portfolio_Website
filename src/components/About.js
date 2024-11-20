import AboutImg from '../assets/about.png';

export default function About() {
    const config = {
        line1:"Hi, I'm A J A Saajith, as a full-stack software engineer, I have hands-on experience in both frontend and backend development. I specialize in React, Redux, Redux Toolkit, and modern styling tools like Tailwind CSS and Bootstrap.",
        
        line2:'On the backend, I work with Node.js, PHP, Java, and JavaScript, building efficient, scalable server-side applications. I also integrate databases like MongoDB, MySQL, SQL, and Firebase to manage data effectively.',
        
        line3:"My portfolio showcases projects where I’ve been in full control, delivering dynamic and robust solutions that meet user needs and business goals.",
    }
    return <section className='flex flex-col px-5 md:flex-row bg-secondory' id="about">
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='flex justify-center md:w-1/2'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-primary border-b-4 mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>

                <p className='pb-5'>{config.line2}</p>

                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}