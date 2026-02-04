import Layout from "@/components/layout/Layout";

const CondicionesVenta = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="carset-container">
          <div className="max-w-4xl mx-auto">
            <div className="carset-divider mb-4" />
            <h1 className="carset-heading carset-text-gradient mb-8">
              CONDICIONES DE VENTA
            </h1>

            <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground">
              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  1. INFORMACIÓN GENERAL
                </h2>
                <p>
                  Las presentes Condiciones Generales de Venta regulan la relación 
                  comercial entre Carset España, S.L. (en adelante, "Carset") y los 
                  usuarios que realicen compras a través de la tienda online 
                  disponible en www.carset.es.
                </p>
                <p className="mt-4">
                  Al realizar una compra, el usuario declara haber leído, entendido 
                  y aceptado las presentes condiciones.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  2. PRODUCTOS Y PRECIOS
                </h2>
                <p>
                  Los productos ofrecidos en nuestra tienda online se describen con 
                  la mayor precisión posible. Las imágenes son orientativas y pueden 
                  variar ligeramente del producto real.
                </p>
                <p className="mt-4">
                  Todos los precios indicados incluyen el IVA aplicable y están 
                  expresados en euros (€). Los gastos de envío se indicarán de 
                  forma separada antes de confirmar la compra.
                </p>
                <p className="mt-4">
                  Carset se reserva el derecho de modificar los precios en cualquier 
                  momento, siendo aplicable el precio vigente en el momento de 
                  realizar el pedido.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  3. PROCESO DE COMPRA
                </h2>
                <p>Para realizar una compra:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-4">
                  <li>Seleccione los productos deseados y añádalos al carrito.</li>
                  <li>Acceda al carrito y revise su pedido.</li>
                  <li>Introduzca sus datos de envío y facturación.</li>
                  <li>Seleccione el método de pago.</li>
                  <li>Confirme el pedido.</li>
                </ol>
                <p className="mt-4">
                  Una vez confirmado el pedido, recibirá un email de confirmación 
                  con los detalles del mismo.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  4. MÉTODOS DE PAGO
                </h2>
                <p>Aceptamos los siguientes métodos de pago:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Tarjeta de crédito/débito (Visa, Mastercard, American Express)</li>
                  <li>PayPal</li>
                  <li>Transferencia bancaria</li>
                  <li>Bizum</li>
                </ul>
                <p className="mt-4">
                  Todos los pagos se procesan de forma segura a través de 
                  pasarelas de pago certificadas.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  5. ENVÍOS
                </h2>
                <p>
                  Realizamos envíos a toda España peninsular. Los plazos de entrega son:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Envío estándar:</strong> 3-5 días laborables</li>
                  <li><strong>Envío express:</strong> 24-48 horas</li>
                </ul>
                <p className="mt-4">
                  El envío es gratuito para pedidos superiores a 200€. Para pedidos 
                  inferiores, los gastos de envío se calcularán en función del destino 
                  y el peso del pedido.
                </p>
                <p className="mt-4">
                  Para envíos a Baleares, Canarias, Ceuta y Melilla, consultar 
                  condiciones especiales.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  6. DERECHO DE DESISTIMIENTO
                </h2>
                <p>
                  De conformidad con la legislación vigente, el usuario tiene derecho 
                  a desistir del contrato en un plazo de <strong>14 días naturales</strong> desde 
                  la recepción del producto, sin necesidad de indicar el motivo y 
                  sin incurrir en coste alguno (salvo los gastos de devolución).
                </p>
                <p className="mt-4">
                  Para ejercer el derecho de desistimiento, deberá notificarnos 
                  su decisión mediante declaración inequívoca (por ejemplo, una 
                  carta enviada por correo postal o correo electrónico) a:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Email:</strong> devoluciones@carset.es</li>
                  <li><strong>Dirección:</strong> Calle Ejemplo 123, 28001 Madrid</li>
                </ul>
                <p className="mt-4">
                  El producto deberá devolverse en su embalaje original, sin usar 
                  y en perfecto estado. Una vez recibido y verificado el estado del 
                  producto, procederemos al reembolso del importe en un plazo máximo 
                  de 14 días.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  7. GARANTÍA LEGAL
                </h2>
                <p>
                  Todos nuestros productos están cubiertos por la <strong>garantía legal 
                  de 2 años</strong> para productos nuevos, conforme a la normativa española 
                  y europea de protección al consumidor.
                </p>
                <p className="mt-4">
                  Durante este período, si el producto presenta algún defecto de 
                  conformidad que existiera en el momento de la entrega, el usuario 
                  tendrá derecho a la reparación, sustitución, rebaja del precio o 
                  resolución del contrato, según corresponda.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  8. ATENCIÓN AL CLIENTE
                </h2>
                <p>
                  Para cualquier consulta relacionada con su pedido, puede 
                  contactarnos a través de:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong>Email:</strong> soporte@carset.es</li>
                  <li><strong>Teléfono:</strong> +34 900 123 456</li>
                  <li><strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  9. RESOLUCIÓN DE CONFLICTOS
                </h2>
                <p>
                  En caso de controversia, el usuario puede acudir a la plataforma 
                  europea de resolución de litigios en línea (ODR) disponible en:
                </p>
                <p className="mt-4">
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-4">
                  10. LEGISLACIÓN APLICABLE
                </h2>
                <p>
                  Las presentes condiciones se rigen por la legislación española. 
                  Para cualquier controversia que pudiera surgir, las partes se 
                  someten a los Juzgados y Tribunales del domicilio del consumidor, 
                  conforme a la normativa aplicable.
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

export default CondicionesVenta;
