
export default function Contact() {

    const config ={
        email:"ajsaajith99@gmail.com",
        phone:"+94757425593"
    }

    return <section className='flex flex-col px-5 py-32 bg-primary' id="contact">
            <div className='flex flex-col items-center text-white'>

                <h1 className='text-4xl border-secondory border-b-4 mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in to details, please contact me.</p>
                <p className='py-2'><span className="font-bold">Email :</span>{config.email}</p>
                <p className='py-2'><span className="font-bold">Phone :</span>{config.phone}</p>
            </div>
    </section>
}