import eventImg from "../../../assets/event-img1.jpeg";
import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <div>
      {/*
       */}
      <div className="payment row p-4 justify-content-around">
        <div className="col-md-6 col-lg-6">
          <div className=" border rounded p-4 d-flex gap-3">
            <div className="d-flex flex-column align-items-center justify-content-center">
              <svg
                width="39"
                height="24"
                viewBox="0 0 39 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5838 20.5952C17.5979 22.3089 15.0218 23.3434 12.2069 23.3434C5.92582 23.3434 0.833984 18.1925 0.833984 11.8385C0.833984 5.48444 5.92582 0.333496 12.2069 0.333496C15.0219 0.333496 17.598 1.36806 19.5839 3.08182C21.5698 1.36809 24.1459 0.33355 26.9608 0.33355C33.2419 0.33355 38.3337 5.4845 38.3337 11.8385C38.3337 18.1925 33.2419 23.3435 26.9608 23.3435C24.1459 23.3435 21.5698 22.3089 19.5838 20.5952Z"
                  fill="#ED0006"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.584 20.5951C22.0294 18.4849 23.58 15.3449 23.58 11.8385C23.58 8.33206 22.0294 5.19202 19.584 3.0818C21.5699 1.36805 24.146 0.333496 26.9609 0.333496C33.242 0.333496 38.3339 5.48444 38.3339 11.8385C38.3339 18.1925 33.242 23.3434 26.9609 23.3434C24.146 23.3434 21.5699 22.3089 19.584 20.5951Z"
                  fill="#F9A000"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.5849 20.5954C22.0302 18.4851 23.5808 15.3451 23.5808 11.8387C23.5808 8.33229 22.0302 5.19225 19.5849 3.08203C17.1395 5.19225 15.5889 8.33229 15.5889 11.8387C15.5889 15.3451 17.1395 18.4851 19.5849 20.5954Z"
                  fill="#FF5E00"
                />
              </svg>

              <svg
                width="59"
                height="40"
                viewBox="0 0 59 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7097 27.0967H14.1759L11.5259 16.987C11.4001 16.5219 11.1331 16.1108 10.7402 15.917C9.75983 15.43 8.67951 15.0425 7.50098 14.8471V14.4578H13.1938C13.9794 14.4578 14.5687 15.0425 14.6669 15.7215L16.0419 23.0141L19.574 14.4578H23.0097L17.7097 27.0967ZM24.9732 27.0967H21.6357L24.3839 14.4578H27.7214L24.9732 27.0967ZM32.0399 17.9597C32.1381 17.2789 32.7274 16.8897 33.4149 16.8897C34.4952 16.792 35.672 16.9874 36.6541 17.4727L37.2434 14.7515C36.2612 14.3623 35.1809 14.1668 34.2005 14.1668C30.9613 14.1668 28.6043 15.9175 28.6043 18.3472C28.6043 20.1956 30.2738 21.1661 31.4524 21.7508C32.7274 22.3338 33.2184 22.7231 33.1202 23.3061C33.1202 24.1805 32.1381 24.5698 31.1577 24.5698C29.9792 24.5698 28.8007 24.2783 27.7221 23.7913L27.1328 26.5142C28.3113 26.9995 29.5864 27.1949 30.7649 27.1949C34.397 27.291 36.6541 25.542 36.6541 22.9168C36.6541 19.6109 32.0399 19.4172 32.0399 17.9597ZM48.3341 27.0967L45.6841 14.4578H42.8377C42.2484 14.4578 41.6592 14.8471 41.4628 15.43L36.5557 27.0967H39.9913L40.6771 25.25H44.8984L45.2913 27.0967H48.3341ZM43.3283 17.8621L44.3087 22.6255H41.5605L43.3283 17.8621Z"
                    fill="#172B85"
                  />
                </g>
              </svg>

              <svg
                width="59"
                height="40"
                viewBox="0 0 59 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.501 25.4018H13.9083C13.7309 25.4018 13.58 25.5307 13.5523 25.7058L12.5037 32.3543C12.4829 32.4855 12.5845 32.6037 12.7175 32.6037H13.9553C14.1327 32.6037 14.2836 32.4748 14.3113 32.2993L14.5941 30.5062C14.6214 30.3306 14.7726 30.2018 14.9497 30.2018H15.7705C17.4784 30.2018 18.464 29.3753 18.7215 27.7376C18.8375 27.0211 18.7264 26.4581 18.3908 26.0637C18.0224 25.6309 17.3687 25.4018 16.501 25.4018ZM16.8001 27.83C16.6584 28.7604 15.9475 28.7604 15.2602 28.7604H14.8689L15.1434 27.0228C15.1597 26.9179 15.2507 26.8406 15.3569 26.8406H15.5362C16.0044 26.8406 16.4461 26.8406 16.6743 27.1074C16.8103 27.2667 16.852 27.5032 16.8001 27.83ZM24.2512 27.8002H23.0096C22.9038 27.8002 22.8124 27.8776 22.7961 27.9827L22.7412 28.3299L22.6543 28.2041C22.3856 27.8139 21.7863 27.6836 21.188 27.6836C19.8159 27.6836 18.6441 28.7227 18.4159 30.1804C18.2973 30.9074 18.4659 31.6027 18.8784 32.0876C19.2568 32.5334 19.7982 32.7192 20.4422 32.7192C21.5477 32.7192 22.1608 32.0083 22.1608 32.0083L22.1054 32.3534C22.0845 32.4853 22.1861 32.6036 22.3184 32.6036H23.4368C23.6147 32.6036 23.7647 32.4746 23.7927 32.2992L24.4638 28.0497C24.485 27.919 24.3838 27.8002 24.2512 27.8002ZM22.5205 30.2167C22.4006 30.926 21.8377 31.4022 21.1198 31.4022C20.7592 31.4022 20.471 31.2865 20.2861 31.0674C20.1026 30.8499 20.0327 30.54 20.0912 30.1951C20.2031 29.4918 20.7756 29.0002 21.4826 29.0002C21.835 29.0002 22.1217 29.1172 22.3105 29.3383C22.4996 29.5616 22.5747 29.8732 22.5205 30.2167ZM29.6159 27.8H30.8636C31.0384 27.8 31.1403 27.996 31.041 28.1393L26.8914 34.1292C26.8242 34.2262 26.7135 34.2839 26.5952 34.2839H25.3491C25.1736 34.2839 25.0712 34.0864 25.1728 33.9427L26.4649 32.1188L25.0906 28.0858C25.0431 27.9457 25.1466 27.8 25.2957 27.8H26.5217C26.681 27.8 26.8215 27.9046 26.8675 28.0571L27.5968 30.4929L29.3177 27.9581C29.385 27.8592 29.497 27.8 29.6159 27.8Z"
                    fill="#253B80"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M43.1432 32.3541L44.2072 25.5841C44.2236 25.479 44.3146 25.4017 44.4204 25.4013H45.6183C45.7506 25.4013 45.8522 25.5199 45.8313 25.6511L44.782 32.2992C44.7546 32.4747 44.6037 32.6036 44.426 32.6036H43.3562C43.2239 32.6036 43.1223 32.4854 43.1432 32.3541ZM34.9942 25.4017H32.4011C32.2241 25.4017 32.0732 25.5306 32.0455 25.7057L30.9969 32.3541C30.976 32.4854 31.0776 32.6036 31.21 32.6036H32.5406C32.6642 32.6036 32.77 32.5134 32.7893 32.3906L33.0869 30.5061C33.1142 30.3304 33.2655 30.2017 33.4425 30.2017H34.2628C35.9711 30.2017 36.9565 29.3752 37.2142 27.7374C37.3306 27.021 37.2188 26.458 36.8834 26.0636C36.5151 25.6308 35.862 25.4017 34.9942 25.4017ZM35.2934 27.8299C35.152 28.7603 34.4411 28.7603 33.7534 28.7603H33.3625L33.6374 27.0227C33.6537 26.9178 33.7439 26.8404 33.8504 26.8404H34.0297C34.4976 26.8404 34.9397 26.8404 35.1678 27.1073C35.3039 27.2666 35.3453 27.5031 35.2934 27.8299ZM42.7437 27.8001H41.503C41.3964 27.8001 41.3058 27.8774 41.2899 27.9825L41.235 28.3297L41.1478 28.2039C40.879 27.8138 40.28 27.6834 39.6818 27.6834C38.3097 27.6834 37.1383 28.7225 36.91 30.1803C36.7918 30.9073 36.9597 31.6025 37.3721 32.0875C37.7513 32.5332 38.292 32.719 38.936 32.719C40.0414 32.719 40.6544 32.0082 40.6544 32.0082L40.5992 32.3532C40.5783 32.4852 40.6799 32.6034 40.813 32.6034H41.9309C42.1079 32.6034 42.2588 32.4745 42.2865 32.299L42.9579 28.0496C42.9785 27.9189 42.8769 27.8001 42.7437 27.8001ZM41.0132 30.2166C40.8941 30.9259 40.3304 31.402 39.6123 31.402C39.2525 31.402 38.9637 31.2864 38.7786 31.0673C38.5951 30.8497 38.5262 30.5399 38.5839 30.195C38.6964 29.4917 39.2681 29.0001 39.9751 29.0001C40.3278 29.0001 40.6143 29.1171 40.8032 29.3382C40.993 29.5615 41.0681 29.8731 41.0132 30.2166Z"
                    fill="#179BD7"
                  />
                  <path
                    d="M26.096 23.0229L26.4148 20.9984L25.7048 20.9819H22.3145L24.6706 6.04218C24.6778 5.99707 24.7016 5.95502 24.7364 5.92516C24.7711 5.8953 24.8157 5.87885 24.862 5.87885H30.5787C32.4766 5.87885 33.7862 6.27378 34.4701 7.05327C34.7906 7.41895 34.9948 7.80108 35.0936 8.2216C35.1971 8.66287 35.199 9.19004 35.0978 9.83303L35.0904 9.87996V10.2919L35.4111 10.4736C35.6811 10.6168 35.8955 10.7807 36.0601 10.9684C36.3345 11.2811 36.5118 11.6785 36.5868 12.1496C36.6641 12.6341 36.6385 13.2106 36.5118 13.8634C36.3655 14.6142 36.129 15.2682 35.8097 15.8033C35.5159 16.2964 35.1417 16.7052 34.6975 17.0222C34.2732 17.3233 33.7692 17.5519 33.1994 17.6982C32.6471 17.8419 32.0176 17.9145 31.3271 17.9145H30.8822C30.5641 17.9145 30.255 18.0291 30.0125 18.2345C29.7694 18.4442 29.6083 18.7305 29.559 19.0438L29.5255 19.2261L28.9624 22.7943L28.9367 22.9254C28.9301 22.967 28.9185 22.9877 28.9015 23.0017C28.8862 23.0143 28.8643 23.0229 28.8429 23.0229H26.096Z"
                    fill="#253B80"
                  />
                  <path
                    d="M35.7148 9.92865C35.6977 10.0377 35.6783 10.1493 35.6563 10.2638C34.9023 14.1345 32.3232 15.4717 29.029 15.4717H27.3518C26.949 15.4717 26.6095 15.7642 26.5467 16.1616L25.6879 21.6078L25.4447 23.1515C25.4039 23.4124 25.6051 23.6476 25.8683 23.6476H28.8432C29.1954 23.6476 29.4946 23.3917 29.55 23.0443L29.5793 22.8931L30.1395 19.3387L30.1755 19.1438C30.2302 18.7952 30.53 18.5392 30.8823 18.5392H31.3272C34.2093 18.5392 36.4656 17.369 37.1251 13.9828C37.4006 12.5682 37.2579 11.3871 36.529 10.5564C36.3084 10.3059 36.0348 10.0981 35.7148 9.92865Z"
                    fill="#179BD7"
                  />
                  <path
                    d="M34.9254 9.6138C34.8103 9.58027 34.6913 9.5498 34.5694 9.52238C34.447 9.49557 34.3213 9.4718 34.1922 9.45108C33.7399 9.37794 33.2445 9.3432 32.7136 9.3432H28.2329C28.1226 9.3432 28.0178 9.36818 27.924 9.41329C27.7173 9.51262 27.5638 9.70827 27.5266 9.94778L26.5733 15.9851L26.5459 16.1612C26.6087 15.7639 26.9482 15.4713 27.351 15.4713H29.0282C32.3224 15.4713 34.9017 14.1336 35.6556 10.2635C35.678 10.1489 35.697 10.0374 35.714 9.92829C35.5233 9.82711 35.3166 9.74057 35.0942 9.66682C35.0394 9.64853 34.9828 9.63087 34.9254 9.6138Z"
                    fill="#222D65"
                  />
                  <path
                    d="M27.5263 9.94755C27.5635 9.70802 27.7171 9.51239 27.9236 9.41365C28.0182 9.36855 28.1224 9.34356 28.2326 9.34356H32.7135C33.2443 9.34356 33.7398 9.3783 34.1919 9.45144C34.3212 9.47216 34.4468 9.49593 34.5693 9.52274C34.6912 9.55018 34.81 9.58065 34.9252 9.61416C34.9824 9.63123 35.0391 9.6489 35.0945 9.66658C35.317 9.74032 35.5236 9.82748 35.7143 9.92804C35.9387 8.49763 35.7126 7.52372 34.9393 6.64182C34.0866 5.67096 32.5477 5.25531 30.5785 5.25531H24.8617C24.4594 5.25531 24.1164 5.54784 24.0542 5.94582L21.6731 21.0391C21.6261 21.3377 21.8564 21.6072 22.1575 21.6072H25.687L26.5731 15.9849L27.5263 9.94755Z"
                    fill="#253B80"
                  />
                </g>
              </svg>

              <svg
                width="59"
                height="40"
                viewBox="0 0 59 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.5504 26.264V21.2291H30.149C31.2139 21.2291 32.1126 20.8723 32.8453 20.1686L33.0212 19.9902C34.3596 18.5332 34.2716 16.2635 32.8453 14.9156C32.1322 14.202 31.1552 13.8154 30.149 13.8353H25.9775V26.264H27.5504ZM27.5508 19.7025V15.3614H30.1889C30.7556 15.3614 31.293 15.5794 31.6936 15.9759C32.5437 16.8084 32.5632 18.196 31.7425 19.0583C31.3419 19.4845 30.7751 19.7223 30.1889 19.7025H27.5508ZM40.3577 18.4245C39.6836 17.8001 38.7653 17.483 37.6027 17.483C36.108 17.483 34.9846 18.038 34.2421 19.1382L35.6293 20.0203C36.1373 19.267 36.831 18.8904 37.7102 18.8904C38.267 18.8904 38.8044 19.0985 39.2244 19.4751C39.6347 19.8319 39.8692 20.3473 39.8692 20.8924V21.2592C39.2635 20.9222 38.5015 20.7438 37.5637 20.7438C36.4695 20.7438 35.5903 21.0015 34.9357 21.5268C34.2812 22.0521 33.949 22.7458 33.949 23.628C33.9295 24.4308 34.2714 25.1939 34.8771 25.7093C35.4926 26.2643 36.2741 26.5419 37.1924 26.5419C38.2768 26.5419 39.1365 26.0562 39.791 25.0849H39.8594V26.2643H41.3639V21.0213C41.3639 19.9211 41.0317 19.049 40.3577 18.4245ZM36.089 24.6983C35.7665 24.4604 35.5711 24.0739 35.5711 23.6576C35.5711 23.1918 35.7861 22.8052 36.2062 22.498C36.6361 22.1907 37.1735 22.0322 37.8086 22.0322C38.688 22.0222 39.372 22.2205 39.8605 22.6169C39.8605 23.2909 39.5967 23.8756 39.0788 24.3712C38.6098 24.847 37.9747 25.1146 37.3103 25.1146C36.8706 25.1245 36.4407 24.9758 36.089 24.6983ZM44.7443 30.0007L50.0002 17.7603H48.2906L45.858 23.8656H45.8287L43.3375 17.7603H41.6279L45.0765 25.7191L43.1226 30.0007H44.7443Z"
                    fill="#3C4043"
                  />
                  <path
                    d="M22.1197 20.1383C22.1197 19.6527 22.0806 19.167 22.0025 18.6913H15.3691V21.4367H19.1694C19.0131 22.3188 18.5051 23.1117 17.7626 23.6073V25.3913H20.0291C21.3577 24.1524 22.1197 22.3188 22.1197 20.1383Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M15.3715 27.1159C17.2667 27.1159 18.8689 26.4816 20.0314 25.3913L17.7649 23.6073C17.1299 24.0434 16.3191 24.2912 15.3715 24.2912C13.5349 24.2912 11.9815 23.0324 11.4247 21.3475H9.08984V23.191C10.2817 25.5995 12.7142 27.1159 15.3715 27.1159Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.424 21.3478C11.1309 20.4657 11.1309 19.5043 11.424 18.6123V16.7787H9.08878C8.08239 18.7907 8.08239 21.1694 9.08878 23.1814L11.424 21.3478Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M15.3715 15.6683C16.3777 15.6485 17.3449 16.035 18.0678 16.7387L20.0803 14.697C18.8005 13.4878 17.1202 12.8237 15.3715 12.8436C12.7142 12.8436 10.2817 14.3699 9.08984 16.7783L11.4247 18.6218C11.9815 16.927 13.5349 15.6683 15.3715 15.6683Z"
                    fill="#EA4335"
                  />
                </g>
              </svg>

              <svg
                width="59"
                height="40"
                viewBox="0 0 59 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.9099 14.8885C14.6933 14.9545 15.4767 14.492 15.9664 13.9055C16.4478 13.3024 16.7661 12.4929 16.6845 11.6669C15.9908 11.6999 15.134 12.1295 14.6444 12.7325C14.1956 13.2529 13.812 14.0955 13.9099 14.8885ZM23.2295 25.5279V12.6498H28.0033C30.4678 12.6498 32.1896 14.368 32.1896 16.8792C32.1896 19.3903 30.4352 21.125 27.9381 21.125H25.2043V25.5279H23.2295ZM16.6773 15.0449C15.9872 15.0047 15.3574 15.255 14.8487 15.4571C14.5214 15.5873 14.2442 15.6974 14.0333 15.6974C13.7967 15.6974 13.508 15.5814 13.184 15.451C12.7593 15.2803 12.2738 15.0851 11.7647 15.0944C10.5978 15.1109 9.51246 15.78 8.91675 16.8456C7.69268 18.9769 8.59849 22.1324 9.78175 23.8671C10.3611 24.7262 11.0548 25.6679 11.9687 25.6348C12.3708 25.6195 12.6601 25.4952 12.9594 25.3666C13.304 25.2186 13.662 25.0648 14.221 25.0648C14.7606 25.0648 15.103 25.2146 15.4316 25.3584C15.7441 25.4951 16.0442 25.6263 16.4896 25.6183C17.4362 25.6018 18.0319 24.7592 18.6113 23.9001C19.2366 22.9781 19.5114 22.0782 19.5531 21.9416L19.5579 21.9258C19.5569 21.9248 19.5492 21.9213 19.5356 21.9149C19.3266 21.8181 17.729 21.0778 17.7137 19.0925C17.6983 17.4262 18.9808 16.5819 19.1827 16.449C19.195 16.4409 19.2033 16.4355 19.207 16.4326C18.391 15.2101 17.118 15.0779 16.6773 15.0449ZM35.797 25.627C37.0374 25.627 38.188 24.991 38.7102 23.9832H38.751V25.5279H40.579V19.1178C40.579 17.2592 39.1101 16.0614 36.8497 16.0614C34.7524 16.0614 33.202 17.2757 33.1448 18.9443H34.9238C35.0707 18.1513 35.797 17.6309 36.7925 17.6309C38.0003 17.6309 38.6776 18.2009 38.6776 19.25V19.9604L36.2132 20.109C33.9201 20.2495 32.6797 21.1994 32.6797 22.8515C32.6797 24.5201 33.9609 25.627 35.797 25.627ZM36.3273 24.099C35.2746 24.099 34.6055 23.5869 34.6055 22.8022C34.6055 21.9926 35.2501 21.5218 36.4824 21.4474L38.6775 21.307V22.0339C38.6775 23.24 37.6656 24.099 36.3273 24.099ZM46.6418 26.0314C45.8503 28.2866 44.9445 29.03 43.0186 29.03C42.8717 29.03 42.3821 29.0135 42.2678 28.9804V27.4357C42.3902 27.4522 42.6922 27.4688 42.8472 27.4688C43.7204 27.4688 44.21 27.097 44.5119 26.1306L44.6915 25.5606L41.3457 16.1849H43.4103L45.736 23.7928H45.7768L48.1025 16.1849H50.11L46.6418 26.0314ZM25.2051 14.3353H27.4818C29.1955 14.3353 30.1748 15.2605 30.1748 16.8878C30.1748 18.5151 29.1955 19.4486 27.4737 19.4486H25.2051V14.3353Z"
                    fill="black"
                  />
                </g>
              </svg>
            </div>

            <div className="form flex-grow-1 overflow-hidden">
              <div className="d-flex flex-column my-2">
                <label
                  htmlFor="numCard"
                  style={{ color: "#747688", fontSize: "14px" }}
                >
                  Card Number
                </label>
                <input
                  type="number"
                  id="numCard"
                  className="p-2 border rounded"
                  style={{ borderColor: "#DCDCDC", outline: "none" }}
                />
              </div>

              <div className="d-flex flex-column my-2">
                <label
                  htmlFor="name"
                  style={{ color: "#747688", fontSize: "14px" }}
                >
                  Name On Card
                </label>
                <input
                  type="number"
                  id="name"
                  className="p-2 border rounded"
                  style={{ borderColor: "#DCDCDC", outline: "none" }}
                />
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-between my-2 ">
                <div className="d-flex flex-column col-md-6 col-lg-7">
                  <label
                    htmlFor="exDate"
                    style={{ color: "#747688", fontSize: "14px" }}
                  >
                    Exp Date
                  </label>
                  <input
                    type="number"
                    id="exDate"
                    className="p-2 border rounded"
                    style={{ borderColor: "#DCDCDC", outline: "none" }}
                  />
                </div>

                <div className="d-flex flex-column col-lg-4 col-md-3 ">
                  <label
                    htmlFor="cvv"
                    style={{ color: "#747688", fontSize: "14px" }}
                  >
                    CVV
                  </label>
                  <input
                    type="number"
                    id="cvv"
                    className="p-2 border rounded"
                    style={{ borderColor: "#DCDCDC", outline: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border p-3 my-3 rounded d-flex gap-2 align-items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9023 19.8701H17.3723C21.0723 19.8701 21.9923 18.9501 21.9923 15.2501C20.7123 15.2501 19.6823 14.2101 19.6823 12.9401C19.6823 11.6601 20.7123 10.6201 21.9923 10.6201V9.70008C21.9923 6.00008 21.0723 5.08008 17.3723 5.08008H10.9923V11.8701"
                stroke="#C8C8C8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9936 16.87V19.87H8.22356C6.74356 19.87 5.87357 18.86 4.91357 16.54L4.73356 16.09C5.94356 15.61 6.53357 14.21 6.02357 13C5.53357 11.79 4.14357 11.21 2.92357 11.71L2.75357 11.28C1.31356 7.76 1.81357 6.53 5.33357 5.08L7.97357 4L10.9936 11.32V13.87"
                stroke="#C8C8C8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.16219 19.8701H7.99219"
                stroke="#C8C8C8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="border-0 outline-0 flex-grow-1 px-2"
              style={{ color: "#C8C8C8", outline: 0 }}
              placeholder="Promocode"
            />
            <button className="btn btn-secondary">Apply</button>
          </div>
        </div>

        <div className="col-md-6 col-lg-5">
          <div
            className="d-flex p-1 rounded gap-2 align-items-center"
            style={{ boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)" }}
          >
            <img
              src={eventImg}
              alt="eventImg"
              width={"90px"}
              height={"90px"}
              className="rounded"
            />
            <div className="flex-grow-1 ">
              <h5 style={{ fontWeight: "900" }}>
                Programming : How to begin your ..
              </h5>
              <p className="m-0">
                <span className="px-1">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.77089 2.57666V1.66666C9.77089 1.42749 9.57255 1.22916 9.33339 1.22916C9.09422 1.22916 8.89589 1.42749 8.89589 1.66666V2.54166H5.10422V1.66666C5.10422 1.42749 4.90589 1.22916 4.66672 1.22916C4.42755 1.22916 4.22922 1.42749 4.22922 1.66666V2.57666C2.65422 2.72249 1.89005 3.66166 1.77339 5.05582C1.76172 5.22499 1.90172 5.36499 2.06505 5.36499H11.9351C12.1042 5.36499 12.2442 5.21916 12.2267 5.05582C12.1101 3.66166 11.3459 2.72249 9.77089 2.57666Z"
                      fill="#565656"
                    />
                    <path
                      d="M11.6667 6.23999H2.33333C2.0125 6.23999 1.75 6.50249 1.75 6.82332V10.4167C1.75 12.1667 2.625 13.3333 4.66667 13.3333H9.33333C11.375 13.3333 12.25 12.1667 12.25 10.4167V6.82332C12.25 6.50249 11.9875 6.23999 11.6667 6.23999ZM5.3725 11.1225C5.31417 11.175 5.25 11.2158 5.18 11.245C5.11 11.2742 5.03417 11.2917 4.95833 11.2917C4.8825 11.2917 4.80667 11.2742 4.73667 11.245C4.66667 11.2158 4.6025 11.175 4.54417 11.1225C4.43917 11.0117 4.375 10.86 4.375 10.7083C4.375 10.5567 4.43917 10.405 4.54417 10.2942C4.6025 10.2417 4.66667 10.2008 4.73667 10.1717C4.87667 10.1133 5.04 10.1133 5.18 10.1717C5.25 10.2008 5.31417 10.2417 5.3725 10.2942C5.4775 10.405 5.54167 10.5567 5.54167 10.7083C5.54167 10.86 5.4775 11.0117 5.3725 11.1225ZM5.495 8.88832C5.46583 8.95832 5.425 9.02249 5.3725 9.08082C5.31417 9.13332 5.25 9.17416 5.18 9.20332C5.11 9.23249 5.03417 9.24999 4.95833 9.24999C4.8825 9.24999 4.80667 9.23249 4.73667 9.20332C4.66667 9.17416 4.6025 9.13332 4.54417 9.08082C4.49167 9.02249 4.45083 8.95832 4.42167 8.88832C4.3925 8.81832 4.375 8.74249 4.375 8.66666C4.375 8.59082 4.3925 8.51499 4.42167 8.44499C4.45083 8.37499 4.49167 8.31082 4.54417 8.25249C4.6025 8.19999 4.66667 8.15916 4.73667 8.12999C4.87667 8.07166 5.04 8.07166 5.18 8.12999C5.25 8.15916 5.31417 8.19999 5.3725 8.25249C5.425 8.31082 5.46583 8.37499 5.495 8.44499C5.52417 8.51499 5.54167 8.59082 5.54167 8.66666C5.54167 8.74249 5.52417 8.81832 5.495 8.88832ZM7.41417 9.08082C7.35583 9.13332 7.29167 9.17416 7.22167 9.20332C7.15167 9.23249 7.07583 9.24999 7 9.24999C6.92417 9.24999 6.84833 9.23249 6.77833 9.20332C6.70833 9.17416 6.64417 9.13332 6.58583 9.08082C6.48083 8.96999 6.41667 8.81832 6.41667 8.66666C6.41667 8.51499 6.48083 8.36332 6.58583 8.25249C6.64417 8.19999 6.70833 8.15916 6.77833 8.12999C6.91833 8.06582 7.08167 8.06582 7.22167 8.12999C7.29167 8.15916 7.35583 8.19999 7.41417 8.25249C7.51917 8.36332 7.58333 8.51499 7.58333 8.66666C7.58333 8.81832 7.51917 8.96999 7.41417 9.08082Z"
                      fill="#565656"
                    />
                  </svg>
                </span>
                05 -09 Mars, 2023
              </p>
              <p>
                <span className="px-1">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0284 5.42918C11.4159 2.73418 9.06506 1.52084 7.00006 1.52084C7.00006 1.52084 7.00006 1.52084 6.99422 1.52084C4.93506 1.52084 2.57839 2.72834 1.96589 5.42334C1.28339 8.43334 3.12672 10.9825 4.79506 12.5867C5.41339 13.1817 6.20672 13.4792 7.00006 13.4792C7.79339 13.4792 8.58672 13.1817 9.19922 12.5867C10.8676 10.9825 12.7109 8.43918 12.0284 5.42918ZM7.00006 8.35168C5.98506 8.35168 5.16256 7.52918 5.16256 6.51418C5.16256 5.49918 5.98506 4.67668 7.00006 4.67668C8.01506 4.67668 8.83756 5.49918 8.83756 6.51418C8.83756 7.52918 8.01506 8.35168 7.00006 8.35168Z"
                      fill="#565656"
                    />
                  </svg>
                </span>
                block 5, zori street, tahta,So..
              </p>
            </div>
          </div>

          <div className="w-75 mt-5 mx-auto">
            <h4>Summary</h4>
            <div className="border-bottom mt-4 mx-1">
              <div
                className="d-flex justify-content-between my-2"
                style={{ color: "#747688" }}
              >
                <span>Subtotal</span>
                <span>500 SAR</span>
              </div>

              <div
                className="d-flex justify-content-between my-2"
                style={{ color: "#747688" }}
              >
                <span>Fees</span>
                <span>00 SAR</span>
              </div>

              <div
                className="d-flex justify-content-between my-2"
                style={{ color: "#747688" }}
              >
                <span>Discount</span>
                <span>00 SAR</span>
              </div>
            </div>
            <div className="total fw-bold d-flex justify-content-between pt-3">
              <span>Total</span>
              <span>500</span>
            </div>
            <Link
              className="d-block text-center w-100 mt-5 p-3  text-white"
              style={{ backgroundColor: "#3296D4", borderRadius: "12px" }}
              to="/ticket"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}