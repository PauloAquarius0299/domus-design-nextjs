

function AboutContentSection(){
    return (
        <section className="flex flex-col items-center justify-between p-8">
        <h2 className="text-4xl font-bold text-customBlack">Temos o melhor serviço no mercado</h2>
        <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores necessitatibus quaerat non, explicabo consectetur laudantium vel dicta consequatur eum quo aspernatur officia? Tempore doloribus enim quas nam aspernatur est nostrum sint facere iste nesciunt nemo explicabo, vitae aut impedit, voluptatem reiciendis corrupti similique laudantium! Quaerat itaque ipsum quo eaque?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus recusandae ducimus saepe consequuntur velit dolorem similique assumenda, asperiores voluptatum vel modi minima omnis a quia quo molestiae. Incidunt cumque ea odit optio, iusto voluptas ratione vitae obcaecati temporibus fuga minima provident aut quasi autem expedita quia dolores at placeat perferendis. Nisi qui earum inventore soluta explicabo, labore ut ea nemo reprehenderit minus repellat, impedit atque vel debitis autem veritatis optio laboriosam officiis molestiae maxime repellendus beatae tempora sapiente! Quam!
        </p>

        <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="md:w-1/2 p-4">
                <img src="/images/about-works.jpg" className="w-full h-auto" alt="About Works" />
            </div>
            <div className="md:w-1/2 p-4">
                <img src="/images/about-girl.jpg" className="w-full h-auto" alt="About Girl" />
            </div>
        </div>

        <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus recusandae ducimus saepe consequuntur velit dolorem similique assumenda, asperiores voluptatum vel modi minima omnis a quia quo molestiae. Incidunt cumque ea odit optio, iusto voluptas ratione.
        </p>
    </section>
    )

}

export default AboutContentSection;