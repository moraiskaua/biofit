import { MdOutlineEmail, MdPhone } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { HiPencil } from 'react-icons/hi2';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="mt-24" id="contact">
      <form
        className="w-full max-w-[1100px] mx-auto bg-[#171717] flex"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 w-full lg:w-1/2 p-9 text-white">
          <h1 className="font-bold text-center text-3xl uppercase">
            Entre em contato
          </h1>
          <div className="bg-[#535353] p-3 flex items-center gap-3">
            <AiOutlineUser size={30} />
            <input
              type="text"
              className="bg-transparent w-full outline-none"
              placeholder="Nome completo"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="bg-[#535353] p-3 flex items-center gap-3">
            <MdOutlineEmail size={30} />
            <input
              type="email"
              className="bg-transparent w-full outline-none"
              placeholder="E-mail pra contato"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="bg-[#535353] p-3 flex items-center gap-3">
            <MdPhone size={30} />
            <input
              type="text"
              className="bg-transparent w-full outline-none"
              placeholder="Número de celular"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="bg-[#535353] p-3 flex gap-3">
            <HiPencil size={30} />
            <textarea
              cols={30}
              rows={6}
              maxLength={500}
              className="bg-transparent resize-none w-full outline-none"
              placeholder="Digite sua mensagem..."
              value={msg}
              onChange={e => setMsg(e.target.value)}
            />
          </div>
          <button
            className="w-full py-3 bg-orange mt-3 text-white font-bold"
            type="submit"
          >
            Enviar
          </button>
        </div>
        <div className="hidden lg:w-1/2 bg-form-ad bg-cover bg-center lg:flex justify-center items-end">
          <div className="flex gap-5 py-4 text-white mb-5">
            <FaWhatsapp
              size={40}
              className="hover:scale-110 cursor-pointer transition-all"
              onClick={() =>
                window.open(
                  `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
                  '_blank',
                )
              }
            />
            <FaFacebook
              size={40}
              className="hover:scale-110 cursor-pointer transition-all"
              onClick={() =>
                window.open('https://www.facebook.com/biofitqnj', '_blank')
              }
            />
            <FaInstagram
              size={40}
              className="hover:scale-110 cursor-pointer transition-all"
              onClick={() =>
                window.open('https://www.instagram.com/biofitqnj/', '_blank')
              }
            />
            <FaYoutube
              size={40}
              className="hover:scale-110 cursor-pointer transition-all"
              onClick={() =>
                window.open(
                  'https://www.youtube.com/@fitbrothersoficial6096',
                  '_blank',
                )
              }
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
