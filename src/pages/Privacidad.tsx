import Layout from "@/components/layout/Layout";

const Privacidad = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="carset-container">
          <div className="max-w-4xl mx-auto">
            <div className="carset-divider mb-4" />
            <h1 className="carset-heading carset-text-gradient mb-8">
              POLÍTICA DE PRIVACIDAD
            </h1>

            <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  1. RESPONSABLE DEL TRATAMIENTO
                </h2>
                <ul className="list-disc pl-6 space-y-2">

                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  2. FINALIDADES DEL TRATAMIENTO
                </h2>
                <p>
                  En Carset España, S.L. tratamos la información que nos facilitan las 
                  personas interesadas con las siguientes finalidades:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Gestionar las compras realizadas a través de nuestra tienda online.</li>
                  <li>Gestionar el envío de los productos adquiridos.</li>
                  <li>Atender las consultas y solicitudes de los usuarios.</li>
                  <li>Enviar comunicaciones comerciales sobre nuestros productos y servicios, 
                      siempre que el usuario haya consentido expresamente.</li>
                  <li>Gestionar el ejercicio de derechos de los usuarios.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  3. LEGITIMACIÓN
                </h2>
                <p>Las bases legales para el tratamiento de datos son:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Ejecución de contrato:</strong> para la gestión de compras y envíos.</li>
                  <li><strong>Consentimiento:</strong> para el envío de comunicaciones comerciales.</li>
                  <li><strong>Interés legítimo:</strong> para la atención de consultas y solicitudes.</li>
                  <li><strong>Obligación legal:</strong> para el cumplimiento de obligaciones fiscales.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  4. CONSERVACIÓN DE DATOS
                </h2>
                <p>
                  Los datos personales se conservarán durante el tiempo necesario para 
                  cumplir con la finalidad para la que fueron recabados y para determinar 
                  las posibles responsabilidades que se pudieran derivar de dicha finalidad 
                  y del tratamiento de los datos. Una vez finalizadas las relaciones 
                  comerciales, los datos se conservarán bloqueados durante los plazos 
                  legalmente previstos para atender posibles responsabilidades.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  5. DESTINATARIOS
                </h2>
                <p>
                  Los datos podrán ser comunicados a las siguientes categorías de 
                  destinatarios:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Empresas de transporte para la entrega de productos.</li>
                  <li>Entidades bancarias para la gestión de pagos.</li>
                  <li>Administraciones públicas en cumplimiento de obligaciones legales.</li>
                  <li>Proveedores de servicios tecnológicos que actúan como encargados del tratamiento.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  6. DERECHOS DEL USUARIO
                </h2>
                <p>
                  De acuerdo con el Reglamento General de Protección de Datos (RGPD), 
                  los usuarios pueden ejercer los siguientes derechos:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Acceso:</strong> conocer qué datos personales estamos tratando.</li>
                  <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
                  <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
                  <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
                  <li><strong>Portabilidad:</strong> recibir los datos en formato estructurado.</li>
                  <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, puede enviar una solicitud a 
             adjuntando copia de su DNI o documento identificativo.
                </p>
                <p className="mt-4">
                  Asimismo, tiene derecho a presentar una reclamación ante la 
                  Agencia Española de Protección de Datos (www.aepd.es) si considera 
                  que sus derechos no han sido atendidos correctamente.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  7. MEDIDAS DE SEGURIDAD
                </h2>
                <p>
                  Carset España, S.L. ha adoptado las medidas técnicas y organizativas 
                  necesarias para garantizar la seguridad de los datos personales y 
                  evitar su alteración, pérdida, tratamiento o acceso no autorizado, 
                  conforme al estado de la tecnología, la naturaleza de los datos 
                  almacenados y los riesgos a que están expuestos.
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

export default Privacidad;
