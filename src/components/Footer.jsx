
export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center flex-col py-7 bg-[#06E07F]">
        <div className="flex flex-col justify-center md:gap-2 gap-3 text-center items-center">
            <p className="text-white text-sm max-sm:text-center">© Copyright 2025 - TAMARA EMOMI Seth Forgive. Tous droits réservés.</p>
            <div className="flex gap-1.5  text-center items-center justify-center">
            <p className="text-white text-sm border-r-2 border-white pr-1.5">Plan du site designer par moi-même</p>
            <p className="text-white text-sm border-r-2 border-white pr-1.5"> Mentions légales</p>
            <p className="text-white text-sm"> Politique de confidentialité</p>
            </div>
        </div>
    </footer>
  )
}
