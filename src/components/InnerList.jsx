import { contentSets } from "../javascript/contentData.js";

function InnerList({ itemKey }) {
  const listData = contentSets[itemKey];

  return (
    <div className="inner-list">
      <ul className="link-ul">
        {listData.links.map((link, k) => (
          <li className="list-link">
            <a key={k} href={link.href}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      {listData.lists.map((list, i) => (
        <ul className="list-ul" key={i}>
          {list.map((listItem, j) => (
            <li className="inner-item" key={j}>
              <a href={listItem.href}>{listItem.text}</a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default InnerList;
