import "./style.scss";
const header_container = document.querySelector(".header");
const footer_container = document.querySelector(".footer");
const header = `
<div class="header__container">
            <a href="/index.html">
                <div class="header__logo">
                    <h1>PetStory online</h1>
                    <div class="logo__icon"></div>
                </div>
            </a>

            <nav class="header__nav">
                <ul class="header__menu">
                    <li class="menu__item"><a class="menu-links links-active" href="/index.html">About</a>
                    </li>
                    <li class="menu__item"><a class="menu-links" href="">Map</a>
                    </li>
                    <li class="menu__item"><a class="menu-links" href="">Zoos</a>
                    </li>
                    <li class="menu__item"><a class="menu-links" href="/donate.html">Donate</a>
                    </li>
                    <li class="menu__item"><a class="menu-links" href="">Contact us</a></li>
                </ul>
            </nav>

            <div class="header__designed">
                <a class="menu-links" href="https://www.figma.com/file/jfEFwkXVj1WRq7sUHDr8os/PetStory-online"
                    target="_blank">Designed by
                    ©</a>

            </div>

        </div>
`;

const footer = `
<div class="footer__container">
<div class="footer__container_left">
    <div class="footer_icon">
        <a href="/index.html">
            <div class="header__logo">
                <h1>PetStory online</h1>
                <div class="logo__icon"></div>
            </div>
        </a>
    </div>

    <div class="footer__button">
        <button class="buttons square-buttons">donate for volunteers</button>
    </div>

    <div class="footer__container_social">
        <div class="container_social">
            <div class="social_circle">
                <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 2.75008H6.4C5.29832 2.75008 5.33342 3.14316 5.33342 3.8619V4.99991H8L7.46658 8H5.33342V16H1.6V8H0V4.99991H1.6V3.58692C1.6 1.33782 2.79742 0 5.62684 0H8V2.75008Z"
                        fill="white" />
                </svg>
            </div>
            <p class="social_name">Facebook</p>
        </div>

        <div class="container_social">
            <div class="social_circle">
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 1.65713C15.4114 1.93821 14.7787 2.12837 14.1147 2.21377C14.7923 1.77623 15.313 1.08372 15.5579 0.258267C14.9237 0.6633 14.2211 0.957523 13.4734 1.11604C12.8747 0.429062 12.0216 0 11.0774 0C9.26464 0 7.79488 1.58227 7.79488 3.53414C7.79488 3.81108 7.82384 4.08093 7.87984 4.33971C5.15168 4.19226 2.73296 2.7851 1.11392 0.646704C0.83136 1.16877 0.66944 1.77589 0.66944 2.42363C0.66944 3.64979 1.24896 4.73161 2.12976 5.36552C1.59168 5.34702 1.08544 5.18816 0.64304 4.92349C0.64272 4.93801 0.64272 4.95288 0.64272 4.96775C0.64272 6.68019 1.77424 8.10861 3.27584 8.43343C3.00048 8.51416 2.7104 8.55755 2.41104 8.55755C2.19952 8.55755 1.99392 8.53525 1.79344 8.49394C2.2112 9.89798 3.42336 10.92 4.85984 10.9485C3.73648 11.8964 2.32096 12.4615 0.78304 12.4615C0.51808 12.4615 0.2568 12.4447 0 12.412C1.45264 13.4148 3.17824 14 5.03184 14C11.0698 14 14.3715 8.61443 14.3715 3.94401C14.3715 3.79068 14.3683 3.63821 14.3621 3.4866C15.0035 2.98839 15.56 2.36589 16 1.65713Z"
                        fill="white" />
                </svg>
            </div>
            <p class="social_name">Twitter</p>
        </div>

        <div class="container_social">
            <div class="social_circle">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.70172 0.0482874C3.8501 0.0870031 3.26863 0.222151 2.75974 0.420015C2.23357 0.624308 1.78768 0.898032 1.34294 1.34276C0.897913 1.78749 0.624468 2.23351 0.420169 2.75967C0.2223 3.26869 0.0870054 3.85014 0.0482887 4.7016C0.00928629 5.55491 0 5.82721 0 8C0 10.1728 0.00928629 10.4449 0.0482887 11.2984C0.0870054 12.1499 0.2223 12.7313 0.420169 13.24C0.624468 13.7662 0.897913 14.2125 1.34294 14.6571C1.78768 15.102 2.23357 15.3754 2.75974 15.58C3.26863 15.7779 3.8501 15.913 4.70172 15.9517C5.55506 15.9907 5.82736 16 8.00007 16C10.1729 16 10.4452 15.9907 11.2986 15.9517C12.15 15.913 12.7315 15.7779 13.2407 15.58C13.7664 15.3754 14.2127 15.102 14.6575 14.6571C15.1022 14.2125 15.3755 13.7662 15.5801 13.24C15.7778 12.7313 15.9133 12.1499 15.952 11.2984C15.991 10.4449 16 10.1728 16 8C16 5.82721 15.991 5.55491 15.952 4.7016C15.9133 3.85014 15.7778 3.26869 15.5801 2.75967C15.3755 2.23351 15.1022 1.78749 14.6575 1.34276C14.2127 0.898032 13.7664 0.624308 13.2407 0.420015C12.7315 0.222151 12.15 0.0870031 11.2986 0.0482874C10.4452 0.00942891 10.1729 0 8.00007 0C5.82736 0 5.55506 0.00942891 4.70172 0.0482874ZM4.76747 14.5116C3.98742 14.4761 3.56382 14.3461 3.28209 14.2364C2.9085 14.091 2.6422 13.9177 2.36218 13.6378C2.08216 13.358 1.90886 13.0915 1.76357 12.7181C1.65399 12.4362 1.52384 12.0126 1.48812 11.2326C1.44969 10.389 1.44141 10.1359 1.44141 7.99992C1.44141 5.8637 1.44969 5.61083 1.48812 4.76709C1.52384 3.9872 1.65399 3.56362 1.76357 3.28175C1.90886 2.90831 2.08216 2.64173 2.36218 2.36186C2.6422 2.08199 2.9085 1.90841 3.28209 1.76355C3.56382 1.65398 3.98742 1.52369 4.76747 1.48797C5.61095 1.44954 5.86411 1.4414 8.0001 1.4414C10.1361 1.4414 10.3891 1.44954 11.233 1.48797C12.0128 1.52369 12.4364 1.65398 12.7184 1.76355C13.0918 1.90841 13.3583 2.08199 13.6382 2.36186C13.9182 2.64173 14.0913 2.90831 14.2366 3.28175C14.3462 3.56362 14.4765 3.9872 14.5122 4.76709C14.5507 5.61083 14.5585 5.8637 14.5585 7.99992C14.5585 10.1359 14.5507 10.389 14.5122 11.2326C14.4765 12.0126 14.3462 12.4362 14.2366 12.7181C14.0913 13.0915 13.9182 13.358 13.6382 13.6378C13.3583 13.9177 13.0918 14.091 12.7184 14.2364C12.4364 14.3461 12.0128 14.4761 11.233 14.5116C10.3894 14.5503 10.1364 14.5583 8.0001 14.5583C5.86411 14.5583 5.61095 14.5503 4.76747 14.5116ZM11.3105 3.72943C11.3105 4.25945 11.7403 4.68947 12.2706 4.68947C12.8008 4.68947 13.2305 4.25945 13.2305 3.72943C13.2305 3.19913 12.8008 2.76954 12.2706 2.76954C11.7403 2.76954 11.3105 3.19913 11.3105 3.72943ZM3.8916 8.00017C3.8916 10.2691 5.731 12.1082 7.99986 12.1082C10.2689 12.1082 12.108 10.2691 12.108 8.00017C12.108 5.73124 10.2689 3.89203 7.99986 3.89203C5.731 3.89203 3.8916 5.73124 3.8916 8.00017ZM5.33398 8.00009C5.33398 6.52732 6.52777 5.33343 8.00058 5.33343C9.47339 5.33343 10.6673 6.52732 10.6673 8.00009C10.6673 9.473 9.47339 10.6668 8.00058 10.6668C6.52777 10.6668 5.33398 9.473 5.33398 8.00009Z"
                        fill="white" />
                </svg>
            </div>
            <p class="social_name">Instagram</p>
        </div>

        <div class="container_social">
            <div class="social_circle">
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.0062 5.77285L7.4938 3.51719C7.4938 3.51719 6.24039 2.94726 6.24039 4.01864V9.03097C6.24039 9.03097 6.26358 9.7955 7.4938 9.28148C8.34978 8.92371 12.0062 7.02582 12.0062 7.02582C12.0062 7.02582 12.9391 6.42816 12.0062 5.77285ZM17.5213 10.7852C16.9624 12.3749 15.7669 12.5797 14.7637 12.7901C13.2852 13.1002 3.77237 13.0612 2.22922 12.5394C1.26706 12.2141 0.675032 12.0741 0.223857 9.78271C-0.0650079 8.3165 -0.0840778 4.00304 0.223857 2.51494C0.52204 1.07408 1.27096 0.397534 2.73067 0.259278C6.65148 -0.112151 13.205 -0.0597085 15.265 0.259278C17.1748 0.554861 17.5739 1.69385 17.772 2.76545C18.0927 4.50037 18.1304 9.05243 17.5213 10.7852Z"
                        fill="white" />
                </svg>
            </div>
            <p class="social_name">YouTube</p>
        </div>

    </div>


</div>

<div class="footer__container_rigth">

    <div class="footer__navigation_container">
        <ul class="footer__menu">
            <li class="menu__item"><a class="menu-links links-active" href="/index.html">About</a>
            </li>
            <li class="menu__item"><a class="menu-links" href="">Map</a>
            </li>
            <li class="menu__item"><a class="menu-links" href="">Zoos</a>
            </li>
            <!-- TODO- настроить ссылку на страницу DONATE -->
            <li class="menu__item"><a class="menu-links" href="">Contact us</a></li>
        </ul>
    </div>

    <div class="footer__rigth-wrapper">
        <div class="footer__designed">
            <p class="designed">Designed by Alisa Samborskaya</p>
            <p>©RSSchool & ©Yem Digital 2021</p>
        </div>


        <form action="/" class="footer__subscribe">
            <label for="email">Subscribe to our news</label>
            <div class="subscribe_input_container">
                <input type="email" id="email" placeholder="Enter your email">
                <button class="button_news">Submit</button>
        </form>
    </div>


</div>
</div>

</div>
`;

function addHeaderAndFooter() {
  header_container.innerHTML = header;
  footer_container.innerHTML = footer;
}

addHeaderAndFooter();
