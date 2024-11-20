import ResumeImg from '../assets/resume.jpg';

export default function Resume() {

    const config = {
        link:"https://file-examples.com/index.php/sample-documents-download/sample-pdf-download/"
    }

    return <section className='flex flex-col px-5 md:flex-row bg-secondory' id='resume'>
        <div className='flex justify-center py-5 md:justify-end md:w-1/2'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='flex justify-center md:w-1/2'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-primary border-b-4 mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume here. <a target='_blank' href={config.link} className='btn'>Download</a> </p>
            </div>
        </div>
    </section>
}