export const Legal = () => {
  return (
    <style>
      {`
          h1, h2, h3 {
            font-weight: 400;
            margin: 0;
            padding: 0;
          }

          h1 {
            font-size: 2.5em;
            margin-bottom: 0.4em;
          }

          h2 {
            font-size: 2em;
            margin-bottom: 0.3em;
          }

          h3 {
            font-size: 1.5em;
            margin-bottom: 0.2em;
          }

          p {
            margin: 0 0 0.7em 0;
            padding: 0;
            line-height: 1.5em;
            text-indent: 1em;
          }

          ul {
            margin: 0;
            padding: 0;
          }

          li {
            margin: 0 0 0.2em 0;
            padding: 0;
            line-height: 1.5em;
            text-indent: 1em;
          }

          li::before {
            content: "\\2192\\00a0";
          }
        `}
    </style>
  )
}