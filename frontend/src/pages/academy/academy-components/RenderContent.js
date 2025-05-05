import React from "react";
import { AlertTriangle } from "lucide-react";
import { formatCode } from "@/utils/formatCode";

export const RenderContent = ({ content }) => {
  if (!content || !Array.isArray(content)) {
    console.warn("RenderContent: content není pole", content);
    return null;
  }

  return content.map((block, index) => {
    if (!block || !block.type) {
      console.warn("Invalid block:", block);
      return null;
    }

    switch (block.type) {
      case "paragraph":
        return (
          <div key={index} className="academy-paragraph-container">
            <p className="academy-content-text">{block.text}</p>
          </div>
        );

      case "bulletList":
        return (
          <div key={index} className="academy-list-container">
            <ul className="academy-bullet-list">
              {block.items.map((item, i) =>
                typeof item === "string" ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i} className="academy-parent-item">
                    <div className="academy-item-text">{item.text}</div>
                    {item.subitems && (
                      <ul className="academy-nested-list">
                        {item.subitems.map((sub, j) => (
                          <li key={j}>{sub}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        );

      case "section":
        return (
          <div key={index} className="academy-section-block">
            <div className="academy-section-header">
              <h4 className="academy-section-title">{block.title}</h4>
            </div>
            <ul className="academy-dash-list">
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case "code":
        return (
          <figure key={index} className="academy-code-block">
            <pre>
              <code
                dangerouslySetInnerHTML={{ __html: formatCode(block.code) }}
              ></code>
            </pre>
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        );
      case "tip":
        return (
          <div key={index} className="academy-tip-block">
            <div className="academy-tip-header">
              <AlertTriangle className="academy-icon" size={16} />
              <p className="academy-tip-title">{block.title}</p>
            </div>
            <p className="academy-tip-text">{block.text}</p>
          </div>
        );

      default:
        console.warn(`Unknown block type: ${block.type}`);
        return null;
    }
  });
};
