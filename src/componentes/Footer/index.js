import React from 'react';


function Footer() {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="text-muted">&copy; 2021 Miranda Web in Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <a href="https://www.facebook.com/mirandaweb77/?ref=settings" target="_blank"><i class="fa fa-facebook fa-2"></i> </a>
          <a href="https://www.instagram.com/fabricio_n_miranda/?ref=settings" target="_blank"><i class="fa fa-instagram fa-2"></i> </a>
          <a href="https://twitter.com/FabricioNeryde1/?ref=settings" target="_blank"><i class="fa fa-twitterfa-2"></i></a>
          <a href="https://www.linkedin.com/in/fabr%C3%ADcio-miranda-87319a137/" target="_blank"><i class="fa fa-linkedin fa-2"></i></a>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;