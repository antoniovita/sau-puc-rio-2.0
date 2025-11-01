"use client"
import React, { useState } from 'react';
import { LogIn, Eye, EyeOff } from "lucide-react";

const animationStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .login-container {
    animation: fadeIn 0.4s ease-out;
  }
`;

type LoginPageProps = {
  onLoginSuccess: (user: any) => void;
};

export const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!matricula || !senha) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const userData = { 
        matricula, 
        nome: "Estudante",
      };
      onLoginSuccess(userData);
      setLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <style>{animationStyles}</style>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-3 sm:p-4">
        <div className="login-container w-full max-w-md">
          <article className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-10">

            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-800 mb-3 sm:mb-4">
                <LogIn size={24} className="text-white sm:w-7 sm:h-7" />
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Bem-vindo
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm">
                Entre com suas credenciais para continuar
              </p>
            </div>


            <div className="space-y-4 sm:space-y-5">

              <div>
                <label
                  htmlFor="matricula"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                >
                  Matrícula
                </label>
                <input
                  id="matricula"
                  type="text"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua matrícula"
                  className="
                    w-full px-3 py-2.5 sm:px-4 sm:py-3
                    rounded-xl sm:rounded-2xl
                    border-2 border-gray-200 bg-gray-50
                    text-gray-900 text-sm sm:text-base
                    placeholder-gray-400 transition-all
                    focus:outline-none focus:border-gray-400 focus:bg-white
                  "
                />
              </div>

              <div>

                <label
                  htmlFor="senha"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                >
                  Senha
                </label>
                <div className="relative">
                  <input
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite sua senha"
                    className="
                      w-full px-3 py-2.5 sm:px-4 sm:py-3 pr-10 sm:pr-12
                      rounded-xl sm:rounded-2xl
                      border-2 border-gray-200 bg-gray-50
                      text-gray-900 text-sm sm:text-base
                      placeholder-gray-400 transition-all
                      focus:outline-none focus:border-gray-400 focus:bg-white
                    "
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? (
                      <EyeOff size={18} className="sm:w-5 sm:h-5" />
                    ) : (
                      <Eye size={18} className="sm:w-5 sm:h-5" />
                    )}
                  </button>
                </div>
              </div>


              <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                  w-full bg-gray-800 text-white py-3 sm:py-3.5
                  rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base
                  hover:bg-gray-700 active:scale-95 transition-all
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
                  mt-2 sm:mt-4
                "
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg 
                      className="animate-spin h-4 w-4 sm:h-5 sm:w-5" 
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
                      />
                    </svg>
                    Entrando...
                  </span>
                ) : (
                  "Entrar"
                )}
              </button>
            </div>


            <div className="mt-5 sm:mt-6 text-center">
              <button
                type="button"
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
                onClick={() => alert("Funcionalidade de recuperação de senha")}
              >
                Esqueceu sua senha?
              </button>
            </div>
          </article>


          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 px-4">
            Ao entrar, você concorda com nossos termos de uso
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;