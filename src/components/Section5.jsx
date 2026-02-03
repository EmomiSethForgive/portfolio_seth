import mail from '../assets/technologies/mail.svg'
import envoyer from '../assets/technologies/envoyer.svg'
import phone from '../assets/technologies/phone.svg'
import géo from '../assets/technologies/géo.svg'
import link from '../assets/technologies/link.svg'
import hub from '../assets/technologies/hub.svg'
import { useState } from 'react'

export default function Section5() {
    // const [leading, setLeading] = useState(false);
    // const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        téléphone: "",
        mail: "",
        sujet: "",
        message: "",
    });

    // 🔁 Mise à jour automatique des champs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    // 📩 Envoi du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // 👉 Affiche toutes les infos dans la console
        console.log("📨 Données du formulaire :", formData);

        // 👉 Alerte utilisateur
        alert("Message envoyé avec succès ✅");

        // 👉 Optionnel : reset du formulaire
        setFormData({
            nom: "",
            prenom: "",
            téléphone: "",
            mail: "",
            sujet: "",
            message: "",
        });
    };



    return (
        <div id="contact" className="w-full bg-[#F5F5F5]">
            <div className="w-[90%] gap-6 pt-3 pb-4 m-auto flex flex-col">
                <div className='max-sm:w-full'>
                    <p className="font-bold text-[20px] md:text-[24px] lg:text-[28px] text-[#06E07F] text-center mb-2">Mes contacts</p>
                    {/* reseaux sociaux et formulaires versions ordinateur */}
                    <div className='lg:flex max-sm:hidden md:hidden gap-3 md:gap-4 max-sm:w-full md:justify-between items-center'>

                        {/* reseaux */}
                        <div className="flex flex-col gap-3.5 max-sm:w-full">
                            <div className="flex items-center px max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={mail} alt="mail" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">e-mail</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">tamaraforgive2@gmail.com</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Pour toute demande de projet ou collaboration.</p>
                                </div>
                            </div>
                            <div className="flex items-center max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={phone} alt="phone" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Téléphone</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">+241 62 27 67 34 / 76 46 90 05</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour toute demande de projet.</p>
                                </div>
                            </div>
                            <div className="flex items-center max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={géo} alt="géo" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Localisation</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">Gabon / Owendo</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour des projets à distance.</p>
                                </div>
                            </div>
                            <div className="flex flex-col max-sm:items-center max-sm:justify-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <p className="text-[#000000] text-lg font-bold">Réseaux Sociaux</p>
                                <div className='flex gap-4 md:ml-4'>
                                    {/* <a href="">
                                    <img src={link} alt="link" className="w-6 h-6 md:w-9 md:h-9 hover:scale-110" />
                                    </a> */}

                                    <a
                                        href=""
                                        className="
                                          relative group
                                          w-12 h-12
                                          flex items-center justify-center
                                          overflow-hidden
                                        "
                                    >
                                        {/* LOGO PAR DÉFAUT */}
                                        <img
                                            src={link}
                                            alt="linkedin"
                                            className="
                                            w-6 h-6 md:w-9 md:h-9
                                            transition-all duration-300 ease-linear
                                            group-hover:opacity-0
                                            group-hover:scale-50
                                          "
                                        />

                                        {/* CONTENU HOVER */}
                                        <div
                                            className="
                                            absolute inset-0
                                            flex flex-col items-center justify-center
                                            opacity-0 scale-90
                                            transition-all duration-300 ease-linear
                                            group-hover:opacity-100
                                            group-hover:scale-100
                                          "
                                        >
                                            {/* LOGO AU-DESSUS */}
                                            <img
                                                src={link}
                                                alt="linkedin"
                                                className="w-5 h-5 mb-1"
                                            />

                                            {/* TEXTE */}
                                            <span className="text-[#06E07F] text-xs font-bold">
                                                LinkedIn
                                            </span>
                                        </div>
                                    </a>

                                    {/* <a href="https://github.com/">
                                        <img src={hub} alt="hub" className="w-6 h-6 md:w-9 md:h-9" />
                                    </a> */}

                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                           relative group
                                           w-12 h-12
                                           flex items-center justify-center
                                           overflow-hidden
                                         "
                                    >
                                        {/* LOGO PAR DÉFAUT */}
                                        <img
                                            src={hub}
                                            alt="github"
                                            className="
                                             w-6 h-6 md:w-9 md:h-9
                                             transition-all duration-300 ease-linear
                                             group-hover:opacity-0
                                             group-hover:scale-50
                                           "
                                        />

                                        {/* CONTENU AU HOVER */}
                                        <div
                                            className="
                                             absolute inset-0
                                             flex flex-col items-center justify-center
                                             opacity-0 scale-90
                                             transition-all duration-300 ease-linear
                                             group-hover:opacity-100
                                             group-hover:scale-100
                                           "
                                        >
                                            {/* LOGO AU-DESSUS DU TEXTE */}
                                            <img
                                                src={hub}
                                                alt="github"
                                                className="w-5 h-5 mb-1"
                                            />

                                            {/* TEXTE */}
                                            <span className="text-[#06E07F] text-xs font-bold">
                                                GitHub
                                            </span>
                                        </div>
                                    </a>

                                </div>
                            </div>
                        </div>

                        {/* Formulaires */}
                        <div className='flex max-sm:w-full flex-col gap-3 md:gap-7 items-center'>
                            <p className='font-bold text-lg md:text-xl text-[#000000] '>Envoyez-moi un message</p>
                            <form
                                onSubmit={handleSubmit} // 🔥 IMPORTANT
                                className="flex flex-col gap-3 md:gap-4 items-center max-sm:w-full"
                            >
                                {/* Groupe 1 */}
                                <div className="flex gap-3 md:gap-4 items-center max-sm:flex-col max-sm:w-full">
                                    <input
                                        type="text"
                                        name="nom"
                                        placeholder="Nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 max-sm:w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />

                                    <input
                                        type="text"
                                        name="prenom"
                                        placeholder="Prenom"
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 max-sm:w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />
                                </div>

                                {/* Groupe 2 */}
                                <div className="flex gap-3 md:gap-4 items-center max-sm:flex-col max-sm:w-full">
                                    <input
                                        type="number"
                                        name="téléphone"
                                        placeholder="Téléphone"
                                        value={formData.téléphone}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 max-sm:w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />

                                    <input
                                        type="email"
                                        name="mail"
                                        placeholder="e-mail"
                                        value={formData.mail}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 max-sm:w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />
                                </div>

                                {/* Groupe 3 */}
                                <div className="flex gap-3 md:gap-4 items-center flex-col w-full">
                                    <input
                                        type="text"
                                        name="sujet"
                                        placeholder="Sujet"
                                        value={formData.sujet}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-16 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-28 md:h-32 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />
                                </div>

                                {/* Bouton */}
                                <button
                                    type="submit"
                                    className="text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-3 py-1 flex items-center gap-1 cursor-pointer rounded-xl"
                                >
                                    Envoyer
                                    <img src={envoyer} alt="envoyer" className="w-4 md:w-[18px]" />
                                </button>
                            </form>

                        </div>
                    </div>
                    {/* reseaux sociaux et formulaires version portable et tablet */}
                    <div className='flex flex-col md:flex-col lg:hidden gap-3 md:gap-4 max-sm:w-full md:justify-between items-center'>

                        {/* reseaux */}
                        <div className="flex flex-col gap-3.5 md:gap-5 w-full">
                            <div className="flex items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={mail} alt="mail" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">e-mail</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">tamaraforgive2@gmail.com</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Pour toute demande de projet ou collaboration.</p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={phone} alt="phone" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Téléphone</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">+241 62 27 67 34 / 76 46 90 05</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour toute demande de projet.</p>
                                </div>
                            </div>
                            <div className="flex items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <img src={géo} alt="géo" className="w-6 h-6 md:w-9 md:h-9" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-[#000000] text-lg font-bold">Localisation</p>
                                    <p className="text-[#06E07F] text-sm md:text-lg font-bold">Gabon / Owendo</p>
                                    <p className="text-[#000000] text-sm md:text-lg ">Disponible pour des projets à distance.</p>
                                </div>
                            </div>
                            <div className="flex flex-col max-sm:items-center rounded-lg gap-2 md:gap-3 bg-[#E8E8E8] border border-[#06E07F] shadow-md py-3 px-3 shadow-[rgba(0,0,0,0.50)] ">
                                <p className="text-[#000000] text-lg font-bold">Réseaux Sociaux</p>
                                {/* <div className='flex gap-4 md:ml-4'>
                                    <a href="">
                                        <img src={link} alt="link" className="w-6 h-6 md:w-9 md:h-9" />
                                    </a>
                                    <a href="https://github.com/">
                                        <img src={hub} alt="hub" className="w-6 h-6 md:w-9 md:h-9" />
                                    </a>
                                </div> */}

                                <div className="flex gap-4 md:ml-4">

                                    {/* ===== LINKEDIN ===== */}
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                        relative group
                                        w-12 h-12
                                        flex items-center justify-center
                                        overflow-hidden
                                    "
                                    >
                                        {/* LOGO PAR DÉFAUT */}
                                        <img
                                            src={link}
                                            alt="LinkedIn"
                                            className="
                                        w-6 h-6 md:w-9 md:h-9
                                        transition-all duration-300 ease-linear
                                        group-hover:opacity-0
                                        group-hover:scale-50
                                        "
                                        />

                                        {/* CONTENU AU HOVER */}
                                        <div
                                            className="
                                        absolute inset-0
                                        flex flex-col items-center justify-center
                                        opacity-0 scale-90
                                         transition-all duration-300 ease-linear
                                         group-hover:opacity-100
                                group-hover:scale-100
                                     "
                                        >
                                            <img src={link} alt="LinkedIn" className="w-5 h-5 mb-1" />
                                            <span className="text-[#06E07F] text-xs font-bold">
                                                LinkedIn
                                            </span>
                                        </div>
                                    </a>

                                    {/* ===== GITHUB ===== */}
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                        relative group
                                        w-12 h-12
                                        flex items-center justify-center
                                        overflow-hidden
                                    "
                                    >
                                        {/* LOGO PAR DÉFAUT */}
                                        <img
                                            src={hub}
                                            alt="GitHub"
                                            className="
                                        w-6 h-6 md:w-9 md:h-9
                                        transition-all duration-300 ease-linear
                                        group-hover:opacity-0
                                        group-hover:scale-50
                                        "
                                        />

                                        {/* CONTENU AU HOVER */}
                                        <div
                                            className="
                                        absolute inset-0
                                        flex flex-col items-center justify-center
                                        opacity-0 scale-90
                                        transition-all duration-300 ease-linear
                                        group-hover:opacity-100
                                        group-hover:scale-100
                                        "
                                        >
                                            <img src={hub} alt="GitHub" className="w-5 h-5 mb-1" />
                                            <span className="text-[#06E07F] text-xs font-bold">
                                                GitHub
                                            </span>
                                        </div>
                                    </a>

                                </div>

                            </div>
                        </div>

                        {/* Formulaires */}
                        <div className='flex w-full flex-col gap-3 md:gap-9 items-center'>
                            <p className='font-bold text-lg md:text-xl text-[#000000] '>Envoyez-moi un message</p>

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-3 md:gap-4 items-center w-full"
                            >
                                {/* ===== GROUPE 1 ===== */}
                                <div className="flex gap-3 md:gap-4 items-center flex-col w-full">
                                    <input
                                        type="text"
                                        name="nom"
                                        placeholder="Nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />

                                    <input
                                        type="text"
                                        name="prenom"
                                        placeholder="Prénom"
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />
                                </div>

                                {/* ===== GROUPE 2 ===== */}
                                <div className="flex gap-3 md:gap-4 items-center flex-col w-full">
                                    <input
                                        type="tel"
                                        name="telephone"
                                        placeholder="Téléphone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />

                                    <input
                                        type="email"
                                        name="mail"
                                        placeholder="E-mail"
                                        value={formData.mail}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-9 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />
                                </div>

                                {/* ===== GROUPE 3 ===== */}
                                <div className="flex gap-3 md:gap-4 items-center flex-col w-full">
                                    <input
                                        type="text"
                                        name="sujet"
                                        placeholder="Sujet"
                                        value={formData.sujet}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-16 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="border border-[#06E07F] h-28 md:h-32 w-full rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#06E07F]"
                                    />
                                </div>

                                {/* ===== BOUTON ===== */}
                                <button
                                    type="submit"
                                    className="text-lg text-white bg-[#06E07F] hover:bg-[#05C76D] transition duration-300 px-3 py-1 flex items-center gap-1 cursor-pointer rounded-xl md:rounded-3xl"
                                >
                                    Envoyer
                                    <img src={envoyer} alt="envoyer" className="w-4 md:w-[18px]" />
                                </button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
