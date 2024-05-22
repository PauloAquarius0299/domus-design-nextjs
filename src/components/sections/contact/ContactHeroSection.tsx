import { ChevronRight } from "lucide-react";

function ContactHeroSection(){
    return (
        <section className='bg-shop-hero h-[316px] flex justify-center flex-col items-center'>
        <p className='font-medium text-[48px]'>Contatos</p>
        <div className='flex gap-2'>
            <p className='font-bold'>Home</p>
            <ChevronRight />
            <p>Contatos</p>
        </div>
    </section>
    )
}

export default ContactHeroSection;