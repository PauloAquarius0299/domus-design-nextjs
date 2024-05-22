import MainButton from '@/components/common/MainButton'
import React from 'react'

function ContactInputSection() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="text space-y-4 md:w-1/2">
            <div className="flex items-start">
                <img src="/images/localisation.png" alt="icon image" className="mr-4 w-8 h-10" />
                <div>
                    <h4 className="font-semibold text-2xl">Endereço</h4>
                    <p>000 Centro, Belo Horizonte</p>
                    <p>Minas Gerais, Brasil</p>
                    <p>Rua mil e quatrocentros</p>
                </div>
            </div>
            <div className="flex items-start">
                <img src="/images/tel.png" alt="icon image" className="mr-4 w-8 h-10" />
                <div>
                    <h4 className="font-semibold text-2xl">Telefone</h4>
                    <p>Celular: +55(31)987654321</p>
                    <p>RH: +55(31)123456789</p>
                </div>
            </div>
            <div className="flex items-start">
                <img src="/images/time.png" alt="icon image" className="mr-4 w-8 h-8" />
                <div>
                    <h4 className="font-semibold text-2xl">Horario</h4>
                    <p>Segunda - Sexta: 9:00 - 22:00</p>
                    <p>Sabado - Domingo: 10:00 - 16:00</p>
                </div>
            </div>
        </div>
        <div className="input md:w-1/2 space-y-6">
            <div>
                <p className='font-medium pb-4'>Seu Nome</p>
                <input type="text" placeholder="abc" className="w-full border border-textGray p-4 rounded" />
            </div>
            <div>
                <p className='font-medium pb-4'>Email </p>
                <input type="text" placeholder="abc@def.com" className="w-full border border-textGray p-4 rounded"/>
            </div>
            <div>
                <p className='font-medium pb-4'>Observações</p>
                <input type="text" placeholder="this is an optional" className="w-full border border-textGray p-4 rounded" />
            </div>
            <div>
                <p className='font-medium pb-4'>Escreva sua Mensagem</p>
                <textarea placeholder="Hi, I'd like to ask about..." className="w-full border border-textGray p-4 rounded h-32" ></textarea>
            </div>
            <button className="w-56 bg-primary text-white p-4 rounded">Enviar</button>
        </div>
    </section>
  )
}

export default ContactInputSection