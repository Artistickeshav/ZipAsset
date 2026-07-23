import zipInvestLogo from "../assets/zipinvest-logo.png";

function BrandLogo({ className = "", imgClassName = "", alt = "ZipInvest" }) {
  return (
    <span className={`inline-flex items-center ${className}`.trim()}>
      <img
        src={zipInvestLogo}
        alt={alt}
        className={`block h-auto w-auto max-w-full object-contain ${imgClassName}`.trim()}
      />
    </span>
  );
}

export default BrandLogo;
