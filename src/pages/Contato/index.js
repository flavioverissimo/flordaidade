import Contact from "./contact";
import Hours from "./hours";

export default function Contato() {
  return (
    <section className="lg:flex py/32 py-32">
      <Hours />
      <Contact />
    </section>
  );
}
