import ContactHeroSection from '@/components/sections/contact/ContactHeroSection'
import ContactInputSection from '@/components/sections/contact/ContactInputSection';
import ContactTextSection from '@/components/sections/contact/ContactTextSection';
import ShopBannerSection from '@/components/sections/shop/ShopBannerSection'

function ContactPage(){
    return (
        <div>
            <ContactHeroSection />
            <ContactTextSection />
            <ContactInputSection />
            <ShopBannerSection />
        </div>
    )
}

export default ContactPage;