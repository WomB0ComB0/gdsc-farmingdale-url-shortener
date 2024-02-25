export const Legal = () => {
  return (
    <style>
      {`
          h1:not(nav li):not(footer li), h2:not(nav li):not(footer li), h3:not(nav li):not(footer li) {
            font-weight: 400;
            margin: 0;
            padding: 0;
          }

          h1:not(nav li):not(footer li) {
            font-size: 2.5em;
            margin-bottom: 0.4em;
          }

          h2:not(nav li):not(footer li) {
            font-size: 2em;
            margin-bottom: 0.3em;
          }

          h3:not(nav li):not(footer li) {
            font-size: 1.5em;
            margin-bottom: 0.2em;
          }

          p:not(nav li):not(footer li) {
            margin: 0 0 0.7em 0;
            padding: 0;
            line-height: 1.5em;
            text-indent: 1em;
          }

          ul:not(nav li):not(footer li) {
            margin: 0;
            padding: 0;
          }

          li:not(nav li):not(footer li) {
            margin: 0 0 0.2em 0;
            padding: 0;
            line-height: 1.5em;
            text-indent: 1em;
          }

          li:not(nav li):not(footer li)::before {
            content: "\\2192\\00a0";
          }
        `}
    </style>
  )
}