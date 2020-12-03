import * as React from 'react';

// class Footer extends React.Component<Props> {
//   render() {
//     return (
//       <h2 className="footer">Goodbye {this.props.title} {this.props.name}</h2>
//     )
//   }
// }

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer">Copyright 2020 Ian G @ Techtonic</footer>
  )
}

export default Footer;
