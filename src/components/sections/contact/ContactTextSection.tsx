import React from 'react'

function ContactTextSection(){
  return (
    <section className="p-4 md:p-10 mt-10">
    <h2 className="text-2xl md:text-4xl font-semibold flex items-center justify-center mt-6 md:mt-10">Entre em Contato com a Gente</h2>
    <p className="text-textGray flex items-center justify-center gap-2 text-center mt-4 md:mt-6">
        Para obter mais informações sobre nossos produtos e serviços. Sinta-se à vontade para nos deixar
        <br className="hidden md:block" />
    </p>
    <p className="text-textGray flex items-center justify-center gap-2 pb-6 md:pb-8 text-center mt-2 md:mt-4">
        Um email. Nossa equipe está sempre disponível para ajudá-lo. Não hesite!
    </p>
</section>

  )
}

export default ContactTextSection