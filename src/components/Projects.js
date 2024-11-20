import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';


export default function Project() {

    const config = {
        prjects: [
            {
                images: websiteImg1,
                description: "A Ecommerce web site build with MERN stack",
                link: "https://github.com/AJSAAJITH/AJA-SAAJITH"
            },
            {
                images: websiteImg2,
                description: "A Ecommerce web site build with MERN stack",
                link: "https://github.com/AJSAAJITH/AJA-SAAJITH"
            },
            {
                images: websiteImg3,
                description: "A Ecommerce web site build with MERN stack",
                link: "https://github.com/AJSAAJITH/AJA-SAAJITH"
            }
        ]
    }

    return <section className="flex flex-col justify-center px-5 py-20 text-white bg-primary" id='projects'>
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl border-secondory border-b-4 mb-5 w-[150px] font-bold'>Projects</h1>
                <p>These are some of my best projects, I have Build these with React, MERN and css framworks. Check them out.</p>
            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col gap-5 px-10 md:flex-row'>
                {config.prjects.map((project) => (
                    <a href={project.link}>
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.images} />
                            <div className='project-description'>
                                <p className='px-5 py-5 text-center'>{project.description}</p>
                                
                                <div className='flex justify-center'>
                                    <a className='opacity-100 btn' target='_blank' href={project.link}>View Project</a>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}

            </div>
        </div>

    </section>
}