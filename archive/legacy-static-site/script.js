const form = document.getElementById("waitlist-form");
const status = document.getElementById("form-status");
const button = form.querySelector('button[type="submit"]');
const config = window.ATTENSTRA_CONFIG || {};

function setStatus(message, tone) {
  status.textContent = message;
  status.dataset.tone = tone || "";
}

function buttondownAction(username) {
  return `https://buttondown.com/api/emails/embed-subscribe/${username}`;
}

function configureForm() {
  const username = String(config.buttondownUsername || "").trim();

  if (username) {
    form.action = buttondownAction(username);
    setStatus("", "");
    return true;
  }

  setStatus(
    "Buttondown is not configured yet. Set the Buttondown username in site-config.js before launch.",
    "error"
  );
  return false;
}

function openMailFallback(emailAddress, payload) {
  const subject = encodeURIComponent("Attenstra.ai update list request");
  const body = encodeURIComponent(
    [`Email: ${payload.email}`, "Consent: yes", `Source: ${payload.source}`].join("\n")
  );
  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
}

function submitFallback(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") || "").trim();
  const consent = Boolean(formData.get("consent"));
  const contactEmail = form.dataset.contactEmail || "hello@attenstra.ai";

  if (!email) {
    setStatus("Enter an email address before submitting.", "error");
    return;
  }

  if (!consent) {
    setStatus("You must confirm that you want email updates.", "error");
    return;
  }

  openMailFallback(contactEmail, {
    email,
    source: "attenstra.ai",
  });
  setStatus(
    "Buttondown is not configured yet, so your mail client was opened with a pre-filled subscription request.",
    "success"
  );
}

form.addEventListener("submit", (event) => {
  const isConfigured = configureForm();

  if (!isConfigured) {
    button.disabled = false;
    submitFallback(event);
    return;
  }

  const email = String(new FormData(form).get("email") || "").trim();
  const consent = Boolean(new FormData(form).get("consent"));

  if (!email) {
    event.preventDefault();
    setStatus("Enter an email address before submitting.", "error");
    return;
  }

  if (!consent) {
    event.preventDefault();
    setStatus("You must confirm that you want email updates.", "error");
    return;
  }

  button.disabled = true;
  setStatus("Submitting...", "");
});

configureForm();
