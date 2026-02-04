import Layout from "@/components/layout/Layout";

const AvisoLegal = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="carset-container">
          <div className="max-w-4xl mx-auto">
            <div className="carset-divider mb-4" />
            <h1 className="carset-heading carset-text-gradient mb-8">
              AVISO LEGAL
            </h1>

            <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  1. DATOS IDENTIFICATIVOS
                </h2>
                <p>
                  En cumplimiento con el deber de información recogido en el artículo 10 
                  de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la 
                  Información y del Comercio Electrónico (LSSI-CE), a continuación se 
                  reflejan los siguientes datos:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Denominación social:</strong> Carset España, S.L.</li>
                  <li><strong>CIF:</strong> B-12345678</li>
                  <li><strong>Domicilio social:</strong> Calle Ejemplo 123, 28001 Madrid, España</li>
                  <li><strong>Email:</strong> info@carset.es</li>
                  <li><strong>Teléfono:</strong> +34 900 123 456</li>
                  <li><strong>Inscripción registral:</strong> Registro Mercantil de Madrid, Tomo XXXXX, Folio XXX, Hoja M-XXXXXX</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  2. OBJETO
                </h2>
                <p>
                  El presente sitio web tiene por objeto facilitar información sobre 
                  los productos y servicios ofrecidos por Carset España, S.L., así como 
                  permitir la compra de productos a través de la tienda online.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  3. PROPIEDAD INTELECTUAL E INDUSTRIAL
                </h2>
                <p>
                  Todos los contenidos del sitio web, incluyendo textos, imágenes, 
                  gráficos, logotipos, iconos, software y cualquier otro material, 
                  son propiedad de Carset España, S.L. o de terceros que han autorizado 
                  su uso, y están protegidos por las leyes de propiedad intelectual e 
                  industrial.
                </p>
                <p className="mt-4">
                  Queda expresamente prohibida la reproducción total o parcial de 
                  este sitio web, ni siquiera mediante un hiperenlace, ni de cualquiera 
                  de sus contenidos, sin la autorización expresa y por escrito del titular.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  4. EXCLUSIÓN DE RESPONSABILIDAD
                </h2>
                <p>
                  Carset España, S.L. no se hace responsable de los daños y perjuicios 
                  que pudieran ocasionarse por el uso indebido de los contenidos del 
                  sitio web. El usuario será el único responsable de las infracciones 
                  en que pudiera incurrir o de los perjuicios que pudiera causar por 
                  la utilización del presente sitio web.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  5. MODIFICACIONES
                </h2>
                <p>
                  Carset España, S.L. se reserva el derecho de modificar, en cualquier 
                  momento y sin previo aviso, la presentación y configuración del 
                  sitio web, así como las condiciones requeridas para su acceso y/o uso.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  6. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
                </h2>
                <p>
                  Para la resolución de todas las controversias o cuestiones relacionadas 
                  con el presente sitio web o de las actividades en él desarrolladas, 
                  será de aplicación la legislación española, a la que se someten 
                  expresamente las partes, siendo competentes para la resolución de 
                  todos los conflictos derivados o relacionados con su uso los 
                  Juzgados y Tribunales de Madrid, salvo en aquellos casos en que la 
                  normativa aplicable establezca un fuero diferente.
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

export default AvisoLegal;
