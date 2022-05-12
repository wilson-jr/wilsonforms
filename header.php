<header>
    <style>
      /* #intro { background: url("https://mdbootstrap.com/img/new/fluid/city/018.jpg"); height: 100vh; } */
      @media (min-width: 992px) { #intro { margin-top: -58.59px; } }
      .navbar .nav-link { color: #fff !important; }
      body::-webkit-scrollbar { display: none; }
      video {
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        top: -45;
        left: 0;
        position: fixed;
      }
    </style>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style="z-index: 2000;">
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a class="navbar-brand nav-link" href="https://fastforms.vercel.app/">
          <strong>FF</strong>
        </a>
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="https://fastforms.vercel.app/">Главная</a>
            </li>
            <li class="nav-item">
              <div class="dropdown">
                <a class="nav-link dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-mdb-toggle="dropdown" aria-expanded="false" >Какие формы доступны? </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="pages/fstd">FSTD</a></li>
                  <li><a class="dropdown-item disabled" href="#">LSPD</a></li>
                  <li><a class="dropdown-item disabled" href="#">LSSD</a></li>
                </ul>
              </div>
              <!-- <a class="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                target="_blank"></a> -->
            </li>
            <!-- <li class="nav-item"><a class="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Download MDB UI KIT</a></li> -->
          </ul>

          <ul class="navbar-nav d-flex flex-row">
            <!-- Icons -->
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://t.me/wilsonsportfolio" rel="nofollow"
                target="_blank">
                <i class="fab fa-telegram"></i></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>