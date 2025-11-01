"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useRouter } from "next/navigation";

const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInFromLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInFromRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .login-container { animation: fadeIn 0.4s ease-out; }
  .slide-left  { animation: slideInFromLeft 0.5s ease-out; }
  .slide-right { animation: slideInFromRight 0.5s ease-out; }

  /* Customizações do Swiper no painel esquerdo */
  .promo-swiper .swiper-button-next,
  .promo-swiper .swiper-button-prev {
    color: #fff;
    width: 42px; height: 42px;
    border-radius: 9999px;
    backdrop-filter: blur(6px);
  }
  .promo-swiper .swiper-button-next::after,
  .promo-swiper .swiper-button-prev::after {
    font-size: 18px;
    font-weight: 700;
  }
  .promo-swiper .swiper-pagination-bullet {
    background: rgba(255,255,255,0.7);
    opacity: 1;
  }
  .promo-swiper .swiper-pagination-bullet-active {
    background: #DEA02E;
  }
`;

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    if (e) e.preventDefault();
    router.push("/");
  };

  const slides = [
    {
      img: "/campus.jpg",
      alt: "Vista aérea do campus",
      title: "Excelência Acadêmica",
      text: "Cursos reconhecidos, professores renomados e projetos que impulsionam sua carreira.",
    },
    {
      img: "/bering.png",
      alt: "Laboratório moderno",
      title: "Infraestrutura de Ponta",
      text: "Laboratórios, bibliotecas e espaços colaborativos para você inovar todos os dias.",
    },
    {
      img: "/vida.jpg",
      alt: "Alunos em área verde do campus",
      title: "Experiência Universitária Completa",
      text: "Vivência no campus, intercâmbios e oportunidades que transformam o seu futuro.",
    },
  ];

const MobileLogin = () => (
  <div className="login-container w-full max-w-sm mx-auto px-4 slide-left">
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="flex-row justify-center items-center mb-6">
        <Image src={"/sau.png"} alt={"SAU"} width={90} height={90}/>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Matrícula
          </label>
          <input
            type="text"
            placeholder="Digite sua matrícula"
            className="w-full px-4 py-3 rounded-2xl bg-gray-50 text-gray-900 text-base placeholder-gray-400 focus:outline-none"
            required
            name="matricula"
            autoComplete="username"
            inputMode="numeric"
            pattern="\d*"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Senha
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="w-full px-4 py-3 pr-12 rounded-2xl bg-gray-50 text-gray-900 text-base placeholder-gray-400 focus:outline-none"
              required
              name="password"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors p-1"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full min-h-[52px] bg-[#DEA02E] text-white py-3 rounded-xl font-extrabold text-md hover:shadow-xl active:scale-[0.98] transition-all duration-200"
        >
          Entrar
        </button>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          className="text-sm text-[#DEA02E] hover:text-[#C89126] transition-colors font-semibold"
        >
          Esqueceu sua senha?
        </button>
      </div>
    </div>
  </div>
);


  const DesktopLogin = () => (
    <div className="login-container w-full max-w-5xl mx-auto slide-right">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative overflow-hidden min-h-[560px]">
            <Swiper
              className="h-full promo-swiper"
              modules={[Autoplay, Pagination, EffectFade, A11y]}
              slidesPerView={1}
              effect="fade"
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              a11y={{ enabled: true }}
            >
              {slides.map((s, idx) => (
                <SwiperSlide key={s.alt + idx}>
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0">
                      <Image
                        src={s.img}
                        alt={s.alt}
                        fill
                        priority={idx === 0}
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-[#C89126]/30" />
                    </div>

                    <div className="relative h-full flex items-end p-10">
                      <div className="max-w-md text-white">
                        <span className="inline-block text-xs tracking-widest uppercase mb-2 opacity-90">
                          PUC-Rio
                        </span>
                        <h2 className="text-3xl font-bold leading-tight mb-2">
                          {s.title}
                        </h2>
                        <p className="text-white/90 text-sm md:text-base">
                          {s.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="p-12">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo!</h3>
                <p className="text-gray-600">Entre com suas credenciais para acessar</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Matrícula
                  </label>
                  <input
                    type="text"
                    placeholder="Digite sua matrícula"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 text-base placeholder-gray-400 focus:outline-none transition-all duration-200"
                    required
                    name="matricula"
                    autoComplete="username"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      className="w-full px-4 py-3 pr-12 rounded-xl bg-gray-50 text-gray-900 text-base placeholder-gray-400 focus:outline-none transition-all duration-200"
                      required
                      name="password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors p-1"
                      aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#DEA02E] to-[#C89126] text-white py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 mt-2">
                  Entrar no Sistema
                </button>
              </form>

              <div className="mt-8 text-center space-y-3">
                <button
                  type="button"
                  className="text-sm text-[#DEA02E] hover:text-[#C89126] transition-colors font-semibold"
                >
                  Esqueceu sua senha?
                </button>
                <p className="text-xs text-gray-500">© 2025 PUC-Rio. Todos os direitos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{animationStyles}</style>
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="md:hidden w-full">
          <MobileLogin />
        </div>

        <div className="hidden md:block w-full">
          <DesktopLogin />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
