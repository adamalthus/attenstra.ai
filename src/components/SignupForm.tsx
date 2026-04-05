type SignupFormProps = {
  action: string;
  source: string;
  tag: string;
  emailPlaceholder: string;
  ctaLabel: string;
};

export function SignupForm({
  action,
  source,
  tag,
  emailPlaceholder,
  ctaLabel,
}: SignupFormProps) {
  return (
    <div className="signup-wrap">
      <form action={action} method="post" className="signup">
        <input
          type="email"
          name="email"
          placeholder={emailPlaceholder}
          required
          className="email-input"
        />
        <input type="hidden" name="tag" value={tag} />
        <input type="hidden" name="metadata__source" value={source} />
        <input type="hidden" name="embed" value="1" />
        <button type="submit" className="signup-button">
          {ctaLabel}
        </button>
      </form>
    </div>
  );
}
