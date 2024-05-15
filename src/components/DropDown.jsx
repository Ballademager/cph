import "./DropDown.css";

export default function DropDown({ item }) {
  const flyinformationContent = {
    title: "Flyinformation",
    description: "Find nemt alle afgange og ankomster og få et overblik over flyselskaber.",
    links: [{ text: "Find dit fly", href: "" }],
    lists: [
      [
        { text: "Flyinformation", href: "" },
        { text: "Afgange", href: "" },
        { text: "Ankomster", href: "" },
        { text: "Transfer", href: "" },
        { text: "Indenrigsflyvninger", href: "" },
        { text: "Destinationer", href: "" },
      ],
      [
        { text: "Selskaber/Partnere", href: "" },
        { text: "Flyselskaber", href: "" },
        { text: "Handlingselskaber", href: "" },
      ],
      [
        { text: "", href: "" },
        { text: "", href: "" },
        { text: "", href: "" },
      ],
    ],
  };

  const praktiskContent = {
    title: "Praktisk",
    description: "Få det fulde overblik og information om alt praktisk i lufthavnen - fra pas- og visumregler til håndtering af bagage.",
    links: [{ text: "Find dit fly", href: "" }],
    lists: [
      [
        { text: "I lufthavnen", href: "" },
        { text: "Kundeservice", href: "/" },
        { text: "Gode råd til rejsende", href: "" },
        { text: "Check-in", href: "" },
        { text: "Bagage", href: "" },
        { text: "Sikkerhedkontrol", href: "" },
      ],
      [
        { text: "Transport", href: "" },
        { text: "Book parkering", href: "" },
        { text: "Transport til lufthavnen", href: "" },
        { text: "Bybiler", href: "" },
        { text: "Afsætning og afhentning", href: "" },
        { text: "Handicapparkering", href: "" },
      ],
      [
        { text: "Services", href: "" },
        { text: "Lounges & workspaces", href: "" },
        { text: "Hotel", href: "" },
        { text: "Hittegodskontor", href: "" },
        { text: "VIP-service", href: "" },
        { text: "Rejsende med handicap", href: "" },
      ],
    ],
  };

  const parkeringContent = {
    title: "Parkering",
    description: "Når parkeringen er på plads, kan rejsen starte. Book parkering online og spar både tid og penge. Tjek alle muligheder og priser her.",
    links: [
      { text: "Book parkering", href: "" },
      { text: "Handicapparkering", href: "" },
      { text: "Terminalbus", href: "" },
    ],
    lists: [
      [
        { text: "Korttidsparkering", href: "" },
        { text: "Afhentning", href: "" },
        { text: "Afsætning", href: "" },
        { text: "Kiss & Fly", href: "" },
      ],
      [
        { text: "Parkering i lufthavnen", href: "" },
        { text: "Priser og parkeringsmuligheder", href: "" },
        { text: "Kort over p-huse", href: "" },
        { text: "Parkering med onlinereservation", href: "" },
        { text: "Elbilparkering", href: "" },
        { text: "Nummerpladegenkendelse", href: "" },
        { text: "Parkering med trailer, campingvogn...", href: "" },
        { text: "Terminalbus", href: "" },
      ],
      [
        { text: "Selvbetjening", href: "" },
        {
          text: "Min reservation (se, rediger eller annuller parkering)",
          href: "",
        },
        { text: "Book parkering", href: "" },
        { text: "Bestil handicapparkering", href: "" },
      ],
    ],
  };

  const butikkerSpisestederContent = {
    title: "Butikker & Spisesteder",
    description: "Nyd tiden i lufthavnen med god mad og fantastisk shopping. Her findes der noget for enhver smag!",
    links: [{ text: "TAX FREE", href: "" }],
    lists: [
      [
        { text: "Butikker", href: "" },
        { text: "Accessories & tasker", href: "" },
        { text: "Bolig", href: "" },
        { text: "Fashion", href: "" },
        { text: "Elektronik", href: "" },
        { text: "Souvenirs & gaver", href: "" },
      ],
      [
        { text: "Spisesteder", href: "" },
        { text: "Restaurant", href: "" },
        { text: "Café", href: "" },
        { text: "Kiosk", href: "" },
        { text: "Familie", href: "" },
        { text: "Bestil mad online", href: "" },
      ],
      [{ text: "Services" }, { text: "Home Delivery", href: "" }, { text: "Valuta & moms", href: "" }, { text: "Lounges & workspaces", href: "" }, { text: "Airport Doctor", href: "" }],
    ],
  };

  let content;
  switch (item) {
    case "Flyinformation":
      content = flyinformationContent;
      break;
    case "Praktisk":
      content = praktiskContent;
      break;
    case "Parkering":
      content = parkeringContent;
      break;
    case "Butikker & Spisesteder":
      content = butikkerSpisestederContent;
      break;
    default:
      content = flyinformationContent;
  }

  return (
    <nav className="dropdown-menu" onMouseEnter={() => {}} onMouseLeave={() => {}}>
      <div className="dropdown-text">
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <div className="link-container">
          {content.links.map((link, index) => (
            <a key={index} href={link.href}>
              <span>&#x2192;</span> {link.text}
            </a>
          ))}
        </div>
      </div>
      {content.lists.map((list, index) => (
        <ul className="dropdown-list" key={index}>
          {list.map((item, i) => (
            <li key={i}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
