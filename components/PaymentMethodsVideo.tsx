export function PaymentMethodsVideo({
  label = "CARD · CASH · RECEIPT"
}: {
  ariaLabel?: string;
  label?: string;
}) {
  return (
    <section
      aria-label="Payment methods"
      className="
        relative
        left-1/2
        w-[100vw]
        -translate-x-1/2
        overflow-hidden
        bg-[#050505]
      "
    >
      <div
        className="
          relative
          w-[100vw]
          overflow-hidden
          bg-[#050505]
          aspect-[16/7]
          md:aspect-[16/6]
        "
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/payment-method-poster.jpg"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-contain
            bg-[#050505]
            md:object-cover
          "
        >
          <source src="/videos/payment-method-loop.mp4" type="video/mp4" />
        </video>

        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0.75)_100%)]" />

        <div
          className="
            pointer-events-none
            absolute
            left-5
            top-5
            rounded-full
            border
            border-white/10
            bg-black/25
            px-4
            py-2
            text-xs
            font-medium
            uppercase
            tracking-[0.24em]
            text-white/55
            backdrop-blur-md

            md:left-10
            md:top-10
          "
        >
          {label}
        </div>
      </div>
    </section>
  );
}
