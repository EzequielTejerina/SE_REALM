import React from 'react';
 
 
class FooterSE extends React.Component {
 
  render() {
 
    return (
 
        <footer className="container-fluid">
            <p>&copy; {(new Date().getFullYear())} SE REALM, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
 
    )
    
  }
 
}
 
export default FooterSE;