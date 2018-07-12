import styled from 'react-emotion'

export const Wrapper = styled('div')`
  word-wrap: break-word;

  h1, h2, h3, h4 {
    font-weight: bold;
    text-decoration: none;
    margin: 0;
  }

  a:first-of-type {
    margin-top: 0;
  }

  p {
    line-height: 1.7rem;
  }

  ul {
    list-style: disc;
    padding-left: 2rem;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    padding-left: 1rem;
    font-style: italic;
  }

  pre {
    overflow-x: scroll;
    border-radius: 4px;
    border-radius: 3px;
    line-height: 19px;
    padding: .25rem;
  }

  // We need this since react-syntax-highlighter adds a pre
  pre pre { margin: 0; }

  code {
    border-radius: 4px;
    padding: 0 .15rem;
    display: inline-block;
    word-break: break-all;
  }

  pre code {
    border: none;
    word-break: break-all;
    display: block;
    background: inherit;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  table th {
    font-weight: bold;
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: .5rem;
    margin-bottom: 2px;
  }

  hr {
    border-bottom-color: #eee;
    height: .25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e7e7e7;
    border: 0;
  }

  .syntax-shell {
    padding-left: 5px !important;
  }

  .syntax-shell .react-syntax-highlighter-line-number {
    visibility: hidden;
    position: absolute;
    height: 0;
  }

  .syntax-shell .react-syntax-highlighter-line-number::after {
    content: "$";
    visibility: visible;
    left: 0px;
    top: -4px;
    position: absolute;
  }
`
