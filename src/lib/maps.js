export function getGoogleMapEmbedUrl(language = "en") {
  const mapLanguage = language === "el" ? "el" : "en";

  return `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3187.875360328871!2d24.7193059!3d36.9650335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1498f35fd5ec2a7b%3A0x8596d9af3bea712c!2sCycladic%20Lodge%20Sifnos!5e0!3m2!1s${mapLanguage}!2sgr!4v1774348870688!5m2!1s${mapLanguage}!2sgr`;
}
