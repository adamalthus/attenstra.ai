type BrandFooterProps = {
  src: string;
  alt: string;
};

export function BrandFooter({ src, alt }: BrandFooterProps) {
  return (
    <div className="brand-footer">
      <img src={src} alt={alt} className="brand-logo" />
    </div>
  );
}
