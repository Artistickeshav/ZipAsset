import zipAssetLogo from "../assets/zipasset-logo.png";
import zipAssetLogoDark from "../assets/zipasset-logo-dark.png";

function BrandLogo({ className = "", imgClassName = "", alt = "ZipAsset", variant = "dark" }) {
  const logoSrc = variant === "light" ? zipAssetLogo : zipAssetLogoDark;
  return (
    <span className={`inline-flex items-center ${className}`.trim()}>
      <img
        src={logoSrc}
        alt={alt}
        className={`block h-auto w-auto max-w-full object-contain ${imgClassName}`.trim()}
      />
    </span>
  );
}

export default BrandLogo;
