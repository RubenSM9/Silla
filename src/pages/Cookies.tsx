import Layout from "@/components/layout/Layout";

const Cookies = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="carset-container">
          <div className="max-w-4xl mx-auto">
            <div className="carset-divider mb-4" />
            <h1 className="carset-heading carset-text-gradient mb-8">
              POLÍTICA DE COOKIES
            </h1>

            <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  1. ¿QUÉ SON LAS COOKIES?
                </h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en su 
                  dispositivo (ordenador, tablet, smartphone) cuando visita un sitio web. 
                  Permiten que el sitio recuerde sus acciones y preferencias durante 
                  un período de tiempo, para que no tenga que volver a introducirlas 
                  cada vez que visite el sitio o navegue de una página a otra.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  2. TIPOS DE COOKIES QUE UTILIZAMOS
                </h2>
                
                <h3 className="font-semibold text-foreground mt-6 mb-2">
                  2.1 Cookies técnicas o necesarias
                </h3>
                <p>
                  Son aquellas que permiten al usuario la navegación a través del 
                  sitio web y la utilización de las diferentes opciones o servicios 
                  que en ella existen. Estas cookies son esenciales y no requieren 
                  consentimiento.
                </p>

                <h3 className="font-semibold text-foreground mt-6 mb-2">
                  2.2 Cookies de preferencias
                </h3>
                <p>
                  Permiten recordar información para que el usuario acceda al servicio 
                  con determinadas características que pueden diferenciar su experiencia 
                  de la de otros usuarios, como el idioma o la región.
                </p>

                <h3 className="font-semibold text-foreground mt-6 mb-2">
                  2.3 Cookies analíticas
                </h3>
                <p>
                  Permiten el seguimiento y análisis del comportamiento de los usuarios. 
                  La información recogida se utiliza para medir la actividad del sitio 
                  web y elaborar perfiles de navegación con el fin de mejorar el sitio.
                </p>

                <h3 className="font-semibold text-foreground mt-6 mb-2">
                  2.4 Cookies de marketing
                </h3>
                <p>
                  Son aquellas que almacenan información del comportamiento de los 
                  usuarios, lo que permite desarrollar un perfil específico para 
                  mostrar publicidad en función del mismo.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  3. COOKIES UTILIZADAS EN ESTE SITIO WEB
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mt-4">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-foreground">Cookie</th>
                        <th className="text-left p-3 text-foreground">Tipo</th>
                        <th className="text-left p-3 text-foreground">Duración</th>
                        <th className="text-left p-3 text-foreground">Finalidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-3">session_id</td>
                        <td className="p-3">Técnica</td>
                        <td className="p-3">Sesión</td>
                        <td className="p-3">Gestión de sesión de usuario</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">cart_items</td>
                        <td className="p-3">Técnica</td>
                        <td className="p-3">30 días</td>
                        <td className="p-3">Almacenar productos en el carrito</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">cookie_consent</td>
                        <td className="p-3">Técnica</td>
                        <td className="p-3">1 año</td>
                        <td className="p-3">Almacenar preferencias de cookies</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-3">_ga</td>
                        <td className="p-3">Analítica</td>
                        <td className="p-3">2 años</td>
                        <td className="p-3">Google Analytics - Análisis de tráfico</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  4. GESTIÓN DE COOKIES
                </h2>
                <p>
                  Puede configurar sus preferencias de cookies a través del banner 
                  que aparece al acceder al sitio web por primera vez. Además, puede 
                  gestionar las cookies a través de la configuración de su navegador:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                  </li>
                  <li>
                    <strong>Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferencias → Privacidad
                  </li>
                  <li>
                    <strong>Edge:</strong> Configuración → Privacidad → Cookies
                  </li>
                </ul>
                <p className="mt-4">
                  Tenga en cuenta que si desactiva las cookies, algunas funcionalidades 
                  del sitio web pueden verse afectadas.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  5. ACTUALIZACIÓN DE LA POLÍTICA
                </h2>
                <p>
                  Esta política de cookies puede actualizarse en función de exigencias 
                  legislativas, reglamentarias, o con la finalidad de adaptar dicha 
                  política a las instrucciones dictadas por la Agencia Española de 
                  Protección de Datos. Por ello, le aconsejamos que la revise de 
                  forma periódica.
                </p>
              </section>

              <p className="text-sm border-t border-border pt-8 mt-12">
                Última actualización: Febrero 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
