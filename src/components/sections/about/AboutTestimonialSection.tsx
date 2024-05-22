

function AboutTestimonialSection(){
    

    return (
        <section>
           <div className="reviews-section container mx-auto p-8">
        <h2 className="text-customBlack flex justify-center items-center mb-5 uppercase font-bold text-4xl">Avaliações</h2>
        <div className="grid gap-4 md:grid-cols-2">
            <div className="col-span-1">
                <div className="h-full shadow-md">
                    <div className="p-4">
                        <p className="text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste culpa perspiciatis. Magnam, explicabo cumque.
                        </p>
                    </div>
                    <div className="flex items-center p-4 border-t">
                        <img src="/images/ava-1.jpg" alt="" className="w-12 h-12 rounded-full mx-3 shadow-md" />
                        <h5 className="text-primary text-lg">João Paulo</h5>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="h-full shadow-md">
                    <div className="p-4">
                        <p className="text-base">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, mollitia?
                        </p>
                    </div>
                    <div className="flex items-center p-4 border-t">
                        <img src="/images/ava-5.jpg" alt="" className="w-12 h-12 rounded-full mx-3 shadow-md" />
                        <h5 className="text-primary text-lg">Mariana Ferraz</h5>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="h-full shadow-md">
                    <div className="p-4">
                        <p className="text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor itaque reprehenderit minus tempore. Iste quibusdam facilis excepturi nihil maiores!
                        </p>
                    </div>
                    <div className="flex items-center p-4 border-t">
                        <img src="images/ava-4.jpg" alt="" className="w-12 h-12 rounded-full mx-3 shadow-md" />
                        <h5 className="text-primary text-lg">Daniela Wisley</h5>
                    </div>
                </div>
            </div>
            <div className="col-span-1">
                <div className="h-full shadow-md">
                    <div className="p-4">
                        <p className="text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum et voluptate minus error suscipit officiis placeat repudiandae quibusdam officia tempora, reprehenderit, enim, quidem exercitationem laborum!
                        </p>
                    </div>
                    <div className="flex items-center p-4 border-t">
                        <img src="images/ava-2.jpg" alt="" className="w-12 h-12 rounded-full mx-3 shadow-md" />
                        <h5 className="text-primary text-lg">Ricardo Ramos</h5>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        </section>
    )

}

export default AboutTestimonialSection;